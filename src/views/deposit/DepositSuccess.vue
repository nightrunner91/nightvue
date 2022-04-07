<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-wizard
          :steps="confirmationSteps"
          :currentStep="2" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <h2 class="text-center d-flex justify-content-center align-items-center mb-1">
            <span>Success</span>
            <i class="fas fa-check fa-xs ml-50" />
          </h2>
          <p class="text-center mb-3">Your payment will be reflected in your Wallet in next 2 hours. If not, please contact support.</p>
          <div class="d-flex align-items-center mb-1">
            <h4 class="m-0">
              Deposit Details
            </h4>
            <a
              :href="downloadLink"
              target="_blank"
              v-waves
              class="btn btn-primary-flat btn-iconed btn-small ml-auto">
              <i class="fas fa-print" />
            </a>
          </div>
          <ul class="mx-0 mb-2 p-0">
            <li class="d-flex mb-25">
              <span class="pr-1">ID</span>
              <span class="ml-auto text-right clr-primary">#{{ uploadData.transactionId }}</span>
            </li>
            <li class="d-flex mb-25">
              <span class="pr-1">Amount</span>
              <span class="ml-auto text-right clr-primary">${{ uploadData.amount }}</span>
            </li>
            <li class="d-flex mb-1">
              <span class="pr-1">Filename</span>
              <span
                v-tippy
                :content="uploadData.fileName"
                class="ml-auto text-right clr-primary text-truncate"
                style="max-width: 120px; cursor: help;">{{ uploadData.fileName }}</span>
            </li>
            <hr>
            <li class="d-flex align-items-center mb-25">
              <span class="pr-1">Cumulative in BOT Wallet <br />after Verification</span>
              <span class="ml-auto text-right font-weight-500 clr-primary h4">${{ uploadData.balance_after }}</span>
            </li>
          </ul>
          <router-link
            :to="{ name: 'DepositList'}"
            tag="a"
            class="btn btn-primary btn-medium btn-block">
            Go Back to Deposits
          </router-link>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
import { confirmationSteps } from '@/router/wizard'

export default {
  name: 'DepositSuccess',
  data() {
    return {
      confirmationSteps: [],
    }
  },
  computed: {
    uploadData() {
      return this.$store.state.deposit.uploadData
    },

    downloadLink() {
      return `/payments/invoice-opc.php?transaction_id=${this.uploadData.transactionId}`
    },
  },
  created() {
    this.confirmationSteps = confirmationSteps
  },
  mounted() {
    this.redirectToDeposits()
  },
  methods: {
    redirectToDeposits() {
      if (this.uploadData.transactionId === undefined) {
        this.$router.push({ name: 'Deposit' }).catch(err => {
          console.error(err)
        })
      }
    },
  }
}
</script>
