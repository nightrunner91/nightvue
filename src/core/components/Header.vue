<template>
  <header
    class="header position-fixed w-100"
    :class="scrollPosition > 0 ? 'header--scrolled' : ''">

    <div
      class="navbar position-relative minh-100 d-flex align-items-center no-select"
      :class="scrollPosition > 0 || menuOpened ? 'navbar--scrolled' : ''">
      <div class="container">
        <div class="row">
          <div class="col col-12 d-flex align-items-center">
            <nav class="d-flex align-items-center w-100">
              <logo />
              <main-menu :layout="'desktop'" />
              <hamburger />
              <user-balance />
              <user-menu />
            </nav>
          </div>
        </div>
      </div>
    </div>

    <main-menu :layout="'mobile'" />
  </header>
</template>

<script>
import Logo from '@/core/components/navigation/Logo'
import MainMenu from '@/core/components/navigation/MainMenu'
import Hamburger from '@/core/components/navigation/Hamburger'
import UserBalance from '@/core/components/navigation/UserBalance'
import UserMenu from '@/core/components/navigation/UserMenu'

import debounce from 'lodash/debounce'

export default {
  name: 'Header',
  components: {
    Logo,
    MainMenu,
    Hamburger,
    UserBalance,
    UserMenu,
  },
  data() {
    return {
      scrollPosition: 0,
    }
  },
  computed: {
    menuOpened() {
      return this.$store.state.config.menuOpened
    },
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY
      this.$store.commit('config/TOGGLE_MENU', false)
      this.$store.commit('config/TOGGLE_USER_MENU', false)
    },
  },
  created() {
    window.addEventListener('scroll', debounce(this.handleScroll, 100))
  },
  mounted() {

  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
