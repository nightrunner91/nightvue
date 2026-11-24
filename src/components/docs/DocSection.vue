<template>
  <section
    :id="id"
    class="doc-section">
    <header class="doc-section__head">
      <div class="doc-section__meta">
        <span class="doc-section__index">{{ section.index }}</span>
        <a
          class="doc-section__permalink"
          :href="`#${id}`"
          :aria-label="`Link to ${section.title}`">#</a>
      </div>
      <h2 class="doc-section__title">{{ section.title }}</h2>
      <p class="doc-section__lead">{{ section.lead }}</p>
    </header>

    <slot />
  </section>
</template>

<script>
import { getSection } from '@/content/documentation'

export default {
  name: 'DocSection',

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  computed: {
    section() {
      return getSection(this.id)
    },
  },
}
</script>
