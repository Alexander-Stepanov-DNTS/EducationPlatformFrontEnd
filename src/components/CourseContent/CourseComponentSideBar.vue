<template>
  <div class="bg-light border-right p-3">
    <h5>Содержание курса</h5>
    <ul class="list-group">
      <li
          v-for="item in courseContent"
          :key="item.id"
          class="list-group-item"
          :class="{ 'active': item.prefixedID === currentItemID }"
          @click="$emit('select-item', item)"
      >
        {{ item.name }} <span v-if="item.type === 'quiz'"> (Тест)</span><span v-else> (Урок)</span>
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
      type: String,
      required: false,
      default: ''
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