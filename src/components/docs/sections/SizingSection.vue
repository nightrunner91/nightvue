<template>
  <doc-section id="sizing">
    <div class="doc-grid">
      <demo-panel
        title="Widths"
        note="Percentages of the parent element">
        <div
          v-for="size in sizes"
          :key="'w-' + size"
          class="sizing-track">
          <span
            class="sizing-bar"
            :class="'w-' + size">{{ size }}%</span>
        </div>
      </demo-panel>

      <demo-panel
        title="Heights"
        note="Percentages of a 180px stage">
        <div class="sizing-heights">
          <div
            v-for="size in sizes"
            :key="'h-' + size"
            class="sizing-height"
            :class="'h-' + size">
            <span>{{ size }}%</span>
          </div>
        </div>
      </demo-panel>

      <demo-panel
        title="Viewport units"
        note="vw for width, vh for height">
        <ul class="class-list">
          <li>
            <code>.vw-50</code>
            <span>width: 50vw</span>
          </li>
          <li>
            <code>.max-vw-75</code>
            <span>max-width: 75vw</span>
          </li>
          <li>
            <code>.min-vw-25</code>
            <span>min-width: 25vw</span>
          </li>
          <li>
            <code>.vh-50</code>
            <span>height: 50vh</span>
          </li>
          <li>
            <code>.max-vh-100</code>
            <span>max-height: 100vh</span>
          </li>
        </ul>
      </demo-panel>

      <demo-panel
        title="Auto and responsive"
        note="Sizing works at every breakpoint">
        <div class="sizing-auto">
          <span class="sizing-auto__box">.w-auto</span>
          <span class="sizing-auto__box">.max-w-auto</span>
          <span class="sizing-auto__box">.min-w-auto</span>
        </div>

        <p class="demo-text demo-text--muted">
          Mix units and breakpoints: <code>min-w-sm-50 min-w-75</code> gives an element
          <code>min-width: 50%</code> below 768px and <code>75%</code> above.
        </p>
      </demo-panel>
    </div>

    <code-block
      label="Generated sizing classes"
      :code="snippets.classes" />
    <code-block
      label="Responsive min-width"
      :code="snippets.responsive" />
  </doc-section>
</template>

<script>
export default {
  name: 'SizingSection',

  data() {
    return {
      sizes: [25, 50, 75, 100],
      snippets: {
        classes: `.w-50      { width: 50% }
.vw-50     { width: 50vw }
.max-w-50  { max-width: 50% }
.max-vw-50 { max-width: 50vw }
.min-w-50  { min-width: 50% }
.min-vw-50 { min-width: 50vw }

.h-50     { height: 50% }
.vh-50    { height: 50vh }
.max-h-50 { max-height: 50% }
.max-vh-50 { max-height: 50vh }
.min-h-50 { min-height: 50% }
.min-vh-50 { min-height: 50vh }

.w-auto     { width: auto }
.h-auto     { height: auto }
.max-w-auto { max-width: auto }`,
        responsive: `<div class="min-w-sm-50 min-w-75">
  min-width 50% below 768px and 75% above
</div>

@media screen and (min-width: 768px) {
  .min-w-sm-50 {
    min-width: 50%;
  }
}

.min-w-sm-75 {
  min-width: 75%;
}

$sizings: (
  0:    0,
  25:   25,
  50:   50,
  75:   75,
  100:  100,
  auto: auto
);`,
      },
    }
  },
}
</script>
