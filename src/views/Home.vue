<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
      <img
        :src="require('@/assets/images/logo.png')"
        class="mb-75 no-select"
        alt="logo">
      <h1 class="mt-0">
        <span class="clr-primary">Night</span>
        <span class="clr-success">Vue</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
