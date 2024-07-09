<template>
  <div v-if="lesson">
    <div class="header">
      <h1>{{ lesson.name }}</h1>
      <p>{{ lesson.lessonDetails }}</p>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Видео урока</h5>
        <div class="video-container">
          <iframe :src="embedVideoUrl" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Описание урока</h5>
        <p>{{ lesson.lessonDetails }}</p>
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
    embedVideoUrl() {
      const videoUrl = this.lesson.videoUrl;
      const videoId = videoUrl.split('v=')[1];
      const ampersandPosition = videoId.indexOf('&');
      if (ampersandPosition !== -1) {
        return `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
      }
      return `https://www.youtube.com/embed/${videoId}`;
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

.comment h5 {
  margin-bottom: 10px;
}
</style>