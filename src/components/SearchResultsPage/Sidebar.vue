<template>
  <div class="bg-light border-right p-3" id="sidebar-wrapper">
    <div class="sidebar-heading">Фильтры</div>
    <div class="list-group list-group-flush">
      <div class="search-form">
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
        <button type="button" class="btn btn-primary btn-block" @click="submitForm">Найти курсы</button>
      </div>
    </div>
  </div>
</template>

<script>
import { DirectionService } from "@/services/DirectionService.js";

export default {
  props: {
    initialFilters: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
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
  watch: {
    'form.direction': 'updateCategories',
    initialFilters: {
      handler: 'applyInitialFilters',
      immediate: true
    }
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
      this.$emit('apply-filters', this.form);
    },
    applyInitialFilters() {
      if (this.initialFilters) {
        this.form.keywords = this.initialFilters.keywords || '';
        this.form.direction = this.initialFilters.direction || '';
        this.form.category = this.initialFilters.category || '';
        this.updateCategories();
      }
    }
  },
  mounted() {
    this.fetchInitialData();
    this.applyInitialFilters();
  }
};
</script>

<style scoped>
#sidebar-wrapper {
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
}

.sidebar-heading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.btn-block {
  width: 100%;
}

.search-form {
  margin-bottom: 20px;
}
</style>