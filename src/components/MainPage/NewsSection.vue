<template>
  <section class="news py-5">
    <div class="container">
      <h2 class="text-center">Новости и блог</h2>
      <div class="row">
        <div class="col-md-4" v-for="news in newsList" :key="news.id">
          <div class="card mb-4 shadow-sm">
            <div class="card-img-container">
              <img :src="news.image" class="card-img-top" alt="news image">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ news.title }}</h5>
              <p class="card-text">{{ news.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <a :href="news.link" class="btn btn-sm btn-outline-secondary">Читать далее</a>
                <small class="text-muted">{{ news.date }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsSection",
  data() {
    return {
      newsList: [
        {
          id: 1,
          title: "Запуск новой онлайн-платформы",
          description: "Мы рады сообщить, что наша платформа перешла на новый адрес и получила существенные изменения",
          image: "/newsPictures/NewPlatform.jpg",
          link: "#",
          date: "10 июня 2024"
        },
        {
          id: 2,
          title: "С днем России",
          description: "Поздравляем вас с важным государственным праздником Российской Федерации – С днём России!",
          image: "/newsPictures/Day of Russia.jpg",
          link: "#",
          date: "12 июня 2024"
        },
        {
          id: 3,
          title: "Вceмиpный дeнь дoнopa кpoви",
          description: "Сегодняшний день служит важным напоминанием, о том, как легко люди могут помогать друг другу. Сдав кровь, вы можете спасти чью-то жизнь!",
          image: "/newsPictures/Donor.jpg",
          link: "#",
          date: "13 июня 2024"
        }
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
.news {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #ffffff;
}
.news .card {
  border: none;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.news .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
.news .card-img-container {
  width: 100%;
  height: 200px; /* Задаем фиксированную высоту для изображений */
  overflow: hidden;
}
.news .card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Изображение масштабируется и обрезается, чтобы заполнить контейнер */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.news .card-title {
  font-size: 1.25rem;
  font-weight: 500;
}
.news .card-text {
  font-size: 1rem;
  color: #666;
}
</style>
