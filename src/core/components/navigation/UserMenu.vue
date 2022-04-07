<template>
  <div class="user d-flex align-items-center cursor-pointer position-relative">
    <div
      ref="dropdownToggle"
      class="user__toggle d-flex justify-content-center align-items-center px-0 px-sm-1 radius-large"
      :class="userMenuOpened ? 'user__toggle--opened' : ''"
      @click="toggleDropdown">
      <i class="fas fa-user-circle fa-lg mr-0 mr-sm-50 user__avatar"></i>
      <span
        class="d-none d-sm-block user__name font-weight-500 text-truncate text-capitalize"
        style="max-width: 100px;">
        {{ user.firstname }}
      </span>
      <i
        class="d-none d-sm-block fas fa-chevron-down fa-xs ml-50 user__arrow"
        :class="userMenuOpened ? 'user__arrow--flipped' : ''"></i>
    </div>
    <ul
      ref="dropdownOptions"
      class="user__dropdown position-absolute bg-white w-100 m-0 px-0 radius-large"
      :class="userMenuOpened ? 'user__dropdown--opened' : ''"
      v-outsideClick='{exclude: ["dropdownOptions", "dropdownToggle"], handler: "closeDropdown"}'>
      <li class="user__mobilename d-flex d-sm-none px-1 py-1 align-items-center bg-grey radius-tl-large radius-tr-large">
        <h4 class="m-0 d-flex align-items-center">
          <i class="fas fa-user-circle fa-lg mr-50 user__avatar clr-primary" />
          <span
            class="user__name text-truncate text-capitalize clr-dark"
            style="max-width: 120px;">
            {{ user.firstname }}
          </span>
        </h4>
      </li>
      <li
        v-waves
        class="user__item d-flex align-items-center px-1 clr-secondary"
        @click="sendTo('Account'), closeDropdown()">
        <i class="las la-user-tie la-lg mr-50" />
        <span class="font-weight-500">Account</span>
      </li>
      <li
        v-waves
        class="user__item d-flex align-items-center px-1 clr-secondary"
        @click="sendTo('Settings'), closeDropdown()">
        <i class="las la-cog la-lg mr-50" />
        <span class="font-weight-500">Settings</span>
      </li>
      <li
        v-waves
        class="user__item user__item--accent d-flex align-items-center px-1 clr-danger"
        @click="logOut(), closeDropdown()">
        <i class="las la-sign-out-alt la-lg mr-50" />
        <span class="font-weight-500">Logout</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '../../../main'

let handleOutsideClick

export default {
  name: 'UserMenu',
  directives: {
    outsideClick: {
      bind(el, binding, vnode) {
        // Here's the click/touchstart handler
        // (it is registered below)
        handleOutsideClick = e => {
          e.stopPropagation()
          // Get the handler method name and the exclude array
          // from the object used in v-closable
          const { handler, exclude } = binding.value
          // This variable indicates if the clicked element is excluded
          let clickedOnExcludedEl = false
          exclude.forEach(refName => {
            // We only run this code if we haven't detected
            // any excluded element yet
            if (!clickedOnExcludedEl) {
              // Get the element using the reference name
              const excludedEl = vnode.context.$refs[refName]
              // See if this excluded element
              // is the same element the user just clicked on
              clickedOnExcludedEl = excludedEl.contains(e.target)
            }
          })
          // We check to see if the clicked element is not
          // the dialog element and not excluded
          if (!el.contains(e.target) && !clickedOnExcludedEl) {
            // If the clicked element is outside the dialog
            // and not the button, then call the outside-click handler
            // from the same component this directive is used in
            vnode.context[handler]()
          }
        }
        // Register click/touchstart event listeners on the whole page
        document.addEventListener("click", handleOutsideClick)
        document.addEventListener("touchstart", handleOutsideClick)
      },
      unbind() {
        // If the element that has v-closable is removed, then
        // unbind click/touchstart listeners from the whole page
        document.removeEventListener("click", handleOutsideClick)
        document.removeEventListener("touchstart", handleOutsideClick)
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },

    userMenuOpened() {
      return this.$store.state.config.userMenuOpened
    },
  },
  created() {
  },
  mounted() {
    eventBus.$on('closeUserMenu', () => { this.closeDropdown() })
  },
  destroyed() {
    eventBus.$off('closeUserMenu')
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logOut')
    },

    toggleDropdown() {
      this.$store.commit('config/TOGGLE_USER_MENU', !this.userMenuOpened)
      this.$store.commit('config/TOGGLE_MENU', false)
    },

    closeDropdown(event) {
      this.$store.commit('config/TOGGLE_USER_MENU', false)

      if (event && event.keyCode == 27) {
        this.$store.commit('config/TOGGLE_USER_MENU', false)
      }
    },

    sendTo(pathName) {
      this.$router.push({ name: pathName }).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          console.error(error)
        }
      })
    },
  },
}
</script>
