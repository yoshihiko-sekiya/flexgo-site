<script setup>
const { Lenis } = useNuxtApp()
onMounted(()=>new Lenis())
</script>

<template>
  <section class="hero">
    <div>
      <h2 style="font-size:clamp(2.6rem,6vw,4.2rem);font-weight:900;line-height:1.2;margin-bottom:1rem">
        もっと柔軟に行こう。<br>FLEX&nbsp;GO.
      </h2>
      <p style="font-size:1.15rem;opacity:.9">軽貨物配送にフレキシブルな選択肢を。</p>
      <a href="#contact" class="cta">無料見積もり</a>
    </div>
  </section>
</template>