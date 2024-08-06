<template>
  <div class="footer">
  <footer class="footer py-4 bg-dark text-white">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>О платформе</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white" @click.prevent="$router.push('/home')">Главная</a></li>
            <li><a href="#" class="text-white" @click.prevent="$router.push('/AboutPage')">О нас</a></li>
            <li><a href="#" class="text-white" @click.prevent="$router.push('/AboutPage')">Политика конфиденциальности</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Социальные сети</h5>
          <a href="#" class="text-black mr-3"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-black mr-3"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-black"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="col-md-4">
          <h5>Контакты</h5>
          <p>Адрес: ул. Примерная, 123</p>
          <p>Телефон: +7 (123) 456-78-90</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer {
  background: #343a40;
  color: white;
}
.footer a {
  color: #adb5bd;
}
.footer a:hover {
  color: white;
}
p {
  margin-bottom: 0;
}
</style>