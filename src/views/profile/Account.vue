<template>
  <div class="container">
    <div class="row">
      <div class="d-flex flex-column col col-lg-6 col-md-12">
        <div class="row">
          <div class="col col-lg-12 col-md-7">
            <!-- BASIC INFORMATION -->
            <app-card :color="'primary'">
              <template v-slot:header>
                <h1 class="d-flex align-items-center mb-50 clr-white">
                  <span>{{ settings.account.firstname }} {{ settings.account.lastname }}</span>
                </h1>
                <p
                  v-if="settings.account.position"
                  class="small mb-0 clr-white">
                  <i class="fas fa-user fa-sm mr-50 opacity-65" />
                  <span>{{ settings.account.position }}</span>
                </p>
              </template>
              <div class="row">
                <div class="col col-10">
                  <ul class="p-0 m-0">
                    <li class="d-flex align-items-center mb-50">
                      <i class="fas fa-at mr-75 opacity-75" />
                      <a
                        :href="`mailto:${settings.account.email}`"
                        class="d-flex align-items-center btn-primary-link">
                        <span>{{ settings.account.email }}</span>
                      </a>
                    </li>
                    <li
                      v-if="settings.account.email"
                      class="d-flex align-items-center mb-2">
                      <i class="fas fa-phone mr-75 opacity-75" />
                      <a
                        :href="`tel:${settings.account.contact_phone}`"
                        class="d-flex align-items-center btn-primary-link">
                        <span>{{ settings.account.contact_phone }}</span>
                      </a>
                    </li>
                    <li
                      v-if="settings.account.company"
                      class="d-flex align-items-center mb-50">
                      <i class="fas fa-building mr-75 opacity-75" />
                      <span>{{ settings.account.company }}</span>
                    </li>
                    <li
                      v-if="settings.account.company_address"
                      class="d-flex align-items-center mb-50">
                      <i class="fas fa-map-marked-alt mr-75 opacity-75" />
                      <span>{{ settings.account.company_address }}</span>
                    </li>
                    <li
                      v-if="settings.account.company_phone || settings.account.company_number"
                      class="d-flex align-items-center mb-50">
                      <i class="fas fa-phone-office mr-75 opacity-75" />
                      <a
                        :href="`tel:${settings.account.company_phone || settings.account.company_number}`"
                        class="d-flex align-items-center btn-primary-link">
                        <span>{{ settings.account.company_phone || settings.account.company_number }}</span>
                      </a>
                    </li>
                    <li
                      v-if="settings.account.company_webpage"
                      class="d-flex align-items-center mb-50">
                      <i class="fas fa-link mr-75 opacity-75" />
                      <a
                        :href="settings.account.company_webpage"
                        target="_blank"
                        reL="nofollow"
                        class="d-flex align-items-center btn-primary-link cursor-alias">
                        <span>{{ settings.account.company_webpage }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col col-2 pr-0 d-flex justify-content-end align-items-start">
                  <router-link
                    :to="{ name: 'Settings'}"
                    tag="button"
                    v-waves
                    class="btn btn-primary-flat btn-small">
                    <i class="fas fa-cog mr-50" />
                    <span>Edit</span>
                  </router-link>
                </div>
              </div>
            </app-card>
          </div>
          <div class="col col-lg-12 col-md-5 pb-1">
            <!-- BALANCES -->
            <app-card
              :classNames="['d-flex', 'flex-column', 'h-100']"
              :bodyClassNames="['flex-grow-1', 'pb-lg-0']">
              <div class="row h-100">
                <div
                  v-for="(balance, index) in balances"
                  :key="`balance-${index}`"
                  class="col col-lg-4 col-md-12 col-sm-4 col-xs-12 col-12 d-flex flex-column justify-content-center mb-lg-2 py-75 py-sm-0">
                  <p class="small mb-0">
                    <i :class="`fas fa-${balance.icon} mr-50 opacity-75`" />
                    <span>{{ balance.title }}</span>
                  </p>
                  <h2 class="d-flex align-items-center mb-0">
                    <svg-icon
                      icon="botcoin"
                      :sizes="[18, 18]"
                      :classNames="['mr-25', `fill-${balance.color}`, 'opacity-75']" />
                    <span :class="`clr-${balance.color}`">{{ balance.value | commaValue }}</span>
                  </h2>
                </div>
              </div>
            </app-card>
          </div>
        </div>
      </div>

      <!-- ACTIVITY -->
      <div class="col col-lg-6 col-md-12 pb-1">
        <app-card
          :color="'secondary'"
          :classNames="['h-100']"
          :bodyClassNames="['flex-grow-1']">

          <card-overlay v-if="activityResponse && activityLength.next === 0" />

          <template v-slot:header>
            <h3 class="m-0">
              <i class="fas fa-chart-line mr-75 clr-white" />
              <span class="clr-white">Activity Log</span>
            </h3>
          </template>

          <VuePerfectScrollbar
            ref="scrollbar"
            id="scrollbar"
            :style="windowWidth > breakpoints.lg ? 'max-height: 390px; overflow: hidden' : ''"
            :options="{
              wheelPropagation: true
            }">
            <timeline :classNames="['pr-1', 'pr-sm-2']">
              <timeline-item
                v-for="record in activity"
                :key="`record-${record.id}`"
                :variant="recordStyle(record.activity).variant"
                :icon="recordStyle(record.activity).icon">
                <div class="d-flex flex-wrap align-items-center w-100 py-25">
                  <div class="w-100 w-xs-auto mb-75 mb-xs-0 font-weight-500">
                    {{ record.activity | beautifyActivity }}
                  </div>
                  <div class="d-flex align-items-center small clr-secondary lh-1 ml-0 ml-xs-auto">
                    <i class="far fa-calendar-alt mr-25" />
                    <span>{{ record.datetime | moment("DD.MM.YYYY") }}</span>
                    <i class="far fa-clock ml-75 mr-25" />
                    <span>{{ record.datetime | moment("hh:mm") }}</span>
                  </div>
                </div>
                <div class="d-flex align-items-center py-25 clr-secondary ">
                  <i class="fas fa-globe-americas mr-50" />
                  <span>{{ record.ip_address }}</span>
                </div>
              </timeline-item>
            </timeline>
            <button
              v-if="activityLength.next && activityLength.next > 0"
              :disabled="activityResponse"
              class="btn btn-primary btn-small btn-center"
              @click="getActivity({ startFrom: activityLength.next, mode: 'push' })">
              <span
                v-if="!activityResponse"
                class="mr-50 d-none d-sm-block">
                Load More
              </span>
              <span
                v-else
                class="btn__loading">
                Please Wait
              </span>
              <i
                v-if="!activityResponse"
                class="fas fa-chevron-circle-down" />
            </button>
          </VuePerfectScrollbar>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Account',
  filters: {
    commaValue(value) {
      const testVal = value !== undefined && value !== null && typeof value === 'number'

      if (testVal) {
        const whole = Math.floor(value).toString()
        const decimal = (value % 1).toFixed(2).toString().split('.')[1]
        const newstr = []
        for (let i = whole.length; i > 0; i -= 3) {
          newstr.unshift(whole.substring(i, i - 3))
        }
        return `${newstr.join(',')}.${decimal}`
      } else {
        return '0.00'
      }
    },

    beautifyActivity(value) {
      const variants = {
        'login': 'Login to account',
        'logout': 'End of session',
      }

      return value !== undefined ? variants[value] : value
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },

    settings() {
      return this.$store.state.user.settings
    },

    activity() {
      return this.$store.state.user.activity
    },

    activityLength() {
      return this.$store.state.user.activityLength
    },

    activityResponse() {
      return this.$store.state.user.responses.getActivity
    },

    windowWidth() {
      return this.$store.state.config.windowWidth
    },

    breakpoints() {
      return this.$store.state.config.breakpoints
    },

    balances() {
      return [
        {
          title: 'Total Balance',
          icon: 'money-bill-wave',
          color: 'primary',
          value: this.user.balance,
        },
        {
          title: 'Deposited this month',
          icon: 'sack',
          color: 'success',
          value: this.settings.transfers.month_deposited,
        },
        {
          title: 'Withdrew this month',
          icon: 'wallet',
          color: 'info',
          value: this.settings.transfers.month_withdrew,
        },
      ]
    },
  },
  created() {
    this.getActivity({
      startFrom: 0,
      mode: 'refresh',
    })
  },
  mounted() {

  },
  watch: {
    /* eslint-disable-next-line no-unused-vars */
    windowWidth(newWidth, oldWidth) {
      if (newWidth < this.breakpoints.lg) {
        this.$refs.scrollbar.ps.destroy()
      }
    },
  },
  methods: {
    getActivity({ startFrom, mode }) {
      this.$store.dispatch('user/getActivity', {
        startFrom: startFrom,
        mode: mode,
      })
    },

    logOut() {
      this.$store.dispatch('auth/logOut')
    },

    recordStyle(activity) {
      const variants = {
        default: {
          variant: 'primary',
          icon: undefined,
        },
        login: {
          variant: 'success',
          icon: 'sign-in',
        },
        logout: {
          variant: 'warning',
          icon: 'sign-out',
        },
      }

      return activity !== undefined ? variants[activity] : variants.default
    },
  }
}
</script>
