<template>
  <div>
    <div class="container" v-if="course">
      <CourseHeader :title="course.name"/>
      <CourseInfo :title="course.name" :description="course.description" :isEnrolled="isEnrolled" :course="course"
                  :firstLessonId="firstLessonId" :firstLessonType="firstLessonType" :user="this.user"/>
      <CourseProgress :completedLessons="completedLessons" :totalLessons="sortedLessonsAndQuizzes.length"/>
      <div class="section-title">Описание курса</div>
      <div class="course-description">{{ course.details }}</div>
      <LessonList :items="sortedLessonsAndQuizzes"/>
      <ReviewList :reviews="reviews"/>
      <CommentForm @submit-comment="handleCommentSubmit"/>
    </div>
  </div>
</template>

<script>
import CourseHeader from '@/components/CoursePage/CourseHeader.vue';
import CourseInfo from '@/components/CoursePage/CourseInfo.vue';
import LessonList from '@/components/CoursePage/LessonList.vue';
import ReviewList from '@/components/CoursePage/ReviewList.vue';
import CourseProgress from '@/components/CoursePage/CourseProgress.vue';
import CommentForm from '@/components/CoursePage/CommentForm.vue';
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: 'CoursePage',
  components: {
    CourseHeader,
    CourseInfo,
    LessonList,
    ReviewList,
    CourseProgress,
    CommentForm,
  },
  props: {
    courseID: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      course: null,
      lessons: [],
      quizzes: [],
      reviews: [],
      isEnrolled: false,
      firstLessonId: null,
      firstLessonType: null,
      completedLessons: 0
    };
  },
  methods: {
    async fetchCourseData() {
      try {
        const [courseResponse, lessonsResponse, quizzesResponse, reviewsResponse, isEnrolled, enrolmentResponce] = await Promise.all([
          fetch(`http://localhost:8080/courses/${this.courseID}`, {
            credentials: 'include'
          }),
          fetch(`http://localhost:8080/lessons/course/${this.courseID}`, {
            credentials: 'include'
          }),
          fetch(`http://localhost:8080/quizzes/course/${this.courseID}`, {
            credentials: 'include'
          }),
          fetch(`http://localhost:8080/reviews/course/${this.courseID}`, {
            credentials: 'include'
          }),
          fetch(`http://localhost:8080/enrolments/isEnrolled?courseId=${this.courseID}&studentId=${this.getStudentId()}`, {
            credentials: 'include'
          }),
          fetch(`http://localhost:8080/enrolments/${this.courseID}/${this.getStudentId()}`, {
            credentials: 'include'
          })
        ]);

        const courseData = await courseResponse.json();
        const lessonsData = await lessonsResponse.json();
        const quizzesData = await quizzesResponse.json();
        const reviewsData = await reviewsResponse.json();
        const enrolled = await isEnrolled.json();
        const enrolment = await enrolmentResponce.json();

        this.course = courseData;
        this.lessons = lessonsData;
        this.quizzes = quizzesData.map(quiz => ({
          ...quiz,
          type: 'quiz',
          name: quiz.title,
          lessonDetails: quiz.description,
          courseOrder: quiz.courseOrder
        }));
        this.reviews = reviewsData;
        this.isEnrolled = enrolled;
        this.completedLessons = enrolment.progress;

        const sortedContent = this.sortedLessonsAndQuizzes;

        if (sortedContent.length > 0) {
          this.firstLessonId = sortedContent[0].id;
          this.firstLessonType = sortedContent[0].type;
          console.log("TEST " + this.firstLessonId + this.firstLessonType)
        }
      } catch (error) {
        console.error('Ошибка при получении данных о курсе:', error);
      }
    },
    getStudentId() {
      return this.user.id;
    },
    async handleCommentSubmit(comment) {
      try {
        const commentData = {
          user: {
            id: this.getStudentId()
          },
          course: {
            id: this.courseID
          },
          reviewText: comment.text,
          score: comment.score
        };

        const response = await axios.post('http://localhost:8080/reviews', commentData, {
          withCredentials: true
        });

        if (response.status === 200) {
          this.reviews.push(response.data);
        } else {
          console.error('Ошибка при отправке комментария');
        }
      } catch (error) {
        console.error('Ошибка при отправке комментария:', error);
      }
    }
  },
  computed: {
    sortedLessonsAndQuizzes() {
      return [...this.lessons, ...this.quizzes].sort((a, b) => a.courseOrder - b.courseOrder);
    },
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      user: 'user',
    }),
  },
  mounted() {
    this.$store.dispatch('checkAuth');
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