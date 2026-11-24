<template>
  <doc-section id="grid">
    <demo-panel
      title="Column builder"
      note="Drag the slider — the class name changes with it">
      <div class="demo-control">
        <label
          class="demo-control__label"
          for="grid-width">Columns on md and up</label>
        <input
          id="grid-width"
          v-model.number="columnWidth"
          class="demo-range"
          type="range"
          min="1"
          max="12"
          step="1">
        <span class="demo-control__value">{{ columnWidth }} / 12</span>
      </div>

      <div class="row grid-demo">
        <div
          class="col col-12"
          :class="'col-md-' + columnWidth">
          <div class="grid-cell">
            col-12 col-md-{{ columnWidth }}
          </div>
        </div>
      </div>

      <div class="grid-code">
        <code>{{ gridSnippet }}</code>
      </div>
    </demo-panel>

    <div class="doc-grid">
      <demo-panel title="Twelve equal columns">
        <div class="row grid-demo grid-demo--twelve">
          <div
            v-for="n in 12"
            :key="n"
            class="col col-1">
            <div class="grid-cell grid-cell--tight">{{ n }}</div>
          </div>
        </div>
      </demo-panel>

      <demo-panel title="Responsive widths">
        <div class="row grid-demo">
          <div
            v-for="n in 4"
            :key="'responsive-' + n"
            class="col col-12 col-md-6 col-lg-3">
            <div class="grid-cell grid-cell--primary">
              <span class="grid-cell__wide">col-12 · col-md-6 · col-lg-3</span>
              <span class="grid-cell__narrow">{{ n }}</span>
            </div>
          </div>
        </div>
      </demo-panel>

      <demo-panel title="Offset">
        <div class="row grid-demo">
          <div class="col col-12 col-md-4 offset-md-4">
            <div class="grid-cell grid-cell--success">4 cols + offset 4</div>
          </div>
        </div>
      </demo-panel>

      <demo-panel title="Ordering">
        <div class="row grid-demo">
          <div class="col col-4 order-md-3">
            <div class="grid-cell grid-cell--secondary">order-md-3</div>
          </div>
          <div class="col col-4 order-md-1">
            <div class="grid-cell grid-cell--secondary">order-md-1</div>
          </div>
          <div class="col col-4 order-md-2">
            <div class="grid-cell grid-cell--secondary">order-md-2</div>
          </div>
        </div>
      </demo-panel>
    </div>

    <code-block
      label="HTML grid"
      :code="snippets.html" />
    <code-block
      label="Sass mixins"
      :code="snippets.mixins" />
    <code-block
      label="Breakpoints and media queries"
      :code="snippets.media" />
  </doc-section>
</template>

<script>
export default {
  name: 'GridSection',

  data() {
    return {
      columnWidth: 6,
      snippets: {
        html: `<div class="container">
  <div class="row">
    <div class="col col-12 col-xs-10 col-sm-11 col-md-8 col-lg-6 col-xl-4">
      width 12 by default
      width 10 on xs
      width 11 on sm
      width 8 on md
      width 6 on lg
      width 4 on xl
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col col-4 offset-xs-4 offset-sm-5 offset-md-8">
      offset 4 on xs, 5 on sm and 8 on md
    </div>
  </div>
</div>`,
        mixins: `@include container();
@include container('full');
@include container($type: 'boxed', $gutter: 2rem);

@include row();
@include row(0);

@include col();
@include col(12);
@include col(10, $md: 8);
@include col(10, $md: 8, $lg: 6, $xs: 12);

@include offset(6);
@include offset(10, $md: 8, $lg: 6, $xs: 12);

@include order(2);
@include order(1, $sm: 4);
@include order($sm: 12, $lg: 4, $xl: 3);`,
        media: `$xs-up; // > 576px
$sm-up; // > 768px
$md-up; // > 992px
$lg-up; // > 1200px
$xl-up; // > 1400px

$sm-md; // 768px … 991px
$md-lg; // 992px … 1199px
$lg-xl; // 1200px … 1399px

@media #{$sm-up} { ... }
@media #{$sm-md} { ... }`,
      },
    }
  },

  computed: {
    gridSnippet() {
      return `<div class="col col-12 col-md-${this.columnWidth}">`
    },
  },
}
</script>
