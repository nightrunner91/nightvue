<template>
  <ul
    class="accordion"
    :class="[classNames]">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'Accordion',
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
  methods: {

  },
  mounted() {

  },
}
</script>
