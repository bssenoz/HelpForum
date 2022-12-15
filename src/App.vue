<template>
  <div id="app">
      <!-- <Navbar /> -->
      <router-view />
      <!-- <Footer/> -->
  </div>
</template>

<script>
// import Navbar from './components/Layout/Navbar.vue';
// import Footer from './components/Layout/Footer.vue';

export default {
  name: 'App',
  // computed: {
  //   layout() {
  //     if(this.$route.meta.layout) {
  //       return this.$route.meta.layout;
  //     } return null;
  //   },
  // },
  // components: {
  //  Navbar,
  //  Footer
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
