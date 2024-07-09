<!--<template>-->
<!--  <div>-->
<!--    <div class="header">-->
<!--      <h1>{{ test.title }}</h1>-->
<!--      <p>Тест по теме.</p>-->
<!--    </div>-->

<!--    <div class="card" v-for="question in test.questions" :key="question.id">-->
<!--      <div class="card-body">-->
<!--        <h5 class="card-title">{{ question.question }}</h5>-->
<!--        <div class="form-group">-->
<!--          <div v-for="(option, index) in question.options" :key="index" class="form-check">-->
<!--            <input-->
<!--                class="form-check-input"-->
<!--                type="radio"-->
<!--                :name="'question-' + question.id"-->
<!--                :id="'question-' + question.id + '-option-' + index"-->
<!--                :value="index"-->
<!--                v-model="answers[question.id]"-->
<!--            />-->
<!--            <label class="form-check-label" :for="'question-' + question.id + '-option-' + index">-->
<!--              {{ option }}-->
<!--            </label>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="d-flex justify-content-between mt-4">-->
<!--      <button class="btn btn-primary" @click="prevTest">Предыдущий тест</button>-->
<!--      <button class="btn btn-primary" @click="submitTest">Завершить тест</button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'TestContent',-->
<!--  props: {-->
<!--    test: {-->
<!--      type: Object,-->
<!--      required: true-->
<!--    }-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      answers: {}-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    prevTest() {-->
<!--      // Логика для перехода к предыдущему тесту-->
<!--    },-->
<!--    submitTest() {-->
<!--      // Логика для отправки теста и проверки ответов-->
<!--      console.log('Answers:', this.answers);-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.header {-->
<!--  text-align: center;-->
<!--  margin-bottom: 30px;-->
<!--}-->

<!--.header h1 {-->
<!--  color: #3b5998;-->
<!--}-->

<!--.card {-->
<!--  border: none;-->
<!--  border-radius: 20px;-->
<!--  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);-->
<!--  margin-bottom: 20px;-->
<!--}-->

<!--.btn-primary {-->
<!--  background: linear-gradient(to right, #6a11cb, #2575fc);-->
<!--  border: none;-->
<!--  border-radius: 20px;-->
<!--  padding: 0.5rem 1rem;-->
<!--  font-size: 1rem;-->
<!--  transition: background 0.3s ease;-->
<!--  color: white;-->
<!--  text-align: center;-->
<!--  text-decoration: none;-->
<!--}-->

<!--.btn-primary:hover {-->
<!--  background: linear-gradient(to right, #2575fc, #6a11cb);-->
<!--}-->
<!--</style>-->

<template>
  <div>
    <div class="header">
      <h1>{{ test.title }}</h1>
      <p>Тест по теме.</p>
    </div>

    <div class="card" v-for="question in questions" :key="question.id">
      <div class="card-body">
        <h5 class="card-title">{{ question.questionTitle }}</h5>
        <div class="form-group">
          <div v-for="(option, index) in question.options" :key="index" class="form-check">
            <input
                class="form-check-input"
                type="radio"
                :name="'question-' + question.id"
                :id="'question-' + question.id + '-option-' + index"
                :value="option.id"
                v-model="answers[question.id]"
            />
            <label class="form-check-label" :for="'question-' + question.id + '-option-' + index">
              {{ option.answerText }}
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between mt-4">
      <button class="btn btn-primary" @click="prevTest">Предыдущий тест</button>
      <button class="btn btn-primary" @click="submitTest">Завершить тест</button>
    </div>

    <div v-if="result !== null" class="mt-4">
      <h3>Результат теста: {{ result }}/{{ questions.length }}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TestContent',
  props: {
    test: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      answers: {},
      questions: [],
      result: null
    };
  },
  methods: {
    async fetchQuestions() {
      try {
        const response = await axios.get(`http://localhost:8080/quizzes/${this.test.id}/questions`);
        const questions = response.data;
        for (const question of questions) {
          const answersResponse = await axios.get(`http://localhost:8080/quiz-questions/${question.id}/answers`);
          question.options = answersResponse.data;
        }
        this.questions = questions;
      } catch (error) {
        console.error('Ошибка при получении вопросов:', error);
      }
    },
    prevTest() {
      // Логика для перехода к предыдущему тесту
    },
    submitTest() {
      // Проверка, что все вопросы имеют ответы
      if (Object.keys(this.answers).length !== this.questions.length) {
        alert('Пожалуйста, ответьте на все вопросы.');
        return;
      }

      // Подсчет правильных ответов
      let correctAnswers = 0;
      for (const question of this.questions) {
        const selectedAnswerId = this.answers[question.id];
        const selectedOption = question.options.find(option => option.id === selectedAnswerId);
        if (selectedOption && selectedOption.isCorrect) {
          correctAnswers += 1;
        }
      }
      this.result = correctAnswers;

      // Отправка результатов на сервер
      const resultData = {
        quiz: { id: this.test.id },
        student: { id: 1 }, // Замените на реальный userId
        scoreAchieved: correctAnswers,
      };
      axios.post('http://localhost:8080/student-quiz-attempts', resultData)
          .then(() => {
            alert('Результаты успешно отправлены.');
          })
          .catch(error => {
            console.error('Ошибка при отправке результатов:', error);
          });
    }
  },
  mounted() {
    this.fetchQuestions();
  }
};
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: #3b5998;
}

.card {
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.btn-primary {
  background: linear-gradient(to right, #6a11cb, #2575fc);
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: background 0.3s ease;
  color: white;
  text-align: center;
  text-decoration: none;
}

.btn-primary:hover {
  background: linear-gradient(to right, #2575fc, #6a11cb);
}
</style>
