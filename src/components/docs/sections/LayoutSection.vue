<template>
  <doc-section id="layout">
    <div class="doc-grid doc-grid--wide">
      <demo-panel
        title="Live layout preview"
        note="The root component swaps layouts with :is">
        <div class="segmented">
          <button
            v-for="option in layouts"
            :key="option.id"
            class="segmented__btn"
            :class="{ 'segmented__btn--active': activeLayout === option.id }"
            type="button"
            @click="activeLayout = option.id">{{ option.label }}</button>
        </div>

        <div
          class="layout-preview"
          :class="`layout-preview--${activeLayout}`">
          <template v-if="activeLayout === 'default'">
            <div class="layout-preview__bar">app-header</div>
            <div class="layout-preview__main">
              main
              <span>slot</span>
            </div>
            <div class="layout-preview__bar">app-footer</div>
          </template>

          <div
            v-else
            class="layout-preview__full">
            div.minvh-100
            <span>slot</span>
          </div>
        </div>
      </demo-panel>

      <demo-panel
        title="Route meta"
        note="Every page chooses its own layout">
        <p class="demo-text">
          If a route does not define <code>meta.layout</code>, NightVue falls back to
          <code>AppLayoutDefault</code>. The page transition wraps the same dynamic
          component, so layouts fade in and out with the content.
        </p>

        <ul class="demo-list">
          <li>
            <strong>default</strong>
            header → main → footer
          </li>
          <li>
            <strong>full</strong>
            plain page, no chrome
          </li>
          <li>
            <strong>custom</strong>
            add a file, return its class name
          </li>
        </ul>

        <div class="demo-callout">
          <span class="demo-callout__dot" />
          <span>The active layout is <strong>{{ activeLayout }}</strong> — resize the page to see the grid respond.</span>
        </div>
      </demo-panel>
    </div>

    <div class="code-grid">
      <code-block
        label="AppLayout.vue"
        :code="snippets.template" />
      <code-block
        label="Layout selection"
        :code="snippets.selection" />
      <code-block
        label="Route meta"
        :code="snippets.route" />
      <code-block
        label="Page transition · SCSS"
        :code="snippets.transition" />
    </div>
  </doc-section>
</template>

<script>
export default {
  name: 'LayoutSection',

  data() {
    return {
      activeLayout: 'default',
      layouts: [
        { id: 'default', label: 'Default' },
        { id: 'full', label: 'Full' },
      ],
      snippets: {
        template: `<template>
  <transition
    appear
    name="page"
    mode="out-in">
    <component
      :is="layout"
      class="layout"
      :class="[layoutClassnames]">
      <slot />
    </component>
  </transition>
</template>`,
        selection: `computed: {
  layout() {
    const layout = this.$route.meta.layout || defaultLayout
    return () => import(\`@/layouts/\${layout}.vue\`)
  },

  layoutClassnames() {
    const layout = this.$route.meta.layout || defaultLayout

    if (layout === 'AppLayoutFull') return 'layout--full'
    if (layout === 'AppLayoutDefault') return 'layout--default'

    return null
  },
}`,
        route: `{
  path: '/',
  name: 'Home',
  component: () => import('@/views/Home.vue'),
  meta: {
    layout: 'AppLayoutDefault',
  },
}`,
        transition: `.layout {
  &.page-enter,
  &.page-leave-to {
    .main {
      opacity: 0;
    }
  }
}

.main {
  transition: transition(opacity, lazy);
}`,
      },
    }
  },
}
</script>
