<!--<template>-->
<!--  <div>-->
<!--    <div class="container" v-if="course">-->
<!--      <CourseHeader :title="course.title" />-->
<!--      <CourseInfo :title="course.title" :description="course.description" />-->
<!--      <CourseProgress :completedLessons="course.progress.completedLessons" :totalLessons="course.lessons.length" />-->
<!--      <div class="section-title">Описание курса</div>-->
<!--      <div class="course-description">{{ course.details }}</div>-->
<!--      <LessonList :lessons="course.lessons" />-->
<!--      <Instructor :instructor="course.instructor" />-->
<!--      <ReviewList :reviews="course.reviews" />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import CourseHeader from '@/components/CoursePage/CourseHeader.vue';-->
<!--import CourseInfo from '@/components/CoursePage/CourseInfo.vue';-->
<!--import LessonList from '@/components/CoursePage/LessonList.vue';-->
<!--import Instructor from '@/components/CoursePage/Instructor.vue';-->
<!--import ReviewList from '@/components/CoursePage/ReviewList.vue';-->
<!--import CourseProgress from '@/components/CoursePage/CourseProgress.vue';-->

<!--export default {-->
<!--  name: 'CoursePage',-->
<!--  components: {-->
<!--    CourseHeader,-->
<!--    CourseInfo,-->
<!--    LessonList,-->
<!--    Instructor,-->
<!--    ReviewList,-->
<!--    CourseProgress-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      course: null-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    async fetchCourseData() {-->
<!--      try {-->
<!--        const response = await fetch('/testJSON/courseData.json'); // Указываем путь к статическому файлу-->
<!--        const data = await response.json();-->
<!--        this.course = data.course;-->
<!--      } catch (error) {-->
<!--        console.error('Ошибка при получении данных о курсе:', error);-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.fetchCourseData();-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.container {-->
<!--  max-width: 1200px;-->
<!--  margin-top: 3%;-->
<!--  padding: 20px;-->
<!--}-->
<!--.course-description {-->
<!--  font-size: 1.2rem;-->
<!--  margin-bottom: 20px;-->
<!--}-->
<!--.section-title {-->
<!--  font-size: 1.5rem;-->
<!--  margin-top: 40px;-->
<!--  margin-bottom: 20px;-->
<!--  color: #3b5998;-->
<!--}-->
<!--</style>-->

<template>
  <div>
    <div class="container" v-if="course">
      <CourseHeader :title="course.title" />
      <CourseInfo :title="course.title" :description="course.description" />
      <CourseProgress :completedLessons="course.progress.completedLessons" :totalLessons="course.lessons.length" />
      <div class="section-title">Описание курса</div>
      <div class="course-description">{{ course.details }}</div>
      <LessonList :lessons="course.lessons" />
      <Instructor :instructor="course.instructor" />
      <ReviewList :reviews="course.reviews" />
    </div>
  </div>
</template>

<script>
import CourseHeader from '@/components/CoursePage/CourseHeader.vue';
import CourseInfo from '@/components/CoursePage/CourseInfo.vue';
import LessonList from '@/components/CoursePage/LessonList.vue';
import Instructor from '@/components/CoursePage/Instructor.vue';
import ReviewList from '@/components/CoursePage/ReviewList.vue';
import CourseProgress from '@/components/CoursePage/CourseProgress.vue';

export default {
  name: 'CoursePage',
  components: {
    CourseHeader,
    CourseInfo,
    LessonList,
    Instructor,
    ReviewList,
    CourseProgress
  },
  props: {
    courseID: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      course: null
    };
  },
  methods: {
    async fetchCourseData() {
      try {
        const response = await fetch(`/testJSON/courseData_${this.courseID}.json`); // Указываем путь к статическому файлу с параметром courseID
        const data = await response.json();
        this.course = data.course;
      } catch (error) {
        console.error('Ошибка при получении данных о курсе:', error);
      }
    }
  },
  mounted() {
    this.fetchCourseData();
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin-top: 3%;
  padding: 20px;
}
.course-description {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.section-title {
  font-size: 1.5rem;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #3b5998;
}
</style>
