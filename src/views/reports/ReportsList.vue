<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">

        <app-card :color="'muted'">
          <card-overlay v-if="transactionsResponse && transactionsStats.next === 0" />

          <template v-slot:header>
            <h2 class="m-0">
              <i class="fas fa-history mr-75 clr-white" />
              <span class="clr-white">Reports</span>
            </h2>
          </template>

          <div class="tabs">
            <div class="tabs__header">
              <div class="row">
                <div class="col col-lg-6 col-md-6 col-sm-7 col-xs-12 cols-12">
                  <ul class="tabs__menu mb-1 mb-sm-0">
                    <li
                      class="tabs__toggle"
                      :class="{ 'tabs__toggle--active' : selectedTab === 'transactions' }"
                      @click="openTab('transactions')">
                      <i class="fas fa-exchange mr-50 opacity-85" />
                      <span>Transactions</span>
                    </li>
                    <li
                      class="tabs__toggle"
                      :class="{ 'tabs__toggle--active' : selectedTab === 'fees' }"
                      @click="openTab('fees')">
                      <i class="fas fa-hand-holding-usd mr-50 opacity-85" />
                      <span>Fees</span>
                    </li>
                    <li
                      class="tabs__toggle"
                      :class="{ 'tabs__toggle--active' : selectedTab === 'bonuses' }"
                      @click="openTab('bonuses')">
                      <i class="fas fa-gift-card mr-50 opacity-85" />
                      <span>Bonuses</span>
                    </li>
                  </ul>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-5 col-xs-12 cols-12 d-flex justify-content-end">
                  <a
                    :href="xlsLink"
                    target="_blank"
                    v-waves
                    class="btn btn-secondary btn-small cursor-alias">
                    <i class="fas fa-file-excel mr-50" />
                    <span>Download XLS</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="tabs__body">
              <transition
                name="tab"
                mode="out-in">

                <!-- TRANSACTIONS -->
                <div
                  v-if="selectedTab === 'transactions'"
                  key="transactions"
                  class="tabs__content">
                  <div class="table-responsive">
                    <table class="table table-accented">
                      <thead>
                        <tr>
                          <th
                            v-for="(column, index) in transactionsColumns"
                            :key="column.title"
                            :class="index + 1 === transactionsColumns.length ? 'text-right' : ''"
                            :width="column.width ? column.width : 'auto'">
                            <span>{{ column.title }}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody v-if="transactions.length > 0">
                        <tr
                          v-for="transaction in transactions"
                          :key="`transaction-${transaction.id}`">
                          <td class="text-nowrap">
                            <div class="d-flex align-items-center">
                              <app-badge
                                :text="transactionLabel(transaction.type).text"
                                :icon="transactionLabel(transaction.type).icon"
                                :type="`${transactionLabel(transaction.type).color}-outlined`" />
                              <i
                                v-if="transaction.label.trim().indexOf(' ') != -1 && transaction.type !== 40"
                                v-tippy
                                :content="transaction.label"
                                class="fas fa-question-circle ml-50 clr-info cursor-help" />
                            </div>
                          </td>
                          <td class="text-nowrap">
                            #{{ transaction.id }}
                          </td>
                          <td>
                            <span v-if="transaction.company">
                              {{ transaction.company }}
                            </span>
                            <i
                              v-else
                              class="far fa-minus clr-secondary" />
                          </td>
                          <td class="text-nowrap">
                            {{ transaction.amount | commaValue }}
                          </td>
                          <td class="text-nowrap">
                            <span v-if="transaction.request_fee_by">
                              {{ transaction.request_fee_by | beautifiedFee }}
                            </span>
                            <i
                              v-else
                              class="far fa-minus clr-secondary" />
                          </td>
                          <td class="text-nowrap">
                            {{ transaction.total_amount | commaValue }}
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <div class="d-flex align-items-center">
                              <app-badge
                                :text="transaction.status_label"
                                :type="badgeType(transaction.status)" />
                              <i
                                v-if="transaction.status === -10 && transaction.decline_reason"
                                v-tippy
                                :content="transaction.decline_reason"
                                class="fas fa-question-circle ml-50 clr-info cursor-help" />
                            </div>
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <div class="d-flex flex-column">
                              <div class="d-flex align-items-center my-25 lh-1">
                                <i class="far fa-calendar-alt mr-25 clr-black" />
                                <span>{{ transaction.datetime | moment("DD.MM.YYYY") }}</span>
                                <i class="far fa-clock ml-75 mr-25 clr-black" />
                                <span>{{ transaction.datetime | moment("hh:mm") }}</span>
                              </div>
                              <div class="d-flex align-items-center my-25 lh-1">
                                <i class="far fa-calendar-alt mr-25 clr-black" />
                                <span>{{ transaction.datetime_update | moment("DD.MM.YYYY") }}</span>
                                <i class="far fa-clock ml-75 mr-25 clr-black" />
                                <span>{{ transaction.datetime_update | moment("hh:mm") }}</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="d-flex justify-content-end align-items-center">
                              <a
                                v-if="transaction.reference"
                                v-tippy
                                :content="transaction.reference"
                                class="btn btn-muted btn-iconed btn-small cursor-help">
                                <i class="fas fa-comment-alt-dots" />
                              </a>
                              <tippy
                                :ref="`tippy-${transaction.blockchain_hash}`"
                                v-if="transaction.blockchain_hash && transaction.status === 10"
                                interactive
                                placement="top"
                                theme="light html headed"
                                trigger="click"
                                @show="preselectInput(transaction.blockchain_hash), toggleTriggerState(transaction.blockchain_hash, true)"
                                @hide="toggleTriggerState(transaction.blockchain_hash, false)">
                                <template v-slot:trigger>
                                  <button
                                    :ref="`trigger-${transaction.blockchain_hash}`"
                                    v-waves
                                    v-tippy
                                    content="Show Blockchain Hash"
                                    class="btn btn-info btn-iconed btn-small ml-1">
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
                                        :ref="`input-${transaction.blockchain_hash}`"
                                        type="text"
                                        class="input__field input__field--tiny"
                                        autocomplete="off"
                                        v-model="transaction.blockchain_hash" />
                                    </div>
                                    <button
                                      v-waves
                                      class="btn btn-tiny btn-info ml-50"
                                      @click="copyHash(transaction.blockchain_hash)">
                                      <span>Copy</span>
                                      <i class="fal fa-copy ml-50" />
                                    </button>
                                  </div>
                                </div>
                              </tippy>
                              <a
                                v-if="transaction.status >= 5"
                                :href="downloadLink(transaction.id, 'opc')"
                                target="_blank"
                                v-waves
                                v-tippy
                                content="Outgoing Settlement Confirmation"
                                class="btn btn-secondary btn-iconed btn-small mr-50 ml-1 cursor-alias">
                                <i class="fas fa-file-export" />
                              </a>
                              <a
                                v-if="transaction.status >= 5"
                                :href="downloadLink(transaction.id, 'ipc')"
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
                            :colspan="transactionsColumns.length"
                            class="empty">
                            You don't have any transactions yet
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <button
                    v-if="transactionsStats.next && transactionsStats.next > 0"
                    :disabled="transactionsResponse"
                    class="btn btn-primary btn-small btn-center"
                    @click="getReports({ type: 'transactions', startFrom: transactionsStats.next, mode: 'push' })">
                    <span
                      v-if="!transactionsResponse"
                      class="mr-50 d-none d-sm-block">
                      Load More
                    </span>
                    <span
                      v-else
                      class="btn__loading">
                      Please Wait
                    </span>
                    <i
                      v-if="!transactionsResponse"
                      class="fas fa-chevron-circle-down" />
                  </button>
                </div>

                <!-- FEES -->
                <div
                  v-if="selectedTab === 'fees'"
                  key="fees"
                  class="tabs__content">
                  <div class="table-responsive">
                    <table class="table table-accented">
                      <thead>
                        <tr>
                          <th
                            v-for="(column, index) in feesColumns"
                            :key="column.title"
                            :class="index + 1 === feesColumns.length ? 'text-right' : ''">
                            <span>{{ column.title }}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody v-if="fees.length > 0">
                        <tr
                          v-for="fee in fees"
                          :key="`fee-${fee.id}`">
                          <td class="text-capitalize text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ fee.datetime_update | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ fee.datetime_update | moment("hh:mm") }}</span>
                          </td>
                          <td class="text-nowrap">
                            #{{ fee.id }}
                          </td>
                          <td class="text-nowrap">
                            <app-badge
                              :text="transactionLabel(fee.type).text"
                              :icon="transactionLabel(fee.type).icon"
                              :type="`${transactionLabel(fee.type).color}-outlined`" />
                          </td>
                          <td class="text-nowrap">
                            {{ fee.amount | commaValue }}
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <div class="d-flex align-items-center">
                              <app-badge
                                :text="fee.status_label"
                                :type="badgeType(fee.status)" />
                              <i
                                v-if="fee.status === -10 && fee.decline_reason"
                                v-tippy
                                :content="fee.decline_reason"
                                class="fas fa-question-circle ml-50 clr-info" />
                            </div>
                          </td>
                          <td>
                            <div class="d-flex justify-content-end align-items-center">
                              <tippy
                                :ref="`tippy-${fee.blockchain_hash}`"
                                v-if="fee.blockchain_hash && fee.status === 10"
                                interactive
                                placement="top"
                                theme="light html headed"
                                trigger="click"
                                @show="preselectInput(fee.blockchain_hash), toggleTriggerState(fee.blockchain_hash, true)"
                                @hide="toggleTriggerState(fee.blockchain_hash, false)">
                                <template v-slot:trigger>
                                  <button
                                    :ref="`trigger-${fee.blockchain_hash}`"
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
                                        :ref="`input-${fee.blockchain_hash}`"
                                        type="text"
                                        class="input__field input__field--tiny"
                                        autocomplete="off"
                                        v-model="fee.blockchain_hash" />
                                    </div>
                                    <button
                                      v-waves
                                      class="btn btn-tiny btn-info ml-50"
                                      @click="copyHash(fee.blockchain_hash)">
                                      <span>Copy</span>
                                      <i class="fal fa-copy ml-50" />
                                    </button>
                                  </div>
                                </div>
                              </tippy>
                              <a
                                v-if="fee.status >= 5"
                                :href="downloadLink(fee.id, 'fee')"
                                target="_blank"
                                v-waves
                                v-tippy
                                content="Outgoing Settlement Confirmation"
                                class="btn btn-secondary btn-iconed btn-small cursor-alias">
                                <i class="fas fa-file-export" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td
                            :colspan="feesColumns.length"
                            class="empty">
                            You don't have any fees yet
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <button
                    v-if="feesStats.next && feesStats.next > 0"
                    :disabled="feesResponse"
                    class="btn btn-primary btn-small btn-center"
                    @click="getReports({ type: 'fees', startFrom: feesStats.next, mode: 'push' })">
                    <span
                      v-if="!feesResponse"
                      class="mr-50 d-none d-sm-block">
                      Load More
                    </span>
                    <span
                      v-else
                      class="btn__loading">
                      Please Wait
                    </span>
                    <i
                      v-if="!feesResponse"
                      class="fas fa-chevron-circle-down" />
                  </button>
                </div>

                <!-- BONUSES -->
                <div
                  v-if="selectedTab === 'bonuses'"
                  key="bonuses"
                  class="tabs__content">
                  <div class="table-responsive">
                    <table class="table table-accented">
                      <thead>
                        <tr>
                          <th
                            v-for="(column, index) in bonusesColumns"
                            :key="column.title"
                            :class="index + 1 === bonusesColumns.length ? 'text-right' : ''">
                            <span>{{ column.title }}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody v-if="bonuses.length > 0">
                        <tr
                          v-for="bonus in bonuses"
                          :key="`bonus-${bonus.id}`">
                          <td class="text-capitalize text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ bonus.datetime_update | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ bonus.datetime_update | moment("hh:mm") }}</span>
                          </td>
                          <td class="text-nowrap">
                            #{{ bonus.id }}
                          </td>
                          <td>
                            {{ bonus.reference }}
                          </td>
                          <td class="text-nowrap">
                            {{ bonus.amount | commaValue }}
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <div class="d-flex align-items-center">
                              <app-badge
                                :text="bonus.status_label"
                                :type="badgeType(bonus.status)" />
                              <i
                                v-if="bonus.status === -10 && bonus.decline_reason"
                                v-tippy
                                :content="bonus.decline_reason"
                                class="fas fa-question-circle ml-50 clr-info" />
                            </div>
                          </td>
                          <td>
                            <div class="d-flex justify-content-end align-items-center">
                              <tippy
                                :ref="`tippy-${bonus.blockchain_hash}`"
                                v-if="bonus.blockchain_hash && bonus.status === 10"
                                interactive
                                placement="top"
                                theme="light html headed"
                                trigger="click"
                                @show="preselectInput(bonus.blockchain_hash), toggleTriggerState(bonus.blockchain_hash, true)"
                                @hide="toggleTriggerState(bonus.blockchain_hash, false)">
                                <template v-slot:trigger>
                                  <button
                                    :ref="`trigger-${bonus.blockchain_hash}`"
                                    v-waves
                                    v-tippy
                                    content="Show Blockchain Hash"
                                    class="btn btn-info btn-iconed btn-small">
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
                                        :ref="`input-${bonus.blockchain_hash}`"
                                        type="text"
                                        class="input__field input__field--tiny"
                                        autocomplete="off"
                                        v-model="bonus.blockchain_hash" />
                                    </div>
                                    <button
                                      v-waves
                                      class="btn btn-tiny btn-info ml-50"
                                      @click="copyHash(bonus.blockchain_hash)">
                                      <span>Copy</span>
                                      <i class="fal fa-copy ml-50" />
                                    </button>
                                  </div>
                                </div>
                              </tippy>
                              <a
                                v-if="bonus.status >= 5"
                                :href="downloadLink(bonus.id, 'ipc')"
                                target="_blank"
                                v-waves
                                v-tippy
                                content="Incoming Settlement Confirmation"
                                class="btn btn-secondary btn-iconed btn-small ml-1 cursor-alias">
                                <i class="fas fa-file-import" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td
                            :colspan="bonusesColumns.length"
                            class="empty">
                            You don't have any bonuses yet
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <button
                    v-if="bonusesStats.next && bonusesStats.next > 0"
                    :disabled="bonusesResponse"
                    class="btn btn-primary btn-small btn-center"
                    @click="getReports({ type: 'bonuses', startFrom: bonusesStats.next, mode: 'push' })">
                    <span
                      v-if="!bonusesResponse"
                      class="mr-50 d-none d-sm-block">
                      Load More
                    </span>
                    <span
                      v-else
                      class="btn__loading">
                      Please Wait
                    </span>
                    <i
                      v-if="!bonusesResponse"
                      class="fas fa-chevron-circle-down" />
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </app-card>
      </div>
    </div>

    <app-preloader :show="transactionsResponse || feesResponse || bonusesResponse" />
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  name: 'ReportsList',
  data() {
    return {
      transactionsColumns: [
        {
          title: 'Type'
        },
        {
          title: 'ID',
        },
        {
          title: 'Company',
          width: '16%',
        },
        {
          title: 'Amount',
        },
        {
          title: 'Fee',
        },
        {
          title: 'Total',
        },
        {
          title: 'Status',
        },
        {
          title: 'Date / Last Update',
        },
        {
          title: 'Actions',
        },
      ],

      feesColumns: [
        {
          title: 'Date'
        },
        {
          title: 'ID',
        },
        {
          title: 'Transaction Type',
        },
        {
          title: 'Fee Amount',
        },
        {
          title: 'Status',
        },
        {
          title: 'Actions',
        },
      ],

      bonusesColumns: [
        {
          title: 'Date'
        },
        {
          title: 'ID',
        },
        {
          title: 'Description',
        },
        {
          title: 'Amount',
        },
        {
          title: 'Status',
        },
        {
          title: 'Actions',
        },
      ],

      selectedTab: 'transactions',
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

    beautifiedFee(fee) {
      const variants = {
        0: 'Paid by payee',
        1: '50% / 50%',
        2: 'Paid by payer',
      }

      return fee !== undefined ? variants[fee] : variants[2]
    },
  },
  computed: {
    transactions() {
      return this.$store.state.reports.reports.transactions.records
    },

    fees() {
      return this.$store.state.reports.reports.fees.records
    },

    bonuses() {
      return this.$store.state.reports.reports.bonuses.records
    },

    transactionsStats() {
      return this.$store.state.reports.reports.transactions.stats
    },

    feesStats() {
      return this.$store.state.reports.reports.fees.stats
    },

    bonusesStats() {
      return this.$store.state.reports.reports.bonuses.stats
    },

    transactionsResponse() {
      return this.$store.state.reports.responses.transactions
    },

    feesResponse() {
      return this.$store.state.reports.responses.fees
    },

    bonusesResponse() {
      return this.$store.state.reports.responses.bonuses
    },

    xlsLink() {
      return process.env.VUE_APP_XLS_FILE
    },
  },
  mounted() {
    eventBus.$on('showToast/ReportList', data => { this.showToast(data) })

    this.getReports({
      type: 'transactions',
      startFrom: 0,
      mode: 'refresh',
    })

    this.getReports({
      type: 'fees',
      startFrom: 0,
      mode: 'refresh',
    })

    this.getReports({
      type: 'bonuses',
      startFrom: 0,
      mode: 'refresh',
    })
  },
  beforeDestroy() {
    eventBus.$off('showToast/ReportList')

    this.clearReports()
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

    getReports({ type, startFrom, mode }) {
      this.$store.dispatch('reports/getReports', {
        type: type,
        startFrom: startFrom,
        mode: mode,
      })
    },

    clearReports() {
      this.$store.dispatch('reports/clearReports')
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

    transactionLabel(type) {
      const variants = {
        // Default
        default : {
          icon: '',
          text: '???',
          color: 'clr-dark',
        },
        // 10 => 'Deposit',
        10: {
          icon: 'fa-sack',
          text: 'Deposit',
          color: 'success',
        },
        // 20 => 'Withdraw',
        20: {
          icon: 'fa-wallet',
          text: 'Withdraw',
          color: 'info',
        },
        // 21 => 'PayDirect',
        21: {
          icon: 'fa-inbox-out',
          text: 'PayDirect',
          color: 'muted',
        },
        // 30 => 'Transfer',
        30: {
          icon: 'fa-inbox-out',
          text: 'Transfer',
          color: 'danger',
        },
        // 40 => 'Transfer Request',
        40: {
          icon: 'fa-inbox-in',
          text: 'Request',
          color: 'neutral',
        },
        // 50 => 'Bonus',
        50: {
          icon: 'fa-gift-card',
          text: 'Bonus',
          color: 'accent',
        },
        // 51 => 'Deposit Bonus',
        51: {
          icon: 'fa-gift-card',
          text: 'Bonus',
          color: 'accent',
        },
        // 52 => 'Withdraw refund',
        52: {
          icon: 'fa-wallet',
          text: 'Refund',
          color: 'danger',
        },
        // 53 => '5 Invites Bonus',
        53: {
          icon: 'fa-gift-card',
          text: 'Bonus',
          color: 'accent',
        },
        // 54 => 'Loyalty Bonus',
        54: {
          icon: 'fa-gift-card',
          text: 'Bonus',
          color: 'accent',
        },
        // 55 => 'Sign Up Bonus',
        55: {
          icon: 'fa-gift-card',
          text: 'Bonus',
          color: 'accent',
        },
        // 59 => 'Balance addition',
        59: {
          icon: 'fa-wallet',
          text: 'Balance',
          color: 'dark',
        },
        // 60 => 'Fee',
        60: {
          icon: 'fa-hand-holding-usd',
          text: 'Fee',
          color: 'secondary',
        },
        // 61 => 'Monthly Fee',
        61: {
          icon: 'fa-hand-holding-usd',
          text: 'Fee',
          color: 'secondary',
        },
        // 69 => 'Balance subtract',
        69: {
          icon: 'fa-wallet',
          text: 'Balance',
          color: 'dark',
        },
      }

      return type !== undefined ? variants[type] : variants.default
    },
  }
}
</script>
