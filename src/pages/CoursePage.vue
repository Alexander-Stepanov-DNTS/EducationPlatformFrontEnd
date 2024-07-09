<template>
  <div>
    <div class="container" v-if="course">
      <CourseHeader :title="course.name"/>
      <CourseInfo :title="course.name" :description="course.description" :isEnrolled="isEnrolled"
                  :firstLessonId="firstLessonId" :firstLessonType="firstLessonType"/>
      <CourseProgress :completedLessons="lessons.length" :totalLessons="sortedLessonsAndQuizzes.length"/>
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
import Instructor from '@/components/CoursePage/Instructor.vue';
import ReviewList from '@/components/CoursePage/ReviewList.vue';
import CourseProgress from '@/components/CoursePage/CourseProgress.vue';
import CommentForm from '@/components/CoursePage/CommentForm.vue';

export default {
  name: 'CoursePage',
  components: {
    CourseHeader,
    CourseInfo,
    LessonList,
    Instructor,
    ReviewList,
    CourseProgress,
    CommentForm
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
      firstLessonType: null
    };
  },
  methods: {
    async beforeRouteEnter(to, from, next) {
      try {
        const response = await fetch('http://localhost:8080/protected-endpoint', {
          credentials: 'include'
        });
        if (response.ok) {
          next();
        } else {
          next('/login');
        }
      } catch (error) {
        console.error('Ошибка:', error);
        next('/login');
      }
    },
    async fetchCourseData() {
      try {
        const [courseResponse, lessonsResponse, quizzesResponse, reviewsResponse, isEnrolled] = await Promise.all([
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
          })
        ]);

        const courseData = await courseResponse.json();
        const lessonsData = await lessonsResponse.json();
        const quizzesData = await quizzesResponse.json();
        const reviewsData = await reviewsResponse.json();

        this.course = courseData;
        this.lessons = lessonsData;
        this.quizzes = quizzesData.map(quiz => ({
          ...quiz,
          type: 'quiz', // Добавляем тип, чтобы отличать тесты от уроков
          name: quiz.title,
          lessonDetails: quiz.description,
          courseOrder: quiz.courseOrder
        }));
        this.reviews = reviewsData;

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
      // Получение ID студента из вашего метода аутентификации
      return 1; // замените на реальный метод получения ID студента
    },
    async handleCommentSubmit(comment) {
      try {
        const commentData = {
          user: {
            //id: this.userID
            id: 1 //Заглушка
          },
          course: {
            id: this.courseID
          },
          reviewText: comment.text,
          score: comment.score
        };

        const response = await fetch(`http://localhost:8080/reviews`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(commentData),
        });

        if (response.ok) {
          const createdReview = await response.json();
          this.reviews.push(createdReview);
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