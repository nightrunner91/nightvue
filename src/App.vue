<template>
  <div id="app">
    <div
      class="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center intro position-relative"
      :class="windowScroll > 0 ? 'intro--scrolled' : ''">
      <img
        :src="require('@/assets/images/logo.png')"
        class="no-select mb-3">
      <h1 class="clr-primary font-weight-400 mb-1">
        <span class="clr-primary">Night</span>
        <span class="clr-success">Vue</span>
      </h1>
      <h3 class="text-center">Кристально-чистый Vue 2 фреймворк.</h3>
    </div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col col-lg-12 p-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, voluptatem rerum nostrum accusantium similique porro fugiat? Ullam, dolorem voluptates ipsa dolor necessitatibus quisquam nesciunt reiciendis odio repellendus possimus rerum eligendi repellat dignissimos ea distinctio, est veniam, neque doloremque. Voluptate deleniti dolorum quod aspernatur maxime recusandae labore voluptatibus impedit, quam porro facere quisquam sapiente dicta, non fuga, modi cupiditate aut perspiciatis laborum repellat dolores rem facilis! Recusandae vel enim numquam porro dolores itaque sed aliquam odio, veritatis iusto. Dicta fugiat eligendi exercitationem soluta quidem a est nihil et iusto labore recusandae alias, ipsam corrupti nostrum quis odio magni repudiandae porro commodi eum expedita. Dolores, dolorum harum iure inventore expedita minus autem temporibus eaque culpa et! Fugiat, laudantium iure dolorem non impedit voluptate atque quis aut, itaque laboriosam, unde eveniet voluptatum fuga dolorum corporis? Odio assumenda soluta, accusantium eius velit culpa, amet consequatur ipsa repudiandae totam quas! Cum odit eligendi explicabo eaque excepturi! Libero temporibus eius maiores labore! At reprehenderit assumenda harum laborum, beatae corrupti? Ab excepturi ad eligendi enim ipsam quidem sapiente dolor repellendus provident debitis. Nobis molestias blanditiis sit quia facilis ut eaque officia modi. Natus doloremque quidem sint reiciendis aut ea alias ab in, quas aperiam tenetur necessitatibus ducimus!
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

export default {
  components: {  },
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

    innerHeight() {
      return window.innerHeight
    }
  },
  created() {

  },
  mounted() {
    eventBus.$on('eventName', data => { this.methodName(data) })

    this.watchWindowSize()
    window.addEventListener('resize', debounce(this.watchWindowSize, 500))
    window.addEventListener('scroll', debounce(this.watchWindowScroll, 50))
  },
  methods: {
    methodName(data) {
      return data
    },

    watchWindowSize() {
      const width = document.body.clientWidth
      const height = document.body.clientHeight

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
  @import "styles/main";

  .intro {
    &::before,
    &::after {
      @include linear-gradient(map-get($gradients, pro));
      @include transition(transform, lazy, emphasized);
      @extend .pseudoelem;
      @extend .z-minus-1;

      width: 30vw;
      height: 200vh;
      top: -10%;
    }

    &::before {
      left: -10%;
      transform: rotate(-25deg);
    }

    &::after {
      right: -10%;
      transform: rotate(25deg);
    }

    &--scrolled {
      &::before { transform: translateX(-100%); }
      &::after { transform: translateX(100%); }
    }
  }
</style>
