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
import {PersonalAreaService} from "@/services/PersonalAreaService.js";

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
      const userId = this.user.id;
      const [profile, courses, achievements, materials] = await Promise.all([
        PersonalAreaService.fetchProfile(userId),
        PersonalAreaService.fetchCourses(userId),
        PersonalAreaService.fetchAchievements(userId),
        PersonalAreaService.fetchMaterials(userId)
      ]);

      this.profile = profile;
      this.courses = courses;
      this.achievements = achievements;
      this.materials = materials;

      for (let course of this.courses) {
        const courseDetails = await PersonalAreaService.fetchCourseDetails(course.id, userId);
        course.progress = courseDetails.progress;
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