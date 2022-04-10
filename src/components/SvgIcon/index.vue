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
        default: ''
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
  .svg-icon {
    fill: currentColor;
    overflow: hidden;
  }
</style>
