<template>
  <div id="app">
    <div
      class="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center intro position-relative"
      :class="windowScroll > 200 ? 'intro--scrolled' : ''">
      <!-- <div class="intro__backdrop w-100 h-50 z-minus-1 position-absolute" /> -->
      <div class="intro__content d-flex flex-column justify-content-center align-items-center">
        <img
        :src="require('@/assets/images/logo.png')"
        class="no-select mb-3 intro__logo">
        <h1 class="clr-primary font-weight-400 mb-1 intro__title">
          <span class="clr-primary">Night</span>
          <span class="clr-success">Vue</span>
        </h1>
        <h3 class="text-center intro__text">Кристально-чистый Vue 2 фреймворк.</h3>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col col-lg-12 p-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, voluptatem rerum nostrum accusantium similique porro fugiat? Ullam, dolorem voluptates ipsa dolor necessitatibus quisquam nesciunt reiciendis odio repellendus possimus rerum eligendi repellat dignissimos ea distinctio, est veniam, neque doloremque. Voluptate deleniti dolorum quod aspernatur maxime recusandae labore voluptatibus impedit, quam porro facere quisquam sapiente dicta, non fuga, modi cupiditate aut perspiciatis laborum repellat dolores rem facilis! Recusandae vel enim numquam porro dolores itaque sed aliquam odio, veritatis iusto. Dicta fugiat eligendi exercitationem soluta quidem a est nihil et iusto labore recusandae alias, ipsam corrupti nostrum quis odio magni repudiandae porro commodi eum expedita. Dolores, dolorum harum iure inventore expedita minus autem temporibus eaque culpa et! Fugiat, laudantium iure dolorem non impedit voluptate atque quis aut, itaque laboriosam, unde eveniet voluptatum fuga dolorum corporis? Odio assumenda soluta, accusantium eius velit culpa, amet consequatur ipsa repudiandae totam quas! Cum odit eligendi explicabo eaque excepturi! Libero temporibus eius maiores labore! At reprehenderit assumenda harum laborum, beatae corrupti? Ab excepturi ad eligendi enim ipsam quidem sapiente dolor repellendus provident debitis. Nobis molestias blanditiis sit quia facilis ut eaque officia modi. Natus doloremque quidem sint reiciendis aut ea alias ab in, quas aperiam tenetur necessitatibus ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam consectetur, rerum nemo esse optio, minus, quisquam vitae molestiae repellendus cupiditate excepturi porro id! Accusantium id saepe molestias cumque alias tempora eum commodi sequi. Consequuntur harum fugit tenetur quae esse aliquam earum deserunt officiis aspernatur similique officia nisi amet nobis quod reiciendis mollitia repellat odio architecto modi ex, expedita aperiam odit alias. Repudiandae perspiciatis, beatae modi eaque animi quod fugit ex debitis. Mollitia beatae, quasi, obcaecati repellat fuga laborum facere ullam iste, rem ad neque natus alias? Labore dolorum consequuntur sequi iste, incidunt saepe asperiores quasi, nostrum, eaque quas soluta vero fugiat voluptate corporis fuga odio! Maiores cumque accusantium perspiciatis qui deleniti error hic saepe eligendi recusandae, quae earum repudiandae consectetur facilis maxime dicta ut deserunt dolorem optio culpa fugiat iste iure in! Voluptatibus ipsa quos, alias pariatur dolorem magni voluptas distinctio, nesciunt libero earum vel excepturi sunt, velit quod iste culpa laborum veritatis architecto. Non cumque expedita consequatur minima quaerat iste perspiciatis mollitia repudiandae, voluptates dolore, eos praesentium nesciunt distinctio quisquam totam dolores numquam aperiam corporis sed voluptas? Dolorem quas optio ratione dolore laboriosam, culpa aliquid quos ducimus, voluptatem nihil cum corrupti doloremque facere sequi officia voluptatibus in. Architecto exercitationem, rem provident perferendis minus quaerat mollitia, voluptatem laudantium nobis, voluptas quod tempora eligendi aperiam. Itaque ad cupiditate quis ex quod, amet expedita iste officiis, modi doloremque, perspiciatis sint laborum vitae! Rerum perferendis, commodi voluptatum saepe possimus quos velit numquam eveniet inventore tenetur odit quis consequatur eum, sequi vero, eligendi explicabo ullam praesentium ex libero? Nihil nam distinctio corrupti a eos, aspernatur nesciunt qui quod. Laborum ut harum sequi. Consequuntur veritatis veniam neque necessitatibus at, soluta excepturi, quidem error cum perspiciatis molestiae, vel enim aliquid aspernatur repellendus. Autem voluptatem tempore deserunt, maiores nemo quia quos incidunt voluptate labore tenetur laudantium?            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, voluptatem rerum nostrum accusantium similique porro fugiat? Ullam, dolorem voluptates ipsa dolor necessitatibus quisquam nesciunt reiciendis odio repellendus possimus rerum eligendi repellat dignissimos ea distinctio, est veniam, neque doloremque. Voluptate deleniti dolorum quod aspernatur maxime recusandae labore voluptatibus impedit, quam porro facere quisquam sapiente dicta, non fuga, modi cupiditate aut perspiciatis laborum repellat dolores rem facilis! Recusandae vel enim numquam porro dolores itaque sed aliquam odio, veritatis iusto. Dicta fugiat eligendi exercitationem soluta quidem a est nihil et iusto labore recusandae alias, ipsam corrupti nostrum quis odio magni repudiandae porro commodi eum expedita. Dolores, dolorum harum iure inventore expedita minus autem temporibus eaque culpa et! Fugiat, laudantium iure dolorem non impedit voluptate atque quis aut, itaque laboriosam, unde eveniet voluptatum fuga dolorum corporis? Odio assumenda soluta, accusantium eius velit culpa, amet consequatur ipsa repudiandae totam quas! Cum odit eligendi explicabo eaque excepturi! Libero temporibus eius maiores labore! At reprehenderit assumenda harum laborum, beatae corrupti? Ab excepturi ad eligendi enim ipsam quidem sapiente dolor repellendus provident debitis. Nobis molestias blanditiis sit quia facilis ut eaque officia modi. Natus doloremque quidem sint reiciendis aut ea alias ab in, quas aperiam tenetur necessitatibus ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam consectetur, rerum nemo esse optio, minus, quisquam vitae molestiae repellendus cupiditate excepturi porro id! Accusantium id saepe molestias cumque alias tempora eum commodi sequi. Consequuntur harum fugit tenetur quae esse aliquam earum deserunt officiis aspernatur similique officia nisi amet nobis quod reiciendis mollitia repellat odio architecto modi ex, expedita aperiam odit alias. Repudiandae perspiciatis, beatae modi eaque animi quod fugit ex debitis. Mollitia beatae, quasi, obcaecati repellat fuga laborum facere ullam iste, rem ad neque natus alias? Labore dolorum consequuntur sequi iste, incidunt saepe asperiores quasi, nostrum, eaque quas soluta vero fugiat voluptate corporis fuga odio! Maiores cumque accusantium perspiciatis qui deleniti error hic saepe eligendi recusandae, quae earum repudiandae consectetur facilis maxime dicta ut deserunt dolorem optio culpa fugiat iste iure in! Voluptatibus ipsa quos, alias pariatur dolorem magni voluptas distinctio, nesciunt libero earum vel excepturi sunt, velit quod iste culpa laborum veritatis architecto. Non cumque expedita consequatur minima quaerat iste perspiciatis mollitia repudiandae, voluptates dolore, eos praesentium nesciunt distinctio quisquam totam dolores numquam aperiam corporis sed voluptas? Dolorem quas optio ratione dolore laboriosam, culpa aliquid quos ducimus, voluptatem nihil cum corrupti doloremque facere sequi officia voluptatibus in. Architecto exercitationem, rem provident perferendis minus quaerat mollitia, voluptatem laudantium nobis, voluptas quod tempora eligendi aperiam. Itaque ad cupiditate quis ex quod, amet expedita iste officiis, modi doloremque, perspiciatis sint laborum vitae! Rerum perferendis, commodi voluptatum saepe possimus quos velit numquam eveniet inventore tenetur odit quis consequatur eum, sequi vero, eligendi explicabo ullam praesentium ex libero? Nihil nam distinctio corrupti a eos, aspernatur nesciunt qui quod. Laborum ut harum sequi. Consequuntur veritatis veniam neque necessitatibus at, soluta excepturi, quidem error cum perspiciatis molestiae, vel enim aliquid aspernatur repellendus. Autem voluptatem tempore deserunt, maiores nemo quia quos incidunt voluptate labore tenetur laudantium?

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
