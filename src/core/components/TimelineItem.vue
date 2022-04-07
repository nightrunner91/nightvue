<template>
  <li
    class="timeline__item d-flex pb-1"
    :class="[classNames]">
    <div class="timeline__decoration d-flex justify-content-center">
      <div class="timeline__line position-absolute bg-grey" />
      <div
        class="timeline__circle radius-circle mt-25 d-flex justify-content-center align-items-center"
        :class="`bg-${variant}`">
        <div
          class="timeline__backdrop position-absolute radius-circle opacity-30"
          :class="`bg-${variant}`" />
        <i
          v-if="icon"
          :class="`fas fa-xs fa-${icon} clr-black`" />
      </div>
    </div>
    <div class="timeline__content flex-grow-1 pl-1">
      <slot />
    </div>
  </li>
</template>

<script>
export default {
  name: 'TimelineItem',
  props: {
    classNames: {
      type: Array,
      default: () => [],
    },
    variant: {
      type: String,
      default: () => 'primary',
    },
    icon: {
      type: String,
      default: () => undefined,
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
