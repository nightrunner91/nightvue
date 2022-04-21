<template>
  <prism
    :language="language"
    class="code-example">
    <slot name="snippet" />
  </prism>
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'vue-prism-component'

export default {
  name: 'CodeExample',
  components: { Prism },
  props: {
    language: {
      type: String,
      default: () => 'markup',
    },
  },
  data() {
    return {

    }
  },

}
</script>

<style lang="scss">
@import "@/styles/core/globals";

.code-example {
  margin: 2rem 0 !important;
  padding: 1px 2rem !important;

  @include background('shade', $rate: 18);

  code {
    @include background('shade', $rate: 18);
  }
}
</style>
