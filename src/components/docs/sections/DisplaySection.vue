<template>
  <doc-section id="display">
    <demo-panel
      title="Flexbox playground"
      note="Click a value — the stage updates immediately">
      <div class="flex-controls">
        <div
          v-for="group in controls"
          :key="group.key"
          class="flex-control">
          <span class="flex-control__label">{{ group.label }}</span>
          <div class="segmented segmented--small">
            <button
              v-for="value in group.values"
              :key="value"
              class="segmented__btn"
              :class="{ 'segmented__btn--active': active[group.key] === value }"
              type="button"
              @click="setControl(group.key, value)">{{ value }}</button>
          </div>
        </div>
      </div>

      <div
        class="flex-stage"
        :class="stageClass">
        <div
          v-for="n in 4"
          :key="n"
          class="flex-stage__item"
          :class="`flex-stage__item--${n}`">{{ n }}</div>
      </div>

      <div class="flex-code">
        <code>{{ stageClass }}</code>
      </div>
    </demo-panel>

    <div class="doc-grid">
      <demo-panel title="Centering with one class">
        <div class="flex-center flex-stage flex-stage--center">
          <div class="flex-stage__item flex-stage__item--center">
            .flex-center
          </div>
        </div>
        <p class="demo-text demo-text--muted">
          <code>.flex-center</code> applies <code>display: flex</code>,
          <code>justify-content: center</code> and <code>align-items: center</code>.
          Breakpoint variants work the same way: <code>.flex-md-center</code>.
        </p>
      </demo-panel>

      <demo-panel title="Breakpoint variants">
        <ul class="class-list">
          <li>
            <code>.d-xl-none</code>
            <span>hide on xl and above</span>
          </li>
          <li>
            <code>.flex-lg-column</code>
            <span>switch to a column on lg</span>
          </li>
          <li>
            <code>.justify-content-md-center</code>
            <span>center content from md</span>
          </li>
          <li>
            <code>.align-items-sm-start</code>
            <span>top-align from sm</span>
          </li>
          <li>
            <code>.flex-wrap-xs-nowrap</code>
            <span>prevent wrapping from xs</span>
          </li>
        </ul>
      </demo-panel>
    </div>

    <code-block
      label="Generated flex utilities"
      :code="snippets.utilities" />
    <code-block
      label="Responsive usage"
      :code="snippets.responsive" />
  </doc-section>
</template>

<script>
export default {
  name: 'DisplaySection',

  data() {
    return {
      active: {
        direction: 'row',
        justify: 'center',
        align: 'center',
        wrap: 'nowrap',
      },
      controls: [
        {
          key: 'direction',
          label: 'flex-direction',
          values: ['row', 'row-reverse', 'column', 'column-reverse'],
        },
        {
          key: 'justify',
          label: 'justify-content',
          values: ['start', 'center', 'end', 'between', 'around'],
        },
        {
          key: 'align',
          label: 'align-items',
          values: ['start', 'center', 'end', 'stretch'],
        },
        {
          key: 'wrap',
          label: 'flex-wrap',
          values: ['nowrap', 'wrap', 'wrap-reverse'],
        },
      ],
      snippets: {
        utilities: `.d-none         { display: none }
.d-block        { display: block }
.d-inline       { display: inline }
.d-inline-block { display: inline-block }
.d-flex         { display: flex }
.d-inline-flex  { display: inline-flex }
.d-table        { display: table }
.d-table-cell   { display: table-cell }
.d-table-row    { display: table-row }

.flex-row            { flex-direction: row }
.flex-row-reverse    { flex-direction: row-reverse }
.flex-column         { flex-direction: column }
.flex-column-reverse { flex-direction: column-reverse }

.justify-content-start   { justify-content: start }
.justify-content-center  { justify-content: center }
.justify-content-between { justify-content: space-between }
.justify-content-around  { justify-content: space-around }

.align-items-start    { align-items: start }
.align-items-center   { align-items: center }
.align-items-stretch  { align-items: stretch }

.align-self-center    { align-self: center }
.align-content-center { align-content: center }

.flex-nowrap       { flex-wrap: nowrap }
.flex-wrap         { flex-wrap: wrap }
.flex-wrap-reverse { flex-wrap: wrap-reverse }

.flex-grow-0   { flex-grow: 0 }
.flex-grow-1   { flex-grow: 1 }
.flex-shrink-0 { flex-shrink: 0 }
.flex-shrink-1 { flex-shrink: 1 }

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
        responsive: `<div class="d-block d-md-flex">
  block on mobile, flex from md
</div>

<div class="flex-center flex-md-column">
  centered by default, switched to column on md
</div>

@media screen and (min-width: 1200px) {
  .flex-lg-column { flex-direction: column }
}

@media screen and (min-width: 768px) {
  .align-items-sm-start { align-items: start }
}`,
      },
    }
  },

  computed: {
    stageClass() {
      return [
        'd-flex',
        `flex-${this.active.direction}`,
        `justify-content-${this.active.justify}`,
        `align-items-${this.active.align}`,
        `flex-${this.active.wrap}`,
      ].join(' ')
    },
  },

  methods: {
    setControl(key, value) {
      this.active[key] = value
    },
  },
}
</script>
