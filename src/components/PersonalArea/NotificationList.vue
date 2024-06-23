<template>
  <div>
    <h4><i class="fas fa-bell icon icon-notification"></i> Уведомления:</h4>
    <div v-if="!notifications || notifications.length === 0" class="alert alert-info">
      Пока у вас нет уведомлений.
    </div>
    <ul v-else class="list-group">
      <li class="list-group-item" v-for="notification in notifications" :key="notification.id">
        <i :class="notification.icon" class="icon icon-notification"></i>
        <div class="notification-info">
          <h5>{{ notification.title }}</h5>
          <p>{{ notification.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NotificationList',
  props: {
    notifications: {
      type: Array,
      required: false,
      default: () => []
    }
  }
};
</script>

<style scoped>
.icon-notification {
  color: #5bc0de;
}
.alert {
  margin-top: 10px;
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
}
.notification-info {
  margin-left: 10px;
}
.list-group-item {
  display: flex;
  align-items: center;
}
.icon {
  margin-right: 10px;
}
</style>
