<script setup>
const { gsap, ScrollTrigger } = useNuxtApp()
const cards = ref([])
onMounted(()=>{
  gsap.from(cards.value,{
    y:80,opacity:0,stagger:0.15,
    scrollTrigger:{trigger:'#features',start:'top 75%'}
  })
})
const items=[
  {emoji:'🚚',title:'全国ネットワーク',text:'大都市から離島までカバー'},
  {emoji:'🕒',title:'24h 緊急便',text:'最短60分で集荷'},
  {emoji:'💬',title:'追跡 & 通知',text:'LINE通知で安心'}
]
</script>

<template>
  <section id="features" class="alt">
    <h3 class="section-title">FLEX GO. が選ばれる理由</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:48px;max-width:1100px;margin:0 auto">
      <div v-for="(i,idx) in items" :key="idx" class="card" ref="cards">
        <div style="font-size:3.2rem">{{i.emoji}}</div>
        <h4 style="font-size:1.2rem;font-weight:700;margin:14px 0">{{i.title}}</h4>
        <p style="font-size:.95rem">{{i.text}}</p>
      </div>
    </div>
  </section>
</template>