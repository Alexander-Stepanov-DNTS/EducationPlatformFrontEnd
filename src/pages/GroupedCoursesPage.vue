<template>
  <div class="grouped-courses-container">
    <v-tabs v-model="tab" background-color="primary" dark centered>
      <v-tab>По категориям</v-tab>
      <v-tab>По рейтингу</v-tab>
    </v-tabs>

    <div v-if="tab === 0" class="tab-content">
      <GroupedByCategory :groupedCourses="groupedCoursesByCategory"/>
    </div>
    <div v-else class="tab-content">
      <GroupedByRating :groupedCourses="groupedCoursesByRating"/>
    </div>
  </div>
</template>

<script>
import GroupedByCategory from '@/components/GroupedCoursesPage/GroupedByCategory.vue';
import GroupedByRating from '@/components/GroupedCoursesPage/GroupedByRating.vue';
import { CourseService } from '@/services/CourseService.js';

export default {
  components: {
    GroupedByCategory,
    GroupedByRating
  },
  data() {
    return {
      tab: 0,
      groupedCoursesByCategory: {},
      groupedCoursesByRating: {}
    };
  },
  methods: {
    async fetchCoursesByCategory() {
      try {
        const response = await CourseService.fetchGroupedByCategory();
        this.groupedCoursesByCategory = response.data;
      } catch (error) {
        console.error('Ошибка при получении курсов по категориям:', error);
      }
    },
    async fetchCoursesByRating() {
      try {
        const response = await CourseService.fetchGroupedByRating();
        this.groupedCoursesByRating = response.data;
      } catch (error) {
        console.error('Ошибка при получении курсов по рейтингу:', error);
      }
    }
  },
  watch: {
    tab(newValue) {
      if (newValue === 0 && Object.keys(this.groupedCoursesByCategory).length === 0) {
        this.fetchCoursesByCategory();
      } else if (newValue === 1 && Object.keys(this.groupedCoursesByRating).length === 0) {
        this.fetchCoursesByRating();
      }
    }
  },
  mounted() {
    this.fetchCoursesByCategory();
  }
}
</script>

<style scoped>
.grouped-courses-container {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  padding: 20px;
  background-color: #f5f5f5;
}

.tab-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.v-tabs {
  margin-bottom: 20px;
}

.v-tab {
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(to right, #6a11cb, #2575fc);
}
</style>