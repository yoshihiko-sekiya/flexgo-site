<script setup>
const plans=[
  {img:"https://images.unsplash.com/photo-1619785299441-39fabc3be1ac?w=1200",title:"定期便",price:"¥3,000〜 / 回",list:["毎日ルート","ドライバー固定","月額割引"]},
  {img:"https://images.unsplash.com/photo-1516302350523-a23c1e40c4ad?w=1200",title:"スポット便",price:"¥4,000〜 / 回",list:["単発利用","即日予約","全国対応"]},
  {img:"https://images.unsplash.com/photo-1602316608205-0849fe9e44fc?w=1200",title:"緊急チャーター",price:"¥8,000〜 / 回",list:["60分集荷","貸切輸送","24h受付"]}
]
</script>

<template>
<section id="services" class="alt"><h3 class="section-title">サービス</h3>
<div class="grid">
  <article v-for="p in plans" :key="p.title">
    <img :src="p.img" :alt="p.title" />
    <h4>{{p.title}}</h4>
    <ul><li v-for="l in p.list" :key="l">{{l}}</li></ul>
    <p class="price">{{p.price}}</p>
  </article>
</div>
</section>
</template>

<style scoped>
.alt{background:var(--bg)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px;max-width:1100px;margin:0 auto}
article{background:#fff;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,.06);overflow:hidden;text-align:center}
img{width:100%;height:180px;object-fit:cover}
h4{font-size:1.1rem;font-weight:700;margin:14px 0 8px}
ul{list-style:disc;padding:0 0 0 20px;text-align:left;margin:0 0 12px}
.price{font-size:1.6rem;font-weight:900;margin:0 0 20px;color:var(--primary-dark)}
</style>