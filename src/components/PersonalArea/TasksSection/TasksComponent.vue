<template>
  <div>
    <h4>Ваши задания:</h4>
    <ul v-if="tasks.length">
      <li v-for="task in tasks" :key="task.lesson.id">
        <p>{{ task.lesson.name }} (Пройдено: {{ task.completedDatetime }})</p>
      </li>
    </ul>
    <p v-else>Нет заданий</p>
  </div>
</template>
<script>
export default {
  name: 'TasksComponent',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>
