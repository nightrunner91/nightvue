<template>
  <div
    class="scrolltop position-fixed d-flex justify-content-center align-items-center radius-base cursor-pointer"
    :class="{ 'scrolltop--visible' : curentPosition > triggerPosition }"
    @click="scrollToTop">
    <i class="far fa-arrow-to-top fa-2x scrolltop__icon" />
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',
  props: {

  },
  data() {
    return {
      curentPosition: 0,
      triggerPosition: 600,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },

    watchSctollValue() {
      this.curentPosition = window.scrollY
    },
  },
  mounted() {
    window.addEventListener('scroll', this.watchSctollValue)
  },
}
</script>
