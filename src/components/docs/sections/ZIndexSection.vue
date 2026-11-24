<template>
  <doc-section id="zindex">
    <div class="doc-grid">
      <demo-panel
        title="Stacking order"
        note="Three overlapping cards">
        <div class="z-stage">
          <div class="z-card z-card--one z-plus-1">
            <span>z-plus-1</span>
          </div>
          <div class="z-card z-card--two z-plus-2">
            <span>z-plus-2</span>
          </div>
          <div class="z-card z-card--three z-plus-3">
            <span>z-plus-3</span>
          </div>
        </div>
      </demo-panel>

      <demo-panel title="The scale">
        <div class="z-scale">
          <code
            v-for="value in values"
            :key="value"
            class="z-scale__item"
            :class="'z-' + value">z-{{ value }}</code>
        </div>
        <p class="demo-text demo-text--muted">
          Values range from <code>{{ min }}</code> to <code>{{ max }}</code>. Set the
          boundaries in <code>_zindex.scss</code> if your project needs a different
          range.
        </p>
      </demo-panel>
    </div>

    <div class="code-grid">
      <code-block
        label="Generated classes"
        :code="snippets.classes" />
      <code-block
        label="Responsive z-index"
        :code="snippets.responsive" />
    </div>
  </doc-section>
</template>

<script>
export default {
  name: 'ZIndexSection',

  data() {
    return {
      min: -1,
      max: 12,
      values: [
        'minus-1',
        '0',
        'plus-1',
        'plus-2',
        'plus-3',
        'plus-4',
        'plus-5',
        'plus-6',
        'plus-7',
        'plus-8',
        'plus-9',
        'plus-10',
        'plus-11',
        'plus-12',
      ],
      snippets: {
        classes: `$zindex-start: -1;
$zindex-end: 12;

.z-minus-1 { z-index: -1 }
.z-0       { z-index: 0 }
.z-plus-1  { z-index: 1 }
.z-plus-2  { z-index: 2 }
.z-plus-3  { z-index: 3 }
.z-plus-4  { z-index: 4 }
.z-plus-5  { z-index: 5 }
.z-plus-6  { z-index: 6 }
.z-plus-7  { z-index: 7 }
.z-plus-8  { z-index: 8 }
.z-plus-9  { z-index: 9 }
.z-plus-10 { z-index: 10 }
.z-plus-11 { z-index: 11 }
.z-plus-12 { z-index: 12 }`,
        responsive: `@media screen and (min-width: 1200px) {
  .z-lg-plus-12 {
    z-index: 12;
  }
}

@media screen and (max-width: 767px) {
  .z-sm-minus-1 {
    z-index: -1;
  }
}

// Template
// .z-\${breakpoint}-\${value}
// .z-\${breakpoint}-plus-\${value}
// .z-\${breakpoint}-minus-\${value}`,
      },
    }
  },
}
</script>
