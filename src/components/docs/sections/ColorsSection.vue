<template>
  <doc-section id="colors">
    <demo-panel
      title="Theme colors"
      note="Generated from $theme-colors">
      <div class="swatches">
        <div
          v-for="color in themeColors"
          :key="color.name"
          class="swatch"
          :class="'bg-' + color.name">
          <span
            class="swatch__name"
            :class="color.contrast">{{ color.name }}</span>
          <span
            class="swatch__hex"
            :class="color.contrast">{{ color.hex }}</span>
        </div>
      </div>
    </demo-panel>

    <demo-panel
      title="Gray ramp"
      note="white → black">
      <div class="grays">
        <div
          v-for="gray in grays"
          :key="gray.name"
          class="grays__item"
          :class="'bg-' + gray.name">
          <span
            class="grays__label"
            :class="gray.contrast">{{ gray.name }}</span>
        </div>
      </div>
    </demo-panel>

    <demo-panel
      title="Generated levels"
      note="light · dark · saturated · desaturated">
      <div class="levels">
        <div
          v-for="style in levelStyles"
          :key="style"
          class="levels__row">
          <span class="levels__caption">{{ style }}</span>
          <span
            v-for="level in levels"
            :key="style + level"
            class="levels__chip"
            :class="`bg-primary-${style}-${level}`" />
          <code class="levels__code">bg-primary-{{ style }}-1…5</code>
        </div>
      </div>
    </demo-panel>

    <demo-panel
      title="Translucent variants"
      note="From the $opacities map">
      <div class="opacity-chips">
        <span
          v-for="opacity in opacities"
          :key="'opacity-' + opacity"
          class="opacity-chip"
          :class="`bg-primary-opacity-${opacity}`" />
      </div>
      <div class="opacity-chips__labels">
        <code>opacity-0</code>
        <code>opacity-5</code>
        <code>opacity-10</code>
      </div>
    </demo-panel>

    <div class="code-grid">
      <code-block
        label="Color maps"
        :code="snippets.maps" />
      <code-block
        label="Color classes"
        :code="snippets.classes" />
      <code-block
        label="color() function"
        :code="snippets.function" />
      <code-block
        label="Generated variants"
        :code="snippets.variants" />
    </div>
  </doc-section>
</template>

<script>
export default {
  name: 'ColorsSection',

  data() {
    return {
      levels: [1, 2, 3, 4, 5],
      levelStyles: ['light', 'dark', 'sat', 'desat'],
      opacities: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      themeColors: [
        { name: 'primary', hex: '#17765A', contrast: 'clr-white' },
        { name: 'secondary', hex: '#2196F3', contrast: 'clr-white' },
        { name: 'success', hex: '#47B05B', contrast: 'clr-white' },
        { name: 'info', hex: '#009688', contrast: 'clr-white' },
        { name: 'warning', hex: '#FFEE58', contrast: 'clr-gray-10' },
        { name: 'danger', hex: '#F44336', contrast: 'clr-white' },
        { name: 'light', hex: '#D5D5D5', contrast: 'clr-gray-10' },
        { name: 'dark', hex: '#555555', contrast: 'clr-white' },
      ],
      grays: [
        { name: 'white', contrast: 'clr-gray-10' },
        { name: 'gray-1', contrast: 'clr-gray-10' },
        { name: 'gray-2', contrast: 'clr-gray-10' },
        { name: 'gray-3', contrast: 'clr-gray-10' },
        { name: 'gray-4', contrast: 'clr-gray-10' },
        { name: 'gray-5', contrast: 'clr-white' },
        { name: 'gray-6', contrast: 'clr-gray-10' },
        { name: 'gray-7', contrast: 'clr-white' },
        { name: 'gray-8', contrast: 'clr-white' },
        { name: 'gray-9', contrast: 'clr-white' },
        { name: 'gray-10', contrast: 'clr-white' },
        { name: 'black', contrast: 'clr-white' },
      ],
      snippets: {
        maps: `$colors: (
  'red':      #F44336,
  'pink':     #EC407A,
  'orange':   #FF9800,
  'yellow':   #FFEE58,
  'green':    #47b05b,
  'brown':    #795548,
  'teal':     #009688,
  'cyan':     #00BCD4,
  'blue':     #2196F3,
  'pine':     #17765A,
);

$grays: (
  'white':   #ffffff,
  'gray-1':  #eaeaea,
  'gray-2':  #d5d5d5,
  'gray-3':  #bfbfbf,
  'gray-4':  #aaaaaa,
  'gray-5':  #959595,
  'gray-6':  #cccccc,
  'gray-7':  #6a6a6a,
  'gray-8':  #555555,
  'gray-9':  #404040,
  'gray-10': #2b2b2b,
  'black':   #000000,
);

$theme-colors: (
  'primary':   map-get($colors, 'pine'),
  'secondary': map-get($colors, 'blue'),
  'success':   map-get($colors, 'green'),
  'info':      map-get($colors, 'teal'),
  'warning':   map-get($colors, 'yellow'),
  'danger':    map-get($colors, 'red'),
  'light':     map-get($grays, 'gray-2'),
  'dark':      map-get($grays, 'gray-8'),
);`,
        classes: `.bg-white   { background-color: #ffffff }
.clr-white  { color: #ffffff }
.fill-white { fill: #ffffff }

.bg-primary   { background-color: #17765A }
.clr-primary  { color: #17765A }
.fill-primary { fill: #17765A }

// \${property}-\${color}-\${style}-\${level}
.bg-primary-light-3 { background-color: #5d9f8c }
.clr-primary-dark-2 { color: #125e48 }
.fill-success-sat-4 { fill: ... }

// \${property}-\${color}-opacity-\${opacity}
.bg-success-opacity-2  { background-color: rgba(71, 176, 91, 0.15) }
.bg-success-opacity-10 { background-color: rgba(71, 176, 91, 0.95) }`,
        function: `box-shadow: 1px 1px 4px color('primary');
// => box-shadow: 1px 1px 4px #17765A;

border-color: color('secondary', light, 2);
// => border-color: #42a6f5;

border-color: color('success', dark, 4);
// => border-color: #358444;

color: color('danger', sat, 2);
// => color: #f64234;

background-color: color('warning', desat, 4);
// => background-color: #eadd6d;

color: color('white', $opacity: 5);
// => color: rgba(255, 255, 255, 0.45);

fill: color('gray-4');
// => fill: #aaaaaa;`,
        variants: `$levels: (
  1: 10%,
  2: 20%,
  3: 30%,
  4: 40%,
  5: 50%,
);

$opacities: (
  0: 0%, 1: 5%, 2: 15%, 3: 25%, 4: 35%,
  5: 45%, 6: 55%, 7: 65%, 8: 75%,
  9: 85%, 10: 95%
);

.clr-primary-light-1 { color: #7741b3 }
.clr-primary-light-3 { color: #5d9f8c }
.clr-primary-light-5 { color: #956bc4 }

.clr-primary-dark-1  { color: #5e289a }
.clr-primary-dark-3  { color: #532389 }

.clr-primary-sat-2   { color: #127b5c }
.clr-primary-desat-4 { color: #693c9b }`,
      },
    }
  },
}
</script>
