<template>
  <div class="profile-header">
    <img src="/avatars/avatar.jpg" alt="Profile Picture" class="profile-image">
    <div class="profile-info">
      <h2>{{ profile.login }}</h2>
      <p>{{ profile.emailAddress }}</p>
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
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
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