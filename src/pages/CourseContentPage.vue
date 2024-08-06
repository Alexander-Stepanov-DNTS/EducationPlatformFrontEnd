<template>
  <div class="row">
    <div class="col-md-3 p-0">
      <SideBar :courseContent="courseContent" :currentItemID="currentItem ? currentItem.prefixedID : null" @select-item="selectItem" />
    </div>
    <div class="col-md-9">
      <LessonContent
          v-if="currentItem && currentItem.type === 'lesson'"
          :lesson="currentItem"
          :courseContent="courseContent"
          :currentItemIndex="currentItemIndex"
          @select-item="selectItem"
      />
      <TestContent
          v-if="currentItem && currentItem.type === 'quiz'"
          :test="currentItem"
          :courseContent="courseContent"
          :currentItemIndex="currentItemIndex"
          @select-item="selectItem"
      />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/CourseContentPage/CourseComponentSideBar.vue';
import LessonContent from '@/components/CourseContentPage/LessonContent.vue';
import TestContent from '@/components/CourseContentPage/TestContent.vue';
import axios from 'axios';

export default {
  name: 'CourseContentPage',
  props: ['itemID', 'itemType'],
  data() {
    return {
      courseContent: [],
      currentItem: null,
      currentItemIndex: null,
      loading: true,
      courseID: null
    };
  },
  methods: {
    async fetchCurrentItem() {
      try {
        let response;
        if(this.itemType === "quiz"){
          response = await axios.get(`http://localhost:8080/quizzes/${this.itemID}`, {
            withCredentials: true
          });
        }
        else {
          response = await axios.get(`http://localhost:8080/${this.itemType}s/${this.itemID}`, {
            withCredentials: true
          });
        }
        this.currentItem = response.data;
        this.courseID = this.currentItem.course.id;
        await this.fetchCourseContent();
      } catch (error) {
        console.error('Ошибка при получении данных текущего элемента:', error);
        this.loading = false;
      }
    },
    async fetchCourseContent() {
      try {
        const [lessonsResponse, quizzesResponse] = await Promise.all([
          axios.get(`http://localhost:8080/lessons/course/${this.courseID}`, {withCredentials: true}),
          axios.get(`http://localhost:8080/quizzes/course/${this.courseID}`, {withCredentials: true})
        ]);
        const lessonsData = lessonsResponse.data;
        const quizzesData = quizzesResponse.data;

        const lessons = lessonsData.map(lesson => ({
          ...lesson,
          type: 'lesson',
          prefixedID: `lesson-${lesson.id}`
        }));

        const quizzes = await Promise.all(quizzesData.map(async quiz => {
          const questionsResponse = await axios.get(`http://localhost:8080/quizzes/${quiz.id}/questions`, {withCredentials: true});
          const questionsData = questionsResponse.data;

          const questions = await Promise.all(questionsData.map(async question => {
            const answersResponse = await axios.get(`http://localhost:8080/quiz-questions/${question.id}/answers`, {withCredentials: true});
            const answersData = answersResponse.data;
            return { ...question, answers: answersData };
          }));

          return {
            ...quiz,
            type: 'quiz',
            prefixedID: `quiz-${quiz.id}`,
            name: quiz.title,
            questions
          };
        }));

        this.courseContent = [...lessons, ...quizzes].sort((a, b) => a.courseOrder - b.courseOrder);
        this.loading = false;
        this.loadItem();
      } catch (error) {
        console.error('Ошибка при получении данных о курсе:', error);
        this.loading = false;
      }
    },
    loadItem() {
      if (this.courseContent && this.courseContent.length > 0) {
        const itemID = `${this.itemType}-${this.itemID}`;
        this.currentItem = this.courseContent.find(item => item.prefixedID === itemID) || null;
        this.currentItemIndex = this.courseContent.findIndex(item => item.prefixedID === itemID);
      }
    },
    selectItem(item) {
      this.$router.push(`/content/${item.type}/${item.id}`);
    }
  },
  watch: {
    itemID: 'loadItem',
    itemType: 'loadItem'
  },
  mounted() {
    this.fetchCurrentItem();
  },
  components: {
    SideBar,
    LessonContent,
    TestContent
  }
};
</script>

<style scoped>
.row {
  margin: 0;
}

.col-md-3 {
  background-color: #f8f9fa;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
}

.col-md-9 {
  padding: 20px;
}
</style>