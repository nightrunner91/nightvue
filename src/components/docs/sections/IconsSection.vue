<template>
  <doc-section id="icons">
    <demo-panel
      title="Icon sizes"
      note="Seven sizes, three bundled icons">
      <div class="icon-size-list">
        <div
          v-for="size in iconSizes"
          :key="size.name"
          class="icon-size-row">
          <span class="icon-size-row__name">{{ size.name }}</span>
          <span class="icon-size-row__px">{{ size.px }}</span>
          <span class="icon-size-row__cell">
            <svg-icon
              icon="face"
              :size="size.name" />
          </span>
          <span class="icon-size-row__cell">
            <svg-icon
              icon="lightbulb"
              :size="size.name" />
          </span>
          <span class="icon-size-row__cell">
            <svg-icon
              icon="link"
              :size="size.name" />
          </span>
        </div>
      </div>
    </demo-panel>

    <div class="doc-grid">
      <demo-panel
        title="Color and spacing"
        note="Icons inherit currentColor">
        <div class="icon-colors">
          <span class="icon-colors__item clr-primary">
            <svg-icon
              icon="face"
              size="2xl" />
            <code>clr-primary</code>
          </span>
          <span class="icon-colors__item clr-success">
            <svg-icon
              icon="lightbulb"
              size="2xl" />
            <code>clr-success</code>
          </span>
          <span class="icon-colors__item fill-secondary">
            <svg-icon
              icon="link"
              size="2xl" />
            <code>fill-secondary</code>
          </span>
        </div>

        <div class="icon-combo">
          <svg-icon
            icon="face"
            size="sm"
            class="m-2 fill-primary" />
          <code>&lt;svg-icon icon="face" size="sm" class="m-2 fill-primary" /&gt;</code>
        </div>
      </demo-panel>

      <demo-panel title="Where icons live">
        <pre class="demo-pre">src/assets/icons
├── library
│   ├── face.svg
│   ├── lightbulb.svg
│   └── link.svg
└── index.js</pre>
        <p class="demo-text demo-text--muted">
          Every SVG in <code>src/assets/icons/library</code> is injected into a client-side
          sprite. The file name becomes the icon id, and the
          <code>&lt;svg-icon&gt;</code> component references it with
          <code>&lt;use&gt;</code>.
        </p>
      </demo-panel>
    </div>

    <code-block
      label="SvgIcon usage"
      :code="snippets.usage" />
    <code-block
      label="Size map and icon-size() mixin"
      :code="snippets.mixin" />
  </doc-section>
</template>

<script>
export default {
  name: 'IconsSection',

  data() {
    return {
      iconSizes: [
        { name: '2xs', px: '10px' },
        { name: 'xs', px: '12px' },
        { name: 'sm', px: '14px' },
        { name: 'md', px: '16px' },
        { name: 'lg', px: '20px' },
        { name: 'xl', px: '24px' },
        { name: '2xl', px: '32px' },
      ],
      snippets: {
        usage: `<!-- icon name = file name -->
<svg-icon icon="face" />

<!-- seven predefined sizes -->
<svg-icon icon="face" size="2xs" />
<svg-icon icon="face" size="xs" />
<svg-icon icon="face" size="sm" />
<svg-icon icon="face" size="md" />
<svg-icon icon="face" size="lg" />
<svg-icon icon="face" size="xl" />
<svg-icon icon="face" size="2xl" />

<!-- any other utility class works too -->
<svg-icon
  icon="face"
  size="sm"
  class="m-2 fill-primary" />`,
        mixin: `$icon-sizes: (
  2xs: 0.625em, // 10px
  xs:  0.75em,  // 12px
  sm:  0.875em, // 14px
  md:  1em,     // 16px
  lg:  1.25em,  // 20px
  xl:  1.5em,   // 24px
  2xl: 2em,     // 32px
);

@include icon-size(sm);

// =>
width: 0.875em;
max-width: 0.875em;
min-width: 0.875em;
height: 0.875em;
max-height: 0.875em;
min-height: 0.875em;

// Custom dimensions are allowed
@include icon-size(18px, 34px);`,
      },
    }
  },
}
</script>
