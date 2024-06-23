<template>
  <div class="settings-list">
    <h3>Настройки</h3>
    <ul>
      <li v-for="setting in settings" :key="setting.id">
        <span>{{ setting.name }}</span>
        <input type="checkbox" v-model="setting.enabled" @change="updateSetting(setting)">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SettingsList',
  props: {
    settings: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateSetting(setting) {
      // Логика обновления настройки
      console.log(`Setting ${setting.name} updated to ${setting.enabled}`);
    }
  }
};
</script>

<style scoped>
.settings-list {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.settings-list ul {
  list-style: none;
  padding: 0;
}
.settings-list ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>