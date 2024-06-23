<template>
  <div class="profile-header">
    <img src="C:\Users\Alex\WebstormProjects\education\public\avatar.jpg" alt="Profile Picture" class="profile-image">
    <div class="profile-info">
      <h2>{{ profile.name }}</h2>
      <p>{{ profile.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader',
  props: {
    profile: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}
.profile-info h2 {
  margin: 0;
  font-size: 1.5rem;
}
.profile-info p {
  margin: 0;
  color: #888;
}
</style>