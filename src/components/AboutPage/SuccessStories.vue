<template>
  <section class="success-stories py-5">
    <div class="container">
      <h2 class="text-center">Истории успеха</h2>
      <div class="row">
        <div class="col-md-4" v-for="story in stories" :key="story.id">
          <PersonCard :name="story.name" :text="story.text" :image="story.image" :date="story.date" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PersonCard from '../ReusableComponents/PersonCard.vue';

export default {
  name: "SuccessStories",
  components: {
    PersonCard
  },
  data() {
    return {
      stories: [
        {
          id: 1,
          name: "Иван Долганов",
          text: "Благодаря этим курсам, я научился программировать и смог найти стажировку, а позже стать куратором и получил новую работу мечты!",
          image: "/storiesLogos/IVAN.jpg",
          date: "12 июня 2024"
        },
        {
          id: 2,
          name: "Михаил Цеханович",
          text: "После прохождения курсов, я овладел знаниями в сфере HR и IT-ректутинга. Нашел работу и изменил свою жизнь!",
          image: "/storiesLogos/MICHEL.png",
          date: "11 июня 2024"
        },
        {
          id: 3,
          name: "Павел Жуков",
          text: "Курсы помогли мне улучшить навыки в программировании и руководстве. Благодаря им я занимаю позицию team-lead в большой и перспективной компании!",
          image: "/storiesLogos/PAVEL.jpg",
          date: "10 июня 2024"
        }
      ]
    };
  }
};
</script>

<style scoped>
.success-stories {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #ffffff;
}
h2 {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>