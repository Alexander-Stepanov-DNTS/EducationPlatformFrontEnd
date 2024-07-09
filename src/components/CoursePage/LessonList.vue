<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <div>&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="section-title">Программа курса</div>&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="lesson" v-for="lesson in lessons" :key="lesson.title">&ndash;&gt;-->
<!--&lt;!&ndash;      <img :src="lesson.icon" alt="icon">&ndash;&gt;-->
<!--&lt;!&ndash;      <div>&ndash;&gt;-->
<!--&lt;!&ndash;        <h5>{{ lesson.title }}</h5>&ndash;&gt;-->
<!--&lt;!&ndash;        <p>{{ lesson.description }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->


<!--<template>-->
<!--  <div>-->
<!--    <div class="section-title">Программа курса</div>-->
<!--    <div class="lesson" v-for="lesson in lessons" :key="lesson.id">-->
<!--      <img :src="lesson.icon || 'default-icon.png'" alt="icon">-->
<!--      <div>-->
<!--        <h5>{{ lesson.name }}</h5>-->
<!--        <p>{{ lesson.lessonDetails }}</p>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'LessonList',-->
<!--  props: {-->
<!--    lessons: Array-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.section-title {-->
<!--  font-size: 1.5rem;-->
<!--  margin-top: 40px;-->
<!--  margin-bottom: 20px;-->
<!--  color: #3b5998;-->
<!--}-->
<!--.lesson {-->
<!--  margin-bottom: 20px;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->
<!--.lesson img {-->
<!--  width: 50px;-->
<!--  height: 50px;-->
<!--  margin-right: 15px;-->
<!--}-->
<!--.lesson h5 {-->
<!--  margin-bottom: 10px;-->
<!--}-->
<!--.lesson p {-->
<!--  margin-bottom: 5px;-->
<!--}-->
<!--</style>-->

<template>
  <div>
    <div v-for="item in sortedItems" :key="item.id" class="lesson-item">
      <i :class="getIcon(item.type)" class="lesson-icon"></i>
      <div class="lesson-content">
        <h5>{{ item.name }}</h5>
        <p>{{ item.lessonDetails }}</p>
        <div v-if="item.type === 'quiz'">
          <span class="badge badge-info">Тест</span>
        </div>
        <div v-else>
          <span class="badge badge-primary">Урок</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonList',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    getIcon(type) {
      if (type === 'quiz') {
        return 'bi bi-book'; // Замените на реальный путь к иконке урока
      } else {
        return 'bi bi-pen'; // Замените на реальный путь к иконке теста
      }
    }
  },
  computed: {
    sortedItems() {
      return this.items.sort((a, b) => a.courseOrder - b.courseOrder);
    }
  }
};
</script>

<style scoped>
p {
  margin-bottom: 0px;
}
.lesson-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.lesson-icon {
  font-size: 28px; /* Увеличение размера иконки */
  margin-right: 15px;
}
.lesson-content {
  flex: 1;
}
.badge-info {
  background-color: #17a2b8;
  color: white;
}
.badge-primary {
  background-color: #007bff;
  color: white;
}
</style>
