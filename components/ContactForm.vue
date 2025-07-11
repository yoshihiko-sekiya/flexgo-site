<template>
  <section id="contact">
    <h3 class="section-title">お問い合わせ</h3>
    <div class="wrap">
      <p>お急ぎは <a href="tel:080-3071-0134">080-3071-0134</a> へ電話！</p>

      <!-- ★ Netlify Forms ★ -->
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>Don't fill this out：<input name="bot-field" /></label>
        </p>

        <input name="name" placeholder="お名前" required>
        <input name="email" type="email" placeholder="メールアドレス" required>
        <textarea name="message" placeholder="メッセージ"></textarea>
        <button>送信</button>
      </form>

      <p class="note">送信後、Netlify から確認メールが届きます。</p>
    </div>
  </section>
</template>

<style scoped>
.wrap{max-width:820px;margin:0 auto;text-align:center}
form{display:grid;gap:18px;margin-top:28px}
input,textarea{padding:14px;border:1px solid #ccc;border-radius:4px;font-size:1rem;width:100%}
button{background:var(--primary-dark);color:#fff;border:none;padding:16px;border-radius:4px;font-weight:700;cursor:pointer}
.hidden{display:none}
.note{font-size:.85rem;color:#666;margin-top:8px}
</style>