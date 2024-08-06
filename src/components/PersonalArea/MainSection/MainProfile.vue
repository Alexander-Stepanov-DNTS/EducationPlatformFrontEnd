<template>
  <div>
    <Statistics :statistics="statistics" />
    <CourseList :courses="courses" />
    <AchievementList :achievements="achievements" />
  </div>
</template>

<script>
import Statistics from '@/components/PersonalArea/MainSection/Statistics.vue';
import CourseList from '@/components/PersonalArea/MainSection/CourseList.vue';
import AchievementList from "@/components/PersonalArea/MainSection/AchievementList.vue";

export default {
  name: 'MainProfile',
  props: {
    statistics: {
      type: Object,
      required: true
    },
    courses: {
      type: Array,
      required: true
    },
    achievements: {
      type: Array,
      required: true
    }
  },
  components: {
    AchievementList,
    Statistics,
    CourseList
  }
};
</script>