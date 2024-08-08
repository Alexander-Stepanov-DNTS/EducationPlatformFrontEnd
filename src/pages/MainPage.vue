<template>
  <div>
    <MainSection />
    <Features />
    <Categories />
    <SearchBar />
    <SuccessStories />
    <NewsSection />
    <PartnersSection />
  </div>
</template>

<script>
import MainSection from '@/components/MainPage/MainSection.vue';
import SearchBar from '@/components/SearchCoursesPage/SearchBar.vue';
import Categories from '@/components/ReusableComponents/Categories.vue';
import Features from '@/components/MainPage/Features.vue';
import SuccessStories from '@/components/AboutPage/SuccessStories.vue';
import NewsSection from '@/components/MainPage/NewsSection.vue';
import PartnersSection from '@/components/AboutPage/PartnersSection.vue';

export default {
  components: {
    MainSection,
    SearchBar,
    Categories,
    Features,
    SuccessStories,
    NewsSection,
    PartnersSection,
  },
};
</script>

<style scoped>
body {
  background-color: #ffffff;
  color: #000000;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  color: #000000;
}

p, a, span, div {
  color: #000000;
}

footer {
  background-color: #ffffff;
  color: #000000;
  padding: 20px 0;
  text-align: center;
}
</style>