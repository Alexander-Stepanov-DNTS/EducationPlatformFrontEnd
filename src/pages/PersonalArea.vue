<template>
  <div class="row">
    <div class="col-md-3 p-0">
      <SideBar />
    </div>
    <div class="col-md-9 content-area">
      <ProfileHeader :profile="profile" />
      <Statistics :statistics="statistics" />
      <div class="section">
        <CourseList :courses="courses" class="course-card" />
      </div>
      <div class="section">
        <AchievementList :achievements="achievements" class="achievement-card" />
      </div>
      <div class="section">
        <NotificationList :notifications="notifications" class="notification-card" />
      </div>
      <div class="section">
        <SettingsList :settings="settings" class="settings-card" />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/PersonalArea/SideBar.vue';
import ProfileHeader from '@/components/PersonalArea/ProfileHeader.vue';
import CourseList from '@/components/PersonalArea/CourseList.vue';
import AchievementList from '@/components/PersonalArea/AchievementList.vue';
import NotificationList from '@/components/PersonalArea/NotificationList.vue';
import Statistics from '@/components/PersonalArea/Statistics.vue';
import SettingsList from '@/components/PersonalArea/SettingsList.vue';

export default {
  name: 'PersonalArea',
  data() {
    return {
      profile: {},
      statistics: {},
      courses: [],
      achievements: [],
      notifications: [],
      settings: []
    };
  },
  async mounted() {
    try {
      const response = await fetch('/testJSON/personalAreaTestData2.json');
      const data = await response.json();
      this.profile = data.profile;
      this.statistics = data.statistics;
      this.courses = data.courses;
      this.achievements = data.achievements;
      this.notifications = data.notifications;
      this.settings = data.settings;
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    }
  },
  components: {
    SideBar,
    ProfileHeader,
    Statistics,
    CourseList,
    AchievementList,
    NotificationList,
    SettingsList
  }
};
</script>

<style scoped>
.content-area {
  padding-left: 30px; /* Отступ слева для содержимого */
  padding-right: 30px; /* Отступ слева для содержимого */
  padding-top: 20px; /* Отступ сверху для содержимого */
}
.section {
  margin-bottom: 20px;
}
.course-card {
  margin-bottom: 20px;
}
.achievement-card {
  margin-bottom: 20px;
}
.notification-card {
  margin-bottom: 20px;
}
.settings-card {
  margin-bottom: 20px;
}
</style>
