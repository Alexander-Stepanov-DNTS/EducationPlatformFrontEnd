<template>
  <div>
    <h4><i class="fas fa-trophy icon icon-achievement"></i> Ваши достижения:</h4>
    <div v-if="!achievements || achievements.length === 0" class="alert alert-info">
      Пока у вас нет достижений, но все впереди! Дерзайте!
    </div>
    <ul v-else class="list-group">
      <li class="list-group-item" v-for="userAchievement in achievements" :key="userAchievement.id">
        <div class="achievement-info">
          <h5>{{ userAchievement.achievement.name }}</h5>
          <p>{{ userAchievement.achievement.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AchievementList',
  props: {
    achievements: {
      type: Array,
      required: false,
      default: () => []
    }
  }
};
</script>

<style scoped>
.icon-achievement {
  color: #f0ad4e;
}
.alert {
  margin-top: 10px;
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
  border-radius: 2px;
  padding: 10px;
  text-align: center;
}
.achievement-info {
  margin-left: 10px;
}
.list-group-item {
  display: flex;
  align-items: center;
}
.icon {
  margin-right: 10px;
}
div {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
}
</style>