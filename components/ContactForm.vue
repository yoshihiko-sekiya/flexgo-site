<template>
  <section id="contact">
    <h3 class="section-title">お問い合わせ</h3>
    <div class="contact-container">
      <div class="contact-info">
        <h4>お気軽にお問い合わせください</h4>
        <p>📞 <strong>TEL:</strong> 03-XXXX-XXXX</p>
        <p>📧 <strong>Email:</strong> info@flexgo.co.jp</p>
        <p>🕐 <strong>受付時間:</strong> 平日 9:00-18:00</p>
      </div>
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">お名前 *</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div class="form-group">
          <label for="email">メールアドレス *</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div class="form-group">
          <label for="phone">電話番号</label>
          <input type="tel" id="phone" v-model="form.phone">
        </div>
        <div class="form-group">
          <label for="message">お問い合わせ内容 *</label>
          <textarea id="message" v-model="form.message" rows="5" required></textarea>
        </div>
        <button type="submit" class="submit-btn">送信する</button>
      </form>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitForm = () => {
  // フォーム送信処理（実際の実装時に追加）
  alert('お問い合わせありがとうございます。後日ご連絡いたします。')
}
</script>

<style scoped>
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info h4 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--primary-dark);
}

.contact-info p {
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.contact-form {
  background: var(--light);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,.05);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.submit-btn {
  width: 100%;
  background: var(--primary);
  color: var(--light);
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background: var(--primary-dark);
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .contact-form {
    padding: 30px 20px;
  }
}
</style>