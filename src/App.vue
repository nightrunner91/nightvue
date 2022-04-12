<template>
  <!-- eslint-disable vue/max-attributes-per-line -->
  <div id="app">
    <div
      class="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center intro position-relative"
      :class="windowScroll > animationTriggerPosition ? 'intro--scrolled' : ''">
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
    <div
      class="docs position-relative"
      :class="windowScroll > animationTriggerPosition ? 'docs--appear' : ''"
      :style="`top: -${animationTriggerPosition}px`">
      <div class="container">
        <div class="row">
          <div class="col cols-12 py-3">
            <h1>Введение</h1>
            <h2>Чем является NightVue?</h2>
            <p>NightVue — фреймворк для разработки на <a rel="nofollow" target="_blank" href="https://ru.vuejs.org/v2/guide/">Vue.js 2.x</a>. Его главная особенность — отсутствие интегрированных стилевых решений для распространённых компонентов (кнопок, форм, карточек, дропдаунов, модальных окон и т.д). Вместо этого NightVue предоставляет максимальную свободу разработки собственных веб-интерфейсов и множество полезных утилит для облегчения этого процесса. </p>

            <p>В основу фреймворка легли наиболее полезные и удачные решения из <a rel="nofollow" target="_blank" href="https://getbootstrap.com/">Bootstrap 4.x</a>, многие из которых доработаны и улучшены. Разработчики, которые привыкли к Boostrap, легко вольются в предлагаемую нами среду разработки. Повсеместно используются рекомендации <a rel="nofollow" target="_blank" href="https://material.io/">Material Design</a>.  NightVue  работает на основе <a rel="nofollow" target="_blank" href="https://getbootstrap.com/">Vue CLI v.4</a> — одного из самых удобных инструментов для разработки на Vue.js.</p>

            <h2>Кому подойдёт NightVue?</h2>
            <p>Front-end разработчикам, которым не нравится переписывать или удалять встроенные стилевые решения сторонних фреймворков и плагинов. Тем, кто предпочитает разрабатывать “с чистого листа”. NightVue предоставляет гораздо бо&#x301;льшую свободу в написании собственного кода, чем множество других  фреймворков. И в этом вы вскоре убедитесь.</p>

            <h2>Кому <span class="font-weight-700 clr-black">не</span> подойдёт NightVue?</h2>
            <p>Front-end разработчикам, которым требуется база готовых стилевых решений для быстро старта разработки типизированных веб-интерфейсов. Либо тем, кто привык к такому подходу. В этом случае нашей рекомендацией будет использование таких популярных решений как <a rel="nofollow" target="_blank" href="https://bootstrap-vue.org/">BootstrapVue</a>, <a rel="nofollow" target="_blank" href="https://vuetifyjs.com/en/">Vuetify</a>, <a rel="nofollow" target="_blank" href="https://www.creative-tim.com/vuematerial/">Vue Material</a> или любого другого на ваш вкус.</p>

            <h1>Документация</h1>
            <ul class="list-unstyled">
              <li
                v-for="item, index in menu"
                :key="`menu-${index}`">
                <a :href="item.anchor">{{ item.title }}</a>
              </li>
            </ul>

            <Colors />
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

import Colors from './views/docs/Colors.vue'

export default {
  components: { Colors },
  name: 'Home',
  data() {
    return {
      menu: [
        {
          title: 'Установка NightVue',
          anchor: '#installation'
        },
        {
          title: 'Цвета',
          anchor: '#colors'
        },
      ]
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
      return this.windowSize.height / 4
    },
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
  @import "styles/main";

  .intro {
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
        &__text {
          @include transition(all, short, accelerated);
          opacity: 0;
        }

        &__logo { transform: translateY(-160px); }
        &__title { transform: translateY(-50px); }
        &__text { transform: translateY(-40px); }
      }

      &::before { transform: translateX(-100%); }
      &::after { transform: translateX(100%); }
    }
  }

  .docs {
    @include transition(opacity, base, emphasized);
    opacity: 0;

    &--appear {
      opacity: 1;
    }
  }
</style>
