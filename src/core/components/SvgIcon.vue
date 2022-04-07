<template>
  <svg
    class="icon"
    :class="[classNames]"
    :width="sizes[0]"
    :height="sizes[1]">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
export default {
  name: 'SVGIcon',
  props: {
    icon: {
      type: String,
      required: true,
      default: () => '',
    },
    classNames: {
      type: Array,
      default: () => [],
    },
    sizes: {
      type: Array,
      default: () => [24, 24],
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
