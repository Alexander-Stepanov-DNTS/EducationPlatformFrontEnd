<template>
  <div class="header">
    <h1>Курс: {{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'CourseHeader',
  props: {
    title: String
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 30px;
}
.header h1 {
  color: #333;
}
</style>
