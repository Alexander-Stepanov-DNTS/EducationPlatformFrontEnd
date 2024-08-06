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

    <div v-if="result !== null" class="mt-4">
      <h3>Результат теста: {{ result }}/{{ questions.length }}</h3>
    </div>

    <div class="d-flex justify-content-center mt-4" v-if="!isTestCompleted">
      <button class="btn btn-primary" @click="submitTest">Закончить урок и отправить тест!</button>
    </div>
    <div class="d-flex justify-content-center mt-4" v-else>
      <span>Вы прошли тест! <a @click.prevent="nextTest" href="#">Перейти к следующему уроку</a></span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {mapGetters} from "vuex";

export default {
  name: 'TestContent',
  props: {
    test: {
      type: Object,
      required: true
    },
    courseContent: {
      type: Array,
      required: true
    },
    currentItemIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isTestCompleted: false,
      answers: {},
      questions: [],
      result: null
    };
  },
  methods: {
    async fetchQuestions() {
      try {
        const response = await axios.get(`http://localhost:8080/quizzes/${this.test.id}/questions`, { withCredentials: true });
        const questions = response.data;
        for (const question of questions) {
          const answersResponse = await axios.get(`http://localhost:8080/quiz-questions/${question.id}/answers`, { withCredentials: true });
          question.options = answersResponse.data;
        }
        this.questions = questions;
        this.answers = {};
        this.result = null;
      } catch (error) {
        console.error('Ошибка при получении вопросов:', error);
      }
    },
    async checkTestStatus() {
      try {
        const response = await axios.get(`http://localhost:8080/student-quiz-attempts/check?studentId=${this.user.id}&quizId=${this.test.id}`, { withCredentials: true });
        this.isTestCompleted = response.data;
      } catch (error) {
        console.error('Error checking test status:', error);
      }
    },
    getStudentId() {
      return this.user.id;
    },
    async submitTest() {
      if (Object.keys(this.answers).length !== this.questions.length) {
        alert('Пожалуйста, ответьте на все вопросы.');
        return;
      }

      let correctAnswers = 0;
      for (const question of this.questions) {
        const selectedAnswerId = this.answers[question.id];
        const selectedOption = question.options.find(option => option.id === selectedAnswerId);
        if (selectedOption && selectedOption.isCorrect) {
          correctAnswers += 1;
        }
      }
      this.result = correctAnswers;

      const resultData = {
        quiz: { id: this.test.id },
        student: { id: this.user.id },
        scoreAchieved: correctAnswers,
      };

      try {
        const response = await axios.post('http://localhost:8080/student-quiz-attempts', resultData, { withCredentials: true });

        if (response.status === 200) {
          this.isTestCompleted = true;
        } else {
          console.error('Ошибка при отправке результатов');
        }
      } catch (error) {
        console.error('Ошибка при отправке результатов:', error);
      }
    },
    nextTest() {
      const nextIndex = this.currentItemIndex + 1;
      if (nextIndex < this.courseContent.length) {
        this.$emit('select-item', this.courseContent[nextIndex]);
      } else {
        alert('Это был последний урок')
        console.log('Это был последний тест');
      }
    }
  },
  mounted() {
    this.fetchQuestions();
    this.checkTestStatus();
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      user: 'user',
    }),
  },
  watch: {
    'test.id': function (newVal, oldVal) {
      this.fetchQuestions();
      this.checkTestStatus();
    }
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