<template>
  <ul
    class="timeline p-0 m-0 no-overflow"
    :class="[classNames]">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'Timeline',
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
