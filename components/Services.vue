<template>
  <section id="services" class="alt">
    <h3 class="section-title">サービス内容</h3>
    <div class="services-grid">
      <div class="service-card">
        <h4>🚚 軽貨物配送</h4>
        <p>小口から中型荷物まで迅速に配送いたします。</p>
      </div>
      <div class="service-card">
        <h4>⚡ 緊急配送</h4>
        <p>24時間365日対応の緊急配送サービスです。</p>
      </div>
      <div class="service-card">
        <h4>📦 定期配送</h4>
        <p>定期的な配送ルートで効率的にお届けします。</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.service-card {
  background: var(--light);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,.05);
}

.service-card h4 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--primary-dark);
}

.service-card p {
  color: var(--text);
  line-height: 1.6;
}
</style>