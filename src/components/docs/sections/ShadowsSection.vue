<template>
  <doc-section id="shadows">
    <demo-panel
      title="Elevation levels"
      note="Material-inspired box-shadows"
      body-class="demo-panel__body--canvas">
      <div class="shadow-grid">
        <div
          v-for="level in shadows"
          :key="level"
          class="shadow-card"
          :class="'shadow-' + level">
          <span class="shadow-card__name">{{ level }}</span>
          <span class="shadow-card__hint">.shadow-{{ level }}</span>
        </div>
      </div>
    </demo-panel>

    <div class="doc-grid">
      <demo-panel title="Hover elevation">
        <p class="demo-text demo-text--muted">
          Combine a shadow class with a transition to build hover states without writing
          a single box-shadow value.
        </p>
        <button
          class="shadow-hover shadow-level-1"
          type="button">
          Hover me
        </button>
      </demo-panel>

      <demo-panel title="Shadow map">
        <ul class="class-list">
          <li>
            <code>level-1</code>
            <span>1px · 3px — resting cards</span>
          </li>
          <li>
            <code>level-2</code>
            <span>3px · 6px — raised surfaces</span>
          </li>
          <li>
            <code>level-3</code>
            <span>10px · 20px — menus and popovers</span>
          </li>
          <li>
            <code>level-4</code>
            <span>14px · 28px — dialogs</span>
          </li>
          <li>
            <code>level-5</code>
            <span>19px · 38px — highest elevation</span>
          </li>
        </ul>
      </demo-panel>
    </div>

    <code-block
      label="Generated classes"
      :code="snippets.classes" />
    <code-block
      label="shadow() function"
      :code="snippets.function" />
  </doc-section>
</template>

<script>
export default {
  name: 'ShadowsSection',

  data() {
    return {
      shadows: ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'],
      snippets: {
        classes: `.shadow-level-1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24) }
.shadow-level-2 { box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) }
.shadow-level-3 { box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23) }
.shadow-level-4 { box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) }
.shadow-level-5 { box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22) }`,
        function: `$shadows: (
  level-1: (0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)),
  level-2: (0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)),
  level-3: (0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)),
  level-4: (0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)),
  level-5: (0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)),
);

box-shadow: shadow('level-1');
// => box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

.card {
  box-shadow: shadow('level-3');
}`,
      },
    }
  },
}
</script>
