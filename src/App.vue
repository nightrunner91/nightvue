<template>
  <div id="app">
    <div>
      <h1 class="font-weight-400">Lorem</h1>
      <h2>Lorem</h2>
      <h3>Lorem</h3>
      <h4>Lorem</h4>
      <h5>Lorem</h5>
      <h6>Lorem</h6>
      <a href="#">ololo</a>
      <p class="classname transition-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, debitis!</p>
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
