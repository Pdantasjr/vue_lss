<template>
  <div>
    <nav class="sidebar-links">
      <router-link @click.native="btnToggle" to="/">Início</router-link>
      <router-link @click.native="btnToggle" to="/sobre">Sobre Nós</router-link>
      <router-link @click.native="btnToggle" to="/sobre">Exames</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    btnToggle() {
      const value = this.$store.state.toggle = !this.$store.state.toggle
      this.$store.commit("toggleNav", value);
    },
  },
}
</script>

<style scoped>
.sidebar-links {
  @apply
  flex
  flex-col
  items-center
  justify-center
  mt-36
}
.sidebar-links a {
  @apply
  text-neutral
  text-lg
  my-2
  py-2
  text-opacity-70
  transform
  hover:scale-110
  hover:text-opacity-100
  duration-200
}
</style>
