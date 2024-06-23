<template>
  <div class="row">
    <div class="col-md-3 p-0">
      <SideBar :courseContent="courseContent" :currentItemID="currentItem ? currentItem.id : null" @select-item="selectItem" />
    </div>
    <div class="col-md-9">
      <LessonContent v-if="currentItem && currentItem.type === 'lesson'" :lesson="currentItem" />
      <TestContent v-if="currentItem && currentItem.type === 'test'" :test="currentItem" />
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/CourseContent/CourseComponentSideBar.vue';
import LessonContent from '@/components/CourseContent/LessonContent.vue';
import TestContent from '@/components/CourseContent/TestContent.vue';
import axios from 'axios';

export default {
  name: 'LessonPage',
  props: ['itemID'],
  data() {
    return {
      courseContent: [],
      currentItem: null,
      loading: true
    };
  },
  methods: {
    async fetchCourseContent() {
      try {
        const response = await axios.get('/testJSON/LessonContent.json');
        this.courseContent = response.data.courseContent;
        this.loading = false;
        this.loadItem();
      } catch (error) {
        console.error('Error loading course content:', error);
        this.loading = false;
      }
    },
    loadItem() {
      if (this.courseContent && this.courseContent.length > 0) {
        const itemID = parseInt(this.itemID);
        this.currentItem = this.courseContent.find(item => item.id === itemID) || null;
      }
    },
    selectItem(item) {
      this.$router.push(`/content/${item.id}`);
    }
  },
  watch: {
    itemID: 'loadItem'
  },
  mounted() {
    console.log(this.itemID);
    this.fetchCourseContent();
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
