<template>
  <section class="hero-section text-center">
    <div class="container">
      <h1 class="display-4">Добро пожаловать на онлайн платформу: StudyHub</h1>
      <p class="lead">Учитесь онлайн с лучшими курсами</p>
      <a href="#" class="btn btn-lg">Начать обучение</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainSection'
};
</script>

<style scoped>
.hero-section {
  background-size: cover;
  color: white;
  padding: 150px 0;
  text-shadow: 2px 2px 4px #000000;
}

.hero-section .btn {
  background-color: #ffffff;
  color: #3b5998;
}
</style>