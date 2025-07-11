<script setup>
const { gsap, ScrollTrigger } = useNuxtApp()
const cards = ref([])
onMounted(()=>{
  gsap.from(cards.value, {
    opacity:0, y:60, stagger:0.2,
    scrollTrigger:{trigger:'#features',start:'top 70%'}
  })
})
const items=[
  {emoji:'🚚',text:'全国ネットワークで\\n迅速に配送'},
  {emoji:'🕒',text:'24 時間 365 日\\n緊急便対応'},
  {emoji:'💬',text:'リアルタイム追跡で\\n状況確認'}
]
</script>

<template>
  <section id="features"><h3 class="section-title">選ばれる理由</h3>
    <ul class="cards">
      <li v-for="(i,idx) in items" :key="idx" ref="cards">
        <span class="emoji">{{i.emoji}}</span>
        <p v-html="i.text.replace('\\\\n','<br>')"/>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:40px;max-width:1000px;margin:0 auto}
.cards li{text-align:center;padding:34px;background:var(--light);border-radius:10px;box-shadow:0 4px 10px rgba(0,0,0,.05)}
.emoji{font-size:3rem;display:block;margin-bottom:12px}
</style>