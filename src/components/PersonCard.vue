<template>
  <div class="card mb-4 shadow-sm">
    <img :src="image" class="card-img-top" :alt="name">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ text }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <small class="text-muted">{{ date }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    name: String,
    text: String,
    image: String,
    date: String
  }
};
</script>

<style scoped>
.card {
  border: none;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
.card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  max-height: 200px;
  object-fit: cover;
}
.card-title {
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
}
.card-text {
  font-size: 1rem;
  color: #666;
}
</style>