<template>
  <div class="row">
    <CourseCard v-for="course in courses" :key="course.id" :course="course" />
  </div>
</template>

<script>
import CourseCard from './CourseCard.vue';

export default {
  name: 'ListOfCourses',
  components: {
    CourseCard
  },
  props: {
    courses: {
      type: Array,
      required: true
    }
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 25px; /* Отступ между карточками */
}
</style>
