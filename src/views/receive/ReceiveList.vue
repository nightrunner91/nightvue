<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">

        <app-card :color="'neutral'">
          <card-overlay v-if="incomingReceivesResponse && incomingReceivesStats.next === 0" />

          <template v-slot:header>
            <h2 class="m-0">
              <i class="fas fa-inbox-in mr-75 clr-white" />
              <span class="clr-white">Requests</span>
            </h2>
          </template>

          <div class="tabs">
            <div class="tabs__header">
              <div class="row">
                <div class="col col-lg-6 col-md-6 col-sm-8 col-xs-12 cols-12">
                  <ul class="tabs__menu mb-1 mb-sm-0">
                    <li
                      class="tabs__toggle"
                      :class="{ 'tabs__toggle--active' : selectedTab === 'incomingRequests' }"
                      @click="openTab('incomingRequests')">
                      <i class="fas fa-arrow-alt-to-bottom mr-50 opacity-85" />
                      <span>Incoming Transfers</span>
                    </li>
                    <li
                      class="tabs__toggle"
                      :class="{ 'tabs__toggle--active' : selectedTab === 'outgoingRequests' }"
                      @click="openTab('outgoingRequests')">
                      <i class="fas fa-arrow-alt-to-top mr-50 opacity-85" />
                      <span>Outgoing Requests</span>
                    </li>
                  </ul>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-4 col-xs-12 cols-12 d-flex justify-content-end">
                  <router-link
                    v-if="user.payments"
                    :to="{ name: 'ReceiveBeneficiary'}"
                    tag="button"
                    v-waves
                    class="btn btn-primary btn-small">
                    <i class="fas fa-plus" />
                    <span class="ml-75">Make a New Request</span>
                  </router-link>
                  <div
                    v-else
                    class="d-flex align-items-center">
                    <button
                      disabled
                      class="btn btn-small">
                      <i class="fas fa-plus" />
                      <span class="ml-75">Make a New Request</span>
                    </button>
                    <i
                      v-tippy="{ placement: 'left', interactive: true }"
                      content="You don't have rights to make a new request. Please provide <span class='font-weight-500'>billing information</span> in <a href='../settings'>account settings</a>."
                      class="far fa-question-circle fa-lg clr-info ml-50" />
                  </div>
                </div>
              </div>
            </div>

            <div class="tabs__body">
              <transition
                name="tab"
                mode="out-in">

                <!-- INCOMING REQUESTS -->
                <div
                  v-if="selectedTab === 'incomingRequests'"
                  key="incomingRequests"
                  class="tabs__content">
                  <div class="table-responsive">
                    <table class="table table-accented">
                      <thead>
                        <tr>
                          <th
                            v-for="(column, index) in incomingReceivesColumns"
                            :key="column.title"
                            :class="index + 1 === incomingReceivesColumns.length ? 'text-right' : ''"
                            :width="column.width ? column.width : 'auto'">
                            <span>{{ column.title }}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody v-if="incomingReceives.length > 0">
                        <tr
                          v-for="receive in incomingReceives"
                          :key="receive.id">
                          <td class="text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ receive.datetime | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ receive.datetime | moment("hh:mm") }}</span>
                          </td>
                          <td>
                            {{ receive.company }}
                          </td>
                          <td class="text-nowrap">
                            {{ receive.amount | commaValue }}
                          </td>
                          <td class="text-nowrap">
                            #{{ receive.id }}
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <div class="d-flex align-items-center">
                              <app-badge
                                :text="receive.status_label"
                                :type="badgeType(receive.status)" />
                              <i
                                v-if="receive.status === -10 && receive.decline_reason"
                                v-tippy
                                :content="receive.decline_reason"
                                class="fas fa-question-circle ml-50 clr-info" />
                            </div>
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ receive.datetime_update | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ receive.datetime_update | moment("hh:mm") }}</span>
                          </td>
                          <td>
                            <div class="d-flex justify-content-end align-items-center">
                              <a
                                v-if="receive.reference"
                                v-tippy
                                :content="receive.reference"
                                class="btn btn-muted btn-iconed btn-small cursor-help">
                                <i class="fas fa-comment-alt-dots" />
                              </a>
                              <tippy
                                :ref="`tippy-${receive.blockchain_hash}`"
                                v-if="receive.blockchain_hash && receive.status === 10"
                                interactive
                                placement="top"
                                theme="light html headed"
                                trigger="click"
                                @show="preselectInput(receive.blockchain_hash), toggleTriggerState(receive.blockchain_hash, true)"
                                @hide="toggleTriggerState(receive.blockchain_hash, false)">
                                <template v-slot:trigger>
                                  <button
                                    :ref="`trigger-${receive.blockchain_hash}`"
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
                                        :ref="`input-${receive.blockchain_hash}`"
                                        type="text"
                                        class="input__field input__field--tiny"
                                        autocomplete="off"
                                        v-model="receive.blockchain_hash" />
                                    </div>
                                    <button
                                      v-waves
                                      class="btn btn-tiny btn-info ml-50"
                                      @click="copyHash(receive.blockchain_hash)">
                                      <span>Copy</span>
                                      <i class="fal fa-copy ml-50" />
                                    </button>
                                  </div>
                                </div>
                              </tippy>
                              <a
                                v-if="receive.status >= 5"
                                :href="downloadLink(receive.id, 'ipc')"
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
                            :colspan="incomingReceivesColumns.length"
                            class="empty">
                            You don't have any Incoming Member Settlements
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <button
                    v-if="incomingReceivesStats.next && incomingReceivesStats.next > 0"
                    :disabled="incomingReceivesResponse"
                    class="btn btn-primary btn-small btn-center"
                    @click="getReceives({ type: 'incoming', startFrom: incomingReceivesStats.next })">
                    <span
                      v-if="!incomingReceivesResponse"
                      class="mr-50 d-none d-sm-block">
                      Load More
                    </span>
                    <span
                      v-else
                      class="btn__loading">
                      Please Wait
                    </span>
                    <i
                      v-if="!incomingReceivesResponse"
                      class="fas fa-chevron-circle-down" />
                  </button>
                </div>

                <!-- OUTGOING REQUESTS -->
                <div
                  v-if="selectedTab === 'outgoingRequests'"
                  key="outgoingRequests"
                  class="tabs__content">
                  <div class="table-responsive">
                    <table class="table table-accented">
                      <thead>
                        <tr>
                          <th
                            v-for="(column, index) in outgoingReceivesColumns"
                            :key="column.title"
                            :class="index + 1 === outgoingReceivesColumns.length ? 'text-right' : ''"
                            :width="column.width ? column.width : 'auto'">
                            <span>{{ column.title }}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody v-if="outgoingReceives.length > 0">
                        <tr
                          v-for="receive in outgoingReceives"
                          :key="receive.id">
                          <td class="text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ receive.datetime | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ receive.datetime | moment("hh:mm") }}</span>
                          </td>
                          <td>
                            {{ receive.company }}
                          </td>
                          <td class="text-nowrap">
                            {{ receive.amount | commaValue }}
                          </td>
                          <td class="text-nowrap">
                            {{ receive.request_fee_by | beautifiedFee }}
                          </td>
                          <td class="text-nowrap">
                            #{{ receive.id }}
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <div class="d-flex align-items-center">
                              <app-badge
                                :text="receive.status_label"
                                :type="badgeType(receive.status)" />
                              <i
                                v-if="receive.status === -10 && receive.decline_reason"
                                v-tippy
                                :content="receive.decline_reason"
                                class="fas fa-question-circle ml-50 clr-info" />
                            </div>
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ receive.datetime_update | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ receive.datetime_update | moment("hh:mm") }}</span>
                          </td>
                          <td>
                            <div class="d-flex justify-content-end align-items-center">
                              <a
                                v-if="receive.reference"
                                v-tippy
                                :content="receive.reference"
                                class="btn btn-muted btn-iconed btn-small cursor-help">
                                <i class="fas fa-comment-alt-dots" />
                              </a>
                              <tippy
                                :ref="`tippy-${receive.blockchain_hash}`"
                                v-if="receive.blockchain_hash && receive.status === 10"
                                interactive
                                placement="top"
                                theme="light html headed"
                                trigger="click"
                                @show="preselectInput(receive.blockchain_hash), toggleTriggerState(receive.blockchain_hash, true)"
                                @hide="toggleTriggerState(receive.blockchain_hash, false)">
                                <template v-slot:trigger>
                                  <button
                                    :ref="`trigger-${receive.blockchain_hash}`"
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
                                        :ref="`input-${receive.blockchain_hash}`"
                                        type="text"
                                        class="input__field input__field--tiny"
                                        autocomplete="off"
                                        v-model="receive.blockchain_hash" />
                                    </div>
                                    <button
                                      v-waves
                                      class="btn btn-tiny btn-info ml-50"
                                      @click="copyHash(receive.blockchain_hash)">
                                      <span>Copy</span>
                                      <i class="fal fa-copy ml-50" />
                                    </button>
                                  </div>
                                </div>
                              </tippy>
                              <a
                                v-if="receive.status >= 5"
                                :href="downloadLink(receive.id, 'opc')"
                                target="_blank"
                                v-waves
                                v-tippy
                                content="Outgoing Settlement Confirmation"
                                class="btn btn-secondary btn-iconed btn-small ml-1 cursor-alias">
                                <i class="fas fa-file-export" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td
                            :colspan="outgoingReceivesColumns.length"
                            class="empty">
                            You don't have any Outgoing Settlement Requests
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <button
                    v-if="outgoingReceivesStats.next && outgoingReceivesStats.next > 0"
                    :disabled="outgoingReceivesResponse"
                    class="btn btn-primary btn-small btn-center"
                    @click="getReceives({ type: 'outgoing', startFrom: outgoingReceivesStats.next })">
                    <span
                      v-if="!outgoingReceivesResponse"
                      class="mr-50 d-none d-sm-block">
                      Load More
                    </span>
                    <span
                      v-else
                      class="btn__loading">
                      Please Wait
                    </span>
                    <i
                      v-if="!outgoingReceivesResponse"
                      class="fas fa-chevron-circle-down" />
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </app-card>

      </div>
    </div>

    <app-preloader :show="outgoingReceivesResponse || incomingReceivesResponse" />
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  name: 'ReceiveList',
  data() {
    return {
      outgoingReceivesColumns: [
        {
          title: 'Date',
        },
        {
          title: 'Recipient',
          width: '20%',
        },
        {
          title: 'Amount',
        },
        {
          title: 'Fee',
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

      incomingReceivesColumns: [
        {
          title: 'Date',
        },
        {
          title: 'Sender',
          width: '20%',
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

      selectedTab: 'incomingRequests',
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
    outgoingReceivesResponse() {
      return this.$store.state.receive.responses.outgoingReceive
    },

    incomingReceivesResponse() {
      return this.$store.state.receive.responses.incomingReceive
    },

    outgoingReceives() {
      return this.$store.state.receive.receives.outgoing.records
    },

    incomingReceives() {
      return this.$store.state.receive.receives.incoming.records
    },

    outgoingReceivesStats() {
      return this.$store.state.receive.receives.outgoing.stats
    },

    incomingReceivesStats() {
      return this.$store.state.receive.receives.incoming.stats
    },

    user() {
      return this.$store.state.auth.user
    },
  },
  mounted() {
    eventBus.$on('showToast/ReceiveList', data => { this.showToast(data) })

    this.getReceives({
      type: 'outgoing',
      startFrom: 0
    })

    this.getReceives({
      type: 'incoming',
      startFrom: 0
    })
  },
  beforeDestroy() {
    eventBus.$off('showToast/ReceiveList')

    this.clearReceives()
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

    getReceives({ type, startFrom }) {
      this.$store.dispatch('receive/getReceives', {
        type: type,
        startFrom: startFrom
      })
    },

    clearReceives() {
      this.$store.dispatch('receive/clearReceives', 'outgoing')
      this.$store.dispatch('receive/clearReceives', 'incoming')
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
  }
}
</script>
