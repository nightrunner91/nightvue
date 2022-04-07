<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">

        <app-card :color="'success'">
          <card-overlay v-if="recentDepositsResponse" />

          <template v-slot:header>
            <h2 class="m-0">
              <i class="fas fa-sack mr-75 clr-white" />
              <span class="clr-white">Deposits</span>
            </h2>
          </template>

          <div class="tabs">
            <div class="tabs__header">
              <div class="row">
                <div class="col col-lg-6 col-md-6 col-sm-7 col-xs-12 cols-12">
                  <ul class="tabs__menu mb-1 mb-sm-0">
                    <li
                      class="tabs__toggle"
                      :class="{ 'tabs__toggle--active' : selectedTab === 'recentDeposits' }"
                      @click="openTab('recentDeposits')">
                      <i class="fas fa-hourglass-half mr-50 opacity-85" />
                      <span>Pending Deposits</span>
                    </li>
                    <li
                      class="tabs__toggle"
                      :class="{ 'tabs__toggle--active' : selectedTab === 'depositsHistory' }"
                      @click="openTab('depositsHistory')">
                      <i class="fas fa-list-ul mr-50 opacity-85" />
                      <span>Deposits History</span>
                    </li>
                  </ul>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-5 col-xs-12 cols-12 d-flex justify-content-end">
                  <router-link
                    v-if="user.payments"
                    :to="{ name: 'DepositNew'}"
                    tag="button"
                    v-waves
                    class="btn btn-primary btn-small">
                    <i class="fas fa-plus" />
                    <span class="ml-75">Make a New Deposit</span>
                  </router-link>
                  <div
                    v-else
                    class="d-flex align-items-center">
                    <button
                      disabled
                      class="btn btn-small">
                      <i class="fas fa-plus" />
                      <span class="ml-75">Make a New Deposit</span>
                    </button>
                    <i
                      v-tippy="{ placement: 'left', interactive: true }"
                      content="You don't have rights to make a new deposit. Please provide <span class='font-weight-500'>billing information</span> in <a href='../settings'>account settings</a>."
                      class="far fa-question-circle fa-lg clr-info ml-50" />
                  </div>
                </div>
              </div>
            </div>

            <div class="tabs__body">
              <transition
                name="tab"
                mode="out-in">

                <!-- PENDING DEPOSITS -->
                <div
                  v-if="selectedTab === 'recentDeposits'"
                  key="recentDeposits"
                  class="tabs__content">
                  <div class="table-responsive">
                    <table class="table table-accented">
                      <thead>
                        <tr>
                          <th
                            v-for="(column, index) in depositsColumns"
                            :key="column.title"
                            :class="index + 1 === depositsColumns.length ? 'text-right' : ''">
                            <span>{{ column.title }}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody v-if="recentDeposits.length > 0">
                        <tr
                          v-for="deposit in recentDeposits"
                          :key="`recentDeposit-${deposit.id}`">
                          <td class="text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ deposit.datetime | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ deposit.datetime | moment("hh:mm") }}</span>
                          </td>
                          <td class="text-nowrap">
                            {{ deposit.amount | commaValue }}
                          </td>
                          <td class="text-nowrap">
                            #{{ deposit.id }}
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <app-badge
                              :text="deposit.status_label"
                              :type="badgeType(deposit.status)" />
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ deposit.datetime_update | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ deposit.datetime_update | moment("hh:mm") }}</span>
                          </td>
                          <td>
                            <div class="d-flex justify-content-end align-items-center">
                              <button
                                v-if="deposit.status === 0"
                                v-waves
                                class="btn btn-info btn-small"
                                @click="uploadConfirmation(deposit.id, 'upload')">
                                <i class="fas fa-upload mr-50" />
                                <span>Upload Confirmation</span>
                              </button>
                              <button
                                v-if="deposit.status === 3"
                                v-waves
                                class="btn btn-info-outline btn-small"
                                @click="uploadConfirmation(deposit.id, 'update')">
                                <i class="fas fa-sync-alt mr-50" />
                                <span>Update Confirmation</span>
                              </button>

                              <a
                                :href="downloadLink(deposit.id, 'opc')"
                                target="_blank"
                                v-waves
                                v-tippy
                                content="Payment Instructions"
                                class="btn btn-secondary btn-iconed btn-small ml-1 cursor-alias">
                                <i class="fas fa-file-alt" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td
                            :colspan="depositsColumns.length"
                            class="empty">
                            You don't have any Pending Deposits
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- DEPOSITS HISTORY -->
                <div
                  v-if="selectedTab === 'depositsHistory'"
                  key="depositsHistory"
                  class="tabs__content">
                  <div class="table-responsive">
                    <table class="table table-accented">
                      <thead>
                        <tr>
                          <th
                            v-for="(column, index) in invoicesColumns"
                            :key="column.title"
                            :class="index + 1 === invoicesColumns.length ? 'text-right' : ''">
                            <span>{{ column.title }}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody v-if="invoices.length > 0">
                        <tr
                          v-for="invoice in invoices"
                          :key="`invoice-${invoice.id}`">
                          <td class="text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ invoice.datetime | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ invoice.datetime | moment("hh:mm") }}</span>
                          </td>
                          <td class="text-nowrap">
                            {{ invoice.amount | commaValue }}
                          </td>
                          <td class="text-nowrap">
                            #{{ invoice.id }}
                          </td>
                          <td class="text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ invoice.datetime_update | moment("DD.MM.YYYY") }}</span>
                          </td>
                          <td class="text-nowrap">
                            <i class="far fa-clock mr-50" />
                            <span>{{ invoice.datetime_update | moment("hh:mm") }}</span>
                          </td>
                          <td>
                            <div class="d-flex justify-content-end align-items-center">
                              <tippy
                                :ref="`tippy-${invoice.blockchain_hash}`"
                                v-if="invoice.blockchain_hash && invoice.status === 10"
                                interactive
                                placement="top"
                                theme="light html headed"
                                trigger="click"
                                @show="preselectInput(invoice.blockchain_hash), toggleTriggerState(invoice.blockchain_hash, true)"
                                @hide="toggleTriggerState(invoice.blockchain_hash, false)">
                                <template v-slot:trigger>
                                  <button
                                    :ref="`trigger-${invoice.blockchain_hash}`"
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
                                        :ref="`input-${invoice.blockchain_hash}`"
                                        type="text"
                                        class="input__field input__field--tiny"
                                        autocomplete="off"
                                        v-model="invoice.blockchain_hash" />
                                    </div>
                                    <button
                                      v-waves
                                      class="btn btn-tiny btn-info ml-50"
                                      @click="copyHash(invoice.blockchain_hash)">
                                      <span>Copy</span>
                                      <i class="fal fa-copy ml-50" />
                                    </button>
                                  </div>
                                </div>
                              </tippy>
                              <a
                                :href="downloadLink(invoice.id, 'ipc')"
                                target="_blank"
                                v-waves
                                class="btn btn-secondary btn-small cursor-alias">
                                <i class="fas fa-download mr-50" />
                                <span>Download Invoice</span>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td
                            :colspan="invoicesColumns.length"
                            class="empty">
                            You don't have Deposits History yet
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <button
                    v-if="invoicesLength.next && invoicesLength.next > 0"
                    :disabled="invoicesResponse"
                    class="btn btn-primary btn-small btn-center"
                    @click="getInvoices({ startFrom: invoicesLength.next })">
                    <span
                      v-if="!invoicesResponse"
                      class="mr-50 d-none d-sm-block">
                      Load More
                    </span>
                    <span
                      v-else
                      class="btn__loading">
                      Please Wait
                    </span>
                    <i
                      v-if="!invoicesResponse"
                      class="fas fa-chevron-circle-down" />
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </app-card>
      </div>
    </div>

    <app-preloader :show="recentDepositsResponse || invoicesResponse" />
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  name: 'DepositList',
  data() {
    return {
      depositsColumns: [
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

      invoicesColumns: [
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
          title: 'Completion Date',
        },
        {
          title: 'Completion Time',
        },
        {
          title: 'Actions',
        },
      ],

      selectedTab: 'recentDeposits',
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
    recentDeposits() {
      return this.$store.state.deposit.recentDeposits
    },

    invoices() {
      return this.$store.state.deposit.invoices
    },

    invoicesLength() {
      return this.$store.state.deposit.invoicesLength
    },

    recentDepositsResponse() {
      return this.$store.state.deposit.responses.recentDeposits
    },

    invoicesResponse() {
      return this.$store.state.deposit.responses.invoices
    },

    user() {
      return this.$store.state.auth.user
    },
  },
  mounted() {
    eventBus.$on('showToast/DepositList', data => { this.showToast(data) })

    this.getRecentDeposits()
    this.getInvoices({ startFrom: 0 })
  },
  beforeDestroy() {
    eventBus.$off('showToast/DepositList')

    this.clearDeposits()
  },
  methods: {
    getRecentDeposits() {
      this.$store.dispatch('deposit/getRecentDeposits')
    },

    getInvoices({ startFrom }) {
      this.$store.dispatch('deposit/getInvoices', { startFrom: startFrom })
    },

    badgeType(type) {
      // -10 => 'declined'
      // 0   => 'pending'
      // 3   => 'confirmed'
      // 5   => 'processing'
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

    uploadConfirmation(id, title) {
      this.$store.dispatch('deposit/sendToConfirmation', {
        id: id,
        title: title,
      })
    },

    clearDeposits() {
      this.$store.dispatch('deposit/clearDeposits')
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

    openTab(name) {
      this.selectedTab = name
    },

    showToast(data) {
      this.$toast(data.message, {
        type: data.type
      })
    }
  }
}
</script>
