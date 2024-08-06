<template>
  <div class="row">
    <div class="col-md-3 p-0">
      <SideBar @select-section="selectSection" />
    </div>
    <div class="col-md-9 content-area">
      <ProfileHeader :profile="profile" />
      <component :is="currentSection"
                 :statistics="statistics"
                 :courses="courses"
                 :achievements="achievements"
                 :tasks="tasks"
                 :materials="materials"
                 :notifications="notifications" />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/PersonalArea/SideBar.vue';
import ProfileHeader from '@/components/PersonalArea/ProfileHeader.vue';
import MainProfile from '@/components/PersonalArea/MainSection/MainProfile.vue';
import TasksComponent from '@/components/PersonalArea/TasksSection/TasksComponent.vue';
import MaterialsComponent from '@/components/PersonalArea/MaterialSection/MaterialsComponent.vue';
import AnnouncementsComponent from '@/components/PersonalArea/AnnouncmentsSection/AnnouncementsComponent.vue';
import { mapGetters } from "vuex";

export default {
  name: 'PersonalArea',
  data() {
    return {
      profile: {},
      statistics: {},
      courses: [],
      achievements: [],
      tasks: [],
      materials: [],
      notifications: [],
      settings: [],
      currentSection: 'MainProfile'
    };
  },
  async mounted() {
    try {
      const [
        profileResponse,
        coursesResponse,
        achievementsResponse,
        materialsResponse,
      ] = await Promise.all([
        fetch(`http://localhost:8080/users/${this.user.id}`, { credentials: 'include' }),
        fetch(`http://localhost:8080/users/${this.user.id}/courses`, { credentials: 'include' }),
        fetch(`http://localhost:8080/user-achievements/user/${this.user.id}`, { credentials: 'include' }),
        fetch(`http://localhost:8080/course-materials/user/${this.user.id}`, { credentials: 'include' })
      ]);

      this.profile = await profileResponse.json();
      this.courses = await coursesResponse.json();
      this.achievements = await achievementsResponse.json();
      this.materials = await materialsResponse.json();

      // Для каждого курса получаем уроки, тесты и прогресс
      for (let course of this.courses) {
        const [lessonsResponse, quizzesResponse, enrolmentResponse] = await Promise.all([
          fetch(`http://localhost:8080/lessons/course/${course.id}`, { credentials: 'include' }),
          fetch(`http://localhost:8080/quizzes/course/${course.id}`, { credentials: 'include' }),
          fetch(`http://localhost:8080/enrolments/${course.id}/${this.user.id}`, { credentials: 'include' })
        ]);

        const lessons = await lessonsResponse.json();
        const quizzes = await quizzesResponse.json();
        const enrolment = await enrolmentResponse.json();

        const totalLessonsAndQuizzes = lessons.length + quizzes.length;
        const completedLessons = enrolment.progress;

        course.progress = totalLessonsAndQuizzes > 0 ? (completedLessons / totalLessonsAndQuizzes) * 100 : 0;
      }
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    }
  },
  methods: {
    selectSection(section) {
      this.currentSection = section;
    }
  },
  components: {
    SideBar,
    ProfileHeader,
    MainProfile,
    TasksComponent,
    MaterialsComponent,
    AnnouncementsComponent
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      user: 'user',
    }),
  }
};
</script>

<style scoped>
.content-area {
  padding: 30px 30px;
}
</style>