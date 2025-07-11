<script setup>
const { Lenis } = useNuxtApp()
onMounted(()=>new Lenis())
</script>

<template>
  <section class="hero">
    <div class="content">
      <h2>もっと柔軟に行こう。<br>FLEX&nbsp;GO.</h2>
      <p>軽貨物配送にフレキシブルな選択肢を。</p>
      <a href="#contact" class="cta">無料見積もり</a>
    </div>
  </section>
</template>

<style scoped>
.hero{
  height:100vh;padding:0;display:flex;justify-content:center;align-items:center;text-align:center;
  background:linear-gradient(135deg,var(--primary),var(--primary-dark));
  clip-path:polygon(0 0,100% 0,100% 85%,0 100%);
  color:var(--light)
}
.content{max-width:800px}
h2{font-size:clamp(2.4rem,6vw,4rem);font-weight:900;line-height:1.2;margin-bottom:1rem}
.cta{display:inline-block;background:var(--light);color:var(--primary-dark);padding:16px 40px;border-radius:4px;font-weight:900;margin-top:2rem}
</style>