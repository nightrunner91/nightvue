<template>
  <div class="docs-page">
    <!-- ====================================================== -->
    <!-- Hero / Introduction                                    -->
    <!-- ====================================================== -->
    <section
      id="introduction"
      class="hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col col-12 col-lg-7">
            <p class="hero__eyebrow">Vue 2 · SCSS</p>

            <h1 class="hero__title">A Vue 2 starter with an SCSS toolkit</h1>

            <p class="hero__lead">
              A responsive grid, a set of Sass helpers and enough structure to start from
              scratch, with no pre-built UI kit and no opinions about your design. Vue 2
              reached end of life in December 2023, so this site stays online as a live demo.
            </p>

            <div class="hero__actions">
              <a
                class="btn btn--primary"
                href="#documentation">Read the documentation</a>
              <a
                class="btn btn--ghost"
                href="https://github.com/nightrunner91/nightvue"
                target="_blank"
                rel="noopener">View on GitHub</a>
            </div>
          </div>

          <div class="col col-12 col-lg-5">
            <div class="terminal">
              <div class="terminal__bar">
                <span class="terminal__title">nightvue — zsh</span>
              </div>

              <div class="terminal__body">
                <p class="terminal__line">
                  <span class="terminal__prompt">$</span>
                  npm run serve
                </p>
                <p class="terminal__line terminal__line--muted">Starting development server…</p>
                <p class="terminal__line terminal__line--success">DONE Compiled successfully in 2143ms</p>
                <p class="terminal__line">
                  <span class="terminal__muted">App running at</span>
                  <span class="terminal__link">http://localhost:1991/</span>
                </p>

                <div class="terminal__live">
                  <div class="terminal__live-item">
                    <span>breakpoint</span>
                    <strong>{{ breakpoint }}</strong>
                  </div>
                  <div class="terminal__live-item">
                    <span>viewport</span>
                    <strong>{{ viewport.width || '—' }} × {{ viewport.height || '—' }}</strong>
                  </div>
                  <div class="terminal__live-item">
                    <span>scroll</span>
                    <strong>{{ scroll }} px</strong>
                  </div>
                </div>

                <p class="terminal__note">
                  Live values come from the <code>config</code> Vuex module. Resize the window to see them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- Getting started                                        -->
    <!-- ====================================================== -->
    <section
      id="getting-started"
      class="page-section page-section--paper">
      <div class="container">
        <header class="page-head">
          <p class="page-head__index">01 Getting started</p>
          <h2 class="page-head__title">Install and run</h2>
          <p class="page-head__lead">
            Clone the repository, install the dependencies and start the hot-reload dev
            server. Build, lint and fix scripts come with the project.
          </p>
        </header>

        <div class="start-grid">
          <article
            v-for="command in commands"
            :key="command.title"
            class="start-card">
            <h3 class="start-card__title">{{ command.title }}</h3>
            <code-block
              :label="command.label"
              :code="command.code" />
          </article>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- What's included                                        -->
    <!-- ====================================================== -->
    <section
      id="included"
      class="page-section">
      <div class="container">
        <header class="page-head">
          <p class="page-head__index">02 What's included</p>
          <h2 class="page-head__title">Modules and features</h2>
          <p class="page-head__lead">
            NightVue ships modules, a file structure and Sass tools, not finished
            components. Use them as a base and build the interface you need.
          </p>
        </header>

        <div class="included-grid">
          <article class="included-card">
            <h3 class="included-card__title">Modules</h3>
            <ul class="included-list">
              <li
                v-for="module in modules"
                :key="module">
                <span class="included-list__dot" />
                {{ module }}
              </li>
            </ul>
          </article>

          <article class="included-card">
            <h3 class="included-card__title">Features</h3>
            <ul class="included-list">
              <li
                v-for="feature in features"
                :key="feature">
                <span class="included-list__dot" />
                {{ feature }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- File structure                                         -->
    <!-- ====================================================== -->
    <section
      id="structure"
      class="page-section page-section--paper">
      <div class="container">
        <header class="page-head">
          <p class="page-head__index">03 File structure</p>
          <h2 class="page-head__title">Where things live</h2>
          <p class="page-head__lead">
            The default structure is grouped by purpose, so a new page, layout or style
            block has an obvious home.
          </p>
        </header>

        <div class="structure-grid">
          <code-block
            label="Default structure"
            :code="structureTree" />

          <div class="structure-notes">
            <article
              v-for="note in structureNotes"
              :key="note.path"
              class="structure-note">
              <code>{{ note.path }}</code>
              <p>{{ note.text }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- Documentation index                                    -->
    <!-- ====================================================== -->
    <section
      id="documentation"
      class="page-section">
      <div class="container">
        <header class="page-head">
          <p class="page-head__index">04 Documentation</p>
          <h2 class="page-head__title">Reference</h2>
          <p class="page-head__lead">
            Each section has a short explanation, a live example and code you can copy.
            The same material is in the repository README.
          </p>
        </header>

        <nav
          class="toc"
          aria-label="Documentation sections">
          <a
            v-for="section in sections"
            :key="section.id"
            class="toc-card"
            :href="'#' + section.id">
            <span class="toc-card__index">{{ section.index }}</span>
            <span class="toc-card__body">
              <strong class="toc-card__title">{{ section.title }}</strong>
              <span class="toc-card__text">{{ section.blurb }}</span>
            </span>
          </a>
        </nav>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- Documentation sections                                 -->
    <!-- ====================================================== -->
    <section class="docs-area">
      <div class="container">
        <div class="docs-shell">
          <aside
            class="docs-nav"
            aria-label="Documentation sections">
            <p class="docs-nav__title">On this page</p>
            <a
              v-for="section in sections"
              :key="'nav-' + section.id"
              class="docs-nav__link"
              :class="{ 'docs-nav__link--active': activeSection === section.id }"
              :href="'#' + section.id"
              :aria-current="activeSection === section.id ? 'location' : null">
              <span class="docs-nav__index">{{ section.index }}</span>
              {{ section.title }}
            </a>
          </aside>

          <div class="docs-content">
            <layout-section />
            <grid-section />
            <typography-section />
            <position-section />
            <display-section />
            <spacing-section />
            <sizing-section />
            <colors-section />
            <gradients-section />
            <opacity-section />
            <icons-section />
            <radius-section />
            <shadows-section />
            <z-index-section />
            <transitions-section />
            <animations-section />
            <rotations-section />
            <utilities-section />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import sections from '@/content/documentation'

import LayoutSection from '@/components/docs/sections/LayoutSection'
import GridSection from '@/components/docs/sections/GridSection'
import TypographySection from '@/components/docs/sections/TypographySection'
import PositionSection from '@/components/docs/sections/PositionSection'
import DisplaySection from '@/components/docs/sections/DisplaySection'
import SpacingSection from '@/components/docs/sections/SpacingSection'
import SizingSection from '@/components/docs/sections/SizingSection'
import ColorsSection from '@/components/docs/sections/ColorsSection'
import GradientsSection from '@/components/docs/sections/GradientsSection'
import OpacitySection from '@/components/docs/sections/OpacitySection'
import IconsSection from '@/components/docs/sections/IconsSection'
import RadiusSection from '@/components/docs/sections/RadiusSection'
import ShadowsSection from '@/components/docs/sections/ShadowsSection'
import ZIndexSection from '@/components/docs/sections/ZIndexSection'
import TransitionsSection from '@/components/docs/sections/TransitionsSection'
import AnimationsSection from '@/components/docs/sections/AnimationsSection'
import RotationsSection from '@/components/docs/sections/RotationsSection'
import UtilitiesSection from '@/components/docs/sections/UtilitiesSection'

export default {
  name: 'Home',

  components: {
    LayoutSection,
    GridSection,
    TypographySection,
    PositionSection,
    DisplaySection,
    SpacingSection,
    SizingSection,
    ColorsSection,
    GradientsSection,
    OpacitySection,
    IconsSection,
    RadiusSection,
    ShadowsSection,
    ZIndexSection,
    TransitionsSection,
    AnimationsSection,
    RotationsSection,
    UtilitiesSection,
  },

  data() {
    return {
      activeSection: 'layout',
      sections,
      commands: [
        {
          title: 'Clone and install',
          label: 'Terminal',
          code: `git clone https://github.com/nightrunner91/nightvue.git
cd nightvue
npm i`,
        },
        {
          title: 'Development server',
          label: 'Terminal',
          code: 'npm run serve',
        },
        {
          title: 'Production build',
          label: 'Terminal',
          code: `npm run build
npm run build:pre`,
        },
        {
          title: 'Lint and fix',
          label: 'Terminal',
          code: `npm run lint
npm run lint --fix`,
        },
      ],
      modules: [
        'vue.js v2.6.11',
        'vue-cli v4.5.0',
        'vuex v3.4.0',
        'vue-router v2.6.11',
        'axios v0.24.0',
        'eslint v6.7.2',
        'svg-sprite-loader v6.0.11',
        'lodash v4.17.21',
        'babel 10.1.0',
        'vue2-touch-events v3.2.2',
        'vue-waves-effect v1.0.0',
      ],
      features: [
        'Hot-reload dev server',
        'Well organized file structure',
        'Bunch of Sass mixins and functions',
        'ESLint validator',
        'Router layouts support',
        'Router pages transition',
        'Flexbox grid',
        'Normalize.css',
        'SVG sprite loader',
        'Images loader',
        'Fonts loader',
      ],
      structureTree: `.
├── public
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── icons
│   │   └── images
│   ├── components
│   │   ├── Footer
│   │   ├── Header
│   │   └── SvgIcon
│   ├── layouts
│   │   ├── AppLayout.vue
│   │   ├── AppLayoutDefault.vue
│   │   └── AppLayoutFull.vue
│   ├── router
│   │   ├── modules
│   │   └── index.js
│   ├── store
│   │   ├── modules
│   │   └── index.js
│   ├── styles
│   │   ├── @core
│   │   │   ├── helpers
│   │   │   ├── _functions.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _variables.scss
│   │   │   ├── globals.scss
│   │   │   ├── normalize.scss
│   │   │   └── typography.scss
│   │   ├── animations
│   │   ├── components
│   │   ├── sections
│   │   ├── nightvue.scss
│   │   └── style.scss
│   ├── views
│   │   └── Home.vue
│   ├── App.vue
│   └── main.js`,
      structureNotes: [
        {
          path: 'src/assets',
          text: 'Icons, fonts, images and files, served by Webpack and Sass loaders.',
        },
        {
          path: 'src/components',
          text: 'Reusable Vue components. Header, Footer and SvgIcon are included as examples.',
        },
        {
          path: 'src/layouts',
          text: 'Layout shells, switched by the router meta field.',
        },
        {
          path: 'src/router',
          text: 'Vue Router setup and route modules.',
        },
        {
          path: 'src/store',
          text: 'Vuex modules, including the live window configuration.',
        },
        {
          path: 'src/styles',
          text: 'Sass variables, functions, mixins, utilities, animations and component styles.',
        },
        {
          path: 'src/styles/@core/helpers',
          text: 'Generators for grid, spacing, colors, icons and other utility class names.',
        },
        {
          path: 'src/views',
          text: 'Pages used by the router. Home.vue is the only page by default.',
        },
      ],
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

  mounted() {
    if (!('IntersectionObserver' in window)) return

    this.observer = new IntersectionObserver(this.handleIntersect, {
      rootMargin: '-120px 0px -65% 0px',
      threshold: 0,
    })

    this.$nextTick(() => {
      const elements = this.$el.querySelectorAll('.doc-section')

      elements.forEach(element => this.observer.observe(element))
    })
  },

  beforeDestroy() {
    if (this.observer) this.observer.disconnect()
  },

  methods: {
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id
        }
      })
    },
  },
}
</script>
