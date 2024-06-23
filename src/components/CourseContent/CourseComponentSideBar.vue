<template>
  <div class="bg-light border-right p-3">
    <h5>Содержание курса</h5>
    <ul class="list-group">
      <li
          v-for="item in courseContent"
          :key="item.id"
          class="list-group-item"
          :class="{ 'active': item.id === currentItemID }"
          @click="$emit('select-item', item)"
      >
        {{ item.title }} <span v-if="item.type === 'test'"> (Тест)</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    courseContent: {
      type: Array,
      required: true
    },
    currentItemID: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.list-group-item {
  cursor: pointer;
}
.list-group-item.active {
  background-color: #6a11cb;
  color: #fff;
}
</style>
