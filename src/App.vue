<template>
  <div id="app">
    <div
      class="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center intro position-relative"
      :class="windowScroll > animationTriggerPosition ? 'intro--scrolled' : ''">
      <div
        class="intro__decoration intro__decoration--left"
        :style="decorationTransforms.left" />
      <div
        class="intro__decoration intro__decoration--right"
        :style="decorationTransforms.right" />
      <div
        class="intro__content d-flex flex-column justify-content-center align-items-center"
        :style="contentTransform">
        <img
        :src="require('@/assets/images/logo.png')"
        class="no-select mb-3 intro__logo">
        <h1 class="clr-primary mt-0 mb-1 intro__title">
          <span class="clr-primary">Night</span>
          <span class="clr-success">Vue</span>
        </h1>
        <h3 class="text-center intro__text mt-0 font-weight-400">Кристально-чистый Vue 2 фреймворк.</h3>
      </div>
    </div>
    <!-- <nav class="menu position-fixed gradient-docsmenu z-plus-1000 w-25 h-100">

    </nav> -->
    <div
      class="docs position-relative"
      :class="windowScroll > animationTriggerPosition ? 'docs--appear' : ''"
      :style="`top: -${animationTriggerPosition}px`">
      <div class="container">
        <div class="row">
          <div class="col cols-12 py-3">
            <Introduction />
            <Installation />
            <DocsMenu />
            <Colors />
            <Gradients />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AppLayout from "./layouts/AppLayout.vue"
import { eventBus } from './main'
import debounce from 'lodash/debounce'

import Introduction from './views/docs/Introduction.vue'
import Installation from './views/docs/Installation.vue'
import DocsMenu from './views/docs/DocsMenu.vue'
import Colors from './views/docs/Colors.vue'
import Gradients from './views/docs/Gradients.vue'

export default {
  components: {
    Introduction,
    Installation,
    DocsMenu,
    Colors,
    Gradients,
  },
  name: 'Home',
  data() {
    return {

    }
  },
  computed: {
    windowScroll() {
      return this.$store.state.config.windowScroll
    },

    windowSize() {
      return this.$store.state.config.windowSize
    },

    animationTriggerPosition() {
      return this.windowSize.height / 5
    },

    decorationTransforms() {
      const styles = {
        left: '',
        right: ''
      }

      if (this.windowScroll < 1500) {
        styles.left = `transform: rotate(-25deg) translateX(-${this.windowScroll}px)`
        styles.right = `transform: rotate(25deg) translateX(${this.windowScroll}px)`

        return styles
      } else {
        styles.left = 'transform: rotate(-25deg) translateX(-1500px)'
        styles.right = 'transform: rotate(25deg) translateX(1500px)'

        return styles
      }
    },

    contentTransform() {
      if (this.windowScroll < 750) {
        return `transform: translateY(-${this.windowScroll / 2}px)`
      } else {
        return `transform: translateY(-750px)`
      }
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

  .intro {
    &__logo { @include transition(all, lazy, emphasized); }
    &__title { @include transition(all, lazy, decelerated, .15s); }
    &__text { @include transition(all, lazy, decelerated, .15s); }

    &__decoration {
      @include linear-gradient(map-get($gradients, 'primary-l3_primary'));
      @include transition(transform, lazy, emphasized);
      @extend .position-fixed;
      @extend .z-minus-1;

      width: 40vw;
      height: 200vh;
      top: -20%;

      &--left {
        left: -20%;
      }

      &--right {
        right: -20%;
      }
    }

    &__content {
      @include transition(transform, lazy, decelerated)
    }

    &--scrolled {
      .intro {
        &__logo,
        &__title,
        &__text {
          @include transition(all, short, accelerated);
          opacity: 0;
        }

        &__logo { transform: translateY(-120px) scale(0.6); }
        &__title { transform: translateY(-50px); }
        &__text { transform: translateY(-40px); }
      }
    }
  }

  .docs {
    @include transition(opacity, base, emphasized);
    opacity: 0;

    &--appear {
      opacity: 1;
    }
  }

  .menu {
    @include transition(all, base, emphasized);

    top: 0;
    left: 0;
    min-width: 320px;
    max-width: 480px;
    transform: translateX(calc(-100% + 10px));

    &:hover {
      @include shadow(1);
      transform: translateX(0);
    }
  }
</style>
