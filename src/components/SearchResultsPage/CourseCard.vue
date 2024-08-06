<template>
  <div class="card">
    <div class="card-horizontal">
      <img :src="getCourseLogo(course.picture_url)" class="card-img" :alt="course.name">
      <div class="card-body">
        <h5 class="card-title">{{ course.name }}</h5>
        <p class="card-text">{{ course.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-primary" @click="goToCourse">Просмотр</button>
          </div>
          <small class="text-muted">{{ course.duration }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: Object
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    getCourseLogo(logoName) {
      return logoName ? `/coursesLogos/${logoName}` : '/coursesLogos/default.png';
    },
    goToCourse() {
      this.$router.push(`/course/${this.course.id}`);
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 300);
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 1;
  transform: translateY(20px);
  transition: all 0.5s ease-in-out;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card:hover {
  transform: scale(1.01);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.card-horizontal {
  display: flex;
  flex-direction: row;
}
.card-img {
  width: 150px;
  height: auto;
  object-fit: cover; /* Поддержание пропорций изображения */
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.card-body {
  padding: 20px;
  flex: 1;
}
.card-title a {
  color: #3b5998;
  text-decoration: none;
  transition: color 0.3s ease;
}
.card-title a:hover {
  color: #6a11cb;
}
.btn-primary {
  background: linear-gradient(to right, #6a11cb, #2575fc);
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: background 0.3s ease;
  color: white;
}
.btn-primary:hover {
  background: linear-gradient(to right, #2575fc, #6a11cb);
}
</style>