<template>
  <div class="bg-light border-right p-3" id="sidebar-wrapper">
    <div class="sidebar-heading">Меню</div>
    <div class="list-group list-group-flush">
      <a href="#" class="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
        <i class="fas fa-user fa-fw me-3"></i><span>Профиль</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple">
        <i class="fas fa-tasks fa-fw me-3"></i><span>Задания</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple">
        <i class="fas fa-book fa-fw me-3"></i><span>Материалы</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple">
        <i class="fas fa-bullhorn fa-fw me-3"></i><span>Объявления</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple">
        <i class="fas fa-chalkboard fa-fw me-3"></i><span>Доска</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple">
        <i class="fas fa-book-reader fa-fw me-3"></i><span>Учебный процесс</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple">
        <i class="fas fa-tools fa-fw me-3"></i><span>Сервисы</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-2 ripple">
        <i class="fas fa-question-circle fa-fw me-3"></i><span>Помощь</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
};
</script>

<style scoped>
#sidebar-wrapper {
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
  padding-left: 0; /* Убираем отступ слева */
  margin-left: 5px; /* Убираем внешний отступ слева */
}
.sidebar-heading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.list-group-item {
  margin-bottom: 1rem;
}
</style>
