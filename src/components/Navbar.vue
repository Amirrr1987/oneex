<template>
  <nav class="navbar">
    <div class="navbar__container">
    <a href="" class="navbar__logo-link"><img src="@/assets/img/logo.svg" title="oneex" alt="oneex" class="navbar__logo-img"></a>
      <ul class="navbar__nav navbar--right">
          <li class="navbar__item"><router-link to="/" class="navbar__link">exchange</router-link></li>
          <li class="navbar__item"><router-link to="" class="navbar__link">transaction</router-link></li>
          <li class="navbar__item"><router-link to="/tradeHistory" class="navbar__link">trade history</router-link></li>
      </ul>
      <ul class="navbar__nav navbar--left">
          <li class="navbar__item"><a href="" class="navbar__link"><i class="navbar__icon navbar--profile"></i></a></li>
          <li class="navbar__item"><a href="" class="navbar__link navbar--token">get tic token</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>

</style>