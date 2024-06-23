<template>
  <div>
    <search-bar></search-bar>
    <categories></categories>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchCoursesPage/SearchBar.vue';
import Categories from '@/components/Categories.vue';

export default {
  components: {
    SearchBar,
    Categories,
  },
};
</script>

<style scoped>

</style>