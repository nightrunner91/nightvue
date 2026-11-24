<template>
  <doc-section id="spacing">
    <div class="doc-grid doc-grid--wide">
      <demo-panel
        title="Padding playground"
        note="Every value comes from the $spacers map">
        <div class="demo-control">
          <label
            class="demo-control__label"
            for="spacing-size">Padding size</label>
          <input
            id="spacing-size"
            v-model.number="padding"
            class="demo-range"
            type="range"
            min="0"
            max="20"
            step="1">
          <span class="demo-control__value">{{ padding }} · {{ spacerValue(padding) }}</span>
        </div>

        <div class="spacing-stage">
          <div
            class="spacing-inner"
            :class="'p-' + padding">
            <div class="spacing-content">
              <code>p-{{ padding }}</code>
              <span>padding: {{ spacerValue(padding) }}</span>
            </div>
          </div>
        </div>
      </demo-panel>

      <demo-panel
        title="Absolute offsets"
        note="Position helpers use the same scale">
        <div class="spacing-offset-stage">
          <span class="spacing-dot position-absolute top-3 left-4">.top-3 .left-4</span>
          <span class="spacing-dot spacing-dot--success position-absolute top-8 right-6">.top-8 .right-6</span>
          <span class="spacing-dot spacing-dot--warning position-absolute bottom-4 left-10">.bottom-4 .left-10</span>
          <span class="spacing-dot spacing-dot--secondary position-absolute bottom-8 right-12">.bottom-8 .right-12</span>
        </div>

        <p class="demo-text demo-text--muted">
          Offsets are useful for badges, tooltips and decorative elements. They support
          breakpoint prefixes too, for example <code>right-sm-4</code>.
        </p>
      </demo-panel>
    </div>

    <demo-panel
      class="spacing-scale-panel"
      title="$spacers scale"
      note="0 → 20, plus auto">
      <div class="spacer-scale">
        <div
          v-for="size in spacers"
          :key="size"
          class="spacer-row">
          <span class="spacer-row__label">{{ size }}</span>
          <span
            class="spacer-row__bar"
            :style="{ width: Math.max(size * 14, 1) + 'px' }" />
          <code class="spacer-row__value">{{ spacerValue(size) }}</code>
        </div>
      </div>
    </demo-panel>

    <div class="code-grid">
      <code-block
        label="Class name anatomy"
        :code="snippets.anatomy" />
      <code-block
        label="spacer() function"
        :code="snippets.function" />
    </div>
  </doc-section>
</template>

<script>
export default {
  name: 'SpacingSection',

  data() {
    return {
      padding: 6,
      spacers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      snippets: {
        anatomy: `// {$property}-{$breakpoint}-{$side}-{$size}

// property: m | p
// breakpoint: '' | xs | sm | md | lg | xl
// side: '' | t | b | l | r | x | y
// size: 0 ... 20 | auto

.p-4        { padding: 1rem }
.mt-8       { margin-top: 2rem }
.px-sm-6    { padding-left: 1.5rem; padding-right: 1.5rem }
.mx-auto    { margin-left: auto; margin-right: auto }

.top-2      { top: 0.5rem }
.right-sm-4 { right: 1rem }
.bottom-4   { bottom: 1rem }
.left-5     { left: 1.25rem }`,
        function: `padding: spacer(2);
// => padding: 0.5rem;

padding-right: spacer(5);
// => padding-right: 1.25rem;

margin: spacer(3, auto);
// => margin: 0.75rem auto;

margin: spacer(5, auto, 2, 0);
// => margin: 1.25rem auto 0.5rem 0;

$spacer: 1rem;

$spacers: (
  0: 0,
  1: ($spacer * .25),
  2: ($spacer * .5),
  3: ($spacer * .75),
  4: ($spacer * 1),
  5: ($spacer * 1.25),
  // ...
  20: ($spacer * 5),
  auto: auto
);`,
      },
    }
  },

  methods: {
    spacerValue(size) {
      return `${size * 0.25}rem`
    },
  },
}
</script>
