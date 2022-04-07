<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-wizard
          :steps="depositSteps"
          :currentStep="2" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <h3 class="clr-primary text-center mb-1">
            Download Instructions
          </h3>
          <p class="text-center mb-3">Upload confirmation page once you done deposit.</p>
          <h4 class="mb-1">
            Deposit Details
          </h4>
          <ul class="mb-3 p-0">
            <li class="d-flex align-items-center mb-25">
              <span>Amount</span>
              <span class="ml-auto clr-primary">${{ newDeposit.amount }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>ID</span>
              <span class="ml-auto clr-primary">#{{ newDeposit.id }}</span>
            </li>
          </ul>
          <a
            :href="downloadLink"
            target="_blank"
            v-waves
            class="btn btn-primary btn-medium btn-block mb-1">
            Click Here to Download
          </a>
          <router-link
            :to="{ name: 'DepositList'}"
            tag="a"
            class="btn btn-primary-outline btn-medium btn-block">
            Go Back to Deposits
          </router-link>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
import { despositSteps } from '@/router/wizard'

export default {
  name: 'DepositInstructions',
  data() {
    return {
      depositSteps: [],
    }
  },
  computed: {
    newDeposit() {
      return this.$store.state.deposit.newDeposit
    },

    downloadLink() {
      return `/payments/invoice-opc.php?transaction_id=${this.newDeposit.id}`
    },
  },
  created() {
    this.depositSteps = despositSteps
  },
  mounted() {
    this.reRoute()
  },
  beforeDestroy() {

  },
  methods: {
    reRoute() {
      if (Object.keys(this.newDeposit).length === 0) {
        this.$router.push({ name: 'DepositNew' }).catch(err => {
          console.error(err)
        })
      }
    },
  }
}
</script>
