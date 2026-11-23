<template>
  <div class="showcase">
    <!-- ============================= -->
    <!-- =========== Hero ============ -->
    <!-- ============================= -->
    <section class="hero">
      <div
        class="hero__glow hero__glow--primary"
        aria-hidden="true" />
      <div
        class="hero__glow hero__glow--success"
        aria-hidden="true" />

      <div class="container position-relative">
        <div class="row align-items-center">
          <div class="col col-12 col-lg-7">
            <p class="hero__eyebrow">
              <span class="hero__dot" />
              Vue 2 · SCSS toolkit · 2020—2023
            </p>

            <h1 class="hero__title">Night<span class="hero__title-accent">Vue</span></h1>

            <p class="hero__lead">
              A crystal-clear starting point for custom interfaces. No pre-built UI kit,
              no opinions about your design — just a responsive grid, a small army of
              Sass helpers and enough structure to start from scratch.
            </p>

            <div class="hero__actions">
              <a
                class="btn btn--primary"
                href="#toolkit">Explore the toolkit</a>
              <a
                class="btn btn--ghost"
                href="https://github.com/nightrunner91/nightvue"
                target="_blank"
                rel="noopener">View on GitHub</a>
            </div>

            <ul class="hero__facts">
              <li>
                <strong>17</strong>
                <span>helper modules</span>
              </li>
              <li>
                <strong>2.1k</strong>
                <span>lines of SCSS</span>
              </li>
              <li>
                <strong>58 KB</strong>
                <span>of documentation</span>
              </li>
            </ul>
          </div>

          <div class="col col-12 col-lg-5">
            <div class="livecard">
              <div class="livecard__bar">
                <span class="livecard__dots">
                  <i class="livecard__dot livecard__dot--red" />
                  <i class="livecard__dot livecard__dot--yellow" />
                  <i class="livecard__dot livecard__dot--green" />
                </span>
                <span class="livecard__file">config.js</span>
              </div>

              <div class="livecard__body">
                <img
                  class="livecard__logo"
                  src="@/assets/images/logo.png"
                  alt="NightVue"
                  width="88"
                  height="88">

                <div class="livecard__row">
                  <span class="livecard__label">Viewport</span>
                  <strong class="livecard__value">{{ viewport.width || '—' }} × {{ viewport.height || '—' }}</strong>
                </div>

                <div class="livecard__row">
                  <span class="livecard__label">Breakpoint</span>
                  <strong class="livecard__value clr-primary">{{ breakpoint }}</strong>
                </div>

                <div class="livecard__breakpoints">
                  <span
                    v-for="bp in breakpoints"
                    :key="bp"
                    class="livecard__bp"
                    :class="{ 'livecard__bp--active': bp === breakpoint }">{{ bp }}</span>
                </div>

                <p class="livecard__hint">Resize the window — the Vuex store keeps up.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- ========== Ticker =========== -->
    <!-- ============================= -->
    <section class="ticker">
      <div class="container ticker__inner">
        <div class="ticker__item">
          <span class="ticker__label">Breakpoint</span>
          <strong class="ticker__value clr-primary">{{ breakpoint }}</strong>
        </div>
        <div class="ticker__item">
          <span class="ticker__label">Width</span>
          <strong class="ticker__value">{{ viewport.width || 0 }}px</strong>
        </div>
        <div class="ticker__item">
          <span class="ticker__label">Height</span>
          <strong class="ticker__value">{{ viewport.height || 0 }}px</strong>
        </div>
        <div class="ticker__item">
          <span class="ticker__label">Scroll</span>
          <strong class="ticker__value">{{ scroll }}px</strong>
        </div>
        <p class="ticker__note">Live values from the <code>config</code> store module.</p>
      </div>
    </section>

    <!-- ============================= -->
    <!-- ========= Toolkit =========== -->
    <!-- ============================= -->
    <section
      id="toolkit"
      class="section">
      <div class="container">
        <header class="section__head">
          <p class="section__index">01 — Toolkit</p>
          <h2 class="section__title">Small core, sharp tools</h2>
          <p class="section__lead">
            NightVue does not ship components. It ships the layer underneath them:
            layout primitives, generated utilities and Sass functions that keep your
            templates clean and your styles in one place.
          </p>
        </header>

        <div class="row">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="col col-12 col-md-4">
            <article class="card">
              <span
                class="card__icon"
                :class="feature.tone">
                <svg-icon
                  :icon="feature.icon"
                  size="lg" />
              </span>
              <h3 class="card__title">{{ feature.title }}</h3>
              <p class="card__text">{{ feature.text }}</p>
              <code class="card__code">{{ feature.code }}</code>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- =========== Grid ============ -->
    <!-- ============================= -->
    <section
      id="grid"
      class="section section--paper">
      <div class="container">
        <header class="section__head">
          <p class="section__index">02 — Grid</p>
          <h2 class="section__title">Twelve columns, five breakpoints</h2>
          <p class="section__lead">
            A flexbox grid with containers, rows, columns, offsets and ordering — usable
            as class names or as Sass mixins. Every utility below responds to the same
            <code>$breakpoints</code> map.
          </p>
        </header>

        <div class="demo">
          <div class="demo__bar">
            <span class="demo__title">Equal columns</span>
            <button
              class="demo__copy"
              type="button"
              @click="copy('grid')">{{ copied === 'grid' ? 'Copied' : 'Copy' }}</button>
          </div>

          <div class="row grid-demo grid-demo--twelve">
            <div
              v-for="n in 12"
              :key="n"
              class="col col-1">
              <div class="grid-demo__cell">{{ n }}</div>
            </div>
          </div>

          <div class="row grid-demo">
            <div
              v-for="n in 6"
              :key="'responsive-' + n"
              class="col col-12 col-md-6 col-lg-4">
              <div class="grid-demo__cell grid-demo__cell--primary">
                <span class="grid-demo__wide">col-12 · col-md-6 · col-lg-4</span>
                <span class="grid-demo__narrow">{{ n }}</span>
              </div>
            </div>
          </div>

          <div class="row grid-demo">
            <div class="col col-12 col-md-4 offset-md-4">
              <div class="grid-demo__cell grid-demo__cell--success">4 cols + offset 4</div>
            </div>
          </div>

          <pre class="code"><code>{{ snippets.grid }}</code></pre>
        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- ========== Spacing ========== -->
    <!-- ============================= -->
    <section
      id="spacing"
      class="section">
      <div class="container">
        <header class="section__head">
          <p class="section__index">03 — Spacing</p>
          <h2 class="section__title">One scale to rule the rhythm</h2>
          <p class="section__lead">
            Twenty steps from <code>0</code> to <code>5rem</code>, available as
            <code>m-</code> and <code>p-</code> classes, as the <code>spacer()</code>
            function and as a mixin-friendly Sass map.
          </p>
        </header>

        <div class="demo">
          <div class="demo__bar">
            <span class="demo__title">$spacers</span>
            <button
              class="demo__copy"
              type="button"
              @click="copy('spacing')">{{ copied === 'spacing' ? 'Copied' : 'Copy' }}</button>
          </div>

          <ul class="spacers">
            <li
              v-for="size in spacers"
              :key="size"
              class="spacers__row">
              <span class="spacers__label">{{ size }}</span>
              <span
                class="spacers__bar"
                :style="{ width: size * 16 + 'px' }" />
              <code class="spacers__value">{{ spacerRem(size) }}</code>
            </li>
          </ul>

          <pre class="code"><code>{{ snippets.spacing }}</code></pre>
        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- =========== Colors ========== -->
    <!-- ============================= -->
    <section
      id="colors"
      class="section section--paper">
      <div class="container">
        <header class="section__head">
          <p class="section__index">04 — Colors</p>
          <h2 class="section__title">A palette that generates itself</h2>
          <p class="section__lead">
            Eight semantic colors and a twelve-step gray ramp. Each theme color also gets
            light, dark, saturated and desaturated variants plus rgba helpers — all
            generated from three small Sass maps.
          </p>
        </header>

        <div class="palette">
          <div
            v-for="color in themeColors"
            :key="color.name"
            class="palette__swatch"
            :class="'bg-' + color.name">
            <span
              class="palette__name"
              :class="color.contrast">{{ color.name }}</span>
            <span
              class="palette__hex"
              :class="color.contrast">{{ color.hex }}</span>
          </div>
        </div>

        <div class="grays">
          <span
            v-for="gray in grays"
            :key="gray.name"
            class="grays__item"
            :class="'bg-' + gray.name">
            <span
              class="grays__label"
              :class="gray.contrast">{{ gray.name }}</span>
          </span>
        </div>

        <div class="demo">
          <div class="demo__bar">
            <span class="demo__title">Generated levels — primary</span>
            <button
              class="demo__copy"
              type="button"
              @click="copy('colors')">{{ copied === 'colors' ? 'Copied' : 'Copy' }}</button>
          </div>

          <div class="levels">
            <div class="levels__group">
              <span class="levels__caption">light</span>
              <span
                v-for="level in levels"
                :key="'light-' + level"
                class="levels__chip"
                :class="'bg-primary-light-' + level" />
            </div>
            <div class="levels__group">
              <span class="levels__caption">dark</span>
              <span
                v-for="level in levels"
                :key="'dark-' + level"
                class="levels__chip"
                :class="'bg-primary-dark-' + level" />
            </div>
          </div>

          <pre class="code"><code>{{ snippets.colors }}</code></pre>
        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- ========= Typography ======== -->
    <!-- ============================= -->
    <section
      id="type"
      class="section">
      <div class="container">
        <header class="section__head">
          <p class="section__index">05 — Typography</p>
          <h2 class="section__title">A scale, not a guessing game</h2>
          <p class="section__lead">
            Displays, headings, body, small text and taglines are all defined in the
            typography map. The font is <a
              class="section__link"
              href="https://onest.md/en"
              target="_blank"
              rel="noopener">Onest</a>, bundled locally.
          </p>
        </header>

        <div class="type">
          <div
            v-for="item in typeScale"
            :key="item.label"
            class="type__row">
            <span class="type__label">{{ item.label }}</span>
            <component
              :is="item.tag"
              class="type__sample"
              :class="item.className">{{ item.sample }}</component>
          </div>
        </div>

        <div class="type__utilities">
          <p class="type__utility">
            <span class="type__label">body</span>
            The quick brown fox jumps over the lazy dog.
          </p>
          <p class="type__utility">
            <span class="type__label">tagline</span>
            <span class="tagline">The quick brown fox jumps over the lazy dog.</span>
          </p>
          <p class="type__utility">
            <span class="type__label">small</span>
            <span class="small">The quick brown fox jumps over the lazy dog.</span>
          </p>
          <p class="type__utility">
            <span class="type__label">utilities</span>
            <span class="font-weight-700">Bold</span> ·
            <span class="font-italic">Italic</span> ·
            <span class="text-uppercase">Uppercase</span> ·
            <span class="text-line-through">Struck</span> ·
            <span class="spacing-wide">Spaced</span>
          </p>
          <pre class="code"><code>{{ snippets.type }}</code></pre>
        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- =========== Details ========= -->
    <!-- ============================= -->
    <section
      id="details"
      class="section section--paper">
      <div class="container">
        <header class="section__head">
          <p class="section__index">06 — Details</p>
          <h2 class="section__title">The last ten percent</h2>
          <p class="section__lead">
            Icons, radii, elevation and motion follow the same idea: define the scale
            once, then use it everywhere.
          </p>
        </header>

        <div class="row">
          <div class="col col-12 col-md-6 col-lg-3">
            <article class="detail">
              <h3 class="detail__title">Icons</h3>
              <p class="detail__text">SVG sprite, sized from a map and coloured with currentColor.</p>
              <div class="detail__icons">
                <svg-icon
                  v-for="size in iconSizes"
                  :key="size"
                  icon="lightbulb"
                  :size="size" />
              </div>
              <div class="detail__icons detail__icons--muted">
                <svg-icon
                  icon="face"
                  size="lg" />
                <svg-icon
                  icon="link"
                  size="lg" />
              </div>
            </article>
          </div>

          <div class="col col-12 col-md-6 col-lg-3">
            <article class="detail">
              <h3 class="detail__title">Radius</h3>
              <p class="detail__text">Four steps and a circle, applied to any corner.</p>
              <div class="detail__boxes">
                <div
                  v-for="radius in radiuses"
                  :key="radius.name"
                  class="detail__box"
                  :class="'radius-' + radius.name">
                  <span class="detail__box-label">{{ radius.label }}</span>
                </div>
              </div>
            </article>
          </div>

          <div class="col col-12 col-md-6 col-lg-3">
            <article class="detail">
              <h3 class="detail__title">Elevation</h3>
              <p class="detail__text">Five Material-inspired shadows, ready as classes.</p>
              <div class="detail__shadows">
                <span
                  v-for="shadow in shadows"
                  :key="shadow"
                  class="detail__shadow"
                  :class="'shadow-' + shadow">{{ shadow }}</span>
              </div>
            </article>
          </div>

          <div class="col col-12 col-md-6 col-lg-3">
            <article class="detail">
              <h3 class="detail__title">Motion</h3>
              <p class="detail__text">Speed and easing tokens with a <code>transition()</code> function.</p>
              <a
                class="detail__lift"
                href="#toolkit">
                <span class="detail__lift-title">Hover me</span>
                <span class="detail__lift-code">transition(all, short)</span>
              </a>
              <a
                class="detail__lift detail__lift--alt"
                href="#toolkit">
                <span class="detail__lift-title">And me</span>
                <span class="detail__lift-code">timing-standard</span>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- ============ Docs =========== -->
    <!-- ============================= -->
    <section
      id="docs"
      class="section section--docs">
      <div class="container">
        <div class="docs">
          <div
            class="docs__glow"
            aria-hidden="true" />

          <p class="docs__eyebrow">Documentation included</p>
          <h2 class="docs__title">Everything is written down.</h2>
          <p class="docs__lead">
            Layout, grid, typography, spacing, colors, gradients, icons, radius, shadows,
            z-index, transitions, animations, rotations and utilities — 58 KB of reference
            material lives in the README, with code samples for every section.
          </p>

          <div class="docs__actions">
            <a
              class="btn btn--light"
              href="https://github.com/nightrunner91/nightvue#documentation"
              target="_blank"
              rel="noopener">Read the README</a>
            <a
              class="btn btn--outline-light"
              href="https://github.com/nightrunner91/nightvue"
              target="_blank"
              rel="noopener">Browse the source</a>
          </div>

          <p class="docs__note">
            NightVue targets Vue 2, which reached end of life in December 2023.
            This page is a preserved demo, not an invitation to start a new Vue 2 project.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      copied: '',
      breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
      levels: [1, 2, 3, 4, 5],
      spacers: [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20],
      iconSizes: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      radiuses: [
        { name: 'small', label: '4px' },
        { name: 'base', label: '8px' },
        { name: 'large', label: '20px' },
        { name: 'circle', label: '100%' },
      ],
      shadows: ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'],
      themeColors: [
        { name: 'primary', hex: '#682CAB', contrast: 'clr-white' },
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
      features: [
        {
          icon: 'lightbulb',
          tone: 'card__icon--primary',
          title: 'SCSS first',
          text: 'Variables, functions and mixins for colour, spacing, type and motion. One source of truth for the whole interface.',
          code: "color('primary', light, 3)",
        },
        {
          icon: 'link',
          tone: 'card__icon--success',
          title: 'Layout system',
          text: 'Router layouts, page transitions and a flexbox grid that works with class names or with mixins.',
          code: '<app-layout> ... </app-layout>',
        },
        {
          icon: 'face',
          tone: 'card__icon--secondary',
          title: 'Documented',
          text: 'Every helper is described in the README with generated examples, so you can look things up instead of guessing.',
          code: 'github.com/.../#documentation',
        },
      ],
      typeScale: [
        { label: 'display-1', tag: 'p', className: 'display-1', sample: 'Display 1' },
        { label: 'display-2', tag: 'p', className: 'display-2', sample: 'Display 2' },
        { label: 'display-3', tag: 'p', className: 'display-3', sample: 'Display 3' },
        { label: 'display-4', tag: 'p', className: 'display-4', sample: 'Display 4' },
        { label: 'h1', tag: 'h1', className: '', sample: 'Heading 1' },
        { label: 'h2', tag: 'h2', className: '', sample: 'Heading 2' },
        { label: 'h3', tag: 'h3', className: '', sample: 'Heading 3' },
        { label: 'h4', tag: 'h4', className: '', sample: 'Heading 4' },
        { label: 'h5', tag: 'h5', className: '', sample: 'Heading 5' },
        { label: 'h6', tag: 'h6', className: '', sample: 'Heading 6' },
      ],
      snippets: {
        grid: `<div class="container">
  <div class="row">
    <div class="col col-12 col-md-6 col-lg-4">
      ...
    </div>
  </div>
</div>`,
        spacing: `<div class="p-4 mt-8">
  padding: 1rem; margin-top: 2rem;
</div>

// or in SCSS
.selector {
  padding: spacer(4);
  margin-top: spacer(8);
}`,
        colors: `background-color: color('primary');
color: color('primary', light, 3);
border-color: color('danger', dark, 2);
box-shadow: 0 0 0 4px color('primary', $opacity: 2);

<div class="bg-primary-light-3">...</div>`,
        type: `<h1>Heading 1</h1>
<p class="tagline">Tagline text</p>
<p class="small">Small text</p>

<span class="font-weight-700 text-uppercase">
  Bold and uppercase
</span>`,
      },
    }
  },

  computed: {
    viewport() {
      return this.$store.state.config.windowSize
    },

    breakpoint() {
      return this.$store.state.config.currentBreakpoint
    },

    scroll() {
      return this.$store.state.config.windowScroll
    },
  },

  methods: {
    spacerRem(size) {
      return `${size * 0.25}rem`
    },

    copy(key) {
      if (!navigator.clipboard) return
      navigator.clipboard.writeText(this.snippets[key]).then(() => {
        this.copied = key
        setTimeout(() => {
          if (this.copied === key) this.copied = ''
        }, 1600)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/@core/globals.scss";

.showcase {
  overflow: hidden;
}

/* ==========================================================
   Hero
   ========================================================== */

.hero {
  position: relative;
  padding: spacer(12) 0 spacer(10);
  overflow: hidden;

  &__glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;

    &--primary {
      top: -140px;
      left: -120px;
      width: 420px;
      height: 420px;
      background-color: color('primary', $opacity: 2);
    }

    &--success {
      right: -160px;
      bottom: -180px;
      width: 380px;
      height: 380px;
      background-color: color('success', $opacity: 1);
    }
  }

  &__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: spacer(2);
    margin-bottom: spacer(4);
    color: color('gray-7');
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: color('success');
    box-shadow: 0 0 0 4px color('success', $opacity: 1);
  }

  &__title {
    margin: 0 0 spacer(4);
    color: color('gray-10');
    font-family: map-get($font-families, displays);
    font-size: clamp(3.5rem, 9vw, 7rem);
    font-weight: 800;
    letter-spacing: -0.05em;
    line-height: 1;
  }

  &__title-accent {
    color: color('primary');
  }

  &__lead {
    max-width: 560px;
    margin: 0 0 spacer(6);
    color: color('gray-8');
    font-size: 1.125rem;
    line-height: 1.7;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: spacer(2);
    margin-bottom: spacer(8);
  }

  &__facts {
    display: flex;
    flex-wrap: wrap;
    gap: spacer(4);
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    strong {
      color: color('gray-10');
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    span {
      color: color('gray-7');
      font-size: 0.75rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 spacer(5);
  border: 1px solid transparent;
  border-radius: radius('base');
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  transition: transition(all, short);

  &--primary {
    background-color: color('primary');
    color: color('white');
    box-shadow: 0 8px 20px color('primary', $opacity: 3);

    &:hover {
      background-color: color('primary', dark, 2);
      transform: translateY(-1px);
    }
  }

  &--ghost {
    border-color: color('gray-2');
    background-color: color('white');
    color: color('gray-9');

    &:hover {
      border-color: color('primary');
      color: color('primary');
    }
  }

  &--light {
    background-color: color('white');
    color: color('primary');

    &:hover {
      background-color: color('gray-1');
    }
  }

  &--outline-light {
    border-color: color('white', $opacity: 4);
    color: color('white');

    &:hover {
      border-color: color('white');
      background-color: color('white', $opacity: 1);
    }
  }
}

@media #{$sm-up} {
  .hero {
    &__facts {
      gap: spacer(6);
    }
  }
}

@media (max-width: 479px) {
  .hero {
    &__facts {
      gap: spacer(3);

      span {
        font-size: 0.625rem;
        letter-spacing: 0.02em;
      }
    }
  }
}

/* ==========================================================
   Live card
   ========================================================== */

.livecard {
  margin-top: spacer(8);
  border: 1px solid color('gray-2');
  border-radius: radius('large');
  background-color: color('white');
  box-shadow: shadow('level-4');
  overflow: hidden;

  &__bar {
    display: flex;
    align-items: center;
    gap: spacer(2);
    padding: 12px 16px;
    border-bottom: 1px solid color('gray-1');
    background-color: color('gray-1');
  }

  &__dots {
    display: inline-flex;
    gap: 6px;
  }

  &__dot {
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;

    &--red {
      background-color: #f26b5e;
    }

    &--yellow {
      background-color: #f5c451;
    }

    &--green {
      background-color: #5fc26d;
    }
  }

  &__file {
    color: color('gray-7');
    font-family: monospace;
    font-size: 0.75rem;
  }

  &__body {
    padding: spacer(6);
  }

  &__logo {
    display: block;
    width: 88px;
    height: 88px;
    margin-bottom: spacer(4);
    border-radius: radius('circle');
  }

  &__row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: spacer(2) 0;
    border-bottom: 1px dashed color('gray-1');
  }

  &__label {
    color: color('gray-7');
    font-size: 0.8125rem;
  }

  &__value {
    color: color('gray-10');
    font-size: 0.9375rem;
    font-weight: 600;
  }

  &__breakpoints {
    display: flex;
    gap: spacer(1);
    margin-top: spacer(4);
  }

  &__bp {
    flex: 1;
    padding: 6px 0;
    border-radius: radius('small');
    background-color: color('gray-1');
    color: color('gray-7');
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    transition: transition(all, short);

    &--active {
      background-color: color('primary');
      color: color('white');
    }
  }

  &__hint {
    margin: spacer(4) 0 0;
    color: color('gray-6');
    font-size: 0.75rem;
  }
}

/* ==========================================================
   Ticker
   ========================================================== */

.ticker {
  border-top: 1px solid color('gray-1');
  border-bottom: 1px solid color('gray-1');
  background-color: color('white');

  &__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: spacer(3) spacer(8);
    padding-top: spacer(3);
    padding-bottom: spacer(3);
  }

  &__item {
    display: flex;
    align-items: baseline;
    gap: spacer(2);
  }

  &__label {
    color: color('gray-6');
    font-size: 0.6875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  &__value {
    color: color('gray-10');
    font-family: monospace;
    font-size: 0.875rem;
  }

  &__note {
    margin: 0 0 0 auto;
    color: color('gray-6');
    font-size: 0.75rem;

    code {
      padding: 1px 4px;
      border-radius: 3px;
      background-color: color('gray-1');
    }
  }
}

/* ==========================================================
   Sections
   ========================================================== */

.section {
  padding: spacer(12) 0;

  &--paper {
    background-color: color('white');
  }

  &--docs {
    padding-bottom: spacer(14);
  }

  &__head {
    max-width: 720px;
    margin-bottom: spacer(8);
  }

  &__index {
    margin: 0 0 spacer(2);
    color: color('primary');
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__title {
    margin: 0 0 spacer(3);
    color: color('gray-10');
    font-size: clamp(1.9rem, 4vw, 2.75rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
  }

  &__lead {
    margin: 0;
    color: color('gray-8');
    font-size: 1rem;
    line-height: 1.7;

    code {
      padding: 1px 5px;
      border-radius: 3px;
      background-color: color('gray-1');
      color: color('gray-9');
    }
  }

  &__link {
    color: color('primary');
    text-decoration: underline;
    text-underline-offset: 2px;
  }
}

/* ==========================================================
   Cards
   ========================================================== */

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: spacer(5);
  border: 1px solid color('gray-1');
  border-radius: radius('large');
  background-color: color('white');
  transition: transition(all, short);

  &:hover {
    border-color: color('primary', $opacity: 2);
    box-shadow: shadow('level-2');
    transform: translateY(-2px);
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    margin-bottom: spacer(4);
    border-radius: radius('base');

    &--primary {
      background-color: color('primary', $opacity: 1);
      color: color('primary');
    }

    &--success {
      background-color: color('success', $opacity: 1);
      color: color('success', dark, 2);
    }

    &--secondary {
      background-color: color('secondary', $opacity: 1);
      color: color('secondary', dark, 2);
    }
  }

  &__title {
    margin: 0 0 spacer(2);
    color: color('gray-10');
    font-size: 1.125rem;
    font-weight: 700;
  }

  &__text {
    flex-grow: 1;
    margin: 0 0 spacer(4);
    color: color('gray-8');
    font-size: 0.9375rem;
    line-height: 1.65;
  }

  &__code {
    display: inline-block;
    align-self: flex-start;
    padding: 3px 8px;
    border-radius: radius('small');
    background-color: color('gray-1');
    color: color('primary', dark, 1);
    font-size: 0.75rem;
  }
}

/* ==========================================================
   Demo shell
   ========================================================== */

.demo {
  padding: spacer(5);
  border: 1px solid color('gray-1');
  border-radius: radius('large');
  background-color: color('white');
  box-shadow: shadow('level-1');

  &__bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: spacer(2);
    margin-bottom: spacer(4);
    padding-bottom: spacer(3);
    border-bottom: 1px solid color('gray-1');
  }

  &__title {
    color: color('gray-10');
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &__copy {
    padding: 5px 12px;
    border: 1px solid color('gray-2');
    border-radius: radius('small');
    background-color: color('white');
    color: color('gray-8');
    font-family: inherit;
    font-size: 0.75rem;
    cursor: pointer;
    transition: transition(all, short);

    &:hover {
      border-color: color('primary');
      color: color('primary');
    }
  }
}

.code {
  margin: spacer(4) 0 0;
  padding: spacer(4);
  border-radius: radius('base');
  background-color: #17121f;
  color: #d8d2e4;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  font-size: 0.8125rem;
  line-height: 1.7;
  white-space: pre;
  overflow-x: auto;

  code {
    display: block;
    padding: 0;
    border-radius: 0;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    white-space: inherit;
  }
}

/* ==========================================================
   Grid demo
   ========================================================== */

.grid-demo {
  margin-bottom: spacer(3);

  &__cell {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    margin-bottom: spacer(2);
    border: 1px solid color('primary', $opacity: 2);
    border-radius: radius('small');
    background-color: color('primary', $opacity: 1);
    color: color('primary', dark, 2);
    font-family: monospace;
    font-size: 0.8125rem;

    &--primary {
      border-color: color('secondary', $opacity: 2);
      background-color: color('secondary', $opacity: 1);
      color: color('secondary', dark, 2);
    }

    &--success {
      border-color: color('success', $opacity: 2);
      background-color: color('success', $opacity: 1);
      color: color('success', dark, 3);
    }
  }

  &__wide {
    display: none;
  }

  &__narrow {
    font-weight: 700;
  }
}

@media #{$md-up} {
  .grid-demo {
    &__wide {
      display: inline;
    }

    &__narrow {
      display: none;
    }
  }
}

@media (max-width: 767px) {
  .grid-demo--twelve {
    .col-1 {
      padding-left: 2px;
      padding-right: 2px;
    }

    .grid-demo__cell {
      min-height: 36px;
      font-size: 0.625rem;
    }
  }
}

/* ==========================================================
   Spacers
   ========================================================== */

.spacers {
  margin: 0;
  padding: 0;
  list-style: none;

  &__row {
    display: flex;
    align-items: center;
    gap: spacer(3);
    padding: 3px 0;
  }

  &__label {
    width: 24px;
    color: color('gray-7');
    font-family: monospace;
    font-size: 0.75rem;
    text-align: right;
  }

  &__bar {
    display: inline-block;
    height: 14px;
    border-radius: 3px;
    background: linear-gradient(90deg, color('primary'), color('success'));
  }

  &__value {
    color: color('gray-6');
    font-size: 0.75rem;
  }
}

/* ==========================================================
   Palette
   ========================================================== */

.palette {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: spacer(2);
  margin-bottom: spacer(6);
}

.palette__swatch {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
  padding: spacer(3);
  border-radius: radius('base');
}

.palette__name {
  font-size: 0.8125rem;
  font-weight: 700;
}

.palette__hex {
  font-family: monospace;
  font-size: 0.6875rem;
  opacity: 0.8;
}

.grays {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  margin-bottom: spacer(8);
  border-radius: radius('base');
  box-shadow: inset 0 0 0 1px color('gray-1');
  overflow: hidden;
}

.grays__item {
  display: flex;
  align-items: flex-end;
  min-height: 64px;
  padding: spacer(1);
}

.grays__label {
  font-family: monospace;
  font-size: 0.625rem;
  opacity: 0.8;
}

.levels {
  display: flex;
  flex-direction: column;
  gap: spacer(2);

  &__group {
    display: flex;
    align-items: center;
    gap: spacer(1);
  }

  &__caption {
    width: 48px;
    color: color('gray-7');
    font-size: 0.75rem;
  }

  &__chip {
    width: 44px;
    height: 32px;
    border-radius: radius('small');
  }
}

@media #{$sm-up} {
  .palette {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .grays {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
}

/* ==========================================================
   Typography
   ========================================================== */

.type {
  border-top: 1px solid color('gray-1');

  &__row {
    display: flex;
    align-items: baseline;
    gap: spacer(4);
    padding: spacer(2) 0;
    border-bottom: 1px solid color('gray-1');
  }

  &__label {
    flex: 0 0 76px;
    color: color('gray-6');
    font-family: monospace;
    font-size: 0.6875rem;
  }

  &__sample {
    margin: 0 !important;
    color: color('gray-10');
  }

  &__utilities {
    margin-top: spacer(6);
  }

  &__utility {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: spacer(4);
    margin: 0;
    padding: spacer(2) 0;
    border-bottom: 1px solid color('gray-1');
    color: color('gray-9');
  }
}

/* ==========================================================
   Details
   ========================================================== */

.detail {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: spacer(5);
  border: 1px solid color('gray-1');
  border-radius: radius('large');
  background-color: color('white');

  &__title {
    margin: 0 0 spacer(2);
    color: color('gray-10');
    font-size: 1rem;
    font-weight: 700;
  }

  &__text {
    flex-grow: 1;
    margin: 0 0 spacer(4);
    color: color('gray-8');
    font-size: 0.8125rem;
    line-height: 1.6;

    code {
      padding: 1px 4px;
      border-radius: 3px;
      background-color: color('gray-1');
      font-size: 0.75rem;
    }
  }

  &__icons {
    display: flex;
    align-items: center;
    gap: spacer(3);
    margin-bottom: spacer(3);
    color: color('primary');

    &--muted {
      margin-bottom: 0;
      color: color('gray-5');
    }
  }

  &__boxes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: spacer(2);
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    border: 1px solid color('primary', $opacity: 2);
    background-color: color('primary', $opacity: 1);
  }

  &__box-label {
    color: color('primary', dark, 2);
    font-family: monospace;
    font-size: 0.6875rem;
  }

  &__shadows {
    display: flex;
    flex-direction: column;
    gap: spacer(2);
  }

  &__shadow {
    display: block;
    padding: 8px 12px;
    border-radius: radius('small');
    background-color: color('white');
    color: color('gray-7');
    font-family: monospace;
    font-size: 0.6875rem;
  }

  &__lift {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-bottom: spacer(2);
    padding: 10px 12px;
    border: 1px solid color('gray-2');
    border-radius: radius('base');
    color: color('gray-9');
    text-decoration: none;
    transition: transition(all, base, standard);

    &:hover {
      border-color: color('primary');
      box-shadow: shadow('level-2');
      transform: translateY(-3px);
    }

    &--alt:hover {
      transform: translateY(0) scale(1.02);
      box-shadow: shadow('level-1');
    }
  }

  &__lift-title {
    font-size: 0.8125rem;
    font-weight: 700;
  }

  &__lift-code {
    color: color('gray-6');
    font-family: monospace;
    font-size: 0.625rem;
  }
}

/* ==========================================================
   Docs CTA
   ========================================================== */

.docs {
  position: relative;
  padding: spacer(8);
  border-radius: radius('large');
  background-color: #17121f;
  overflow: hidden;

  &__glow {
    position: absolute;
    top: -120px;
    right: -80px;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: linear-gradient(145deg, color('primary'), color('success'));
    opacity: 0.35;
    filter: blur(70px);
    pointer-events: none;
  }

  &__eyebrow {
    position: relative;
    margin: 0 0 spacer(2);
    color: color('success');
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__title {
    position: relative;
    margin: 0 0 spacer(3);
    color: color('white');
    font-size: clamp(1.9rem, 4vw, 2.75rem);
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  &__lead {
    position: relative;
    max-width: 640px;
    margin: 0 0 spacer(5);
    color: color('gray-3');
    line-height: 1.7;
  }

  &__actions {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: spacer(2);
    margin-bottom: spacer(5);
  }

  &__note {
    position: relative;
    max-width: 560px;
    margin: 0;
    padding-top: spacer(4);
    border-top: 1px solid color('white', $opacity: 1);
    color: color('gray-6');
    font-size: 0.75rem;
    line-height: 1.6;
  }
}

@media #{$md-up} {
  .docs {
    padding: spacer(10);
  }
}

@media (max-width: 767px) {
  .type {
    &__row {
      flex-direction: column;
      gap: spacer(1);
    }

    &__label {
      flex-basis: auto;
    }

    &__sample {
      &.display-1 {
        font-size: 3.25rem;
      }

      &.display-2 {
        font-size: 2.75rem;
      }

      &.display-3 {
        font-size: 2.25rem;
      }

      &.display-4 {
        font-size: 1.75rem;
      }
    }

    h1#{&}__sample {
      font-size: 2.5rem;
    }

    h2#{&}__sample {
      font-size: 1.9rem;
    }

    h3#{&}__sample {
      font-size: 1.4rem;
    }
  }

  .code {
    padding: spacer(3);
    font-size: 0.6875rem;
  }
}
</style>
