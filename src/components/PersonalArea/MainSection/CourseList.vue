<template>
  <div>
    <h4><i class="fas fa-book icon icon-course"></i> Ваши курсы:</h4>
    <div v-if="!courses || courses.length === 0" class="alert alert-info">
      Вы еще не поступили на курсы.
    </div>
    <ul v-else class="list-group">
      <li class="list-group-item" v-for="course in courses" :key="course.id">
        <a href="#" @click.prevent="$router.push(`/course/${course.id}`)">{{ course.name }}</a>
        <p>{{ course.description }}</p>
<!--        <div class="progress">-->
<!--          <div class="progress-bar" role="progressbar" :style="{ width: progressPercentage(course) + '%' }" :aria-valuenow="progressPercentage(course)" aria-valuemin="0" aria-valuemax="100">{{ progressPercentage(course) }}%</div>-->
<!--        </div>-->
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
  },
  methods: {
    progressPercentage(course) {
      if (!course.totalLessonsAndQuizzes || course.totalLessonsAndQuizzes === 0) {
        return 0;
      }
      const progress = (course.completedLessons / course.totalLessonsAndQuizzes) * 100;
      return Math.round(progress);
    }
  }
};
</script>

<style scoped>
.icon-course {
  color: #5bc0de;
}
.progress {
  height: 20px;
}
.progress-bar {
  transition: width 0.6s ease;
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
div {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
}
</style>