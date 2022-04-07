<template>
  <div
    v-tippy="{ theme: 'light' }"
    :content="`<div class='d-flex align-items-center'>Withdrawable Balance<span class='d-inline-flex align-items-center font-weight-500 clr-info ml-50'><svg class='fill-info icon-10 mr-25'><use xlink:href='#botcoin' /></svg>${this.$options.filters.commaValue(user.withdrawable_balance)}</span></div>`"
    class="balance d-flex align-items-center radius-large font-weight-500 mr-1 bg-white">
    <div class="balance__left d-flex align-items-center pl-1 pr-1 pr-sm-75 radius-tl-large radius-bl-large radius-tr-large radius-tr-sm-zero radius-br-large radius-br-sm-zero bg-dark clr-white">
      <svg-icon
        icon="botcoin"
        :sizes="[16, 16]"
        :classNames="['', 'fill-white', 'mr-25']" />
      {{ user.balance | commaValue(4) }}
    </div>
    <div class="balance__right d-none d-sm-flex align-items-center px-1 radius-large">
      Balance
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserBalance',
  props: {

  },
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
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
}
</script>
