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
import AboutIntro from '@/components/AboutPage/AboutIntro.vue'
import History from '@/components/AboutPage/History.vue'
import Mission from '@/components/AboutPage/Mission.vue'
import Team from '@/components/AboutPage/Team.vue'
import SuccessStories from "@/components/AboutPage/SuccessStories.vue";
import PartnersSection from "@/components/AboutPage/PartnersSection.vue";

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