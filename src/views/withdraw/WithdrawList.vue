<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">

        <app-card :color="'info'">
          <card-overlay v-if="recentWithdrawalsResponse && withdrawalsLength.next === 0" />

          <template v-slot:header>
            <h2 class="m-0">
              <i class="fas fa-wallet mr-75 clr-white" />
              <span class="clr-white">Withdrawals</span>
            </h2>
          </template>

          <div class="tabs">
            <div class="tabs__header">
              <div class="row">
                <div class="col col-lg-6 col-md-6 col-sm-7 col-xs-12 cols-12">
                  <ul class="tabs__menu mb-1 mb-sm-0">
                    <li class="tabs__toggle tabs__toggle--alone">
                      <i class="fas fa-list-ul mr-50 opacity-85" />
                      <span>Withdrawals History</span>
                    </li>
                  </ul>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-5 col-xs-12 cols-12 d-flex justify-content-end">
                  <router-link
                    v-if="user.payments"
                    :to="{ name: 'WithdrawNew'}"
                    tag="button"
                    v-waves
                    class="btn btn-primary btn-small ml-auto">
                    <i class="fas fa-plus mr-50" />
                    <span>Make a New Withdrawal</span>
                  </router-link>
                  <div
                    v-else
                    class="d-flex align-items-center ml-auto">
                    <button
                      disabled
                      class="btn btn-small">
                      <i class="fas fa-plus mr-50" />
                      <span>Make a New Withdrawal</span>
                    </button>
                    <i
                      v-tippy="{ placement: 'left', interactive: true }"
                      content="You don't have rights to make a new withdrawal. Please provide <span class='font-weight-500'>billing information</span> in <a href='../settings'>account settings</a>."
                      class="far fa-question-circle fa-lg clr-info ml-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-accented">
              <thead>
                <tr>
                  <th
                    v-for="(column, index) in withdrawalsColumns"
                    :key="column.title"
                    :class="index + 1 === withdrawalsColumns.length ? 'text-right' : ''">
                    <span>{{ column.title }}</span>
                  </th>
                </tr>
              </thead>
              <tbody v-if="recentWithdrawals.length > 0">
                <tr
                  v-for="withdrawal in recentWithdrawals"
                  :key="withdrawal.id">
                  <td class="text-nowrap">
                    <i class="far fa-calendar-alt mr-25 clr-black" />
                    <span>{{ withdrawal.datetime | moment("DD.MM.YYYY") }}</span>
                    <i class="far fa-clock ml-75 mr-25 clr-black" />
                    <span>{{ withdrawal.datetime | moment("hh:mm") }}</span>
                  </td>
                  <td class="text-nowrap">
                    {{ withdrawal.amount | commaValue }}
                  </td>
                  <td class="text-nowrap">
                    #{{ withdrawal.id }}
                  </td>
                  <td class="text-capitalize text-nowrap">
                    <app-badge
                      :text="withdrawal.status_label"
                      :type="badgeType(withdrawal.status)" />
                  </td>
                  <td class="text-capitalize text-nowrap">
                    <i class="far fa-calendar-alt mr-25 clr-black" />
                    <span>{{ withdrawal.datetime_update | moment("DD.MM.YYYY") }}</span>
                    <i class="far fa-clock ml-75 mr-25 clr-black" />
                    <span>{{ withdrawal.datetime_update | moment("hh:mm") }}</span>
                  </td>
                  <td>
                    <div class="d-flex justify-content-end align-items-center">
                      <tippy
                        :ref="`tippy-${withdrawal.blockchain_hash}`"
                        v-if="withdrawal.blockchain_hash && withdrawal.status === 10"
                        interactive
                        placement="top"
                        theme="light html headed"
                        trigger="click"
                        @show="preselectInput(withdrawal.blockchain_hash), toggleTriggerState(withdrawal.blockchain_hash, true)"
                        @hide="toggleTriggerState(withdrawal.blockchain_hash, false)">
                        <template v-slot:trigger>
                          <button
                            :ref="`trigger-${withdrawal.blockchain_hash}`"
                            v-waves
                            v-tippy
                            content="Show Blockchain Hash"
                            class="btn btn-info btn-iconed btn-small mr-1">
                            <i class="fas fa-barcode-read" />
                          </button>
                        </template>
                        <div class="tippy-content">
                          <div class="tippy-header">
                            Blockchain Hash
                          </div>
                          <div class="tippy-body d-flex align-items-center">
                            <div class="input mb-0">
                              <input
                                :ref="`input-${withdrawal.blockchain_hash}`"
                                type="text"
                                class="input__field input__field--tiny"
                                autocomplete="off"
                                v-model="withdrawal.blockchain_hash" />
                            </div>
                            <button
                              v-waves
                              class="btn btn-tiny btn-info ml-50"
                              @click="copyHash(withdrawal.blockchain_hash)">
                              <span>Copy</span>
                              <i class="fal fa-copy ml-50" />
                            </button>
                          </div>
                        </div>
                      </tippy>
                      <a
                        v-if="withdrawal.status >= 5"
                        :href="downloadLink(withdrawal.id, 'opc')"
                        target="_blank"
                        v-waves
                        v-tippy
                        content="Outgoing Settlement Confirmation"
                        class="btn btn-secondary btn-iconed btn-small mr-50 cursor-alias">
                        <i class="fas fa-file-export" />
                      </a>
                      <a
                        v-if="withdrawal.status >= 5"
                        :href="downloadLink(withdrawal.id, 'ipc')"
                        target="_blank"
                        v-waves
                        v-tippy
                        content="Incoming Settlement Confirmation"
                        class="btn btn-secondary btn-iconed btn-small cursor-alias">
                        <i class="fas fa-file-import" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td
                    :colspan="withdrawalsColumns.length"
                    class="empty">
                    You don't have any withdrawals yet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            v-if="withdrawalsLength.next && withdrawalsLength.next > 0"
            :disabled="recentWithdrawalsResponse"
            class="btn btn-primary btn-small btn-center"
            @click="getRecentWithdrawals({ startFrom: withdrawalsLength.next })">
            <span
              v-if="!recentWithdrawalsResponse"
              class="mr-50 d-none d-sm-block">
              Load More
            </span>
            <span
              v-else
              class="btn__loading">
              Please Wait
            </span>
            <i
              v-if="!recentWithdrawalsResponse"
              class="fas fa-chevron-circle-down" />
          </button>
        </app-card>
      </div>
    </div>

    <app-preloader :show="recentWithdrawalsResponse" />
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  name: 'WithdrawList',
  data() {
    return {
      withdrawalsColumns: [
        {
          title: 'Date',
        },
        {
          title: 'Amount',
        },
        {
          title: 'ID',
        },
        {
          title: 'Status',
        },
        {
          title: 'Last Update',
        },
        {
          title: 'Actions',
        },
      ],
    }
  },
  filters: {
    commaValue(value) {
      const testVal = value !== undefined && value !== null && typeof value === 'number'

      if (testVal) {
        const whole = Math.abs(Math.trunc(value)).toString()
        const decimal = (value % 1).toFixed(2).toString().split('.')[1]
        const newstr = []
        for (let i = whole.length; i > 0; i -= 3) {
          newstr.unshift(whole.substring(i, i - 3))
        }
        if (value < 0) {
          return `-$${newstr.join(',')}.${decimal}`
        } else {
          return `$${newstr.join(',')}.${decimal}`
        }
      } else {
        return '$0.00'
      }
    },
  },
  computed: {
    recentWithdrawalsResponse() {
      return this.$store.state.withdraw.responses.recentWithdrawals
    },

    recentWithdrawals() {
      return this.$store.state.withdraw.recentWithdrawals
    },

    withdrawalsLength() {
      return this.$store.state.withdraw.withdrawalsLength
    },

    user() {
      return this.$store.state.auth.user
    },
  },
  mounted() {
    eventBus.$on('showToast/WithdrawList', data => { this.showToast(data) })

    this.getRecentWithdrawals({
      startFrom: 0
    })
  },
  beforeDestroy() {
    eventBus.$off('showToast/WithdrawList')

    this.clearRecentWithdrawals()
  },
  methods: {
    showToast(data) {
      this.$toast(data.message, {
        type: data.type
      })
    },

    badgeType(type) {
      // -10 => 'declined'
      // 0   => 'pending'
      // 3   => 'confirmed'
      // 5   => 'sent'
      // 10  => 'completed'

      if (type === -10) { return 'danger' }
      else if (type === 0) { return 'secondary' }
      else if (type === 3) { return 'info' }
      else if (type === 5) { return 'warning' }
      else if (type === 10) { return 'success' }
      else { return 'secondary' }
    },

    downloadLink(id, type) {
      return `/payments/invoice-${type}.php?transaction_id=${id}`
    },

    getRecentWithdrawals({ startFrom }) {
      this.$store.dispatch('withdraw/getRecentWithdrawals', {
        startFrom: startFrom
      })
    },

    clearRecentWithdrawals() {
      this.$store.dispatch('withdraw/clearRecentWithdrawals')
    },

    copyHash(ref) {
      this.$nextTick(() => {
        this.$refs[`input-${ref}`][0].select()
        this.$refs[`tippy-${ref}`][0].tip.hide()
        document.execCommand('copy')
        this.showToast({
          message: 'Copied to clipboard!',
          type: 'success',
        })
      })
    },

    toggleTriggerState(ref, state) {
      this.$refs[`trigger-${ref}`][0].disabled = state
    },

    preselectInput(ref) {
      this.$nextTick(() => {
        this.$refs[`input-${ref}`][0].select()
      })
    },
  }
}
</script>
