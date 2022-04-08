<template>
  <div id="app">
    <div class="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
    <h1 class="clr-primary text-nowrap">
      NightVue
    </h1>
    <img
      :src="require('@/assets/images/logo.png')"
      class="no-select mb-3">
    <h3 class="text-center">Кристально-чистый Vue 2 фреймворк</h3>
    <p>
      Создан, чтобы создавать.
    </p>
    </div>
  </div>
</template>

<script>
// import AppLayout from "./layouts/AppLayout.vue"
import { eventBus } from './main'
import debounce from 'lodash/debounce'

export default {
  components: {  },
  name: 'Home',
  data() {
    return {

    }
  },
  computed: {

  },
  created() {

  },
  mounted() {
    eventBus.$on('eventName', data => { this.methodName(data) })

    this.watchWindowWidth()
    window.addEventListener('resize', debounce(this.watchWindowWidth, 500))
  },
  methods: {
    methodName(data) {
      return data
    },

    watchWindowWidth() {
      const width = document.body.clientWidth
      this.$store.commit('config/SAVE_WINDOW_WIDTH', width)
    }
  },
}
</script>

<style lang="scss">
  @import "styles/main";
</style>
