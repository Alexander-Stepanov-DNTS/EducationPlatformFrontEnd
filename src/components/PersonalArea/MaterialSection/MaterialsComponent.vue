<template>
  <div>
    <h4>Материалы курсов:</h4>
    <ul v-if="materials.length">
      <li v-for="material in materials" :key="material.id">
        <p>{{ material.course.name }}:</p>
        <p><a :href="material.materialUrl">{{ material.materialTitle }}</a></p>
      </li>
    </ul>
    <p v-else>Нет материалов</p>
  </div>
</template>
<script>
export default {
  name: 'MaterialsComponent',
  props: {
    materials: {
      type: Array,
      required: true
    }
  }
};
</script>