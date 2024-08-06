<template>
  <div class="row">
    <div class="col-md-3 p-0">
      <SideBar :initialFilters="initialFilters" @apply-filters="handleFilters" />
    </div>
    <div class="col-md-9">
      <div class="main-content">
        <h1 class="h2">Результаты поиска</h1>
        <p class="catalog-w__description">
          Курсы, которые помогут вам изучить один из самых популярных языков программирования от базовых конструкций до разработки приложений и работы с данными. Здесь вы найдете курсы как для начинающих, так и для опытных программистов.
        </p>
        <ListOfCourses v-if="filteredCourses.length" :courses="filteredCourses" />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SearchResultsPage/Sidebar.vue';
import ListOfCourses from '@/components/SearchResultsPage/ListOfCourses.vue';
import axios from 'axios';

export default {
  name: 'SearchResults',
  components: {
    SideBar,
    ListOfCourses
  },
  data() {
    return {
      courses: [],
      filteredCourses: [],
      initialFilters: {}
    };
  },
  methods: {
    async fetchCourses() {
      try {
        const response = await axios.get('http://localhost:8080/courses', {
          withCredentials: true
        });
        this.courses = response.data.courses;
        this.filteredCourses = this.courses;
        console.log('Courses fetched:', this.courses);
        this.applyFiltersFromQuery();
      } catch (error) {
        console.error('Ошибка при загрузке курсов:', error);
      }
    },
    handleFilters(filters) {
      console.log('Примененные фильтры:', filters);
      this.filteredCourses = this.courses.filter(course => {
        return (
            (!filters.keywords || course.name.includes(filters.keywords)) &&
            (!filters.direction || course.category.direction.name === filters.direction) &&
            (!filters.category || course.category.name === filters.category)
        );
      });
    },
    applyFiltersFromQuery() {
      const query = this.$route.query;
      this.initialFilters = {
        keywords: query.keywords || '',
        direction: query.direction || '',
        category: query.category || ''
      };
      this.handleFilters(this.initialFilters);
    }
  },
  mounted() {
    this.fetchCourses();
  }
};
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #fff;
  color: #333;
  margin: 0;
  padding: 0;
}
.main-content {
  padding: 20px;
}
.catalog-w__description {
  margin-bottom: 20px;
}
</style>