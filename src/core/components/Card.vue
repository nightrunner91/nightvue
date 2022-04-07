<template>
  <article
    class="card"
    :class="[classNames, `card-${type}`, `card-${color}`]">
    <div
      v-if="this.$slots.header"
      class="card__title">
      <slot name="header" />
    </div>
    <div
      class="card__body"
      :class="[bodyClassNames]">
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    type: {
      type: String,
      default: () => 'basic',
    },
    color: {
      type: String,
      default: () => 'primary',
    },
    classNames: {
      type: Array,
      default: () => [],
    },
    bodyClassNames: {
      type: Array,
      default: () => [],
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
