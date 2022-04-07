<template>
  <div id="app">
    <app-layout v-if="!checkLoginResponse">
      <router-view />
    </app-layout>
    <app-preloader :show="checkLoginResponse" />
    <app-scroll-top />
  </div>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue"
import AppScrollTop from "./core/components/ScrollTop.vue"
import { eventBus } from './main'
import debounce from 'lodash/debounce'

export default {
  components: { AppLayout, AppScrollTop },
  name: 'Home',
  data() {
    return {

    }
  },
  computed: {
    checkLoginResponse() {
      return this.$store.state.auth.responses.checkLogin
    },
  },
  created() {

  },
  mounted() {
    eventBus.$on('showToast', data => { this.showToast(data) })

    this.watchWindowWidth()
    window.addEventListener('resize', debounce(this.watchWindowWidth, 500))
  },
  methods: {
    showToast(data) {
      this.$toast(data.message, {
        type: data.type,
      })
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
