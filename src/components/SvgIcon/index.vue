<template>
  <svg
    class="icon"
    :class="iconSize"
    aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>
  export default {
    name: 'SvgIcon',
    props: {
      icon: {
        type: String,
        required: true
      },

      size: {
        type: String,
        default: 'md'
      }
    },
    computed: {
      iconName() {
        return `#icon-${this.icon}`
      },

      iconSize() {
        if (this.size) {
          return 'icon-size-' + this.size
        } else {
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  .icon {
    display: inline-block;
    flex-shrink: 0;
    fill: currentColor;
    overflow: hidden;
    vertical-align: middle;
  }
</style>
