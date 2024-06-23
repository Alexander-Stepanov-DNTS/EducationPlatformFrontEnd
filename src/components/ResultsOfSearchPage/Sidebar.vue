<!--<template>-->
<!--  <div class="bg-light border-right p-3" id="sidebar-wrapper">-->
<!--    <div class="sidebar-heading">Фильтры</div>-->
<!--    <div class="list-group list-group-flush">-->
<!--      &lt;!&ndash; Форма поиска &ndash;&gt;-->
<!--      <div class="search-form">-->
<!--        <div class="form-group">-->
<!--          <label for="keywords">Ключевые слова</label>-->
<!--          <input type="text" class="form-control" id="keywords" v-model="form.keywords" placeholder="Введите ключевые слова для поиска">-->
<!--        </div>-->
<!--        <div class="form-group">-->
<!--          <label for="direction">Направление</label>-->
<!--          <select class="form-control" id="direction" v-model="form.direction" @change="updateCategories">-->
<!--            <option value="">Выберите направление</option>-->
<!--            <option value="it">Информационные технологии</option>-->
<!--            <option value="languages">Иностранные языки</option>-->
<!--            <option value="business">Бизнес и менеджмент</option>-->
<!--            <option value="ege">Подготовка к ЕГЭ</option>-->
<!--            <option value="creativity">Творчество и дизайн</option>-->
<!--            <option value="personal">Личностный рост</option>-->
<!--          </select>-->
<!--        </div>-->
<!--        <div class="form-group">-->
<!--          <label for="category">Категория</label>-->
<!--          <select class="form-control" id="category" v-model="form.category">-->
<!--            <option value="">Сначала выберите направление</option>-->
<!--            <option v-for="category in categories" :key="category" :value="category.toLowerCase().replace(' ', '_')">-->
<!--              {{ category }}-->
<!--            </option>-->
<!--          </select>-->
<!--        </div>-->
<!--        <button type="button" class="btn btn-primary btn-block" @click="submitForm">Найти курсы</button>-->
<!--      </div>-->

