<template>
  <div>
    <div class="section-title">Преподаватель</div>
    <div class="instructor">
      <img :src="instructor.image" alt="Instructor" width="100">
      <div class="instructor-info">
        <h5>{{ instructor.name }}</h5>
        <p>{{ instructor.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Instructor',
  props: {
    instructor: Object
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
.instructor {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.instructor img {
  border-radius: 50%;
  margin-right: 20px;
}
.instructor-info {
  font-size: 1rem;
}
</style>