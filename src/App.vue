<script>


import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
}
</script>

<template>
  <header>
    <Navbar />
  </header>
  <router-view></router-view>
  <Footer />
</template>

<style></style>