<!--      &lt;!&ndash; Фильтры &ndash;&gt;-->
<!--      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">-->
<!--        <span>Уровень сложности</span>-->
<!--      </h6>-->
<!--      <ul class="nav flex-column">-->
<!--        <li class="nav-item" v-for="level in levels" :key="level.value">-->
<!--          <div class="form-check">-->
<!--            <input class="form-check-input" type="checkbox" :value="level.value" :id="level.id" v-model="selectedLevels">-->
<!--            <label class="form-check-label" :for="level.id">-->
<!--              {{ level.label }}-->
<!--            </label>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">-->
<!--        <span>Только с сертификатом</span>-->
<!--      </h6>-->
<!--      <div class="px-3">-->
<!--        <div class="form-check form-switch">-->
<!--          <input class="form-check-input" type="checkbox" id="withCertificate" v-model="withCertificate">-->
<!--          <label class="form-check-label" for="withCertificate">С сертификатом</label>-->
<!--        </div>-->
<!--      </div>-->
<!--      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">-->
<!--        <span>Язык</span>-->
<!--      </h6>-->
<!--      <ul class="nav flex-column">-->
<!--        <li class="nav-item" v-for="language in languages" :key="language.value">-->
<!--          <div class="form-check">-->
<!--            <input class="form-check-input" type="checkbox" :value="language.value" :id="language.id" v-model="selectedLanguages">-->
<!--            <label class="form-check-label" :for="language.id">-->
<!--              {{ language.label }}-->
<!--            </label>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">-->
<!--        <span>Тип обучения</span>-->
<!--      </h6>-->
<!--      <ul class="nav flex-column mb-2">-->
<!--        <li class="nav-item" v-for="type in types" :key="type.value">-->
<!--          <div class="form-check">-->
<!--            <input class="form-check-input" type="checkbox" :value="type.value" :id="type.id" v-model="selectedTypes">-->
<!--            <label class="form-check-label" :for="type.id">-->
<!--              {{ type.label }}-->
<!--            </label>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--      &lt;!&ndash; Дополнительные фильтры &ndash;&gt;-->
<!--      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">-->
<!--        <span>Продолжительность</span>-->
<!--      </h6>-->
<!--      <ul class="nav flex-column mb-2">-->
<!--        <li class="nav-item">-->
<!--          <div class="form-check">-->
<!--            <input class="form-check-input" type="checkbox" value="short" id="shortDuration" v-model="selectedDurations">-->
<!--            <label class="form-check-label" for="shortDuration">-->
<!--              Короткие (до 1 часа)-->
<!--            </label>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--          <div class="form-check">-->
<!--            <input class="form-check-input" type="checkbox" value="medium" id="mediumDuration" v-model="selectedDurations">-->
<!--            <label class="form-check-label" for="mediumDuration">-->
<!--              Средние (1-5 часов)-->
<!--            </label>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--          <div class="form-check">-->
<!--            <input class="form-check-input" type="checkbox" value="long" id="longDuration" v-model="selectedDurations">-->
<!--            <label class="form-check-label" for="longDuration">-->
<!--              Длинные (более 5 часов)-->
<!--            </label>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'SideBar',-->
<!--  data() {-->
<!--    return {-->
<!--      form: {-->
<!--        keywords: '',-->
<!--        direction: '',-->
<!--        category: ''-->
<!--      },-->
<!--      categories: [],-->
<!--      levels: [-->
<!--        { id: 'easyLevel', value: 'easy', label: 'Для начинающих' },-->
<!--        { id: 'normalLevel', value: 'normal', label: 'Для продолжающих' },-->
<!--        { id: 'hardLevel', value: 'hard', label: 'Для профи' },-->
<!--        { id: 'allLevels', value: 'all', label: 'Для всех' }-->
<!--      ],-->
<!--      languages: [-->
<!--        { id: 'anyLanguage', value: 'all', label: 'Любой' },-->
<!--        { id: 'russianLanguage', value: 'ru', label: 'Русский' },-->
<!--        { id: 'englishLanguage', value: 'en', label: 'Английский' }-->
<!--      ],-->
<!--      types: [-->
<!--        { id: 'courseType', value: 'course', label: 'Курс' },-->
<!--        { id: 'programType', value: 'spec', label: 'Программа' }-->
<!--      ],-->
<!--      selectedLevels: ['all'],-->
<!--      withCertificate: false,-->
<!--      selectedLanguages: ['all'],-->
<!--      selectedTypes: [],-->
<!--      selectedDurations: []-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    updateCategories() {-->
<!--      const categoriesMap = {-->
<!--        "it": ["Языки программирования", "Веб-разработка", "Аналитика данных", "Тестирование ПО"],-->
<!--        "languages": ["Английский", "Немецкий", "Французский", "Испанский"],-->
<!--        "business": ["Маркетинг", "Управление проектами", "Финансы", "Предпринимательство"],-->
<!--        "ege": ["Математика", "Русский язык", "Физика", "История"],-->
<!--        "creativity": ["Дизайн", "Рисование", "Музыка", "Фотография"],-->
<!--        "personal": ["Лидерство", "Тайм-менеджмент", "Карьера", "Психология"]-->
<!--      };-->
<!--      this.categories = categoriesMap[this.form.direction] || [];-->
<!--    },-->
<!--    submitForm() {-->
<!--      this.$emit('search', this.form);-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--#sidebar-wrapper {-->
<!--  height: 100vh;-->
<!--  position: -webkit-sticky; /* Safari */-->
<!--  position: sticky;-->
<!--  top: 0;-->
<!--  overflow-y: auto;-->
<!--}-->

<!--.sidebar-heading {-->
<!--  font-size: 1.5rem;-->
<!--  margin-bottom: 1rem;-->
<!--}-->

<!--.list-group-item {-->
<!--  margin-bottom: 1rem;-->
<!--}-->

<!--.btn-block {-->
<!--  width: 100%;-->
<!--}-->

<!--.search-form {-->
<!--  margin-bottom: 20px;-->
<!--}-->
<!--</style>-->

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
            <option value="it">Информационные технологии</option>
            <option value="languages">Иностранные языки</option>
            <option value="business">Бизнес и менеджмент</option>
            <option value="ege">Подготовка к ЕГЭ</option>
            <option value="creativity">Творчество и дизайн</option>
            <option value="personal">Личностный рост</option>
          </select>
        </div>
        <div class="form-group">
          <label for="category">Категория</label>
          <select class="form-control" id="category" v-model="form.category">
            <option value="">Сначала выберите направление</option>
            <option v-for="category in categories" :key="category" :value="category.toLowerCase().replace(' ', '_')">
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
        "it": ["Языки программирования", "Веб-разработка", "Аналитика данных", "Тестирование ПО"],
        "languages": ["Английский", "Немецкий", "Французский", "Испанский"],
        "business": ["Маркетинг", "Управление проектами", "Финансы", "Предпринимательство"],
        "ege": ["Математика", "Русский язык", "Физика", "История"],
        "creativity": ["Дизайн", "Рисование", "Музыка", "Фотография"],
        "personal": ["Лидерство", "Тайм-менеджмент", "Карьера", "Психология"]
      };
      this.categories = categoriesMap[this.form.direction] || [];
      // Если есть выбранная категория, то убедитесь, что она входит в обновленный список категорий
      this.form.category = this.form.category;
      // if (!this.categories.includes(this.form.category)) {
      //   this.form.category = this.form.category;
      // }
    },
    submitForm() {
      this.$emit('apply-filters', this.form);
    },
    applyInitialFilters() {
      if (this.initialFilters) {
        this.form.keywords = this.initialFilters.keywords || '';
        this.form.direction = this.initialFilters.direction || '';
        this.updateCategories();
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
.list-group-item {
  margin-bottom: 1rem;
}
.btn-block {
  width: 100%;
}
.search-form {
  margin-bottom: 20px;
}
</style>
