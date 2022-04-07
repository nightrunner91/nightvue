<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">

        <app-card :color="'danger'">
          <card-overlay v-if="incomingTransfersResponse && incomingTransfersStats.next === 0" />

          <template v-slot:header>
            <h2 class="m-0">
              <i class="fas fa-inbox-out mr-75 clr-white" />
              <span class="clr-white">Transfers</span>
            </h2>
          </template>

          <div class="tabs">
            <div class="tabs__header">
              <div class="row">
                <div class="col col-lg-6 col-md-6 col-sm-8 col-xs-12 cols-12">
                  <ul class="tabs__menu mb-1 mb-sm-0">
                    <li
                      class="tabs__toggle"
                      :class="{ 'tabs__toggle--active' : selectedTab === 'incomingTransfers' }"
                      @click="openTab('incomingTransfers')">
                      <i class="fas fa-arrow-alt-to-bottom mr-50 opacity-85" />
                      <span>Incoming Requests</span>
                    </li>
                    <li
                      class="tabs__toggle"
                      :class="{ 'tabs__toggle--active' : selectedTab === 'outgoingTransfers' }"
                      @click="openTab('outgoingTransfers')">
                      <i class="fas fa-arrow-alt-to-top mr-50 opacity-85" />
                      <span>Outgoing Transfers</span>
                    </li>
                  </ul>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-4 col-xs-12 cols-12 d-flex justify-content-end">
                  <router-link
                    v-if="user.payments"
                    :to="{ name: 'TransferBeneficiary'}"
                    tag="button"
                    v-waves
                    class="btn btn-primary btn-small">
                    <i class="fas fa-plus" />
                    <span class="ml-75">Make a New Transfer</span>
                  </router-link>
                  <div
                    v-else
                    class="d-flex align-items-center">
                    <button
                      disabled
                      class="btn btn-small">
                      <i class="fas fa-plus" />
                      <span class="ml-75">Make a New Transfer</span>
                    </button>
                    <i
                      v-tippy="{ placement: 'left', interactive: true }"
                      content="You don't have rights to make a new transfer. Please provide <span class='font-weight-500'>billing information</span> in <a href='../settings'>account settings</a>."
                      class="far fa-question-circle fa-lg clr-info ml-50" />
                  </div>
                </div>
              </div>
            </div>
            <div class="tabs__body">
              <transition
                name="tab"
                mode="out-in">

                <!-- INCOMING TRANSFERS -->
                <div
                  v-if="selectedTab === 'incomingTransfers'"
                  key="incomingTransfers"
                  class="tabs__content">
                  <div class="table-responsive">
                    <table class="table table-accented">
                      <thead>
                        <tr>
                          <th
                            v-for="(column, index) in incomingTransfersColumns"
                            :key="column.title"
                            :class="index + 1 === incomingTransfersColumns.length ? 'text-right' : ''"
                            :width="column.width ? column.width : 'auto'">
                            <span>{{ column.title }}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody v-if="incomingTransfers.length > 0">
                        <tr
                          v-for="transfer in incomingTransfers"
                          :key="transfer.id">
                          <td class="text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ transfer.datetime | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ transfer.datetime | moment("hh:mm") }}</span>
                          </td>
                          <td>
                            {{ transfer.company }}
                          </td>
                          <td class="text-nowrap">
                            {{ transfer.amount | commaValue }}
                          </td>
                          <td class="text-nowrap">
                            {{ transfer.request_fee_by | beautifiedFee }}
                          </td>
                          <td class="text-nowrap">
                            #{{ transfer.id }}
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <div class="d-flex align-items-center">
                              <app-badge
                                :text="transfer.status_label"
                                :type="badgeType(transfer.status)" />
                              <i
                                v-if="transfer.status === -10 && transfer.decline_reason"
                                v-tippy
                                :content="transfer.decline_reason"
                                class="fas fa-question-circle ml-50 clr-info cursor-help" />
                            </div>
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ transfer.datetime_update | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ transfer.datetime_update | moment("hh:mm") }}</span>
                          </td>
                          <td>
                            <div
                              v-if="transfer.status === 0"
                              class="d-flex justify-content-end align-items-center">
                              <button
                                v-waves
                                v-tippy
                                content="Accept and Pay"
                                class="btn btn-success btn-small mr-1"
                                @click="storeSelectedTransfer(transfer), toggleModal('show', 'accept')">
                                <i class="fas fa-check mr-50" />
                                <span>Accept</span>
                              </button>
                              <button
                                v-waves
                                v-tippy
                                content="Decline"
                                class="btn btn-danger btn-iconed btn-small"
                                @click="storeSelectedTransfer(transfer), toggleModal('show', 'decline')">
                                <i class="fas fa-ban" />
                              </button>
                            </div>
                            <div
                              v-else
                              class="d-flex justify-content-end align-items-center">
                              <a
                                v-if="transfer.reference"
                                v-tippy
                                :content="transfer.reference"
                                class="btn btn-muted btn-iconed btn-small cursor-help">
                                <i class="fas fa-comment-alt-dots" />
                              </a>
                              <tippy
                                :ref="`tippy-${transfer.blockchain_hash}`"
                                v-if="transfer.blockchain_hash && transfer.status === 10"
                                interactive
                                placement="top"
                                theme="light html headed"
                                trigger="click"
                                @show="preselectInput(transfer.blockchain_hash), toggleTriggerState(transfer.blockchain_hash, true)"
                                @hide="toggleTriggerState(transfer.blockchain_hash, false)">
                                <template v-slot:trigger>
                                  <button
                                    :ref="`trigger-${transfer.blockchain_hash}`"
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
                                        :ref="`input-${transfer.blockchain_hash}`"
                                        type="text"
                                        class="input__field input__field--tiny"
                                        autocomplete="off"
                                        v-model="transfer.blockchain_hash" />
                                    </div>
                                    <button
                                      v-waves
                                      class="btn btn-tiny btn-info ml-50"
                                      @click="copyHash(transfer.blockchain_hash)">
                                      <span>Copy</span>
                                      <i class="fal fa-copy ml-50" />
                                    </button>
                                  </div>
                                </div>
                              </tippy>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td
                            :colspan="incomingTransfersColumns.length"
                            class="empty">
                            You don't have any Incoming Settlement Requests
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <button
                    v-if="incomingTransfersStats.next && incomingTransfersStats.next > 0"
                    :disabled="incomingTransfersResponse"
                    class="btn btn-primary btn-small btn-center"
                    @click="getTransfers({ type: 'incoming', startFrom: incomingTransfersStats.next, mode: 'push' })">
                    <span
                      v-if="!incomingTransfersResponse"
                      class="mr-50 d-none d-sm-block">
                      Load More
                    </span>
                    <span
                      v-else
                      class="btn__loading">
                      Please Wait
                    </span>
                    <i
                      v-if="!incomingTransfersResponse"
                      class="fas fa-chevron-circle-down" />
                  </button>
                </div>

                <!-- OUTGOING TRANSFERS -->
                <div
                  v-if="selectedTab === 'outgoingTransfers'"
                  key="outgoingTransfers"
                  class="tabs__content">
                  <div class="table-responsive">
                    <table class="table table-accented">
                      <thead>
                        <tr>
                          <th
                            v-for="(column, index) in outgoingTransfersColumns"
                            :key="column.title"
                            :class="index + 1 === outgoingTransfersColumns.length ? 'text-right' : ''"
                            :width="column.width ? column.width : 'auto'">
                            <span>{{ column.title }}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody v-if="outgoingTransfers.length > 0">
                        <tr
                          v-for="transfer in outgoingTransfers"
                          :key="transfer.id">
                          <td class="text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ transfer.datetime | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ transfer.datetime | moment("hh:mm") }}</span>
                          </td>
                          <td>
                            {{ transfer.company }}
                          </td>
                          <td class="text-nowrap">
                            {{ transfer.amount | commaValue }}
                          </td>
                          <td class="text-nowrap">
                            #{{ transfer.id }}
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <app-badge
                              :text="transfer.status_label"
                              :type="badgeType(transfer.status)" />
                          </td>
                          <td class="text-capitalize text-nowrap">
                            <i class="far fa-calendar-alt mr-25 clr-black" />
                            <span>{{ transfer.datetime_update | moment("DD.MM.YYYY") }}</span>
                            <i class="far fa-clock ml-75 mr-25 clr-black" />
                            <span>{{ transfer.datetime_update | moment("hh:mm") }}</span>
                          </td>
                          <td>
                            <div class="d-flex justify-content-end align-items-center">
                              <a
                                v-if="transfer.reference"
                                v-tippy
                                :content="transfer.reference"
                                class="btn btn-muted btn-iconed btn-small cursor-help">
                                <i class="fas fa-comment-alt-dots" />
                              </a>
                              <tippy
                                :ref="`tippy-${transfer.blockchain_hash}`"
                                v-if="transfer.blockchain_hash && transfer.status === 10"
                                interactive
                                placement="top"
                                theme="light html headed"
                                trigger="click"
                                @show="preselectInput(transfer.blockchain_hash), toggleTriggerState(transfer.blockchain_hash, true)"
                                @hide="toggleTriggerState(transfer.blockchain_hash, false)">
                                <template v-slot:trigger>
                                  <button
                                    :ref="`trigger-${transfer.blockchain_hash}`"
                                    v-waves
                                    v-tippy
                                    content="Show Blockchain Hash"
                                    class="btn btn-info btn-iconed btn-small ml-1 ml-1">
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
                                        :ref="`input-${transfer.blockchain_hash}`"
                                        type="text"
                                        class="input__field input__field--tiny "
                                        autocomplete="off"
                                        v-model="transfer.blockchain_hash" />
                                    </div>
                                    <button
                                      v-waves
                                      class="btn btn-tiny btn-info ml-50"
                                      @click="copyHash(transfer.blockchain_hash)">
                                      <span>Copy</span>
                                      <i class="fal fa-copy ml-50" />
                                    </button>
                                  </div>
                                </div>
                              </tippy>
                              <a
                                v-if="transfer.status >= 5"
                                :href="downloadLink(transfer.id, 'opc')"
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
                            :colspan="outgoingTransfersColumns.length"
                            class="empty">
                            You don't have Outgoing Settlement History
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <button
                    v-if="outgoingTransfersStats.next && outgoingTransfersStats.next > 0"
                    :disabled="outgoingTransfersResponse"
                    class="btn btn-primary btn-small btn-center"
                    @click="getTransfers({ type: 'outgoing', startFrom: outgoingTransfersStats.next, mode: 'push' })">
                    <span
                      v-if="!outgoingTransfersResponse"
                      class="mr-50 d-none d-sm-block">
                      Load More
                    </span>
                    <span
                      v-else
                      class="btn__loading">
                      Please Wait
                    </span>
                    <i
                      v-if="!outgoingTransfersResponse"
                      class="fas fa-chevron-circle-down" />
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </app-card>
      </div>
    </div>

    <modal
      name="confirm"
      :width="450"
      :height="'auto'"
      :scrollable="true"
      :shiftY="0.2"
      @closed="resetSelectedTransfer()">
      <div
        class="vm--modal-close d-none d-xs-flex"
        @click="toggleModal('hide')">
        <i class="fas fa-times fa-lg" />
      </div>
      <div v-if="transferIsSelected">
        <div v-if="selectedTransfer.modalType === 'accept'">
            <h2 class="text-center">
            Confirm Transfer
          </h2>
          <p class="text-center mb-3">Review transfer and confirm it.</p>
        </div>
        <div v-else>
            <h2 class="text-center">
            Decline Transfer
          </h2>
          <p class="text-center mb-3">Review transfer and decline it.</p>
        </div>
        <h4 class="mb-1">
          Transfer Details
        </h4>
        <ul
          class="mb-2 p-0">
          <li class="d-flex align-items-center mb-25">
            <span>Name</span>
            <span class="ml-auto clr-primary text-truncate maxw-50">{{ selectedTransfer.fullname }}</span>
          </li>
          <li class="d-flex align-items-center mb-25">
            <span>Company</span>
            <span
              :content="selectedTransfer.company"
              v-tippy
              class="ml-auto clr-primary text-truncate maxw-50">{{ selectedTransfer.company }}</span>
          </li>
          <li class="d-flex align-items-center mb-25">
            <span>Transfer Amount</span>
            <span class="ml-auto clr-primary">{{ selectedTransfer.amount | commaValue }}</span>
          </li>
          <li class="d-flex align-items-center mb-25">
            <span>Fee Method</span>
            <span class="ml-auto clr-primary">{{ selectedTransfer.request_fee_by | beautifiedFee }}</span>
          </li>
          <li class="d-flex align-items-center mb-25">
            <span>Fee Amount</span>
            <span class="ml-auto clr-primary">{{ selectedTransfer.feeValue | commaValue }}</span>
          </li>
          <li class="d-flex align-items-center mb-25">
            <span>Transit Time</span>
            <span class="ml-auto clr-primary">Instant</span>
          </li>
        </ul>
        <div v-if="selectedTransfer.reference.length > 0">
          <h4>
            Note
          </h4>
          <p class="font-italic small">{{ selectedTransfer.reference }}</p>
        </div>
        <ul class="mb-2 p-0">
          <hr>
          <li class="d-flex align-items-center mb-25">
            <span class="pr-1">Total</span>
            <span class="ml-auto text-right font-weight-500 clr-primary h4">{{ selectedTransfer.amount | commaValue }}</span>
          </li>
        </ul>
        <div
          v-if="selectedTransfer.modalType === 'decline'"
          class="input">
          <label
            for="decline_reason"
            class="input__label d-flex align-items-center flex-wrap">
            <span>Decline Reason</span>
          </label>
          <textarea
            name="decline_reason"
            ref="decline_reason"
            id="decline_reason"
            rows="3"
            maxlength="160"
            data-type="textarea"
            class="input__field"
            placeholder="Type decline reason here..."
            v-model="userData.decline_reason" />
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button
            v-waves
            class="btn btn-secondary btn-small mr-50 w-50"
            @click="toggleModal('hide')">
            <i class="fas fa-ban mr-50" />
            <span>Cancel</span>
          </button>
          <button
            v-if="selectedTransfer.modalType === 'accept'"
            v-waves
            class="btn btn-success btn-small w-50 ml-50"
            @click="acceptTransfer(), toggleModal('hide')">
            <i class="fas fa-check mr-50" />
            <span>Transfer</span>
          </button>
          <button
            v-else
            v-waves
            class="btn btn-danger btn-small w-50 ml-50"
            @click="declineTransfer(), toggleModal('hide')">
            <i class="fas fa-check mr-50" />
            <span>Decline</span>
          </button>
        </div>
      </div>
    </modal>

    <app-preloader :show="outgoingTransfersResponse || incomingTransfersResponse || newTransferResponse || declineTransferResponse " />
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  name: 'TransferList',
  data() {
    return {
      outgoingTransfersColumns: [
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

      incomingTransfersColumns: [
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

      selectedTransfer: {},

      selectedTab: 'incomingTransfers',

      userData: {
        decline_reason: '',
      },
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
    outgoingTransfersResponse() {
      return this.$store.state.transfer.responses.outgoingTransfer
    },

    incomingTransfersResponse() {
      return this.$store.state.transfer.responses.incomingTransfer
    },

    outgoingTransfers() {
      return this.$store.state.transfer.transfers.outgoing.records
    },

    incomingTransfers() {
      return this.$store.state.transfer.transfers.incoming.records
    },

    outgoingTransfersStats() {
      return this.$store.state.transfer.transfers.outgoing.stats
    },

    incomingTransfersStats() {
      return this.$store.state.transfer.transfers.incoming.stats
    },

    user() {
      return this.$store.state.auth.user
    },

    transferIsSelected() {
      return Object.keys(this.selectedTransfer).length > 0
    },

    feeTypes() {
      return [
        {
          type: 0,
          value: this.user.fees.payment,
        },
        {
          type: 1,
          value: this.user.fees.payment / 2,
        },
        {
          type: 2,
          value: 0,
        },
      ]
    },

    newTransferResponse() {
      return this.$store.state.transfer.responses.newTransfer
    },

    declineTransferResponse() {
      return this.$store.state.transfer.responses.declineTransfer
    },
  },
  mounted() {
    eventBus.$on('showToast/TransferList', data => { this.showToast(data) })

    this.getTransfers({
      type: 'outgoing',
      startFrom: 0,
      mode: 'push',
    })

    this.getTransfers({
      type: 'incoming',
      startFrom: 0,
      mode: 'push',
    })
  },
  beforeDestroy() {
    eventBus.$off('showToast/TransferList')

    this.clearTransfers()
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

    getTransfers({ type, startFrom, mode }) {
      this.$store.dispatch('transfer/getTransfers', {
        type: type,
        startFrom: startFrom,
        mode: mode,
      })
    },

    clearTransfers() {
      this.$store.dispatch('transfer/clearTransfers', 'outgoing')
      this.$store.dispatch('transfer/clearTransfers', 'incoming')
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

    toggleModal(action, type) {
      action === 'show' ? this.$modal.show('confirm') : this.$modal.hide('confirm')
      type !== undefined ? this.selectedTransfer.modalType = type : false
    },

    storeSelectedTransfer(transfer) {
      this.selectedTransfer = transfer
      this.selectedTransfer.feeValue = this.feeTypes.filter(i => i.type === transfer.request_fee_by)[0].value
    },

    resetSelectedTransfer() {
      this.selectedTransfer = {}
    },

    openTab(name) {
      this.selectedTab = name
    },

    acceptTransfer() {
      // Back-end requires exactly this format of data 🤷‍♂️
      let formData = new FormData()

      formData.append('form[request_id]', this.selectedTransfer.id)

      this.$store.dispatch('transfer/newTransfer', {
        formData: formData,
        type: 'accept',
      })
    },

    declineTransfer() {
      // Back-end requires exactly this format of data 🤷‍♂️
      let formData = new FormData()

      formData.append('form[request_id]', this.selectedTransfer.id)
      formData.append('form[decline_reason]', this.userData.decline_reason)

      this.$store.dispatch('transfer/declineTransfer', formData)
    },
  }
}
</script>
