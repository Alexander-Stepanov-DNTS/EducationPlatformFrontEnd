<template>
  <div class="navbar navbar-expand-lg navbar-light">
    <div class="navbar-brand" @click="$router.push('/')">StudyHub</div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" @click.prevent="$router.push('/')">Главная</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="$router.push('/FindCourse')">Поиск курсов</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="$router.push('/About')">О нас</a>
        </li>
<!--        <li class="nav-item">-->
<!--          <a class="nav-link" @click.prevent="$router.push('/contacts')">Контакты</a>-->
<!--        </li>-->
      </ul>
      <a href="#" class="btn btn-login" id="login-button" style="display: none;" @click.prevent="$router.push('/login')">Войти</a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const isAuthenticated = false; // замените это логикой аутентификации
    if (isAuthenticated) {
      document.getElementById('user-menu').style.display = 'block';
    } else {
      document.getElementById('login-button').style.display = 'block';
    }
  }
}
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.navbar {
  font-size: 1.2rem;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 50px;
  box-shadow: 2px 2px 4px gray;
}
.navbar-brand, .navbar__btns .nav-link, .nav-link {
  color: #ffffff !important;
  cursor: pointer;
}
.nav-item {
  margin-right: 20px;
}
.btn-login {
  color: #ffffff;
  background-color: #42a5f5;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  transition: background 0.3s ease;
  text-decoration: none;
}
.btn-login:hover {
  background-color: #1e88e5;
}
</style>
