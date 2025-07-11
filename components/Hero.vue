<script setup>
const { Lenis } = useNuxtApp()
onMounted(()=>new Lenis())
</script>

<template>
  <section class="hero">
    <video class="bg" src="https://player.vimeo.com/progressive_redirect/playback/735584010/rendition/720p/file.mp4?loc=external&signature=138c4ac..." muted playsinline autoplay loop></video>
    <div class="content">
      <h2>もっと柔軟に行こう。<br>FLEX&nbsp;GO.</h2>
      <p>軽貨物配送にフレキシブルな選択肢を。</p>
      <a href="#contact" class="cta">無料見積もり</a>
    </div>
  </section>
</template>

<style scoped>
.hero{height:100vh;padding:0;position:relative;clip-path:polygon(0 0,100% 0,100% 85%,0 100%);}
.bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;filter:brightness(.55)}
.content{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-align:center;color:#fff}
h2{font-size:clamp(2.4rem,6vw,4rem);font-weight:900;line-height:1.2;margin-bottom:1rem}
.cta{display:inline-block;background:#fff;color:#1d8fa2;padding:14px 40px;border-radius:4px;font-weight:900;margin-top:2rem}
</style>