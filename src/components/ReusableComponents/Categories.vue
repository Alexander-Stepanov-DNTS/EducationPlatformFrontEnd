<template>
  <section class="course-directions py-5">
    <div class="container">
      <h3 class="text-center mt-4">Наши направления</h3>
      <div class="card-container">
        <div class="card card-category" v-for="direction in directions" :key="direction.id" @click="navigateTo(direction.link)">
          <div class="card-body">
            <h5>{{ direction.name }}</h5>
            <p>{{ direction.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {DirectionService} from "@/services/DirectionService.js";

export default {
  name: "CourseDirections",
  data() {
    return {
      directions: []
    };
  },
  methods: {
    navigateTo(link) {
      window.location.href = link;
    },
    async fetchCategories() {
      try {
        this.directions = await DirectionService.fetchDirections();
        console.log(this.directions);
      } catch (error) {
        console.error('Error loading Categories', error);
      }
    }
  },
  mounted() {
    this.fetchCategories();
  }
};
</script>

<style scoped>
.course-directions {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.course-directions h3 {
  margin-bottom: 40px;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.card {
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  width: calc(33.333% - 20px);
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}
.card-body {
  padding: 20px;
  background-color: #ffffff;
}
.card h5 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #3b5998;
  text-align: center;
}
.card ul {
  list-style-type: none;
  padding: 0;
}
.card ul li {
  margin-bottom: 10px;
}
.card ul li a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}
.card ul li a:hover {
  color: #6a11cb;
}
</style>