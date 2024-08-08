<template>
  <div class="row">
    <div class="col-md-3 p-0">
      <SideBar :courseContent="courseContent" :currentItemID="currentItem ? currentItem.prefixedID : null" @select-item="selectItem" />
    </div>
    <div class="col-md-9">
      <LessonContent
          v-if="currentItem && currentItem.type === 'lesson'"
          :lesson="currentItem"
          :courseContent="courseContent"
          :currentItemIndex="currentItemIndex"
          @select-item="selectItem"
      />
      <TestContent
          v-if="currentItem && currentItem.type === 'quiz'"
          :test="currentItem"
          :courseContent="courseContent"
          :currentItemIndex="currentItemIndex"
          @select-item="selectItem"
      />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/CourseContentPage/CourseComponentSideBar.vue';
import LessonContent from '@/components/CourseContentPage/LessonContent.vue';
import TestContent from '@/components/CourseContentPage/TestContent.vue';
import {CourseService as CourseContentService} from "@/services/CourseService.js";

export default {
  name: 'CourseContentPage',
  props: ['itemID', 'itemType'],
  data() {
    return {
      courseContent: [],
      currentItem: null,
      currentItemIndex: null,
      loading: true,
      courseID: null
    };
  },
  methods: {
    async fetchCurrentItem() {
      try {
        this.currentItem = await CourseContentService.fetchCurrentItem(this.itemID, this.itemType);
        this.courseID = this.currentItem.course.id;
        await this.fetchCourseContent();
      } catch (error) {
        console.error('Ошибка при получении данных текущего элемента:', error);
        this.loading = false;
      }
    },
    async fetchCourseContent() {
      try {
        this.courseContent = await CourseContentService.fetchCourseContent(this.courseID);
        this.loading = false;
        this.loadItem();
      } catch (error) {
        console.error('Ошибка при получении данных о курсе:', error);
        this.loading = false;
      }
    },
    loadItem() {
      if (this.courseContent && this.courseContent.length > 0) {
        const itemID = `${this.itemType}-${this.itemID}`;
        this.currentItem = this.courseContent.find(item => item.prefixedID === itemID) || null;
        this.currentItemIndex = this.courseContent.findIndex(item => item.prefixedID === itemID);
      }
    },
    selectItem(item) {
      this.$router.push(`/content/${item.type}/${item.id}`);
    }
  },
  watch: {
    itemID: 'loadItem',
    itemType: 'loadItem'
  },
  mounted() {
    this.fetchCurrentItem();
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