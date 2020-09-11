<template>
<body id="app">
  <Header />
  <Main />
  <Footer />
</body>
</template>

<script>
import Header from "@/views/Header.vue";
import Main   from "@/views/Main.vue";
import Footer from "@/views/Footer.vue";
export default {
  components:{
    Header,
    Main,
    Footer,
  }
};
</script>

<style>
</style>