<template>
  <div
    class="preloader d-flex justify-content-center align-items-center"
    :class="{'preloader--revealed' : show }">
    <div class="spinner spinner-lg spinner-basic spinner-secondary">
      <div class="spinner__inner">
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  props: {
    show: Boolean,
  },
}
</script>
