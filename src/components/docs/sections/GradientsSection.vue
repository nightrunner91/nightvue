<template>
  <doc-section id="gradients">
    <demo-panel
      title="Bundled gradients"
      note="Each name in $gradients becomes a class">
      <div class="gradient-grid">
        <div
          v-for="gradient in gradients"
          :key="gradient.name"
          class="gradient-tile"
          :class="`gradient-${gradient.name}`">
          <span class="gradient-tile__name">.gradient-{{ gradient.name }}</span>
          <span class="gradient-tile__meta">{{ gradient.direction }}</span>
        </div>
      </div>
    </demo-panel>

    <div class="doc-grid">
      <demo-panel title="Naming convention">
        <ul class="class-list">
          <li>
            <code>primary_success</code>
            <span>two colors, 145deg</span>
          </li>
          <li>
            <code>primary-light-3_primary</code>
            <span>a modified color first</span>
          </li>
          <li>
            <code>red_yellow_blue</code>
            <span>three base colors</span>
          </li>
          <li>
            <code>info_transparent</code>
            <span>fading to transparent</span>
          </li>
        </ul>
        <p class="demo-text demo-text--muted">
          The recommended pattern is <code>&lt;color1&gt;_&lt;color2&gt;_&lt;color3&gt;</code>.
          Modified colors include their style and level, for example
          <code>primary-light-3</code>.
        </p>
      </demo-panel>

      <demo-panel title="Gradient anatomy">
        <pre class="demo-pre">gradientName: (
  direction: 145deg,
  fallback: #682CAB,
  list: (#8e51d2 10%, #68c279 80%)
)</pre>
        <p class="demo-text demo-text--muted">
          <strong>direction</strong> accepts keywords like <code>to right</code> or any
          angle. <strong>fallback</strong> is the solid color for unsupported browsers.
          <strong>list</strong> is the comma-separated color sequence.
        </p>
      </demo-panel>
    </div>

    <code-block
      label="$gradients map"
      :code="snippets.map" />
    <code-block
      label="linear-gradient() mixin"
      :code="snippets.mixin" />
  </doc-section>
</template>

<script>
export default {
  name: 'GradientsSection',

  data() {
    return {
      gradients: [
        { name: 'primary_success', direction: '145deg' },
        { name: 'primary-light-3_primary', direction: 'to bottom' },
        { name: 'red_yellow_blue', direction: 'to right' },
        { name: 'info_transparent', direction: '90deg' },
      ],
      snippets: {
        map: `$gradients: (
  primary_success: (
    direction: 145deg,
    fallback: map-get($theme-colors, 'primary'),
    list: (
      lighten(map-get($theme-colors, 'primary'), 20%) 10%,
      lighten(map-get($theme-colors, 'success'), 10%) 80%
    )
  ),

  primary-light-3_primary: (
    direction: to bottom,
    fallback: map-get($theme-colors, 'primary'),
    list: (
      map-get($theme-colors, 'primary'),
      lighten(map-get($theme-colors, 'primary'), 30%)
    )
  ),

  red_yellow_blue: (
    direction: to right,
    fallback: map-get($colors, 'red'),
    list: (
      map-get($colors, 'red'),
      map-get($colors, 'yellow'),
      map-get($colors, 'blue')
    )
  ),

  info_transparent: (
    direction: 90deg,
    fallback: map-get($theme-colors, 'info'),
    list: (
      map-get($theme-colors, 'info'),
      transparent
    )
  ),
);`,
        mixin: `.gradient-primary_success {
  background: #682cab;
  background: linear-gradient(145deg, #8e51d2 10%, #68c279 80%);
}

// SCSS
.hero {
  @include linear-gradient('primary_success');
}

// Options for direction:
// to top, to top right, to right, to bottom right,
// to bottom, to bottom left, to left, to left top
// or any angle in deg, rad, grad or turn.`,
      },
    }
  },
}
</script>
