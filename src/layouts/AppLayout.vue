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
const defaultLayout = 'AppLayoutFull'

export default {
  name: "AppLayout",
  data() {
    return {
      scrollPosition: 0,
    }
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout
      return () => import(`@/layouts/${layout}.vue`)
    },

    layoutClassnames() {
      const layout = this.$route.meta.layout || defaultLayout

      if (layout === 'AppLayoutFull') return 'layout--full'
      if (layout === 'AppLayoutDefault') return 'layout--default'
      if (layout === 'AppLayoutWizard') return 'layout--wizard'

      return null
    },
  },
}
</script>
