<template>
  <div :class="layout === 'desktop' ? 'mr-auto' : 'position-relative'">

    <!-- Desktop layout -->
    <ul
      v-if="layout === 'desktop'"
      class="menu d-none d-lg-flex mt-0 mb-0 ml-50 mr-auto p-0">
      <li
        v-for="(item, index) in menuItems"
        :key="`menu-${index}`"
        class="menu__item">
        <router-link
          :to="{ name: item.pathName }"
          tag="a"
          class="menu__link font-weight-500 d-flex align-items-center px-75 position-relative"
          :class="[item.activeWhen.some(i => i === currentRoute) ? 'menu__link--active' : '', !item.accessible ? 'menu__link--disabled' : '']">
          <i
            v-if="item.icon"
            class="fas mr-50 fa-xs"
            :class="`fa-${item.icon}`" />
          <span>{{ item.title }}</span>
        </router-link>
      </li>
    </ul>

    <!-- Mobile layout -->
    <ul
      v-if="layout === 'mobile'"
      class="mmenu position-absolute d-flex flex-column bg-white m-0 p-0 minvh-100"
      :class="menuOpened ? 'mmenu--opened' : ''"
      v-touch:swipe.top="closeMenu">
      <li
        v-for="(item, index) in menuItems"
        :key="`mmenu-${index}`"
        class="mmenu__item">
        <a
          class="mmenu__link font-weight-500 d-flex align-items-center px-1 w-100 h-100"
          :class="[item.activeWhen.some(i => i === currentRoute) ? 'mmenu__link--active' : '', !item.accessible ? 'menu__link--disabled' : '']"
          @click="moveTo(item.pathName)">
          <i
            v-if="item.activeWhen.some(i => i === currentRoute)"
            class="fas fa-caret-right fa-lg mr-50"/>
          <span>{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import menuItems from '@/router/menu'

export default {
  name: 'MainMenu',
  props: {
    layout: {
      type: String,
      default: () => 'desktop',
    }
  },
  data() {
    return {
      menuItems: [],
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name
    },

    menuOpened() {
      return this.$store.state.config.menuOpened
    },
  },
  created() {
    this.menuItems = menuItems
  },
  methods: {
    closeUserMenu() {
      this.$store.commit('config/TOGGLE_USER_MENU', false)
    },

    closeMenu() {
      this.$store.commit('config/TOGGLE_MENU', false)
    },

    moveTo(pathName) {
      this.$router.push({ name: pathName }).catch(err => {
        console.error(err)
      })
    },
  },
}
</script>
