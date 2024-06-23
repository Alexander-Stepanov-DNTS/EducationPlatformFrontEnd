<template>
  <div>
    <div class="section-title">Программа курса</div>
    <div class="lesson" v-for="lesson in lessons" :key="lesson.title">
      <img :src="lesson.icon" alt="icon">
      <div>
        <h5>{{ lesson.title }}</h5>
        <p>{{ lesson.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonList',
  props: {
    lessons: Array
  }
}
</script>

<style scoped>
.section-title {
  font-size: 1.5rem;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #3b5998;
}
.lesson {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.lesson img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
.lesson h5 {
  margin-bottom: 10px;
}
.lesson p {
  margin-bottom: 5px;
}
</style>
