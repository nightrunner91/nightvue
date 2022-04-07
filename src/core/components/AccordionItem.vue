<template>
  <li
    ref="accordionItem"
    class="accordion__item"
    :class="[uniqueClass, itemOpened ? 'accordion__item--opened' : '']">
    <div
      class="accordion__toggle px-1 px-xs-2 py-1 h4 cursor-pointer d-flex align-items-center no-select"
      @click="toggleItem(), hideOtherItems()">
      <div class="accordion__title pr-1">
        <slot name="title" />
      </div>
      <i class="accordion__arrow fas fa-chevron-down ml-auto" />
    </div>
    <div class="accordion__content pt-2 px-2 pb-50">
      <slot name="content" />
    </div>
  </li>
</template>

<script>
export default {
  name: 'AccordionItem',
  props: {
    opened: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      itemOpened: false
    }
  },
  computed: {
    uniqueClass() {
      return `accordion__item--${Math.floor(Math.random() * 9999) + 1}`
    },
  },
  methods: {
    toggleItem() {
      this.$el.classList.toggle('accordion__item--opened')
    },

    hideOtherItems() {
      const otherItems = document.querySelectorAll(`.accordion__item:not(.${this.uniqueClass})`)

      for (let i = 0; i < otherItems.length; i++) {
        const target = otherItems[i]

        if (target.classList.contains('accordion__item--opened')) {
          target.classList.remove('accordion__item--opened')
        }
      }
    }
  },
  mounted() {
    this.itemOpened = this.opened
  },
}
</script>
