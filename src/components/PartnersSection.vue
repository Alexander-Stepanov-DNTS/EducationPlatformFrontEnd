<!--<template>-->
<!--  <section class="partners py-5">-->
<!--    <div class="container">-->
<!--      <h2 class="text-center">Наши партнеры</h2>-->
<!--      <div class="row">-->
<!--        <div class="col-md-3 col-sm-6" v-for="partner in partners" :key="partner.id">-->
<!--          <div class="card mb-4 shadow-sm">-->
<!--            <img :src="partner.logo" class="card-img-top" :alt="partner.name">-->
<!--            <div class="card-body">-->
<!--&lt;!&ndash;              <h5 class="card-title">{{ partner.name }}</h5>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "PartnersSection",-->
<!--  data() {-->
<!--    return {-->
<!--      partners: [-->
<!--        {-->
<!--          id: 1,-->
<!--          name: "Партнер 1",-->
<!--          logo: "/partnersLogoes/NIC.gif"-->
<!--        },-->
<!--        {-->
<!--          id: 2,-->
<!--          name: "Партнер 2",-->
<!--          logo: "/partnersLogoes/GUAP.jpg"-->
<!--        },-->
<!--        {-->
<!--          id: 3,-->
<!--          name: "Партнер 3",-->
<!--          logo: "/partnersLogoes/LETI.png"-->
<!--        },-->
<!--      ]-->
<!--    };-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.partners {-->
<!--  padding-top: 5rem;-->
<!--  padding-bottom: 5rem;-->
<!--  background-color: #f8f9fa;-->
<!--}-->
<!--.partners .card {-->
<!--  border: none;-->
<!--  border-radius: 10px;-->
<!--  transition: transform 0.3s, box-shadow 0.3s;-->
<!--}-->
<!--.partners .card:hover {-->
<!--  transform: translateY(-5px);-->
<!--  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);-->
<!--}-->
<!--.partners .card-img-top {-->
<!--  border-top-left-radius: 10px;-->
<!--  border-top-right-radius: 10px;-->
<!--  max-height: 150px;-->
<!--  object-fit: contain;-->
<!--  padding: 10px;-->
<!--}-->
<!--.partners .card-title {-->
<!--  font-size: 1.25rem;-->
<!--  font-weight: 500;-->
<!--  text-align: center;-->
<!--}-->
<!--</style>-->

<template>
  <section class="partners py-5">
    <div class="container">
      <h2 class="text-center">Наши партнеры</h2>
      <div class="d-flex justify-content-around align-items-center flex-wrap">
        <div class="partner-logo" v-for="partner in partners" :key="partner.id">
          <img :src="partner.logo" :alt="partner.name" class="img-fluid">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PartnersSection",
  data() {
    return {
      partners: [
        {
          id: 1,
          name: "Партнер 1",
          logo: "/partnersLogoes/NIC.gif"
        },
        {
          id: 2,
          name: "Партнер 2",
          logo: "/partnersLogoes/GUAP.jpg"
        },
        {
          id: 3,
          name: "Партнер 3",
          logo: "/partnersLogoes/LETI.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.partners {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #ffffff;
}
.partner-logo {
  flex: 1 1 25%; /* Flex-grow, flex-shrink и базовая ширина */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  max-width: 30%;
}
.partner-logo img {
  max-height: 150px; /* Увеличенная высота логотипов */
  max-width: 100%;
  object-fit: contain;
}
</style>

