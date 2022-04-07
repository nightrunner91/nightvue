<template>
  <ul class="wizard m-0 p-0 d-flex justify-content-center align-items-center no-select flex-wrap">
    <li
      v-for="(step, index) in steps"
      :key="`wizard-step-${index}`"
      class="wizard__item d-flex justify-content-center align-items-center mb-1"
      :class="[currentStep === index + 1 ? 'wizard__item--current' : '', index + 1 < currentStep ? 'wizard__item--passed' : '']"
      :style="stepStyle">
      <span class="wizard__step d-flex justify-content-center align-items-center font-weight-500 radius-base mr-50">{{ index + 1 }}</span>
      <span class="wizard__name font-weight-500 text-capitalize">{{ step.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Wizard',
  props: {
    steps: {
      type: Array,
      required: true,
      default: () => [],
    },
    currentStep: {
      type: Number,
      required: true,
      default: () => 1
    },
  },
  computed: {
    stepStyle() {
      return `min-width: ${100 / this.steps.length}%`
    }
  },
}
</script>
