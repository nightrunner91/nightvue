<template>
  <div
    v-waves
    class="hamburger d-flex justify-content-center align-items-center d-lg-none radius-circle ml-auto mr-1 mr-sm-2 bg-white"
    @click="toggleMenu">
    <i
      v-if="menuOpened"
      class="fas fa-times fa-lg" />
    <i
      v-else
      class="fas fa-bars fa-lg" />
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  computed: {
    menuOpened() {
      return this.$store.state.config.menuOpened
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit('config/TOGGLE_MENU', !this.menuOpened)
      this.$store.commit('config/TOGGLE_USER_MENU', false)
    },
  },
}
</script>
