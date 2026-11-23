<template>
  <doc-section id="rotations">
    <demo-panel
      title="Rotation angles"
      note="Common angles from -270° to 360°">
      <div class="rotation-grid">
        <div
          v-for="rotation in rotations"
          :key="rotation.className"
          class="rotation-item">
          <div class="rotation-stage">
            <span
              class="rotation-arrow"
              :class="rotation.className">→</span>
          </div>
          <span class="rotation-item__angle">{{ rotation.label }}</span>
          <code>{{ rotation.className }}</code>
        </div>
      </div>
    </demo-panel>

    <div class="doc-grid">
      <demo-panel title="How it works">
        <p class="demo-text">
          Each classname sets <code>transform: rotate(angle)</code> with
          <code>!important</code>, so it can quickly override a transform in a template.
          Use it for arrows, carets, chevrons and decorative shapes.
        </p>
        <p class="demo-text demo-text--muted">
          If an element already owns a transform, prefer writing the rotation in SCSS
          instead of combining utilities.
        </p>
      </demo-panel>

      <demo-panel title="Class naming">
        <ul class="class-list">
          <li>
            <code>.rotate-0</code>
            <span>no rotation</span>
          </li>
          <li>
            <code>.rotate-plus-90</code>
            <span>clockwise</span>
          </li>
          <li>
            <code>.rotate-minus-90</code>
            <span>counter-clockwise</span>
          </li>
          <li>
            <code>.rotate-plus-360</code>
            <span>full turn</span>
          </li>
        </ul>
      </demo-panel>
    </div>

    <code-block
      label="Generated classes"
      :code="snippets.classes" />
  </doc-section>
</template>

<script>
export default {
  name: 'RotationsSection',

  data() {
    return {
      rotations: [
        { className: 'rotate-minus-270', label: '-270°' },
        { className: 'rotate-minus-180', label: '-180°' },
        { className: 'rotate-minus-90', label: '-90°' },
        { className: 'rotate-0', label: '0°' },
        { className: 'rotate-plus-90', label: '90°' },
        { className: 'rotate-plus-180', label: '180°' },
        { className: 'rotate-plus-270', label: '270°' },
        { className: 'rotate-plus-360', label: '360°' },
      ],
      snippets: {
        classes: `.rotate-minus-270 { transform: rotate(-270deg) }
.rotate-minus-180 { transform: rotate(-180deg) }
.rotate-minus-90  { transform: rotate(-90deg) }
.rotate-0         { transform: rotate(0deg) }
.rotate-plus-90   { transform: rotate(90deg) }
.rotate-plus-180  { transform: rotate(180deg) }
.rotate-plus-270  { transform: rotate(270deg) }
.rotate-plus-360  { transform: rotate(360deg) }

// Example
<span class="rotate-plus-90">→</span>`,
      },
    }
  },
}
</script>
