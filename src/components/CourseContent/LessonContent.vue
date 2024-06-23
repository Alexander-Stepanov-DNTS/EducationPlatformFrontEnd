<template>
  <div>
    <div class="header">
      <h1>{{ lesson.title }}</h1>
      <p>Краткое описание или цель урока.</p>
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{ width: progressWidth }" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">{{ progress }}%</div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Видео урока</h5>
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Описание урока</h5>
        <p>Подробное описание содержания урока, основные темы и цели.</p>
        <p>Дополнительные материалы и ресурсы, доступные для скачивания.</p>
      </div>
    </div>

    <div class="comment-section">
      <h4>Комментарии</h4>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <h5>{{ comment.author }}</h5>
        <p>{{ comment.text }}</p>
      </div>
    </div>

    <div class="d-flex justify-content-between mt-4">
      <button class="btn btn-primary" @click="prevLesson">Предыдущий урок</button>
      <button class="btn btn-primary" @click="nextLesson">Следующий урок</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonContent',
  props: {
    lesson: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comments: [
        { id: 1, author: 'Иван Иванов', text: 'Отличный урок! Все очень понятно и интересно.' },
        { id: 2, author: 'Мария Петрова', text: 'Большое спасибо за урок, узнала много нового.' }
      ]
    };
  },
  computed: {
    progress() {
      // Пример вычисления прогресса
      return 50;
    },
    progressWidth() {
      return this.progress + '%';
    }
  },
  methods: {
    prevLesson() {
      // Логика для перехода к предыдущему уроку
    },
    nextLesson() {
      // Логика для перехода к следующему уроку
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

.progress-bar {
  background-color: #6a11cb;
}

.card {
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

.comment-section {
  margin-top: 40px;
  padding-top: 20px;
  border: 2px solid #3b5998;
  border-radius: 20px;
  padding: 20px;
  background-color: #e6f2ff;
}

.comment {
  margin-bottom: 20px;
}

.comment h5 {
  margin-bottom: 10px;
}
</style>
