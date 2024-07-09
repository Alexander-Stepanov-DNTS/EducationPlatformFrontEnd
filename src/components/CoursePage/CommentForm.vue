<template>
  <div class="comment-form">
    <h5>Оставить комментарий</h5>
    <form @submit.prevent="submitComment">
      <div class="form-group">
        <label for="comment">Ваш комментарий</label>
        <textarea v-model="commentText" class="form-control" id="comment" rows="3" required></textarea>
      </div>
      <div class="form-group">
        <label for="rating">Рейтинг</label>
        <select v-model="rating" class="form-control" id="rating" required>
          <option disabled value="">Выберите рейтинг</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CommentForm',
  data() {
    return {
      commentText: '',
      rating: ''
    };
  },
  methods: {
    submitComment() {
      // Создаем объект с данными комментария
      const comment = {
        text: this.commentText,
        score: this.rating,
        //date: new Date().toISOString()
      };
      console.log(this.rating);
      // Отправляем событие с данными комментария наверх
      this.$emit('submit-comment', comment);
      // Очищаем форму после отправки
      this.commentText = '';
      this.rating = '';
    }
  }
};
</script>

<style scoped>
.comment-form {
  margin-top: 20px;
}
.form-group {
  margin-bottom: 15px;
}
</style>