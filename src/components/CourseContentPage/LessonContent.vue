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
          <iframe :src="embedVideoUrl" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Описание урока</h5>
        <p>{{ lesson.lessonDetails }}</p>
      </div>
    </div>

    <div class="d-flex justify-content-center mt-4" v-if="!isLessonCompleted">
      <button class="btn btn-primary" @click="completeLesson">Закончить урок!</button>
    </div>
    <div class="d-flex justify-content-center mt-4" v-else>
      <span>Вы прошли урок! <a @click.prevent="nextLesson" href="#">Перейти к следующему уроку</a></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: 'LessonContent',
  props: {
    lesson: {
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
      isLessonCompleted: false,
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
    },
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      user: 'user',
    }),
  },
  methods: {
    async checkLessonStatus() {
      try {
        const response = await axios.get(`http://localhost:8080/student-lessons/check?studentId=${this.user.id}&lessonId=${this.lesson.id}`, { withCredentials: true });
        this.isLessonCompleted = response.data;
      } catch (error) {
        console.error('Error checking lesson status:', error);
      }
    },
    async completeLesson() {
      try {
        const studentLessonDto = {
          student: { id: this.user.id, role: {id: 3, name: "Студент"}},
          lesson: { id: this.lesson.id },
          completedDatetime: new Date().toISOString()
        };

        const response = await axios.post('http://localhost:8080/student-lessons', studentLessonDto, { withCredentials: true });

        if (response.status === 200) {
          this.isLessonCompleted = true;
        } else {
          console.error('Failed to complete lesson');
        }
      } catch (error) {
        console.error('Error completing lesson:', error);
      }
    },
    nextLesson() {
      const nextIndex = this.currentItemIndex + 1;
      if (nextIndex < this.courseContent.length) {
        this.$emit('select-item', this.courseContent[nextIndex]);
      } else {
        alert('Это был последний урок')
        console.log('Это был последний урок');
      }
    }
  },
  mounted() {
    this.checkLessonStatus();
  },
  watch: {
    'lesson.id': function (newVal, oldVal) {
      this.checkLessonStatus();
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
.comment h5 {
  margin-bottom: 10px;
}
</style>