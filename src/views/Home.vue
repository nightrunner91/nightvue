<template>
  <div class="d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
    <img
      :src="require('@/assets/images/logo.png')"
      class="mb-75 no-select"
      alt="logo">
    <h1 class="mt-0">
      <span class="clr-primary">Night</span>
      <span class="clr-success">Vue</span>
    </h1>
    <div class="mt-3 d-flex align-items-center">
      <div
        v-for="color in color"
        :key="color"
        class="d-flex flex-column align-items-center">
        <div
          v-for="opacity in opacities"
          :key="opacity"
          :class="`bg-${color}-opacity-${opacity}`"
          class="icon-size-48 m-50 shadow-level-1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      color: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
      opacities: [100, 75, 50, 25],
    }
  },
}
</script>

<style lang="scss">
@import "@/styles/@core/globals.scss";

.selector {
  color: color('primary', $style: 'dark', $level: 2, $opacity: 25);
}
</style>
