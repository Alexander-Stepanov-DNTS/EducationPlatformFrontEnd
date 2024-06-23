<template>
  <div>
    <AboutIntro />
    <History />
    <Mission />
    <Team />
    <SuccessStories />
    <PartnersSection />
  </div>
</template>

<script>
import AboutIntro from '@/components/About/AboutIntro.vue'
import History from '@/components/About/History.vue'
import Mission from '@/components/About/Mission.vue'
import Team from '@/components/About/Team.vue'
import SuccessStories from "@/components/SuccessStories.vue";
import PartnersSection from "@/components/PartnersSection.vue";

export default {
  name: 'About',
  components: {
    AboutIntro,
    History,
    Mission,
    Team,
    SuccessStories,
    PartnersSection,
  }
}
</script>

<style scoped>
/* Общие стили для страницы "О нас" */
</style>
