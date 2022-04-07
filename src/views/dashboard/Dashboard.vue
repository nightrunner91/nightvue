<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">
        <app-card>
          <h2 class="mb-3">
            <span class="clr-dark">{{ greetings }}, </span>
            <router-link
              :to="{ name: 'Account'}"
              tag="a">
              {{ user.firstname }} {{ user.lastname }}
            </router-link>
            <span class="clr-dark">👋</span></h2>
          <h3 class="mb-1">
            <i class="fas fa-book-open mr-75 clr-primary opacity-85" />
            <span class="clr-dark">Starting Guide</span>
          </h3>
          <!-- eslint-disable  vue/max-attributes-per-line -->
          <accordion>
            <accordion-item>
              <template v-slot:title>
                What is the BoTCoin System?
              </template>
              <template v-slot:content>
                <p>The BoTCoin System is a platform on which BoTCoins are minted, transferred and burnt. A BoTCoin  (BoT) is equal to one US Dollar (US$) and is a virtual financial asset that has been created to be used as currency by the telecoms trade. BoTCoin Services Limited (BSL), the issuer of BoTCoins and the operator of the BoTCoin System is regulated by the Malta Financial Services Authority (“MFSA”) the Maltese financial service regulator.</p>
              </template>
            </accordion-item>

            <accordion-item>
              <template v-slot:title>
                What is a BoTCoin Account?
              </template>
              <template v-slot:content>
                <p>A BoTCoin account is an account where one can deposit US Dollars to be converted into BoTCoins. BoTCoins can be used to pay other BoTCoin Account holders and can be converted back to US Dollars to be withdrawn back to one’s nominated bank account.</p>
              </template>
            </accordion-item>

            <accordion-item>
              <template v-slot:title>
                Who can use BoTCoins?
              </template>
              <template v-slot:content>
                <p>Only members of Bank of Telecom (<a href="http://www.bankoftelecom.com/" target="_blank">www.bankoftelecom.com</a>) are allowed to apply to open a BoTCoin Account.</p>
              </template>
            </accordion-item>

            <accordion-item>
              <template v-slot:title>
                What are the benefits of using BoTCoin?
              </template>
              <template v-slot:content>
                <p>With BoTCoin you save on you transaction fees, you speed up payments and receipts and you earn as you go!</p>
                <p>Benefits include:</p>
                <ul>
                  <li>Transfer fee of $30,</li>
                  <li>Withdrawal or Deposit fee of $60,</li>
                  <li>Joining Bonus of 1% of initial deposit (for an initial Deposit that doesn’t exceed US$50,000),</li>
                  <li>Loyalty Bonus of 0.25% per month on average BoTCoin deposit value,</li>
                  <li>BoTCoin transaction are instantaneous,</li>
                  <li>BoTCoin Deposits and Withdrawals are normally processed within one business day,</li>
                  <li>BoTCoin is open for Transactions all year round, 24/7.</li>
                </ul>
              </template>
            </accordion-item>

            <accordion-item>
              <template v-slot:title>
                How secure is BoTCoin?
              </template>
              <template v-slot:content>
                <p>BoTCoin Services Limited (BSL) is regulated by the Malta Financial Services Authority (MFSA).</p>
                <p>Your admin key sits outside the network and is your personal responsibility. Never share your credentials with a third party.</p>
              </template>
            </accordion-item>

            <accordion-item>
              <template v-slot:title>
                How do I open a BoTCoin Account?
              </template>
              <template v-slot:content>
                <p>Existing members of Bank of Telecom may Opt-In to open a BoTCoin Account by pressing a button on their Bank of Telecom platform. Go to <a href="http://www.bankoftelecom.com/" target="_blank">www.bankoftelecom.com</a> log in and press Opt-In to join BoTCoin. Acceptance to open a BoTCoin Account is subject to successfully passing BoTCoin Services Limited’s due diligence process. </p>
                <p>Contact us directly at <a href="https://www.botcoin.mt/" target="_blank">www.botcoin.mt</a> for more information.</p>
              </template>
            </accordion-item>

            <accordion-item>
              <template v-slot:title>
                How do I convert US Dollars (USD) into BoTCoins (BoT)?
              </template>
              <template v-slot:content>
                <ul>
                  <li>Click on the DEPOSIT tab and enter your Deposit value. Follow the payment instructions that may be downloaded,</li>
                  <li class="font-weight-500">Please be sure to add the identification number 15035 in the beneficiary note,</li>
                  <li>Once the payment is done, upload payment confirmation once received by you from your bank,</li>
                  <li>Your BoTCoin account shall be credited upon receipt of funds.</li>
                </ul>
              </template>
            </accordion-item>

            <accordion-item>
              <template v-slot:title>
                How do I pay another BoTCoin account?
              </template>
              <template v-slot:content>
                <ul>
                  <li>Click on the TRANSFER tab and type the number of BoTCoins you would like to pay,</li>
                  <li>Type the name of the beneficiary and select it,</li>
                  <li>Click ‘Transfer’,</li>
                  <li>Add the “beneficiary note” into the pop-up</li>
                  <li>You will receive an email confirming the details of the transfer.</li>
                </ul>
              </template>
            </accordion-item>

            <accordion-item>
              <template v-slot:title>
                How do I Withdraw US Dollars (USD) to my bank account?
              </template>
              <template v-slot:content>
                <ul>
                  <li>Click on the WITHDRAW tab and click on ‘+ Make a new Withdrawal’ button,</li>
                  <li>Add withdrawal value,</li>
                  <li>The Withdrawal will initially be shown as ‘Pending’,</li>
                  <li>You will receive an email confirming the details of the withdrawal.</li>
                </ul>
                <p class="font-italic">Note: Funds received in your BoTCoin account and any joining or loyaty bonuses can be converted into US Dollars (USD) and can be withdrawn at any time. Your deposits can be used for transactions at any time. If you make a deposit to your BoTCoin account, withdrawal of the funds deposited cannot be made before the lapse of 30 days.</p>
              </template>
            </accordion-item>

            <accordion-item>
              <template v-slot:title>
                What is the email based support and how does it work?
              </template>
              <template v-slot:content>
                <p>BoTCoin Services Limited is never far away when you need a helping hand. You can use the support page to contact us by filling the form ‘Contact BoTCoin® Support Team’ <router-link :to="{ name: 'Support' }">here</router-link>.</p>
                <p>We will strive to contact you via e-mail within 24 business hours with a resolution or next steps if required.</p>
              </template>
            </accordion-item>
          </accordion>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    user() {
      return this.$store.state.auth.user
    },

    greetings() {
      const variants = ['Greetings', 'Hi', 'Hello', 'Howdy', 'Bonjour', 'Hey', 'Welcome', 'Welcome back']

      return variants[Math.floor(Math.random() * variants.length)]
    },
  },
  methods: {

  }
}
</script>
