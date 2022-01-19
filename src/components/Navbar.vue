<template>
  <div>
    <div class="w-screen xl:w-xl px-4 lg:px-8 flex items-center justify-between">
        <!-- LOGOTIPO -->
            <a href="/">
              <img
                src="@/assets/images/logotipo/logotipo-laboratorio-silvano-sarmento.svg"
                alt="Logotipo Laboratório Silvano Sarmento"
                class="hidden xm:block sm:w-72 h-24 max-h-9 mx-2"
              />
            </a>
            <a>
              <img
                src="@/assets/images/logotipo/logo.svg"
                alt="Logotipo Laboratório Silvano Sarmento"
                class="h-10 py2 mr-3 xm:hidden"
              />
            </a>
        <!-- CTA -->
        <div class="flex items-center space-x-2 lg:space-x-4">
          <button class="btn-header-cta">Resultado de Exames</button>
            <!-- SEARCH -->
            <button class="btn-search">
              <img class="h-14 w-auto inline-flex" src="@/assets/images/home/search.svg" alt="ícone de lupa para pesquisa"/>
            </button>
            <!-- BURGER -->
            <button @click="btnToggle()">
              <div class="flex flex-col items-start justify-around mr-10 xm:mr-12 transform hover:scale-110 transition duration-300 ease-in-out">
                  <span aria-hidden="true" class="absolute h-1 w-10 rounded-sm bg-primary transform hover:shadow-lg focus:outline-none transition duration-300 ease-in-out" :class="{'rotate-45': !toggle,' -translate-y-1.5': toggle }"></span>
                  <span aria-hidden="true" class="absolute h-1 w-8 rounded-sm bg-primary transform hover:shadow-lg focus:outline-none transition duration-300 ease-in-out" :class="{'opacity-0': !toggle } "></span>
                  <span aria-hidden="true" class="absolute h-1 w-10 rounded-sm bg-primary transform hover:shadow-lg focus:outline-none transition duration-300 ease-in-out" :class="{'-rotate-45': !toggle, ' translate-y-1.5': toggle}"></span>
              </div>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data: () => {
    return {}
  },
  methods: {
    btnToggle() {
      const value = this.$store.state.toggle = !this.$store.state.toggle
      this.$store.commit('toggleNav', value)
    }
  },
  computed: {
    toggle() {
      return this.$store.state.toggle
    }
  }
};
</script>

<style scoped>
.navbar {
  @apply
  h-auto
  w-screen
  flex
  flex-row
  items-center
  justify-center
  bg-neutral
}

.header-cta {
  @apply
  flex
  flex-row
  items-center
  justify-around
  w-full
  h-auto
}

.btn-header-cta {
  @apply
    text-xs
    p-1
    w-auto
    h-10
    shadow-sm
    text-center
    bg-primary
    transform
    hover:scale-105
    transition
    duration-300
    ease-in-out
    hover:shadow-xl
    focus:outline-none
    text-neutral
    rounded

    xm:items-center
    xm:justify-center
    xm:inline-flex
    xm:w-full
    xm:h-12
    xm:mx-3
    xm:text-xs

    sm:w-20
    sm:border
    sm:border-primary


}

.btn-search {
  @apply
  hidden
  w-auto
  h-full
  mx-10
  md:inline
}


.asidebar {
  @apply
  bg-primary
  absolute
  inset-y-0
  right-0
  space-y-6
  transform
  -translate-y-full
  transition
  duration-200
  ease-in-out
}

</style>
