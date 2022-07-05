<template>
  <div class="bg-gray-1 fill-warning d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
    <div class="flex-center my-2">
      <div class="bg-primary-dark-5 icon-size-48"></div>
      <div class="bg-primary-dark-4 icon-size-48"></div>
      <div class="bg-primary-dark-3 icon-size-48"></div>
      <div class="bg-primary-dark-2 icon-size-48"></div>
      <div class="bg-primary-dark-1 icon-size-48"></div>
      <div class="bg-primary icon-size-48"></div>
      <div class="bg-primary-light-1 icon-size-48"></div>
      <div class="bg-primary-light-2 icon-size-48"></div>
      <div class="bg-primary-light-3 icon-size-48"></div>
      <div class="bg-primary-light-4 icon-size-48"></div>
      <div class="bg-primary-light-5 icon-size-48"></div>
    </div>
    <div class="flex-center my-2">
      <div class="bg-primary-desat-5 icon-size-48"></div>
      <div class="bg-primary-desat-4 icon-size-48"></div>
      <div class="bg-primary-desat-3 icon-size-48"></div>
      <div class="bg-primary-desat-2 icon-size-48"></div>
      <div class="bg-primary-desat-1 icon-size-48"></div>
      <div class="bg-primary icon-size-48"></div>
      <div class="bg-primary-sat-1 icon-size-48"></div>
      <div class="bg-primary-sat-2 icon-size-48"></div>
      <div class="bg-primary-sat-3 icon-size-48"></div>
      <div class="bg-primary-sat-4 icon-size-48"></div>
      <div class="bg-primary-sat-5 icon-size-48"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    windowSize() {
      return this.$store.state.config.windowSize
    },

    windowScroll() {
      return this.$store.state.config.windowScroll
    },

    currentBreakpoint() {
      return this.$store.state.config.currentBreakpoint
    },
  },
  methods: {

  }
}
</script>
