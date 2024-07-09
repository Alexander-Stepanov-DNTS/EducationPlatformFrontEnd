<template>
  <div class="course-progress">
    <div class="section-title">Прогресс курса</div>
    <div class="progress">
      <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: progressPercentage + '%' }"
          :aria-valuenow="progressPercentage"
          aria-valuemin="0"
          aria-valuemax="100"
      >
        {{ progressPercentage }}%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseProgress',
  props: {
    completedLessons: {
      type: Number,
      required: true
    },
    totalLessons: {
      type: Number,
      required: true
    }
  },
  computed: {
    progressPercentage() {
      console.log(this.completedLessons + " " + this.totalLessons);
      if (this.completedLessons === 0) {
        return 0;
      }
      const progress = (this.completedLessons / this.totalLessons) * 100;
      return Math.round(progress);
    }
  }
};
</script>

<style scoped>
.course-progress {
  margin-top: 20px;
  margin-bottom: 40px;
}
.section-title {
  font-size: 1.5rem;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #3b5998;
}
.progress {
  height: 30px;
}
.progress-bar {
  background-color: #3b5998;
  color: white;
  text-align: center;
  line-height: 30px;
}
</style>



