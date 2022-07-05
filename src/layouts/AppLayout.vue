<template>
  <transition
    appear
    name="page"
    mode="out-in">
    <component
      :is="layout"
      class="layout"
      :class="[layoutClassnames]">
      <slot />
    </component>
  </transition>
</template>

<script>
const defaultLayout = 'AppLayoutDefault'

export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout
      return () => import(`@/layouts/${layout}.vue`)
    },

    layoutClassnames() {
      const layout = this.$route.meta.layout || defaultLayout

      if (layout === 'AppLayoutFull') return 'layout--full'
      if (layout === 'AppLayoutDefault') return 'layout--default'

      return null
    },
  },
}
</script>
