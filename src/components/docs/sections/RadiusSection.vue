<template>
  <doc-section id="radius">
    <demo-panel
      title="All corners"
      note="Five values, five classes">
      <div class="radius-grid">
        <div
          v-for="radius in radiuses"
          :key="radius.name"
          class="radius-item">
          <div
            class="radius-box"
            :class="'radius-' + radius.name">
            <span>{{ radius.label }}</span>
          </div>
          <code>.radius-{{ radius.name }}</code>
        </div>
      </div>
    </demo-panel>

    <demo-panel
      title="Single corners and pairs"
      note="Every direction has its own class">
      <div class="radius-grid radius-grid--corners">
        <div
          v-for="corner in corners"
          :key="corner.key"
          class="radius-item">
          <div
            class="radius-box radius-box--corner"
            :class="'radius-' + corner.key + '-large'">
            <span>{{ corner.label }}</span>
          </div>
          <code>.radius-{{ corner.key }}-large</code>
        </div>
      </div>
    </demo-panel>

    <div class="code-grid">
      <code-block
        label="Radius classes"
        :code="snippets.classes" />
      <code-block
        label="radius() function"
        :code="snippets.function" />
      <code-block
        label="Responsive radius"
        :code="snippets.responsive" />
      <code-block
        label="$radiuses map"
        :code="snippets.map" />
    </div>
  </doc-section>
</template>

<script>
export default {
  name: 'RadiusSection',

  data() {
    return {
      radiuses: [
        { name: 'small', label: '4px' },
        { name: 'base', label: '8px' },
        { name: 'large', label: '20px' },
        { name: 'circle', label: '100%' },
        { name: 'zero', label: '0' },
      ],
      corners: [
        { key: 'tl', label: 'top-left' },
        { key: 'tr', label: 'top-right' },
        { key: 'bl', label: 'bottom-left' },
        { key: 'br', label: 'bottom-right' },
        { key: 't', label: 'top pair' },
        { key: 'r', label: 'right pair' },
        { key: 'b', label: 'bottom pair' },
        { key: 'l', label: 'left pair' },
      ],
      snippets: {
        classes: `.radius-small  { border-radius: 4px }
.radius-base   { border-radius: 8px }
.radius-large  { border-radius: 20px }
.radius-circle { border-radius: 100% }
.radius-zero   { border-radius: 0 }

.radius-tl-base { border-top-left-radius: 8px }
.radius-tr-base { border-top-right-radius: 8px }
.radius-bl-base { border-bottom-left-radius: 8px }
.radius-br-base { border-bottom-right-radius: 8px }

.radius-t-base {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.radius-r-base { /* right pair */ }
.radius-b-base { /* bottom pair */ }
.radius-l-base { /* left pair */ }`,
        function: `border-radius: radius('small');
// => border-radius: 4px;

border-radius: radius('circle');
// => border-radius: 100%;

border-top-left-radius: radius('zero');
// => border-top-left-radius: 0;

.card {
  border-radius: radius('large');
}`,
        responsive: `.radius-b-sm-large {
  // only from sm
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

@media screen and (min-width: 768px) {
  .radius-b-sm-large {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
}

// Template
// .radius-\${direction}-\${breakpoint}-\${type}

<div class="radius-base radius-lg-large">
  base radius, large from lg
</div>`,
        map: `$radiuses: (
  'small':   4px,
  'base':    8px,
  'large':   20px,
  'circle':  100%,
  'zero':    0
);

// Pattern
// .radius-\${type}
// .radius-\${direction}-\${type}
// .radius-\${direction}-\${breakpoint}-\${type}`,
      },
    }
  },
}
</script>
