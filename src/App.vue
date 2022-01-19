<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/template/Header"
import Footer from "@/template/Footer"
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
};
</script>
