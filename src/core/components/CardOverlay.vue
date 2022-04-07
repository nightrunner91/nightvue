<template>
  <div
    class="card-overlay"
    :class="[classNames]">
    <div class="loader">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardOverlay',
  props: {
    classNames: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {

    }
  },
  computed: {
    
  },
  methods: {

  },
  mounted() {

  },
}
</script>
