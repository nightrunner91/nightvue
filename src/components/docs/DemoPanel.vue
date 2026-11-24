<template>
  <figure class="demo-panel">
    <figcaption class="demo-panel__head">
      <span class="demo-panel__title">{{ title }}</span>
      <span
        v-if="note"
        class="demo-panel__note">{{ note }}</span>
      <slot name="tools" />
    </figcaption>

    <div
      class="demo-panel__body"
      :class="bodyClass">
      <slot />
    </div>
  </figure>
</template>

<script>
export default {
  name: 'DemoPanel',

  props: {
    title: {
      type: String,
      required: true,
    },

    note: {
      type: String,
      default: '',
    },

    bodyClass: {
      type: String,
      default: '',
    },
  },
}
</script>
