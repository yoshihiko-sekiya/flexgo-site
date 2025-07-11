<template>
  <div>
    <header class="header">
      <div class="inner">
        <h1 class="logo">FLEX&nbsp;GO.</h1>
        <nav>
          <NuxtLink to="#features">特徴</NuxtLink>
          <NuxtLink to="#services">サービス</NuxtLink>
          <NuxtLink to="#contact">問い合わせ</NuxtLink>
        </nav>
      </div>
    </header>
    <slot />
    <footer class="footer">© 2025 FLEX GO.</footer>
  </div>
</template>

<style scoped>
.header{
  position:fixed;top:0;left:0;width:100%;background:var(--light);
  box-shadow:0 2px 8px rgba(0,0,0,.06);z-index:100;padding:10px 6vw;
  display:flex;justify-content:center
}
.inner{width:100%;max-width:1200px;display:flex;justify-content:space-between;align-items:center}
.logo{font-weight:900;font-size:1.4rem;color:var(--primary-dark)}
nav a{margin-left:28px;font-weight:700}
.footer{background:var(--text);color:var(--light);text-align:center;padding:50px 6vw;margin-top:120px}
</style>