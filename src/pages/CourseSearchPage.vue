<template>
  <div>
    <search-bar/>
    <categories/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchCoursesPage/SearchBar.vue';
import Categories from '@/components/ReusableComponents/Categories.vue';

export default {
  components: {
    SearchBar,
    Categories,
  },
};
</script>