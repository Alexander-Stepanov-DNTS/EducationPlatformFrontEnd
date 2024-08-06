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
        return 'bi bi-book';
      } else {
        return 'bi bi-pen';
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
  font-size: 28px;
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