<template>
  <div
    :is="tag"
    :id="id"
    class="d-flex align-items-center heading">
    <span>{{ title }}</span>
    <a
      :href="`#${id}`"
      class="d-flex justify-content-center align-items-center">
      <SvgIcon
        :icon="'link'"
        :size="tag === 'h1' ? 24 : 18"
        class="fill-dark cursor-pointer"
        :class="tag === 'h1' ? 'ml-1 mt-75' : 'ml-50'" />
    </a>
  </div>
</template>
 
<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  name: 'Heading',
  components: { SvgIcon },
  props: {
    tag: {
      type: String,
      required: true,
      default: 'h1',
    },
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  },
  computed: {
    
  }
}
</script>
 
<style lang="scss">
.heading {
  svg {
    opacity: 0;
    transition: .3s ease;

    &:hover {
      opacity: .75 !important;
    }
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }

  a {
    text-decoration: none !important;

    &::before,
    &:after {
      display: none !important;
    }
  }
}
</style>
