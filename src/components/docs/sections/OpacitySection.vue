<template>
  <doc-section id="opacity">
    <demo-panel
      title="Opacity scale"
      note=".opacity-0 → .opacity-10">
      <div class="opacity-grid">
        <div
          v-for="step in opacities"
          :key="step"
          class="opacity-item">
          <span
            class="opacity-swatch bg-primary"
            :class="`opacity-${step}`" />
          <span class="opacity-item__label">{{ step }}</span>
          <code class="opacity-item__code">{{ opacityValue(step) }}</code>
        </div>
      </div>
    </demo-panel>

    <div class="doc-grid">
      <demo-panel
        title="Overlay playground"
        note="A white layer over a gradient">
        <div class="demo-control">
          <label
            class="demo-control__label"
            for="opacity-overlay">Overlay opacity</label>
          <input
            id="opacity-overlay"
            v-model.number="overlay"
            class="demo-range"
            type="range"
            min="0"
            max="10"
            step="1">
          <span class="demo-control__value">.opacity-{{ overlay }}</span>
        </div>

        <div class="opacity-stage gradient-primary_success">
          <span
            class="opacity-stage__overlay bg-white"
            :class="`opacity-${overlay}`" />
          <span class="opacity-stage__label">
            background + <code>bg-white opacity-{{ overlay }}</code>
          </span>
        </div>
      </demo-panel>

      <demo-panel title="Breakpoint variants">
        <ul class="class-list">
          <li>
            <code>.opacity-0</code>
            <span>0</span>
          </li>
          <li>
            <code>.opacity-5</code>
            <span>0.45</span>
          </li>
          <li>
            <code>.opacity-10</code>
            <span>0.95</span>
          </li>
          <li>
            <code>.opacity-lg-5</code>
            <span>0.45 only from lg</span>
          </li>
          <li>
            <code>.opacity-sm-10</code>
            <span>0.95 only from sm</span>
          </li>
        </ul>

        <p class="demo-text demo-text--muted">
          The same eleven steps are also available in SCSS through
          <code>opacity(level)</code>.
        </p>
      </demo-panel>
    </div>

    <code-block
      label="Generated classes"
      :code="snippets.classes" />
    <code-block
      label="opacity() function"
      :code="snippets.function" />
  </doc-section>
</template>

<script>
export default {
  name: 'OpacitySection',

  data() {
    return {
      overlay: 4,
      opacities: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      values: {
        0: '0',
        1: '0.05',
        2: '0.15',
        3: '0.25',
        4: '0.35',
        5: '0.45',
        6: '0.55',
        7: '0.65',
        8: '0.75',
        9: '0.85',
        10: '0.95',
      },
      snippets: {
        classes: `$opacities: (
  0: 0%,
  1: 5%,
  2: 15%,
  3: 25%,
  4: 35%,
  5: 45%,
  6: 55%,
  7: 65%,
  8: 75%,
  9: 85%,
  10: 95%
);

.opacity-0  { opacity: 0 }
.opacity-1  { opacity: 0.05 }
.opacity-2  { opacity: 0.15 }
.opacity-3  { opacity: 0.25 }
.opacity-4  { opacity: 0.35 }
.opacity-5  { opacity: 0.45 }
.opacity-6  { opacity: 0.55 }
.opacity-7  { opacity: 0.65 }
.opacity-8  { opacity: 0.75 }
.opacity-9  { opacity: 0.85 }
.opacity-10 { opacity: 0.95 }

@media screen and (min-width: 1200px) {
  .opacity-lg-5 { opacity: 0.45 }
}`,
        function: `opacity: opacity(0);
// => opacity: 0;

opacity: opacity(1);
// => opacity: 0.05;

opacity: opacity(3);
// => opacity: 0.25;

opacity: opacity(7);
// => opacity: 0.65;

opacity: opacity(10);
// => opacity: 0.95;`,
      },
    }
  },

  methods: {
    opacityValue(step) {
      return this.values[step]
    },
  },
}
</script>
