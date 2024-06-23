<template>
  <section class="team py-5">
    <div class="container">
      <h2 class="text-center">Наша команда</h2>
      <div class="row">
        <div class="col-md-4 text-center" v-for="member in team" :key="member.id">
          <PersonCard :name="member.name" :text="member.role" :image="member.image" :date="''" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PersonCard from '../PersonCard.vue';

export default {
  name: 'Team',
  components: {
    PersonCard
  },
  data() {
    return {
      team: [
        {
          id: 1,
          name: 'Степанов Александр',
          role: 'Соучредитель и руководитель отдела разработки',
          image: 'teamPictures/ALEX.jpg'
        },
        {
          id: 2,
          name: 'Григорий Боровков',
          role: 'Главный бизнес аналитик проекта',
          image: 'teamPictures/GRISHA.jpg'
        },
        {
          id: 3,
          name: 'Жуков Алексей',
          role: 'Канд. техн. наук, доцент консультант по методичеким материалам',
          image: 'teamPictures/ALEXEY.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.team {
  background-color: #ffffff;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>

