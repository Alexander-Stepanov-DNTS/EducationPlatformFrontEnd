<template>
  <div class="card search-bar">
    <div class="card-header">
      Поиск курсов
    </div>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="keywords">Ключевые слова</label>
          <input type="text" class="form-control" id="keywords" v-model="form.keywords" placeholder="Введите ключевые слова для поиска">
        </div>
        <div class="form-group">
          <label for="direction">Направление</label>
          <select class="form-control" id="direction" v-model="form.direction" @change="updateCategories">
            <option value="">Выберите направление</option>
            <option v-for="direction in directions" :key="direction.id" :value="direction.name">{{ direction.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="category">Категория</label>
          <select class="form-control" id="category" v-model="form.category">
            <option value="">Сначала выберите направление</option>
            <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Найти курсы</button>
      </form>
    </div>
  </div>
</template>

<script>
import {DirectionService} from "@/services/DirectionService.js";

export default {
  data() {
    return {
      form: {
        keywords: '',
        direction: '',
        category: ''
      },
      directions: [],
      categories: [],
      allCategories: []
    };
  },
  methods: {
    async fetchInitialData() {
      try {
        const [directionsData, categoriesData] = await Promise.all([
          DirectionService.fetchDirections(),
          DirectionService.fetchCategories()
        ]);

        this.directions = directionsData;
        this.allCategories = categoriesData;
      } catch (error) {
        console.error('Error loading data:', error);
      }
      console.log(this.allCategories);
    },
    updateCategories() {
      if (this.form.direction) {
        const selectedDirection = this.directions.find(direction => direction.name === this.form.direction);
        if (selectedDirection) {
          this.categories = this.allCategories.filter(category => category.direction.id === selectedDirection.id);
        } else {
          this.categories = [];
        }
      } else {
        this.categories = [];
      }
    },
    submitForm() {
      this.$router.push({
        name: 'SearchResults',
        query: {
          keywords: this.form.keywords,
          direction: this.form.direction,
          category: this.form.category
        }
      });
    }
  },
  mounted() {
    this.fetchInitialData();
  }
};
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: #333;
  margin: 0;
  padding: 0;
}
.card {
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  width: 100%;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}
.card-body {
  padding: 20px;
  background-color: #ffffff;
}
.card:hover {
  display: block;
}
.card h5 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #3b5998;
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
.search-bar {
  margin-top: 20px;
}
.card {
  max-width: 60%;
  margin: 40px auto 0;
}
.card-header{
  text-align: center;
  font-size: 1.2rem;
}
</style>