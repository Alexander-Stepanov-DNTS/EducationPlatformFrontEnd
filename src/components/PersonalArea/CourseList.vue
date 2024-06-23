<template>
  <div>
    <h4><i class="fas fa-book icon icon-course"></i> Ваши курсы:</h4>
    <div v-if="!courses || courses.length === 0" class="alert alert-info">
      Вы еще не поступили на курсы.
    </div>
    <ul v-else class="list-group">
      <li class="list-group-item" v-for="course in courses" :key="course.id">
        <a :href="`/course/${course.id}`">{{ course.title }}</a>
        <p>{{ course.description }}</p>
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="{ width: course.progress + '%' }" :aria-valuenow="course.progress" aria-valuemin="0" aria-valuemax="100">{{ course.progress }}%</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CourseList',
  props: {
    courses: {
      type: Array,
      required: false,
      default: () => []
    }
  }
};
</script>

<style scoped>
.course-card {
  margin-bottom: 20px;
}
.icon-course {
  color: #5bc0de;
}
.progress {
  height: 20px;
}
.alert {
  margin-top: 10px;
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
}
</style>
