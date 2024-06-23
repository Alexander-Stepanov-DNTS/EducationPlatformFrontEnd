<template>
  <div class="statistics">
    <h3>Статистика</h3>
    <ul>
      <li>Пройденные курсы: {{ statistics.coursesCompleted }}</li>
      <li>Всего часов обучения: {{ statistics.totalHours }}</li>
      <li>Разблокированные достижения: {{ statistics.achievementsUnlocked }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  props: {
    statistics: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.statistics {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.statistics ul {
  list-style: none;
  padding: 0;
}
.statistics ul li {
  margin-bottom: 10px;
}
</style>