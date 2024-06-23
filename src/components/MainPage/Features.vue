<template>
  <section class="features py-5 bg-light text-center">
    <div class="container">
      <h2>Наши преимущества</h2>
      <div class="row">
        <div class="col-md-4" v-for="feature in features" :key="feature.id" @mouseover="showTooltip(feature.id)" @mouseleave="hideTooltip">
          <i :class="`fas ${feature.icon} fa-3x`"></i>
          <h4>{{ feature.title }}</h4>
          <p>{{ feature.description }}</p>
          <div v-if="activeTooltip === feature.id" class="tooltip">{{ feature.tooltip }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",
  data() {
    return {
      features: [
        {
          id: 1,
          icon: "fa-graduation-cap",
          title: "Лучшие курсы",
          description: "Учитесь у лучших преподавателей.",
          tooltip: "Преподаватели с многолетним опытом."
        },
        {
          id: 2,
          icon: "fa-clock",
          title: "Гибкий график",
          description: "Учитесь в удобное для вас время.",
          tooltip: "Выбирайте время занятий сами."
        },
        {
          id: 3,
          icon: "fa-book",
          title: "Богатая библиотека",
          description: "Доступ к широкому спектру материалов.",
          tooltip: "Более 1000 курсов и материалов."
        }
      ],
      activeTooltip: null
    };
  },
  methods: {
    showTooltip(id) {
      this.activeTooltip = id;
    },
    hideTooltip() {
      this.activeTooltip = null;
    }
  }
};
</script>

<style scoped>
.features {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #ffffff;
}
.features .fas {
  color: #3b5998;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}
.features .fas:hover {
  transform: scale(1.1);
}
.features h4 {
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #3b5998;
}
.features h2 {
  margin-bottom: 40px;
}
.features p {
  font-size: 1rem;
  color: #666;
}
.tooltip {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
@media (max-width: 768px) {
  .features .fas {
    font-size: 2.5rem;
  }
  .features h4 {
    font-size: 1.2rem;
  }
  .features p {
    font-size: 0.9rem;
  }
  .tooltip {
    font-size: 0.9rem;
    padding: 8px;
  }
}
</style>
