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
            <option value="Информационные технологии">Информационные технологии</option>
            <option value="Иностранные языки">Иностранные языки</option>
            <option value="Бизнес и менеджмент">Бизнес и менеджмент</option>
            <option value="Подготовка к ЕГЭ">Подготовка к ЕГЭ</option>
            <option value="Творчество и дизайн">Творчество и дизайн</option>
            <option value="Личностный рост">Личностный рост</option>
          </select>
        </div>
        <div class="form-group">
          <label for="category">Категория</label>
          <select class="form-control" id="category" v-model="form.category">
            <option value="">Сначала выберите направление</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <button type="button" class="btn btn-primary btn-block" @click="submitForm">Найти курсы</button>
      </div>
    </div>
  </div>
</template>

<script>
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
      categories: []
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
    updateCategories() {
      const categoriesMap = {
        "Информационные технологии": ["Языки программирования", "Веб-разработка", "Аналитика данных", "Тестирование ПО"],
        "Иностранные языки": ["Английский", "Немецкий", "Французский", "Испанский"],
        "Бизнес и менеджмент": ["Маркетинг", "Управление проектами", "Финансы", "Предпринимательство"],
        "Подготовка к ЕГЭ": ["Математика", "Русский язык", "Физика", "История"],
        "Творчество и дизайн": ["Дизайн", "Рисование", "Музыка", "Фотография"],
        "Личностный рост": ["Лидерство", "Тайм-менеджмент", "Карьера", "Психология"]
      };
      this.categories = categoriesMap[this.form.direction] || [];
    },
    submitForm() {
      this.$emit('apply-filters', this.form);
    },
    applyInitialFilters() {
      if (this.initialFilters) {
        this.form.keywords = this.initialFilters.keywords || '';
        this.form.direction = this.initialFilters.direction || '';
        // this.updateCategories();
        this.form.category = this.initialFilters.category || '';
        this.updateCategories();
      }
    }
  },
  mounted() {
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