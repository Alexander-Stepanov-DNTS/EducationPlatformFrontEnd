<template>
  <div class="rating-section">
    <div v-for="(courses, rating) in groupedCourses" :key="rating" class="rating-block">
      <h2>{{ rating }}</h2>
      <v-slide-group show-arrows>
        <v-slide-item v-for="course in courses" :key="course.id">
          <CourseCard :course="course" />
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
import CourseCard from '@/components/GroupedCoursesPage/CourseCard.vue';

export default {
  name: 'GroupedByRating',
  components: {
    CourseCard
  },
  props: {
    groupedCourses: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.rating-section {
  width: 100%;
  padding: 10px;
}

.rating-block {
  margin-bottom: 40px;
}

.rating-block h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.v-slide-group {
  max-width: 100%;
  overflow-x: scroll;
}

.v-slide-item {
  margin-right: 20px;
}
</style>