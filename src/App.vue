<template>
  <navbar/>
  <div class="app">
    <router-view/>
  </div>
  <my-footer/>
</template>

<script>
import Navbar from "@/components/NavbarFooter/Navbar.vue";
import MyFooter from '@/components/NavbarFooter/Footer.vue';
export default {
  components: {
    Navbar,
    MyFooter
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 0;
}
</style>