<template>
  <doc-section id="position">
    <div class="doc-grid">
      <demo-panel
        title="Position and offsets"
        note="The stage is position-relative">
        <div class="position-stage">
          <div class="position-box position-absolute top-2 left-2">
            .top-2 .left-2
          </div>
          <div class="position-box position-box--success position-absolute top-2 right-2">
            .top-2 .right-2
          </div>
          <div class="position-box position-box--warning position-absolute bottom-2 left-2">
            .bottom-2 .left-2
          </div>
          <div class="position-box position-box--secondary position-absolute bottom-2 right-2">
            .bottom-2 .right-2
          </div>

          <div class="position-center">
            <span>.position-absolute</span>
            <span>inside .position-relative</span>
          </div>
        </div>
      </demo-panel>

      <demo-panel title="Position values">
        <ul class="class-list">
          <li>
            <code>.position-relative</code>
            <span>stays in flow, becomes a containing block</span>
          </li>
          <li>
            <code>.position-absolute</code>
            <span>removed from flow, positioned by offsets</span>
          </li>
          <li>
            <code>.position-static</code>
            <span>default document flow</span>
          </li>
          <li>
            <code>.position-fixed</code>
            <span>pinned to the viewport</span>
          </li>
          <li>
            <code>.top-2 · .right-2</code>
            <span>offset helpers from the spacing scale</span>
          </li>
        </ul>

        <p class="demo-text demo-text--muted">
          Every classname accepts a breakpoint prefix, for example
          <code>position-lg-absolute</code> or <code>right-sm-4</code>.
        </p>
      </demo-panel>
    </div>

    <code-block
      label="Utility classes"
      :code="snippets.classes" />
    <code-block
      label="Responsive usage"
      :code="snippets.responsive" />
  </doc-section>
</template>

<script>
export default {
  name: 'PositionSection',

  data() {
    return {
      snippets: {
        classes: `.position-relative { position: relative }
.position-absolute { position: absolute }
.position-static   { position: static }
.position-fixed    { position: fixed }

.top-2    { top: 0.5rem }
.right-10 { right: 2.5rem }
.bottom-4 { bottom: 1rem }
.left-5   { left: 1.25rem }`,
        responsive: `<div class="position-relative">
  <span class="position-absolute top-2 right-2">
    pinned to the top-right corner
  </span>
</div>

<div class="position-static position-lg-absolute">
  absolute only on lg and above
</div>

@media #{$lg-up} {
  .badge {
    position: absolute;
    top: spacer(2);
    right: spacer(2);
  }
}`,
      },
    }
  },
}
</script>
