<template>
  <div id="app">
    <div class="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center background position-relative">
      <img
        :src="require('@/assets/images/logo.png')"
        class="no-select mb-3">
      <h1 class="clr-primary">
        NightVue
      </h1>
      <h3 class="text-center">Кристально-чистый Vue 2 фреймворк</h3>
      <svg-icon
        icon="face"
        size="36"
        class="my-1" />
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

  .background {
    &::before,
    &::after {
      content: '';
      display: block;
      position: fixed;
      @include background('primary');
      width: 20vw;
      height: 200vh;
      z-index: -1;
    }

    &::before {
      top: 0;
      left: 0;
      transform: rotate(-25deg);
    }

    &::after {
      top: 0;
      right: 0;
      transform: rotate(25deg);
    }
  }
</style>
