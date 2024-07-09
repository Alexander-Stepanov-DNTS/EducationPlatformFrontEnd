<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Регистрация
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="form-group form-control-icon">
                <label for="firstName">Имя</label>
                <input type="text" class="form-control" v-model="firstName" id="firstName" placeholder="Введите ваше имя" required>
                <i class="fa fa-user"></i>
              </div>
              <div class="form-group form-control-icon">
                <label for="lastName">Фамилия</label>
                <input type="text" class="form-control" v-model="lastName" id="lastName" placeholder="Введите вашу фамилию" required>
                <i class="fa fa-user"></i>
              </div>
              <div class="form-group form-control-icon">
                <label for="email">Адрес электронной почты</label>
                <input type="email" class="form-control" v-model="email" id="email" placeholder="Введите ваш email" required>
                <i class="fa fa-envelope"></i>
              </div>
              <div class="form-group form-control-icon">
                <label for="password">Пароль</label>
                <input type="password" class="form-control" v-model="password" id="password" placeholder="Введите пароль" required>
                <i class="fa fa-lock"></i>
              </div>
              <div class="form-group form-control-icon">
                <label for="confirmPassword">Подтвердите пароль</label>
                <input type="password" class="form-control" v-model="confirmPassword" id="confirmPassword" placeholder="Подтвердите пароль" required>
                <i class="fa fa-lock"></i>
              </div>
              <div class="form-group form-control-icon">
                <label for="phone">Телефонный номер</label>
                <input type="tel" class="form-control" v-model="phone" id="phone" placeholder="Введите ваш номер телефона" required>
                <i class="fa fa-phone"></i>
              </div>
              <div class="form-group form-control-icon">
                <label for="birthDate">Дата рождения</label>
                <input type="date" class="form-control" v-model="birthDate" id="birthDate" required>
                <i class="fa fa-calendar-alt"></i>
              </div>
              <div class="form-group">
                <label for="profilePicture">Фотография профиля (опционально)</label>
                <input type="file" class="form-control-file" @change="handleFileUpload" id="profilePicture">
              </div>
              <button type="submit" class="btn btn-primary btn-block">Зарегистрироваться</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      birthDate: '',
      profilePicture: null
    };
  },
  methods: {
    handleFileUpload(event) {
      this.profilePicture = event.target.files[0];
    },
    async register() {
      if (this.password !== this.confirmPassword) {
        alert('Пароли не совпадают');
        return;
      }

      const formData = new FormData();
      formData.append('firstName', this.firstName);
      formData.append('lastName', this.lastName);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('phone', this.phone);
      formData.append('birthDate', this.birthDate);
      if (this.profilePicture) {
        formData.append('profilePicture', this.profilePicture);
      }

      try {
        const response = await fetch('http://localhost:8080/api/register', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          alert('Регистрация прошла успешно');
          this.$router.push('/login');
        } else {
          alert('Ошибка при регистрации');
        }
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Ошибка при регистрации');
      }
    }
  }
};
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: #333;
}
.card {
  margin-top: 30px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.card-header {
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  text-align: center;
  font-size: 1.5rem;
}
.card-body {
  background-color: #ffffff;
  padding: 2rem;
}
.form-control {
  border-radius: 10px;
  margin-bottom: 15px;
}
.form-group label {
  font-weight: bold;
}
.form-control-icon {
  position: relative;
}
.form-control-icon input {
  padding-left: 2.5rem;
}
.form-control-icon .fa {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
}
.btn-primary {
  background: linear-gradient(to right, #6a11cb, #2575fc);
  border: none;
  border-radius: 20px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  transition: background 0.3s ease;
}
.btn-primary:hover {
  background: linear-gradient(to right, #2575fc, #6a11cb);
}
.container {
  max-width: 700px;
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>