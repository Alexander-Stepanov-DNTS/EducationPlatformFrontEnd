<template>
  <v-card class="course-card" elevation="4">
    <v-img :src="getCourseLogo(course.picture_url)" class="card-img"></v-img>
    <v-card-title>{{ course.name }}</v-card-title>
    <v-card-subtitle>{{ course.description }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" @click="goToCourse">Просмотр</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: Object
  },
  methods: {
    getCourseLogo(logoName) {
      return logoName ? `/coursesLogos/${logoName}` : '/coursesLogos/default.png';
    },
    goToCourse() {
      this.$router.push(`/course/${this.course.id}`);
    }
  }
};
</script>

<style scoped>
.course-card {
  max-width: 300px;
  margin: 10px;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card-img {
  height: 150px;
}

.v-btn {
  margin-top: 10px;
}
</style>