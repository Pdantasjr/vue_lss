<template>
  <header class="h-16 flex items-center bg-neutral border-b border-gray-200 shadow-sm">
    <NavBar />
    <aside
      class="
        transform
        transition
        duration-300
        ease-in-out
        fixed
        top-0
        right-0
        w-48
        sm:w-1/3
        h-screen
        z-20
        bg-primary
        overflow-hidden
        flex
        items-center
        justify-center
      "
      :class="[toggle ? 'translate-x-full' : '']"
    >
      <button @click="btnToggle()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="cursor-pointer m-2 h-10 w-10 text-neutral absolute top-2 right-2 transform hover:rotate-90 hover:scale-110 transition duration-300 ease-in-out"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <Sidebar />
    </aside>
  </header>
</template>
<script>
import NavBar from "@/components/Navbar";
import Sidebar from "@/template/Sidebar";

export default {
  name: "Header",
  components: {
    NavBar,
    Sidebar,
  },
  methods: {
    btnToggle() {
      const value = this.$store.state.toggle = !this.$store.state.toggle
      this.$store.commit("toggleNav", value);
    },
  },
  computed: {
    toggle() {
      return this.$store.state.toggle;
    },
  },
  created() {
    return this.$store.state.toggle = true
  }
};
</script>

<style scoped>


</style>
