<script setup>
const cards=[
  {img:"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200",title:"全国ネットワーク",txt:"迅速・確実にお届け"},
  {img:"https://images.unsplash.com/photo-1596075780556-fd44a4e3a251?w=1200",title:"365日対応",txt:"いつでもご要望に対応"},
  {img:"https://images.unsplash.com/photo-1584212245460-2b58f575a720?w=1200",title:"リアルタイム追跡",txt:"荷物位置を即確認"}
]
</script>

<template>
<section id="features"><h3 class="section-title">選ばれる理由</h3>
<div class="grid">
  <article v-for="c in cards" :key="c.title">
    <img :src="c.img" :alt="c.title" />
    <h4>{{c.title}}</h4>
    <p>{{c.txt}}</p>
  </article>
</div>
</section>
</template>

<style scoped>
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:30px;max-width:1100px;margin:0 auto}
article{background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.06);text-align:center}
img{width:100%;height:180px;object-fit:cover}
h4{font-size:1.1rem;font-weight:700;margin:14px 0 8px}
p{font-size:.9rem;padding:0 14px 20px}
</style>