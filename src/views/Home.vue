<template>
  <div>
    <h1 class="selector">Onest Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, laborum.</h1>
    <pre>
      {{ windowSize }}
    </pre>
    <pre>
      {{ windowScroll }}
    </pre>
    <pre>
      {{ currentBreakpoint }}
    </pre>
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
