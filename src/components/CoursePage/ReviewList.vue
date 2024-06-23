<template>
  <div>
    <div class="section-title">Отзывы студентов</div>
    <div class="reviews">
      <div class="review" v-for="review in reviews" :key="review.name">
        <h5>{{ review.name }}</h5>
        <p>{{ review.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewList',
  props: {
    reviews: Array
  }
}
</script>

<style scoped>
.section-title {
  font-size: 1.5rem;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #3b5998;
}
.reviews {
  margin-top: 50px;
}
.review {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
.review h5 {
  margin-bottom: 10px;
}
.review p {
  margin-bottom: 5px;
}
</style>
