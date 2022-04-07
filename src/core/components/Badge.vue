<template>
  <div
    class="badge"
    :class="[classNames, typeClass, sizeClass]">
    <i
      v-if="icon"
      class="fas fa-xs opacity-85 mr-25"
      :class="icon" />
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    text: {
      type: String,
      required: true,
      default: () => 'Badge',
    },
    icon: {
      type: String,
      default: () => undefined,
    },
    classNames: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: () => 'primary',
    },
    size: {
      type: String,
      default: () => 'medium',
    },
  },
  data() {
    return {

    }
  },
  computed: {
    typeClass() {
      return `badge-${this.type.replace(/['"]+/g, '')}`
    },

    sizeClass() {
      return `badge-${this.size.replace(/['"]+/g, '')}`
    }
  },
  methods: {

  },
  mounted() {

  },
}
</script>
