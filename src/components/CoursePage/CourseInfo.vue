<template>
  <div class="course-info">
    <div class="course-title">{{ title }}</div>
    <div class="course-description">
      {{ description }}
    </div>
    <div v-if="isEnrolled" class="enrolled-message">
      Вы поступили на курс!
      <div>
        <a @click.prevent="continueCourse" class="btn btn-primary">Продолжить курс</a>
      </div>
    </div>
    <a v-else @click.prevent="startCourse" class="btn btn-primary">Начать курс</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'CourseInfo',
  props: {
    title: String,
    description: String,
    isEnrolled: Boolean,
    firstLessonId: Number,
    firstLessonType: String,
    course: Object,
    user: Object
  },
  methods: {
    continueCourse() {
      let type;
      if(this.firstLessonType === "quiz") {type = "quiz"}
      else {type = "lesson"}
      if (this.firstLessonId && type) {
        this.$router.push(`/content/${type}/${this.firstLessonId}`);
      } else {
        console.error('First lesson information is not available.');
      }
    },
    async startCourse() {
      let type;
      if(this.firstLessonType === "quiz") {type = "quiz"}
      else {type = "lesson"}

      try {
        const course = JSON.parse(JSON.stringify(this.course));
        const student = JSON.parse(JSON.stringify(this.user));
        student.role = {
          id:3,
          name: "Студент"
        }
        const enrolmentDto = {
          course: course,
          student: student,
          enrolmentDatetime: new Date().toISOString(),
          completedDatetime: null,
          isAuthor: false,
          progress: 0
        };

        console.log(enrolmentDto);

        const response = await axios.post('http://localhost:8080/enrolments', enrolmentDto, { withCredentials: true });

        if (response.status === 200) {
          console.log('User enrolled in course successfully.');
          this.$router.push(`/content/${type}/${this.firstLessonId}`);
        } else {
          console.error('Failed to enroll in course.');
        }
      } catch (error) {
        console.error('Error enrolling in course:', error);
      }
    }
  }
}
</script>

<style scoped>
.course-info {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 30px;
}
.course-title {
  font-size: 2rem;
  color: #3b5998;
  margin-bottom: 20px;
}
.course-description {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.btn-primary {
  background: linear-gradient(to right, #6a11cb, #2575fc);
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: background 0.3s ease;
  color: white;
  text-align: center;
  text-decoration: none;
}
.btn-primary:hover {
  background: linear-gradient(to right, #2575fc, #6a11cb);
}
</style>