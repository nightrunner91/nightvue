<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">
        <app-card>
          <h2>
            <i class="fas fa-user-cog mr-75 clr-primary opacity-85" />
            <span class="clr-dark">Profile Settings</span>
          </h2>
          <div class="d-flex flex-column justify-content-center align-items-center py-4 no-select">
            <h2 class="clr-info">
              Under Construction
            </h2>
            <img
              :src="image"
              class="maxw-75 maxw-sm-50 maxw-lg-40 my-2"
              alt="coming soon">
          </div>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  name: 'Settings',
  data() {
    return {
      image: require('@/assets/images/coming-soon.svg'),
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },

    settings() {
      return this.$store.state.user.settings
    },
  },
  created() {

  },
  mounted() {
    eventBus.$on('showToast/Settings', data => { this.showToast(data) })
  },
  beforeDestroy() {
    eventBus.$off('showToast/Settings')
  },
  methods: {
    showToast(data) {
      this.$toast(data.message, {
        type: data.type
      })
    }
  }
}
</script>
