<template>
  <doc-section id="typography">
    <div class="doc-grid">
      <demo-panel title="Displays and headings">
        <div class="type-scale">
          <div
            v-for="item in displays"
            :key="item.className"
            class="type-row">
            <span class="type-row__label">{{ item.className }}</span>
            <p
              class="type-row__sample"
              :class="item.className">{{ item.text }}</p>
          </div>

          <div
            v-for="item in headings"
            :key="item.tag"
            class="type-row">
            <span class="type-row__label">{{ item.tag }}</span>
            <component
              :is="item.tag"
              class="type-row__sample">{{ item.text }}</component>
          </div>
        </div>
      </demo-panel>

      <demo-panel title="Body, small and tagline">
        <div class="type-specimens">
          <div class="type-specimen">
            <span class="type-row__label">base · 16px</span>
            <p class="type-specimen__text">
              The quick brown fox jumps over the lazy dog. NightVue keeps body copy at a
              comfortable 16px with a 1.5 line height.
            </p>
          </div>

          <div class="type-specimen">
            <span class="type-row__label">.tagline · 1.25</span>
            <p class="type-specimen__text tagline">
              A short, slightly louder line for introductions.
            </p>
          </div>

          <div class="type-specimen">
            <span class="type-row__label">.small · 0.875</span>
            <p class="type-specimen__text small">
              Smaller supporting text, captions and metadata.
            </p>
          </div>
        </div>

        <div class="text-utilities">
          <span class="font-weight-300">Light 300</span>
          <span class="font-weight-500">Medium 500</span>
          <span class="font-weight-700">Bold 700</span>
          <span class="font-weight-900">Black 900</span>
          <span class="font-italic">Italic</span>
          <span class="text-uppercase">Uppercase</span>
          <span class="text-capitalize">capitalize me</span>
          <span class="text-underline">Underline</span>
          <span class="text-line-through">Line through</span>
          <span class="spacing-wide">Wide spacing</span>
        </div>
      </demo-panel>

      <demo-panel
        class="type-panel--full"
        title="Truncation helpers">
        <div class="truncate-list">
          <div class="truncate-row">
            <span class="type-row__label">.text-truncate</span>
            <div
              class="text-truncate truncate-row__sample"
              style="width: 220px;">
              I am very long text and I will be truncated at 220px width
            </div>
          </div>

          <div class="truncate-row">
            <span class="type-row__label">.text-dotted</span>
            <div class="text-dotted truncate-row__sample">
              I will not be truncated, but will have an ellipsis at the end
            </div>
          </div>

          <div class="truncate-row">
            <span class="type-row__label">@text-truncate</span>
            <code>@include text-truncate(150px)</code>
          </div>
        </div>
      </demo-panel>
    </div>

    <div class="code-grid">
      <code-block
        label="Font import"
        :code="snippets.fonts" />
      <code-block
        label="Generated text utilities"
        :code="snippets.utilities" />
      <code-block
        label="Typography maps"
        :code="snippets.maps" />
      <code-block
        label="Small and truncated text"
        :code="snippets.helpers" />
    </div>
  </doc-section>
</template>

<script>
export default {
  name: 'TypographySection',

  data() {
    return {
      displays: [
        { className: 'display-1', text: 'Display 1' },
        { className: 'display-2', text: 'Display 2' },
        { className: 'display-3', text: 'Display 3' },
        { className: 'display-4', text: 'Display 4' },
      ],
      headings: [
        { tag: 'h1', text: 'Heading 1' },
        { tag: 'h2', text: 'Heading 2' },
        { tag: 'h3', text: 'Heading 3' },
        { tag: 'h4', text: 'Heading 4' },
        { tag: 'h5', text: 'Heading 5' },
        { tag: 'h6', text: 'Heading 6' },
      ],
      snippets: {
        fonts: `// Font files location:
// src/assets/fonts/Onest

@include font-face('Onest', 'OnestRegular', 400, normal, 'recent');
@include font-face('Onest', 'OnestMedium', 500, normal, 'recent');
@include font-face('Onest', 'OnestBold', 700, normal, 'recent');
@include font-face('Onest', 'OnestBlack', 900, normal, 'recent');`,
        utilities: `.font-base     { font-family: "Onest", sans-serif }
.font-headings { font-family: "Onest", sans-serif }
.font-displays { font-family: "Onest", sans-serif }

.line-height-1  { line-height: 1 }
.line-height-25 { line-height: 1.25 }
.line-height-50 { line-height: 1.5 }
.line-height-75 { line-height: 1.75 }
.line-height-2  { line-height: 2 }

.text-left    { text-align: left }
.text-center  { text-align: center }
.text-right   { text-align: right }
.text-justify { text-align: justify }

.text-underline    { text-decoration: underline }
.text-line-through { text-decoration: line-through }
.text-none         { text-decoration: none }

.text-lowercase  { text-transform: lowercase }
.text-uppercase  { text-transform: uppercase }
.text-capitalize { text-transform: capitalize }

.font-weight-100 { font-weight: 100 }
.font-weight-500 { font-weight: 500 }
.font-weight-700 { font-weight: 700 }
.font-weight-900 { font-weight: 900 }

.font-normal  { font-style: normal }
.font-italic  { font-style: italic }
.font-oblique { font-style: oblique }

.spacing-normal { letter-spacing: normal }
.spacing-tight  { letter-spacing: -0.05em }
.spacing-wide   { letter-spacing: 0.1em }
.spacing-wider  { letter-spacing: 0.5em }

// Every classname supports breakpoints:
.font-weight-sm-500 { font-weight: 500 }`,
        maps: `$font-families: (
  base:     "Onest",
  headings: "Onest",
  displays: "Onest"
);

$headings-fz: (
  h1: 4.5rem,
  h2: 2.5rem,
  h3: 1.75rem,
  h4: 1.25rem,
  h5: 1rem,
  h6: 0.875rem,
);

$displays-fz: (
  display-1: 74px,
  display-2: 62px,
  display-3: 48px,
  display-4: 34px,
);

$base-fz: 16px; // crucial value
$base-lh: map-get($line-heights, 50);
$base-fw: map-get($font-weights, 400);`,
        helpers: `<div class="small">I am small text</div>
<small>Me too!</small>

<div class="tagline">I am tagline text</div>

<div class="text-truncate" style="width: 120px;">
  I am very long text and I will be truncated
</div>

<div class="text-dotted">
  I will not be truncated, but will have '…' at the end
</div>

// SCSS
@include small();
@include tagline();
@include text-truncate(150px);`,
      },
    }
  },
}
</script>
