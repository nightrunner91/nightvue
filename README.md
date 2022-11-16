<p></p>
<p align="center">
  <img src="https://i.imgur.com/N6EM6CE.png" alt="Presentation" width="300" height="284">
</p>

# Introduction 👋

NightVue is a “crystal clear” development framework for [Vue.js 2.x](https://ru.vuejs.org/v2/guide/) powered by [Vue CLI 4.x](https://cli.vuejs.org/), one of the most convenient tools for developing with Vue.js. 

While many other frameworks comes with pre-build components and styles, NightVue gives you the maximum freedom to develop your own web interfaces. It is created for those who prefer to develop “from scratch”. NightVue gives you tools to work with and what you do with them is up to you.

For those developers who needs framework with ready-to-use UI solutions, we would recomend to use popular ones like [BootstrapVue](https://bootstrap-vue.org/), [Vuetify](https://vuetifyjs.com/en/), [Vue Material](https://www.creative-tim.com/vuematerial/), or whatever you like. Anyway, take a look at our documentation, maybe NightVue is what you need!

# What's Included? 📦

**Modules:**
* vue.js v2.6.11
* vue-cli v.4.5.0
* vuex v3.4.0
* vue-router v2.6.11
* axios v0.24.0
* eslint v6.7.2
* svg-sprite-loader v6.0.11
* lodash v4.17.21
* babel 10.1.0
* vue2-touch-events v3.2.2
* vue-waves-effect v1.0.0

**Features:**
* Hot-reload dev server
* Well organized file structure
* Bunch of Sass mixins and functions
* ESLint validator
* Router layouts support
* Router pages transition
* Flexbox grid
* Normalize.css
* SVG sprite loader
* Images loader
* Fonts loader

# Getting Started 🖱

Clone repo and install dependencies
```
git clone https://github.com/nightrunner91/nightvue.git
npm i
```
Run hot-reload dev server
```
npm run serve
```
Build your project
```
npm run build
```
Test or test and fix errors
```
npm run lint
npm run lint --fix
```

# File Structure 📂

This is default NightVue file structure. We followed to the principles of modularity and extensibility during the development and recommend that you follow them aswell.
```
.
├── public
├── src
│   ├── assets
│       ├── fonts
│       ├── icons
│       └── images
│   ├── components
│       ├── Footer
│       ├── Header
│       └── SvgIcon
│   ├── layouts
│       AppLayout.vue
│       AppLayoutDefault.vue
│       AppLayoutFull.vue
│   ├── router
│       └── modules
│       index.js
│       RouterView.vue
│   ├── store
│       └── modules
│       index.js
│   ├── styles
|       ├── @core
│           └── helpers
│           _functions.scss
│           _mixins.scss
│           _varaibles.scss
│           globals.scss
│           normalize.scss
│           typography.scss
│       ├── animations
│       ├── components
│       └── sections
│       nightvue.scss
│       style.scss
│   └── views
│       Home.vue
│   App.vue
│   main.js
```
Let's take a look at the crucial parts of framework.

* `src/assets` folder includes any types of assets you are using in your project, such as icons, fonts, images, files etc. NightVue uses set of Webpack and Sass loaders to easy serve and manage them
* `src/components` folder includes [reusable Vue components](https://vuejs.org/guide/essentials/component-basics.html). By default this folder already includes **Header**, **Footer** and **SvgIcon** components as examples
* `src/layouts` folder includes different layout types for your project
* `src/router` folder includes [Vue Router](https://router.vuejs.org/) files
* `src/store` folder includes [Vuex](https://vuex.vuejs.org/) files
* `src/styles` folder includes stylesheets, Sass functions and mixins, usefull utilities.
  * `src/styles/@core` folder includes crucial NightVue Sass mixins, functions and code generators to work with
    * `src/styles/@core/helpers` - the folder includes SCSS files that generates utility classnames to use in HTML (grid, spacers, text styles, colors etc.)
    * `src/styles/@core/globals.scss` - this is key file where we import all **functions**, **mixins** and **variables** from so-called files at the same directory
    * `src/styles/@core/typography.scss` file describes all text styles (headings, displays, paragraphs, fonts etc)
    * `src/styles/@core/normalize.scss` makes browsers render all elements more consistently and in line with modern standards. It is basicly slightly modified SCSS version of widely used [Normalize.css](https://necolas.github.io/normalize.css/)
  * `src/styles/animations` folder includes [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
  * `src/styles/components` folder includes styles for reusable components like buttons, dropdowns, inputs, avatars, modals, alerts, etc.
  * `src/styles/sections` folder includes styles for "big" and unique parts like: header, footer, article, hero, etc.
  * `src/styles/nightvue.scss` file includes all NightVue settings, styles and code generators
  * `src/styles/style.scss` is file where you can write your own styles
* `src/views` folder includes Vue pages you are using in your project. By default it's only **Home.vue** page
* `src/App.vue` is the root Vue file
* `src/main.js` is the file where you import and register components, directives, styles, plugins etc.

# Documentation 📚

* [Layout](#layout)
* [Grid](#grid)
* [Typography](#typography)
* [Position](#position)
* [Display](#display)
* [Spacing](#spacing)
* [Sizing](#sizing)
* [Colors](#colors)
* [Gradients](#gradients)
* [Opacity](#opacity)
* [Icons](#icons)
* [Radius](#radius)
* [Shadows](#shadows)
* [Z-index](#z-index)
* [Transitions](#transitions)
* [Rotations](#rotations)
* [Utilities](#utilities)

## Layout

Vue.js doesn't provide layout functionality by default, but people found [the way to do it](https://markus.oberlehner.net/blog/dynamic-vue-layout-components/), which is realy great. We also combined this method with [Vue Router transitions](https://router.vuejs.org/guide/advanced/transitions.html) to create smooth, dynamic and easy expandible layout system.

Key file in this system is [AppLayout.vue](src/layouts/AppLayout.vue). Here we created dynamic component to which we apply different layout types using `is` attribute:
```
<component
  :is="layout"
  class="layout"
  :class="[layoutClassnames]">
  <slot />
</component>
```
NightVue offers 2 types of layouts at the begining:

* **default** - widely used `<header></header>` → `<main></main>` → `<footer></footer>` layout
* **full** - plain page without any additional elements, just a simple `<div></div>`

These templates are stored in [AppLayoutDefault.vue](src/layouts/AppLayoutDefault.vue) and [AppLayoutFull.vue](src/layouts/AppLayoutFull.vue) files respectively:

```
<template>
  <div>
    <app-header />
    <main class="main position-relative">
      <slot />
    </main>
    <app-footer />
  </div>
</template>
```
```
<template>
  <div class="minvh-100">
    <slot />
  </div>
</template>
```
You can modify them or create your own layouts. To do this create new Vue file named in such manner as default ones and don't forget to add new layouts in computed property of core file. This classnames will apply to root element:
```
layoutClassnames() {
  const layout = this.$route.meta.layout || defaultLayout

  if (layout === 'AppLayoutFull') return 'layout--full'
  if (layout === 'AppLayoutDefault') return 'layout--default'

  return null
},
```
Pay your attention to computed property `layout()`. It returns current page layout type using [Vue Router meta fields](https://router.vuejs.org/guide/advanced/meta.html):
```
const defaultLayout = 'AppLayoutDefault'

layout() {
  const layout = this.$route.meta.layout || defaultLayout
  return () => import(`@/layouts/${layout}.vue`)
},
```
When you add new page to Router, define it's layout using `meta.layout` param. If you don't provide any type, NightVue will apply default layout to this page:
```
{
  path: '/',
  name: 'Home',
  component: () => import('@/views/Home.vue'),
  meta: {
    layout: 'AppLayoutDefault',
  },
},
```
Now let's make things a bit more fancy. We wrapped root dynamic component in `<transition></transition>` tag to add smooth [transition between pages](https://router.vuejs.org/guide/advanced/transitions.html#transitions):
```
<transition
  appear
  name="page"
  mode="out-in">
  <component
    :is="layout"
    class="layout"
    :class="[layoutClassnames]">
    <slot />
  </component>
</transition>
```
NightVue uses simple fade-out → fade-in transition effect by default. Here is small SCSS snippet to work with:
```
.layout {
  &.page-enter,
  &.page-leave-to {
    .main {
      opacity: 0;
    }
  }
}

.main {
  transition: transition(opacity, lazy);
}
```
You can learn more about transition classnames [here](https://vuejs.org/guide/built-ins/transition.html#transition) and create your own. Also check this [tutorial](https://learnvue.co/tutorials/vue-router-transitions) with examples of Vue Router transitions.

## Grid

NightVue grid system is built with flexbox and is fully responsive. It uses a series of containers, rows, and cols to align content. If you are not familiar with flex we recomend to read this [article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background).

There are 3 types of containers in NightVue:

* **boxed** - on each `$breakpoint` container will have fixed `max-width` based on `$containers` map
* **combined** - container will have `max-width` of *last* value from `$containers` map, then will have 100%
* **full** - container will *always* have 100% width

Base grid settings are stored in [_varaibles.scss](src/styles/@core/_varaibles.scss) file:
```
$num-cols:      12;
$gutter-width:  1rem;
$grid-type:     'combined';

// Breakpoints are dublicated in 'store/modules/config.js'
$breakpoints: (
  xs: 576px,
  sm: 768px,
  md: 992px,
  lg: 1200px,
  xl: 1400px
);

// Containers max-widths (if you are using 'boxed' or 'combined' type)
$containers: (
  xs: 540px,
  sm: 720px,
  md: 960px,
  lg: 1140px,
  xl: 1320px
);
```
Remember that `$breakpoints` are dublicated in Vuex store in [config.js](src/store/modules/config.js) file. NightVue watches for [window resize event](https://developer.mozilla.org/ru/docs/Web/API/Window/resize_event) to update global Vuex store variables in real-time. It also constantly tracks current [scroll position](https://developer.mozilla.org/ru/docs/Web/API/Window/scrollY). You can read these values with computed properties `windowSize()`, `currentBreakpoint()` and `windowScroll()`.

* `windowSize()` returns current window `width` and `height`
* `currentBreakpoint()` returns current "morphological" breakpoint value based on window width. By defaults there might be: **'xs', 'sm', 'md', 'lg'** and **'xl'**
* `windowScroll()` returns current scroll position

```
computed: {
  windowSize() {
    return this.$store.state.config.windowSize
  },

  currentBreakpoint() {
    return this.$store.state.config.currentBreakpoint
  }

  windowScroll() {
    return this.$store.state.config.windowScroll
  },
}
```
### HTML grid usage

To apply column width in HTML you can use prepared classnames `col-${breakpoint}-${value}`:
```
<div class="container">
  <div class="row">
    <div class="col col-12 col-xs-10 col-sm-11 col-md-8 col-lg-6 col-xl-4">
      width 12 by default
      width 10 on 'xs' breakpoint
      width 11 on 'sm' breakpoint
      width 8 on 'md' breakpoint
      width 6 on 'lg' breakpoint
      width 4 on 'xl' breakpoint
    </div>
  </div>
</div>
```
If you need apply offset to column use `offset-${breakpoint}-${value}` classnames like this:
```
<div class="container">
  <div class="row">
    <div class="col col-4 offset-xs-4 offset-sm-5 offset-md-8 offset-lg-0">
      offset 4 columns on 'xs' breakpoint
      offset 5 columns on 'sm' breakpoint
      offset 8 columns on 'md' breakpoint
      don't do any offset on 'lg' breakpoint
    </div>
  </div>
</div>
```
If you need apply order to column use `order-${breakpoint}-${value}` classnames like this:
```
<div class="container">
  <div class="row">
    <div class="col col-6 order-xs-1 order-md-5">
      order 1 on 'xs' breakpoint
      order 5 on 'md' breakpoint
    </div>
  </div>
</div>
```

### Sass grid mixins

Although HTML method is very familiar to most developers, we highly recomend to use Sass mixins to build grid directly in SCSS files. This will make Vue templates noticeably cleaner and at the same time help keep all the styles in one place.

To convert any selector to container just apply `@container()` mixin to it:
```
@include container();
@include container('full');
@include container($type: 'boxed', $gutter: 2rem);
```
From now on this selector will have same properties as `.container` class. Notice that you can define `$type` and `$gutter`.

Just like with container you can convert any selector to `.row`. Simply apply `@row()` mixin to it. Additionally you can pass `$gutter` value. It will apply alternate negative left and right margins:
```
@include row();
@include row(0);
@include row($gutter: 2rem);
```
To apply column styles use `@col()` mixin. If you don't pass any params mixin will apply only `padding-left` and `padding right` based on `$gutter-width` varaible. To apply width properties you can pass number from 1 to 12 for each breakpoint:
```
@include col();
@include col(12);
@include col(10, $md: 8);
@include col(10, $md: 8, $lg: 6, $xs: 12);
@include col(12, 10, 10, 8, 6, 9);
```
If you need apply offset to column use `@offset()` mixin. It will add `margin-left` property to selector. You can pass number from 0 to 12 for each breakpoint. Note that if you don't pass any params, mixin won't apply any styles:
```
@include offset(6);
@include offset(0, $sm: 4);
@include offset(10, $md: 8);
@include offset(10, $md: 8, $lg: 6, $xs: 12);
@include offset($sm: 1, $lg: 4, $xl: 0);
```
In case you need apply order to column use `@order()` mixin. It will apply `order` property from 1 to 12 to selector:
```
@include order(2);
@include order(1, $sm: 4);
@include order(1, $md: 2, $lg: 3, $xs: 12);
@include order($sm: 12, $lg: 4, $xl: 3);
```

### Media queries

NightVue provides set of handy [media queries](https://developer.mozilla.org/ru/docs/Web/CSS/Media_Queries/Using_media_queries) based on `$breakpoints`. You can use queries based on `min-width` and `max-width`:
```
// min-width queries
$xs-up; // > 576px
$sm-up; // > 768px
$md-up; // > 992px
$lg-up; // > 1200px
$xl-up; // > 1400px

// max-width queries
$xs-dw; // < 578px
$sm-dw; // < 767px
$md-dw; // < 991px
$lg-dw; // < 1199px
$xl-dw; // < 1399px
```
Or queries between breakpoints:
```
$xs-sm; // 576px … 767px
$sm-md; // 768px … 991px
$md-lg; // 992px … 1199px
$lg-xl; // 1200px … 1399px
```
Here are some examples of usage:
```
@media #{$sm-up} { ... } } // styles applies above 768px
@media #{$md-up} { ... } } // styles applies above 992px

@media #{$xl-dw} { ... } } // styles applies below 1399px
@media #{$lg-dw} { ... } } // styles applies below 1199px

@media #{$sm-md} { ... } } // styles applies between 768px … 991px
@media #{$md-lg} { ... } } // styles applies between 992px … 1199px
```

## Typography

NightVue stores all typography settings in Sass maps located in [_varaibles.scss](src/styles/@core/_varaibles.scss) file. In [typography.scss](src/styles/@core/typography.scss) file are described styles for headings, displays, body text, lists, and more.

### Font import

We recomend to start with importing fonts by using `@font-face` mixin. Make sure to store your fonts in `src/assets/fonts` folder. Each font must be saved in a folder with the same name as font itself. By default NightVue uses [Onest](https://onest.md/en). This is how we stored and imported it, use this as an example to add your own fonts:

```
// Font files location:

├── src
│   ├── assets
│       ├── fonts
│           └── Onest

// Import font using @font-face mixin:

@include font-face('Onest', 'OnestRegular', 400, normal, 'recent');
@include font-face('Onest', 'OnestMedium', 500, normal, 'recent');
@include font-face('Onest', 'OnestBold', 700, normal, 'recent');
@include font-face('Onest', 'OnestBlack', 900, normal, 'recent');
```

### Typography Sass maps

These are Sass maps with typography settings we talked earlier. Each one is self explanatory, so take a look at them:

```
$font-families: (
  base:      "Onest",
  headings:  "Onest",
  displays:  "Onest"
);

$line-heights: (
  1:  1,
  25: 1.25,
  50: 1.5,
  75: 1.75,
  2:  2,
);

$text-aligns: (
  left:    left, 
  center:  center, 
  right:   right, 
  justify: justify
);

$font-weights: (
  lighter: lighter, 
  bolder:  bolder, 

  100: 100, // thin
  200: 200, // extra light
  300: 300, // light
  400: 400, // normal
  500: 500, // medium
  600: 600, // semi bold
  700: 700, // bold
  800: 800, // extra bold
  900: 900, // black
);

$text-transforms: (
  lowercase:  lowercase, 
  uppercase:  uppercase, 
  capitalize: capitalize
);

$font-styles: (
  normal:  normal, 
  italic:  italic, 
  oblique: oblique
);

$text-decorations: (
  underline:    underline, 
  line-through: line-through, 
  none:         none
);

$text-wraps: (
  normal:   normal,
  nowrap:   nowrap,
  pre:      pre,
  pre-line: pre-line,
  pre-wrap: pre-wrap
);

$word-brakes: (
  normal:      normal,
  break-all:   break-all,
  keep-all:    keep-all,
  break-word:  break-word,
);

$letter-spacings: (
  normal:  normal,
  tight:   -0.05em,
  wide:   .1em,
  wider:  .5em,
);
```

Important part is settings for headings and displays:

```
$headings-fz: (
  h1: 4.5rem,
  h2: 2.5rem,
  h3: 1.75rem,
  h4: 1.25rem,
  h5: 1rem,
  h6: 0.875rem,
);
$headings-lh: map-get($line-heights, 25);
$headings-fw: map-get($font-weights, 500);
$headings-margins: (
  top: map-get($spacers, 1),
  bottom: map-get($spacers, 50),
);
```
```
$displays-fz: (
  display-1: 74px,
  display-2: 62px,
  display-3: 48px,
  display-4: 34px,
);
$displays-lh: map-get($line-heights, 25);
$displays-fw: map-get($font-weights, 500);
$displays-margins: (
  top: map-get($spacers, 1),
  bottom: map-get($spacers, 50),
);
```

Here you can manage styles for base body text, small and tagline styles:

```
$base-fz:      16px; // CRUCIAL VALUE! A lot of things depends on it. Be aware.
$base-lh:      map-get($line-heights, 50);
$base-fw:      map-get($font-weights, 400);

$small-fz:     0.875; // Ratio of text size for <small> tag and .small classname
$small-lh:     map-get($line-heights, 25);
$small-fw:     map-get($font-weights, 400);

$tagline-fz:   1.25; // Ratio of text size for .tagline classname
$tagline-lh:   map-get($line-heights, 50);
$tagline-fw:   map-get($font-weights, 500);
```

### Typography utility classnames

For each Sass map NightVue generates set of utility classnames to use in HTML:

```
.font-base     { font-family: "Onest" }
.font-headings { font-family: "Onest" }
.font-displays { font-family: "Onest" }

.line-height-1  { line-height: 1 }
.line-height-25 { line-height: 1.25 }
.line-height-50 { line-height: 1.5 }
.line-height-75 { line-height: 1.75 }
.line-height-2  { line-height: 2 }

.text-left    { text-align: left }
.text-center  { text-align: center }
.text-right   { text-align: right }
.text-justify { text-align: justify }

.text-underline     { text-decoration: underline }
.text-line-through  { text-decoration: line-through }
.text-none          { text-decoration: none }

.white-space-normal    { white-space: normal }
.white-space-nowrap    { white-space: nowrap }
.white-space-pre       { white-space: pre }
.white-space-pre-line  { white-space: pre-line }
.white-space-pre-wrap  { white-space: pre-wrap }

.word-break-normal     { word-break: normal }
.word-break-break-all  { word-break: break-all }
.word-break-keep-all   { word-break: keep-all }
.word-break-break-word { word-break: break-word }

.text-lowercase  { text-transform: lowercase }
.text-uppercase  { text-transform: uppercase }
.text-capitalize { text-transform: capitalize }

.font-weight-lighter { font-weight: lighter }
.font-weight-bolder  { font-weight: bolder }
.font-weight-100     { font-weight: 100 }
.font-weight-200     { font-weight: 200 }
.font-weight-300     { font-weight: 300 }
.font-weight-400     { font-weight: 400 }
.font-weight-500     { font-weight: 500 }
.font-weight-600     { font-weight: 600 }
.font-weight-700     { font-weight: 700 }
.font-weight-800     { font-weight: 800 }
.font-weight-900     { font-weight: 900 }

.font-normal   { font-style: normal }
.font-italic   { font-style: italic }
.font-oblique  { font-style: oblique }

.spacing-normal  { letter-spacing: normal }
.spacing-tight   { letter-spacing: -0.05em }
.spacing-wide    { letter-spacing: 0.1em }
.spacing-wider   { letter-spacing: 0.5em }
```

Each classname supports breakpoints. You can use template `${property}-${breakpoint}-{$value}` to easy change text styles across different breakpoints. For example this `font-weight` will apply only on `sm` breakpoint:

```
@media screen and (min-width: 768px) {
  .font-weight-sm-500 {
      font-weight: 500 ;
  }
}
```

To apply small styles to text you can add `.small` classname or wrap element in `<small></small>` tag. Another way is to use `@small()` mixin:

```
<div class="small">I am small text</div>
<small>Me too!</small>
```
```
@include small() }
```

Apply tagline styles to text in similar way:

```
<div class="tagline">I am tagline text</div>
```
```
@include tagline() }
```

Often you need to truncate some long text and put dots at the end of the line. Use one of these helpers to do that:
```
<div class="text-truncate" style="width: 120px;">
  I am very long text and I will be truncated at 120px width
</div>

<div class="text-truncate max-w-25">
  I am very long text and I will be truncated at 25% width
</div>

<div class="text-dotted">
  I will not be truncated, but will have '…' at the end
</div>
```
```
.text-truncate {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-dotted {
  &:after {
    content: '…'
  }
}
```

Or use `@text-truncate($width)` mixin for that. It requires a single argument `$width` in `px` or `%`.

```
@include text-truncate(150px)

// =>
display: inline-block;
overflow: hidden;
text-overflow: ellipsis;
max-width: 150px;
```

## Position

These utility classnames will help you to set and change position property of elements. 

```
.position-relative  { position: relative }
.position-absolute  { position: absolute }
.position-static    { position: static }
.position-fixed     { position: fixed }
.position-static    { position: static }
```

Each classname supports breakpoint, so you can easily change behaviour of element across different breakpoints. Use template `.position-${breakpoint}-{$value}` for that. For example, this element will be in `position: absolute` only on LG breakpoint:

```
@media screen and (min-width: 1280px) {
  .position-lg-absolute {
     position: absolute
  }
}
```

## Display

Display system allows you to change display property and quickly manage the layout, alignment, and sizing of elements with a full suite of responsive flexbox utilities. If you are not familiar with flex we advice you to read this [article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) first. Utility classnames are generated in [_display.scss](src/styles/@core/helpers/_display.scss) file.

Here are listed possible variants of `display` property:

```
.d-none          { display: none }
.d-block         { display: block }
.d-inline        { display: inline }
.d-inline-block  { display: inline-block }
.d-flex          { display: flex }
.d-inline-flex   { display: inline-flex }
.d-table         { display: table }
.d-table-cell    { display: table-cell }
.d-table-row     { display: table-row }
```

NightVue generates classnames based on flexbox settings:

* `flex-direction`
* `justify-content`
* `align-items`
* `align-self`
* `align-content`
* `flex-wrap`
* `flex-grow`
* `flex-shrink`

Here are possible variants for each of those:

```
.flex-row             { flex-direction: row }
.flex-row-reverse     { flex-direction: row-reverse }
.flex-column          { flex-direction: column }
.flex-column-reverse  { flex-direction: column-reverse }
```
```
.justify-content-start    { justify-content: start }
.justify-content-end      { justify-content: end }
.justify-content-center   { justify-content: center }
.justify-content-between  { justify-content: space-between }
.justify-content-around   { justify-content: space-around }
```
```
.align-items-start     { align-items: start }
.align-items-end       { align-items: end }
.align-items-center    { align-items: center }
.align-items-baseline  { align-items: baseline }
.align-items-stretch   { align-items: stretch }
```
```
.align-self-start     { align-self: start }
.align-self-end       { align-self: end }
.align-self-center    { align-self: center }
.align-self-baseline  { align-self: baseline }
.align-self-stretch   { align-self: stretch }
```
```
.align-content-start     { align-content: start }
.align-content-end       { align-content: end }
.align-content-center    { align-content: center }
.align-content-baseline  { align-content: baseline }
.align-content-stretch   { align-content: stretch }
```
```
.flex-wrap          { flex-wrap: wrap }
.flex-nowrap        { flex-wrap: nowrap }
.flex-wrap-reverse  { flex-wrap: wrap-reverse }
```
```
.flex-grow-0    { flex-grow: 0 }
.flex-grow-1    { flex-grow: 1 }
```
```
.flex-shrink-0  { flex-shrink: 0 }
.flex-shrink-1  { flex-shrink: 1 }
```

Each classname supports breakpoints, which can help you to easy change display and flex properties across different breakpoints. Use template `${property}-${breakpoint}-{$value}` for that. Take a look at some examples:

```
@media screen and (min-width: 1400px) {
  .d-xl-none { display: none }
}

@media screen and (min-width: 1200px) {
  .flex-lg-column { flex-direction: column }
}

@media screen and (min-width: 992px) {
  .justify-content-md-center { justify-content: center }
}

@media screen and (min-width: 768px) {
  .align-items-sm-start { align-items: start }
}

@media screen and (min-width: 576px) {
  .flex-wrap-xs-nowrap { flex-wrap: nowrap }
}
```

Often you need to align content right in the center of X and Y axes. In that case use classname `.flex-center` on parent element. It also supports breakpoints.

```
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
```
.flex-xs-center { ... }  // styles applies above 576px
.flex-sm-center { ... }  // styles applies above 768px
.flex-md-center { ... }  // styles applies above 992px
.flex-lg-center { ... }  // styles applies above 1200px
.flex-xl-center { ... }  // styles applies above 1400px
```

## Spacing

NightVue generates responsive margin and padding utility classnames. The classnames are named using the format `{$property}-{$breakpoint}-{$side}-{$size}`.

Where `$property` is one of:
* `m` - for classnames that set property margin
* `p` - for classnames that set property padding

Where `$breakpoint` is one of:
* `xs` - for classnames that set property property on XS breakpoint > 576px
* `sm` - for classnames that set property property on SM breakpoint > 768px
* `md` - for classnames that set property property on MD breakpoint > 992px
* `lg` - for classnames that set property property on LG breakpoint > 1200px
* `xl` - for classnames that set property property on XL breakpoint > 1400px
* blank - if you want to set a margin and padding on all breakpoint

Where `$side` is one of:
* `t` - for classnames that set property margin-top or padding-top
* `b` - for classnames that set property margin-bottom or padding-bottom
* `l` - for classnames that set property margin-left or padding-left
* `r` - for classnames that set property margin-right or padding-right
* `x` - for classnames that set property both *-left and *-right
* `y` - for classnames that set property both *-top and *-bottom
* blank - for classnames that set property a margin or padding on all 4 sides of the element

Where `$size` is one of spacing sizes defined in [_varaibles.scss](src/styles/@core/_varaibles.scss) file:
```
$spacer: 1rem;

$spacers: (
  0: 0,
  1: ($spacer * .25),
  2: ($spacer * .5),
  3: ($spacer * .75),
  4: ($spacer * 1),
  5: ($spacer * 1.25),
  6: ($spacer * 1.5),
  7: ($spacer * 1.75),
  8: ($spacer * 2),
  9: ($spacer * 2.25),
  10: ($spacer * 2.5),
  11: ($spacer * 2.75),
  12: ($spacer * 3),
  13: ($spacer * 3.25),
  14: ($spacer * 3.5),
  15: ($spacer * 3.75),
  16: ($spacer * 4),
  17: ($spacer * 4.25),
  18: ($spacer * 4.5),
  19: ($spacer * 4.75),
  20: ($spacer * 5),
  auto: auto
);

$base-mg: map-get($spacers, 1); // Universal margin used for <p>, <ul> etc.
```
We crated a tool [NightVue Spacers Generator](https://codepen.io/Nightrunner/pen/poVrGez), where you can quickly see spacing results based on your initial settings.

In case you prefer SCSS method to define spacers use `spacer()` function for that.

* If you pass one param it will return spacer value
* If you pass two params it will return X and Y spacer values
* If you pass four params it will return top, right, bottom and left spacer values

```
padding: spacer(2);
// => padding: .25rem;

padding-right: spacer(5);
// => padding-right: 1.25rem;

margin: spacer(3, auto);
// => margin: .75rem auto;

margin: spacer(5, auto, 2, 0);
// => margin: 1.25rem auto 0.25rem 0;
```

Beside that NightVue generates classnames which you might use to position elements in `absolute` or `fixed` position. These classnames uses pattern `${side}-${size}`:

```
.top-2     { top: .25rem }
.right-10  { right: 2.5rem }
.bottom-4  { bottom: 1rem }
.left-5    { left: 1.25rem }
```

And of course they also support breakpoints:

```
@media screen and (min-width: 768px) {
  .right-sm-4 {
      right: 1rem
   }
}
```

## Sizing

These utility classnames can be used apply to selector these CSS styles: `width`, `max-width`, `min-width`, `height`, `max-height`, `min-height`. And units can be percentages `%` or relative to viewport `vw` and `vh`.

NightVue generates set of classnames which uses format `${property}-${breakpoint}-${size}`, where `${property}` is one of:

* `w` - for `width` in `%`
* `vw` - for `width` in `vw`
* `max-w` - for `max-width` in `%`
* `max-vw` - for `max-width` in `vw`
* `min-w` - for `min-width` in `%`
* `min-vw` - for `min-width` in `vw`
* `h` - for `height` in `%`
* `vh` - for `height` in `vw`
* `max-h` - for `max-height` in `%`
* `max-vh` - for `max-height` in `vw`
* `min-h` - for `min-height` in `%`
* `min-vh` - for `min-height` in `vw`

Where `$size` is one of sizing values defined in [_varaibles.scss](src/styles/@core/_varaibles.scss) file:
```
$sizings: (
  0:    0,
  25:   25,
  50:   50,
  75:   75,
  100:  100,
  auto: auto
);
```

Here are generated sizing classnames based on 50 size as an example:

```
.w-50      { width: 50% }
.vw-50     { width: 50vw }
.max-w-50  { max-width: 50% }
.max-vw-50 { max-width: 50vw }
.min-w-50  { min-width: 50% }
.min-vw-50 { min-width: 50vw }

.h-50     { height: 50% }
.vh-50     { height: 50vh }
.max-h-50  { max-height: 50% }
.max-vh-50 { max-height: 50vh }
.min-h-50  { min-height: 50% }
.min-vh-50 { min-height: 50vh }
```

You can also apply `${breakpoints}` to dynamically change behavior on different screen sizes. For example, this `min-width` style will apply only below 768px (**sm** breakpoint):

```
<div class="min-w-sm-50 min-w-75">
  I have min-width 50% below 768px and 75% above
</div>
```
```
@media screen and (min-width: 768px) {
  .min-w-sm-50 {
    min-width: 50%;
  }
}

.min-w-sm-75 {
  min-width: 75%;
}
```

Don't forget that you can also apply `auto` sizing to an element:

```
.w-auto     { width: auto }
.max-w-auto { max-width: auto }
.min-w-auto { min-width: auto }

.h-auto     { height: auto }
.max-h-auto { max-height: auto }
.min-h-auto { min-height: auto }
```

## Colors

NightVue uses Sass maps to store project colors. This maps will help you quickly and easily loop over a list of colors and their hex values.

* `$colors` map includes all available "basic" colors in project
* `$grays` map includes achromatic list (shades of gray between `#fff` and `#000`)
* `$theme-colors` map includes semantically named colors composed from maps above

All this maps are described in [_varaibles.scss](src/styles/@core/_varaibles.scss) file:

```
$colors: (
  'red':       #F44336,
  'pink':      #EC407A,
  'orange':    #FF9800,
  'yellow':    #FFEE58,
  'green':     #47b05b,
  'brown':     #795548,
  'teal':      #009688,
  'cyan':      #00BCD4,
  'blue':      #2196F3,
  'purple':    #682CAB,
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
  'primary':    map-get($colors, 'purple'),
  'secondary':  map-get($colors, 'blue'),
  'success':    map-get($colors, 'green'),
  'info':       map-get($colors, 'teal'),
  'warning':    map-get($colors, 'yellow'),
  'danger':     map-get($colors, 'red'),
  'light':      map-get($grays, 'gray-2'),
  'dark':       map-get($grays, 'gray-8'),
);
```
In map `$levels` you can define levels of lightening and saturation of each color in `$theme-colors` map. By default this map has 5 levels:
```
$levels: (
  1: 10%,
  2: 20%,
  3: 30%,
  4: 40%,
  5: 50%,
);
```

### Colors HTML Usage

NightVue automatically generates classnames from maps `$grays` and `$theme-colors` above. Each color have unique classname with `background-color`, `color` and `fill` styles and uses template `${property}-${color}`, where `${property}` is one of:

* `bg` for background-color
* `clr` for text color
* `fill` for SVG fill color

Here are some examples:
```
.bg-white   { background-color: #ffffff }
.clr-white  { color: #ffffff }
.fill-white { fill: #ffffff }

.bg-gray-1   { background-color: #eaeaea }
.clr-gray-1  { color: #eaeaea }
.fill-gray-1 { fill: #eaeaea }

.bg-primary   { background-color: #682CAB }
.clr-primary  { color: #682CAB }
.fill-primary { fill: #682CAB }
```

Additionally for each color NightVue generates classnames with brightened, darkened, saturated and desaturated color variations from `$theme-colors` map. We are using [mix()](https://sass-lang.com/documentation/modules/color#mix) and [scale()](https://sass-lang.com/documentation/modules/color#scale) functions for that. They help to create smooth and steady color pallete. We created [NightVue Pallete Generator](https://codepen.io/Nightrunner/pen/NWMggPb) to quickly see the results, check it out.

Generated classnames uses pattern `${property}-${color}-${style}-${level}`. Let's take a look at color variations of `primary` color:

```
.clr-primary-light-1 { color: #7741b3 }
.clr-primary-light-2 { color: #7f4cb8 }
.clr-primary-light-3 { color: #8656bc }
.clr-primary-light-4 { color: #8e61c0 }
.clr-primary-light-5 { color: #956bc4 }

.clr-primary-dark-1 { color: #5e289a }
.clr-primary-dark-2 { color: #582591 }
.clr-primary-dark-3 { color: #532389 }
.clr-primary-dark-4 { color: #4e2180 }
.clr-primary-dark-5 { color: #491f78 }
```
```
.clr-primary-sat-1 { color: #6828af }
.clr-primary-sat-2 { color: #6825b2 }
.clr-primary-sat-3 { color: #6823b4 }
.clr-primary-sat-4 { color: #6721b6 }
.clr-primary-sat-5 { color: #671fb8 }

.clr-primary-desat-1 { color: #6832a5 }
.clr-primary-desat-2 { color: #6936a1 }
.clr-primary-desat-3 { color: #69399e }
.clr-primary-desat-4 { color: #693c9b }
.clr-primary-desat-5 { color: #693f98 }
```

Beside that you can use `rgba` versions of `$theme-colors`. For each `opacity` value from `$opacities` map NightVue generates set of transparent colors:

```
$opacities: (
  0: 0%,
  1: 5%,
  2: 15%,
  3: 25%,
  4: 35%,
  5: 45%,
  6: 55%,
  7: 65%,
  8: 75%,
  9: 85%,
  10: 95%
);
```

These classnames uses pattern `${property}-${color}-opacity-${opacity}`. Take a look at `rgba` variants of `success` color as example:

```
.bg-success-opacity-0  { rgba(71, 176, 91, 0) }
.bg-success-opacity-1  { rgba(71, 176, 91, 0.05) }
.bg-success-opacity-2  { rgba(71, 176, 91, 0.15) }
.bg-success-opacity-3  { rgba(71, 176, 91, 0.25) }
...
.bg-success-opacity-10 { rgba(71, 176, 91, 0.95) }
```

### Color Sass functions

If you need apply colors in SCSS files you can use `color($name, $style, $level)` function. It returns hex value of color by its `$name`. Additionally you can pass optional arguments `$style` and `$level` to determine level of brightness or saturation. Or you can define it's `$opacity` level. Here are some examples of usage in SCSS:

```
box-shadow: 1px 1px 4px color('primary');
// => box-shadow: 1px 1px 4px #682CAB;

border-color: color('secondary', light, 2);
// => border-color: #42a6f5;

border-color: color('success', dark, 4);
// => border-color: #358444;

color: color('danger', sat, 2);
// => color: #f64234;

background-color: color('warning', desat, 4);
// => background-color: #eadd6d;

color: color('white');
// => color: #ffffff;

color: color('white', $opacity: 5);
// => color: rgba(255, 255, 255, 0.45);

fill: color('gray-4');
// => fill: #aaaaaa;
```

## Gradients

Working with `linear-gradient` may be akward and cluncy sometimes. It's not easy to remember all settings and features of this CSS function. NightVue provides some tools to easy manage group of gradients and create new ones with ease. Read [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) describing `linear-gradients` if you are not quite familiar with them.

First of all NightVue uses Sass map `$gradients` to store all gradients used in project. This map is located in [_varaibles.scss](src/styles/@core/_varaibles.scss) file. By default there are already 4 gradients as examples:

```
$gradients: (
  primary_success: (
    direction: 145deg,
    fallback: map-get($theme-colors, 'primary'),
    list: (
      lighten(map-get($theme-colors, 'primary'), map-get($levels, 2)) 10%,
      lighten(map-get($theme-colors, 'success'), map-get($levels, 1)) 80%
    )
  ),

  primary-light-3_primary: (
    direction: to bottom,
    fallback: map-get($theme-colors, 'primary'),
    list: (
      map-get($theme-colors, 'primary'),
      lighten(map-get($theme-colors, 'primary'), map-get($levels, 3))
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
);
```

We recomend to name gradients in such pattern: `<color1>_<color2>_<color3>`. It will help you to easy understand what colors are used and what is direction of gradient. Here are some examples: `info_success`, `primary_danger`, `light_dark`, `transparent_black`, `red_yellow_blue`.

If gradient uses modified color you may name it like this: `<color-${style}-${value}>_<color-${style}-${value}>`. For example, gradient named `primary-light-3_primary` indicates that it uses lightened by 3 levels `$primary` and base `$primary` colors and shows the direction of it. Pretty self explanatory, right?

Now let's take a look at gradient itself. Each one is written by template:

```
gradientName: (
  direction: { String },
  fallback: { String },
  list: ( { String }, { String }, { String }... )
)
```

Where `direction` is obviously direction of `linear-gradient`. It may be keyword:

* `to top`
* `to top right`
* `to right`
* `to bottom right`
* `to bottom`
* `to bottom left`
* `to left`,
* `to left top`

or any angle value in `deg`, `rad`, `grad` or `turn`.

Parameter `fallback` is color by default for unsupported browsers. To know which browsers don't support `linear-gradient` visit [caniuse.com](https://caniuse.com/?search=linear-gradient) website.

And finally most inetersting part is `list` parameter. This is basicly a list of colors in gradient, separated by a comma. One way to fill it is by using `map-get()` function like we did in examples above.

### Gradients HTML usage

For each gradient in `$gradients` map NightVue generates unique classname with template `.gradient-${gradient}`:

```
.gradient-primary_success {
  background: #682cab;
  background: linear-gradient(145deg, #8e51d2 10%, #68c279 80%);
}

.gradient-primary-light-3_primary {
  background: #682CAB;
  background: linear-gradient(to bottom, #682CAB, #9b65d8);
}

.gradient-red_yellow_blue {
  background: #f44336;
  background: linear-gradient(90deg, #f44336, #ffee58, #2196f3);
}

.gradient-info_transparent{
  background: #009688;
  background: linear-gradient(90deg, #009688, transparent);
}
```

### Gradient Sass mixin

In case you need apply gradient in SCSS file insted of HTML use `@linear-gradient($name)` mixin. It requires only name of gradient from `$gradients` map.

```
@include linear-gradient('primary_success');

// =>
background: #682cab;
background: linear-gradient(145deg, #8e51d2 10%, #68c279 80%);
```

## Opacity

For each opacity value from `$opacities` map NightVue generates utility classnames with pattern `.opacity-${value}`:

```
$opacities: (
  0: 0%,
  1: 5%,
  2: 15%,
  3: 25%,
  4: 35%,
  5: 45%,
  6: 55%,
  7: 65%,
  8: 75%,
  9: 85%,
  10: 95%
);
```
```
.opacity-0  { opacity: 0 }
.opacity-1  { opacity: 0.05 }
.opacity-2  { opacity: 0.15 }
.opacity-3  { opacity: 0.25 }
...
.opacity-10 { opacity: 0.95 }
```
These classnames supports `$breakpoints` so you can easily manage `opacity` level on each specific breakpoint. Use template `.opacity-${breakpoint}-{$value}` to do that. For example this `opacity` will apply only on `lg` breakpoint:

```
@media screen and (min-width: 1280px) {
  .opacity-lg-5 {
    opacity: 0.45
  }
}
```

In case you need apply `opacity` in SCSS use `opacity($level)` function:

```
opacity: opacity(0);
// => opacity: 0;

opacity: opacity(1);
// => opacity: 0.05;

opacity: opacity(3);
// => opacity: 0.25;

opacity: opacity(7);
// => opacity: 0.65;

opacity: opacity(10);
// => opacity: 0.95;

```

## Icons

To serve SVG icons NightVue uses [SVG Sprite Loader](https://github.com/JetBrains/svg-sprite-loader).

Store your icons in `src/assets/icons/library` folder. We already included there 3 icons for example. There are many icon packs on internet, just pick whatever you like most and import icons in this folder.

```
├── src
│   ├── assets
│       ├── icons
│           ├── library
│               face.svg
│               lightbulb.svg
│               link.svg
│            index.js
```

Plugin automatically creates and injects in `<body>` client-side SVG sprite containing each icon from the folder above. Keep in mind that each icon will have an id based on its name. To include icon in HTML use `<SvgIcon>` component. It accepts properties `icon` and `size`.

```
<svg-icon icon="face" />
```

To set icon size define its `size` property. All icon sizes are stored in `$icons` map located in [_varaibles.scss](src/styles/@core/_varaibles.scss) file:
```
$icon-sizes: (
  2xs: 0.625em, // 10px
  xs:  0.75em,  // 12px
  sm:  0.857em, // 14px
  md:  1em,     // 16px
  lg:  1.25em,  // 20px
  xl:  1.5em,   // 24px
  2xl: 2em,     // 32px
);
```
```
<svg-icon icon="face" size="2xs" />
<svg-icon icon="face" size="xs" />
<svg-icon icon="face" size="sm" />
<svg-icon icon="face" size="md" />
<svg-icon icon="face" size="lg" />
<svg-icon icon="face" size="xl" />
<svg-icon icon="face" size="2xl" />
```

Any other classname can be applied as usual:

```
<svg-icon
  icon="face"
  size="sm"
  class="m-2 fill-primary" />
```

`<SvgIcon>` component and plugin itself renders HTML in a widely used format `<svg><use xlink:href="#id"></use></svg>`. If you are not quite familiar with this feature read [MDN Docs](https://developer.mozilla.org/ru/docs/Web/SVG/Element/use).

In case you prefer to set icon size in SCSS file, use `@icon-size` mixin. This mixin apply specific `width` and `height` to an element. If you apply this mixin to selector you can be pretty sure it will have passed dimensions no matter what and will not be compressed or stretched:

```
@include icon-size(sm);

// =>
width: 0.875em;
max-width: 0.875em;
min-width: 0.875em;
height: 0.875em;
max-height: 0.875em;
min-height: 0.875em;
```

We _recomend_ to use predefined icon sizes from `$icons` map, but here you can pass whatever dimensions you want:

```
@include icon-size(18px, 34px);

// =>
width: 18px;
max-width: 18px;
min-width: 18px;
height: 34px;
max-height: 34px;
min-height: 34px;
```

## Radius

NightVue uses Sass map `$radiuses` to store all variants of `border-radius`. By default it includes:

```
$radiuses: (
  'small':   4px,
  'base':    8px,
  'large':   20px,
  'circle':  100%,
  'zero':    0
);
```

For each value from this map NightVue generates set of utlity classnames to use in HTML. Pattern depends on which angle or angles you want to modify:

* `.radius-${type}` - for classnames that set property to all angles
* `.radius-tl-${type}` - for classnames that set property to **top-left** angle
* `.radius-tr-${type}` - for classnames that set property to **top-right** angle
* `.radius-bl-${type}` - for classnames that set property to **bottom-left** angle
* `.radius-br-${type}` - for classnames that set property to **bottom-right** angle
* `.radius-t-${type}` - for classnames that set property to **top-left** and **top-right** angles
* `.radius-r-${type}` - for classnames that set property to **top-right** and **bottom-right** angles
* `.radius-b-${type}` - for classnames that set property to **bottom-left** and **bottom-right** angles
* `.radius-l-${type}` - for classnames that set property to **bottom-left** and **top-left** angles

These classnames supports `$breakpoints` so you can easily manage `border-radius` type on each specific breakpoint. Use template `.radius-${direction}-${breakpoint}-{$type}` to do that. For example this element will have "large" `border-radius` only on `sm` breakpoint:

```
@media screen and (min-width: 768px) {
  .radius-b-sm-large {
     border-bottom-left-radius: 20px;
     border-bottom-right-radius: 20px;
   }
}
```

In case you prefer SCSS method, use `radius($type)` function. It requires type of `border-radius` you want to apply to an element:

```
border-radius: radius('small');
// => border-radius: 4px;

border-radius: radius('circle');
// => border-radius: 100%;

border-top-left-radius: radius('zero');
// => border-top-left-radius: 0;
```

## Shadows

NightVue stores all types of box-shadows in `$shadows` map located in [_varaibles.scss](src/styles/@core/_varaibles.scss) file. By default this map contains list of shadows based on [Material methodology](https://material.io/design/environment/light-shadows.html#light):

```
$shadows: (
  level-1: (0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)),
  level-2: (0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)),
  level-3: (0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)),
  level-4: (0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)),
  level-5: (0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)),
);
```

Sure you can remove them and/or add your own. For example [this website](https://getcssscan.com/css-box-shadow-examples) provides a large collection of beautiful box-shadows.

For each type from this map NightVue generates classnames using pattern `.shadow-${type}`:

```
.shadow-level-1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24) }
.shadow-level-2 { box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) }
.shadow-level-3 { box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23) }
.shadow-level-4 { box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) }
.shadow-level-5 { box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22) }
```

In case you prefer to use them in SCSS file use `shadow($type)` function. It requires name of shadow as parameter:

```
box-shadow: shadow('level-1');
// => box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

box-shadow: shadow('level-2');
// => box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

box-shadow: shadow('level-3');
// => box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

box-shadow: shadow('level-4');
// => box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

box-shadow: shadow('level-5');
// => box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
```

## Z-index

Z-index property has a huge role in how web interface works. To position elements in Z-axis NightVue provides list of utility classnames. Taking into account that each project is unique and NightVue don't has any pre-build components we decided to make an unversal list of z-indexes from -1 to 12. It's quite possible that this solution won't work for you, in that case use any other you like more.

Utility classnames uses format `.z-plus-${value}` for positive values and `.z-minus-${value}` for negatives. You can also determine start and end values in [_zindex.scss](src/styles/@core/helpers/_zindex.scss) file:

```
$zindex-start: -1;
$zindex-end:   12;

.z-minus-1 { z-index: -1 }
.z-0       { z-index: 0 }
.z-plus-1  { z-index: 1 }
.z-plus-2  { z-index: 2 }
.z-plus-3  { z-index: 3 }
.z-plus-4  { z-index: 4 }
.z-plus-5  { z-index: 5 }
.z-plus-6  { z-index: 6 }
.z-plus-7  { z-index: 7 }
.z-plus-8  { z-index: 8 }
.z-plus-9  { z-index: 9 }
.z-plus-10 { z-index: 10 }
.z-plus-11 { z-index: 11 }
.z-plus-12 { z-index: 12 }
```

Each of these classnames supports `$breakpoints` so you can easily manage `z-index` value on each specific breakpoint:

```
@media screen and (min-width: 1280px) {
  .z-lg-plus-12 {
     z-index: 12
  }
}
```

## Transitions

NightVue provides set of most usable transition timings in web. They are stored in `$transition-timings` map located in [_varaibles.scss](src/styles/@core/_varaibles.scss) file:
```
$transition-timings: (
  linear:       cubic-bezier(0, 0, 1, 1),
  ease:         cubic-bezier(0.25, 0.1, 0.25, 1),
  ease-in:      cubic-bezier(0.42, 0, 1, 1),
  ease-out:     cubic-bezier(0,0,0.58,1),
  ease-in-out:  cubic-bezier(0.42, 0, 0.58, 1),

  standard:     cubic-bezier(0.4, 0, 0.2, 1),
  emphasized:   cubic-bezier(0.0, 0, 0.2, 1),
  decelerated:  cubic-bezier(0.0, 0.0, 0.2, 1),
  accelerated:  cubic-bezier(0.4, 0.0, 1, 1),

  sharp:        cubic-bezier(0.4, 0, 0.6, 1) 
);
```
* First group are "standard" easing functions, that are already well described in [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#easing_functions)
* Second group are easings from [Material Design 2 guidelines](https://material.io/design/motion/speed.html#easing). They have some similarities with previous group, although they are developed to be more "eye catchy" and each one serves some purpose
* Third group is where you can add your own easings. We added there "sharp" easing. This curve may be used for objects that may return to the screen at any time in fast way. Try [cubic-bezier.com](https://cubic-bezier.com/) - it's a cool tool to create your own easings

Besides timing functions there is set of transition speed:
```
$transition-speed: (
  shortest: .15s,
  shorter:  .2s,
  short:    .25s,
  base:     .3s,
  slow:     .375s,
  slower:   .5s,
  lazy:     .75s,
);
```
NightVue generates classnames based on this maps to use them in HTML:
```
.timing-linear      { transition-timing-function: cubic-bezier(0, 0, 1, 1) }
.timing-ease        { transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1) }
.timing-ease-in     { transition-timing-function: cubic-bezier(0.42, 0, 1, 1) }
.timing-ease-out    { transition-timing-function: cubic-bezier(0,0,0.58,1) }
.timing-ease-in-out { transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1) }
.timing-standard    { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) }
.timing-emphasized  { transition-timing-function: cubic-bezier(0.0, 0, 0.2, 1) }
.timing-decelerated { transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1) }
.timing-sharp       { transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1) }

.speed-shortest { transition-duration: .15s }
.speed-shorter  { transition-duration: .2s }
.speed-short    { transition-duration: .25s }
.speed-base     { transition-duration: .3s }
.speed-slow     { transition-duration: .375s }
.speed-slower   { transition-duration: .5s }
.speed-lazy     { transition-duration: .75s }
```
But we recomend to apply transitions in SCSS files. To do that use `transition()` and `complex-transition()` functions.

Function `transition()` returns transition based on `$property`, `$speed`, `$timings` and `$delay` params. Only first one param is required, others are by default `base => .3s`, `ease` and `0s`. Function searches params in `$transition-speed` and `$transition-timings` maps, but you could pass whatever you want. We advice you to pass predefined `$speed` and `$timing` values tho. Here are some examples of usage:
```
transition: transition(transform);
// => transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

transition: transition(opacity, short, ease-in);
// => transition: opacity 0.25s cubic-bezier(0.42, 0, 1, 1);

transition: transition(background-color, slow, emphasized);
// => transition: background-color 0.375s cubic-bezier(0, 0, 0.2, 1);

transition: transition(color, lazy, linear, 1s);
// => transition: color 0.75s cubic-bezier(0, 0, 1, 1) 1s;

transition: transition(box-shadow, 2s, cubic-bezier(.08,1.04,.82,-0.73));
// => transition: box-shadow 2s cubic-bezier(.08,1.04,.82,-0.73);
```
If you need apply many transitions at once we recomend to use `complex-transition()` function. It does basically the same as previous one, but you can write many transitions in clear and fancy way like this:
```
transition: complex-transition(
  transition(opacity, short, ease-in),
  transition(background-color, slow, emphasized),
  transition(color, lazy, linear, 1s),
);

// => transition: opacity 0.25s cubic-bezier(0.42, 0, 1, 1), background-color 0.375s cubic-bezier(0, 0, 0.2, 1), color 0.75s cubic-bezier(0, 0, 1, 1) 1s;
```

## Rotations

Often you need to rotate element by some degree. In CSS you may use `transform: rotate()` for that. NightVue provides some utility classnames to make it a little bit easier.

Most common rotation angles are: `0°`, `90°`, `180°`, `270°` and `360°`. 

For each angle NightVue generates classname with pattern `.rotate-${direction}-${angle}`, where `direction` might be `minus` or `plus`:

```
.rotate-minus-270  { transform: rotate(-270deg) }
.rotate-minus-180  { transform: rotate(-180deg) }
.rotate-minus-90   { transform: rotate(-90deg) }
.rotate-0          { transform: rotate(0deg) }
.rotate-plus-90    { transform: rotate(90deg) }
.rotate-plus-180   { transform: rotate(180deg) }
.rotate-plus-270   { transform: rotate(270deg) }
.rotate-plus-360   { transform: rotate(360deg) }
```

## Utilities

In this section are collected small helpers which didn't find a place in the sections listed above. These classnames are described in [_utilities.scss](src/styles/@core/helpers/_utilities.scss) file:

```
.cursor-pointer       { cursor: pointer }
.cursor-help          { cursor: help }
.cursor-wait          { cursor: wait }
.cursor-move          { cursor: move }
.cursor-not-allowed   { cursor: not-allowed }
.cursor-context-menu  { cursor: context-menu }
.cursor-alias         { cursor: alias }

.no-select   { user-select: none }
.no-overflow { overflow: hidden }
.no-events   { pointer-events: none }

.visible     { visibility: visible }
.invisible   { visibility: hidden }
```
