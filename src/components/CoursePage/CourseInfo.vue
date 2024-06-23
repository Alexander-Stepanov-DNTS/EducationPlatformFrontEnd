<template>
  <div class="course-info">
    <div class="course-title">{{ title }}</div>
    <div class="course-description">
      {{ description }}
    </div>
    <a href="#" class="btn btn-primary">Начать курс</a>
  </div>
</template>

<script>
export default {
  name: 'CourseInfo',
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>
.course-info {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 30px;
}
.course-title {
  font-size: 2rem;
  color: #3b5998;
  margin-bottom: 20px;
}
.course-description {
  font-size: 1.2rem;
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
