<template>
  <div id="app">
    <app-layout>
      <router-view />
    </app-layout>
  </div>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue"
import { eventBus } from './main'
import debounce from 'lodash/debounce'

export default {
  components: {
    AppLayout,
  },
  name: 'App',
  data() {
    return {

    }
  },
  computed: {
    windowScroll() {
      return this.$store.state.config.windowScroll
    },

    windowSize() {
      /// Returns current window width and height
      ///
      /// @example
      ///   {"width": 768, "height": 493 }
      ///   {"width": 1043, "height": 764 }
      ///   {"width": 1920, "height": 812 }

      return this.$store.state.config.windowSize
    },
  },
  created() {

  },
  mounted() {
    eventBus.$on('eventName', data => { this.methodName(data) })

    this.watchWindowSize()
    window.addEventListener('resize', debounce(this.watchWindowSize, 500))
    window.addEventListener('scroll', this.watchWindowScroll)
  },
  methods: {
    methodName(data) {
      return data
    },

    watchWindowSize() {
      const width = window.innerWidth
      const height = window.innerHeight

      this.$store.commit('config/SAVE_WINDOW_WIDTH', {
        width: width,
        height: height
      })

      this.$store.commit('config/SAVE_CURRENT_BREAKPOINT', width)
    },

    watchWindowScroll() {
      const scrollPos = window.scrollY
      this.$store.commit('config/SAVE_WINDOW_SCROLL', scrollPos)
    },
  },
}
</script>

<style lang="scss">
  @import "styles/style";
</style>
