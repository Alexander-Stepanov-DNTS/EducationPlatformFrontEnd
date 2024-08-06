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
          logo: "/partnersLogos/NIC.gif"
        },
        {
          id: 2,
          name: "Партнер 2",
          logo: "/partnersLogos/GUAP.jpg"
        },
        {
          id: 3,
          name: "Партнер 3",
          logo: "/partnersLogos/LETI.png"
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
  flex: 1 1 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  max-width: 30%;
}
.partner-logo img {
  max-height: 150px;
  max-width: 100%;
  object-fit: contain;
}
</style>