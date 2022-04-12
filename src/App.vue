<template>
  <!-- eslint-disable vue/max-attributes-per-line -->
  <div id="app">
    <div
      class="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center intro position-relative"
      :class="windowScroll > windowSize.height / 5 ? 'intro--scrolled' : ''">
      <!-- <div class="intro__backdrop w-100 h-50 z-minus-1 position-absolute" /> -->
      <div class="intro__content d-flex flex-column justify-content-center align-items-center">
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
    <div>
      <div class="container">
        <div class="row">
          <div class="col cols-12 py-3">
            <h1>1. Введение</h1>
            <h2>Чем является NightVue?</h2>
            <p>NightVue — фреймворк для разработки на <a rel="nofollow" target="_blank" href="https://ru.vuejs.org/v2/guide/">Vue.js</a>. Главная его особенность — минимальное количество встроенных стилевых решений для распространённых компонентов (кнопок, форм, карточек, дропдаунов, модальных окон и т.д). Вместо этого NightVue предоставляет максимальную свободу разработки собственных веб-интерфейсов и множество полезных утилит для облегчения этого процесса.</p>

            <h2>Кому подойдёт NightVue?</h2>
            <p>Front-end разработчикам, которым не нравится либо нет необходимости переписывать встроенные стилевые решения сторонних фреймворков и плагинов. Тем, кто предпочитает разрабатывать веб-интерфейсы “с чистого листа”. NightVue предоставляет гораздо б<span class="font-weight-500">о</span>льшую свободу в написании собственного кода, чем множество других Vue 2 фреймворков, в чём вы вскоре убедитесь самолично.</p>

            <h2>Кому <span class="font-weight-700 clr-black">не</span> подойдёт NightVue?</h2>
            <p>Front-end разработчикам, которым требуется база готовых стилевых решений для быстро старта разработки типизированных веб-интерфейсов. В таком случае нашей рекомендацией будет использование таких популярных решений как <a rel="nofollow" target="_blank" href="https://bootstrap-vue.org/">BootstrapVue</a>, <a rel="nofollow" target="_blank" href="https://vuetifyjs.com/en/">Vuetify</a>, <a rel="nofollow" target="_blank" href="https://www.creative-tim.com/vuematerial/">Vue Material</a> или любого другого на ваш вкус.</p>
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
    &__backdrop {
      @include linear-gradient(map-get($gradients, light));

      top: 0;
      left: 0;
    }

    &__logo { @include transition(all, lazy, emphasized); }
    &__title { @include transition(all, lazy, decelerated, .15s); }
    &__text { @include transition(all, lazy, decelerated, .15s); }

    &::before,
    &::after {
      @include linear-gradient(map-get($gradients, pro));
      @include transition(transform, lazy, emphasized);
      @extend .pseudoelem;
      @extend .position-fixed;
      @extend .z-minus-1;

      width: 40vw;
      height: 200vh;
      top: -20%;
    }

    &::before {
      left: -20%;
      transform: rotate(-25deg);
    }

    &::after {
      right: -20%;
      transform: rotate(25deg);
    }

    &--scrolled {
      .intro {
        &__logo,
        &__title,
        &__text { opacity: 0; }

        &__logo { transform: translateY(-160px); }
        &__title { transform: translateY(-50px); }
        &__text { transform: translateY(-40px); }
      }

      &::before { transform: translateX(-100%); }

      &::after { transform: translateX(100%); }
    }
  }
</style>
