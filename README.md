<p></p>
<p align="center">
  <img src="src/assets/images/presentation.png" alt="Presentation" width="300" height="284">
</p>

# Introduction 👋

NightVue is a development framework for [Vue.js 2.x](https://ru.vuejs.org/v2/guide/). While many other frameworks offer ready-to-use UI solutions, NightVue gives you the maximum freedom to develop your own web interfaces. The ideological basis of the framework is the most useful utilities from [Bootstrap 4.x](https://getbootstrap.com/docs/4.6/getting-started/introduction/), many of which have been improved. NightVue uses best practices from [Material Design 2](https://material.io/) throughout. The framework is powered by [Vue CLI 4.x](https://cli.vuejs.org/), one of the most convenient tools for developing with Vue.js.

NightVue is build for Front-end developers who don't like rewriting the built-in styling solutions of third-party frameworks and plugins. It's for those who prefer to develop "from scratch". For those who need framework with ready-to-use UI solutions, we would recomend to use popular ones like [BootstrapVue](https://bootstrap-vue.org/), [Vuetify](https://vuetifyjs.com/en/), [Vue Material](https://www.creative-tim.com/vuematerial/), or whatever you like.

# What's Included? 📦

**Modules:**
* vue.js v2.6.11
* vue-cli v.4.5.0
* vuex v3.4.0
* vue-router v2.6.11
* axios v0.24.0
* eslint v6.8.0
* svg-sprite-loader v6.0.11
* lodash v4.17.21
* babel 10.1.0
* vue2-touch-events v3.2.2
* vue-waves-effect v1.0.0

**Features:**
* Hot-reload dev server
* Well organized file structure
* ESLint validator
* Bunch of SCSS mixins and functions
* Router layouts support
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
Test or fix errors
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
│   ├── layouts
│   ├── router
│       └── modules
│       index.js
│   ├── store
│       └── modules
│       index.js
│   ├── styles
│       ├── animations
│       ├── components
│       ├── core
│           └── helpers
│           functions.scss
│           globals.scss
│           mixins.scss
│           normalize.scss
│           typography.scss
│           varaibles.scss
│       ├── plugins
│       └── sections
│       style.scss
│   └── views
│       Home.vue
│   App.vue
│   main.js
```
Let's take a quick look to the crucial parts of framework.

* `src/assets` folder includes any types of assets you are using in your project, such as icons, fonts, images, files etc. NightVue uses set of Webpack and Sass loaders to easy serve and manage them
* `src/components` folder includes [reusable Vue components](https://vuejs.org/guide/essentials/component-basics.html). By default this folder already includes Header, Footer and SvgIcon components as examples
* `src/layouts` folder includes different layout types for your project. Vue.js doesn't provide this functionality by default, but people found [the way to do it](https://markus.oberlehner.net/blog/dynamic-vue-layout-components/). We will talk about this later.
* `src/router` folder includes [Vue Router](https://router.vuejs.org/) files.
* `src/store` folder includes [Vuex](https://vuex.vuejs.org/) files.
* `src/styles` folder includes stylesheets, Sass functions and mixins, usefull utilities. To keep styles well organized we separate global and local styles in different folders.
  * `src/styles/animations` folder includes `@keyframes`
  * `src/styles/components` folder includes styles for reusable components like buttons, dropdowns, inputs, avatars, modals, alerts, etc.
  * `src/styles/core` folder includes crucial Sass mixins, functions and code generators to work with.
    * `src/styles/core/helpers` - the folder includes SCSS files that generate classnames to use in HTML (grid, spacers, text styles, colors etc.)
    * `src/styles/core/globals.scss` - this is key file that imports all available **functions**, **mixins** and **varaibles** from so-called files at the same folder.
    * `src/styles/core/typography.scss` file describes all text styles (headings, displays, paragraphs, fonts etc)
    * `src/styles/core/normalize.scss` makes browsers render all elements more consistently and in line with modern standards. It is basicly slightly modified SCSS version of widely used [Normalize.css](https://necolas.github.io/normalize.css/)
  * `src/styles/plugins` folder includes 3rd party plugins styles and is empty by default
  * `src/styles/sections` folder includes styles for "big" and unique parts like: header, footer, article, hero, etc.
* `src/views` folder includes Vue pages you are using in your project. By default it's only Home.vue page

Finally, `App.vue` is root file of project and `main.js` is the file where you import components, directives, plugins etc.

# Documentation 📚

* [Grid](#Grid)
* [Position](#Position)
* [Display](#Display)
* [Typography](#Typography)
* [Colors](#Colors)
* [Gradients](#Gradients)
* [Icons](#Icons)
* [Spacing](#Spacing)
* [Sizing](#Sizing)
* [Radius](#Radius)
* [Shadows](#Shadows)
* [Rotations](#Rotations)
* [Opacity](#Opacity)
* [Z-index](#Z-index)
* [Utilities](#Utilities)
* [Transitions](#Transitions)

## Grid

NightVue grid system is quite similar to [Bootstrap grid](https://getbootstrap.com/docs/4.0/layout/grid/), but we are using entirely different approach to build mixins and functions. Our grid system is built with flexbox and is fully responsive. If you are not familiar with flex we recomend to read this [article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background). NightVue grid uses a series of containers, rows, and cols to align content and in general shares the same principles as Bootstrap. Nonetheless we must mention some features and differences. 

There are 3 types of containers in NightVue:

* **boxed** - on each `$breakpoint` container will have fixed `max-width` based on `$containers` map
* **combined** - container will have `max-width` of *last* value from `$containers` map, then will have 100%
* **full** - container will *always* have 100% width

Base grid settings are stored in [varaibles.scss](src/styles/core/varaibles.scss) file.
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
Remember that `$breakpoints` are dublicated in Vuex store in [config.js](src/store/modules/config.js) file. NightVue watches for [window resize event](https://developer.mozilla.org/ru/docs/Web/API/Window/resize_event) to update global Vuex store varaibles in real-time. It also constantly tracks current [scroll position](https://developer.mozilla.org/ru/docs/Web/API/Window/scrollY). You can read these values with computed properties `windowSize()`, `currentBreakpoint()` and `windowScroll()`.

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
You can apply grid styles both in HTML and SCSS.

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
If you need to apply offset to column use `offset-${breakpoint}-${value}` classnames like this:
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
If you need to apply order to column use `order-${breakpoint}-${value}` classnames like this:
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
Although this method is very familiar to most developers, we highly recomend to use Sass mixins to build grid right in SCSS files. This will make Vue templates noticeably cleaner and at the same time help keep all the styles in one place.

## Colors

NightVue uses Sass maps to store project colors. This maps will help you quickly and easily loop over a list of colors and their hex values.

* `$colors` map includes all available 'basic' colors in project
* `$grays` map includes achromatic list (shades of gray between `#fff` and `#000`)
* `$theme-colors` map includes semantically named colors composed from maps above

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
  'gray-1':  gray($level: 1, $from: 10),
  'gray-2':  gray($level: 2, $from: 10),
  'gray-3':  gray($level: 3, $from: 10),
  'gray-4':  gray($level: 4, $from: 10),
  'gray-5':  gray($level: 5, $from: 10),
  'gray-6':  gray($level: 6, $from: 10),
  'gray-7':  gray($level: 7, $from: 10),
  'gray-8':  gray($level: 8, $from: 10),
  'gray-9':  gray($level: 9, $from: 10),
  'gray-10': gray($level: 10, $from: 10),
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
In map `$levels` you can define levels of lightening and darkening of each color in `$colors` and `$theme-colors` maps. By default this map has 5 steps:
```
$levels: (
  1: 10%,
  2: 15%,
  3: 20%,
  4: 25%,
  5: 30%,
);
```
NightVue automatically generates classnames from Sass maps above. Each color have unique classname with `background-color`, `color` and `fill` styles. Additionally for each color NightVue generates classnames with brightened and darkened color variations. This classnames have suffixes `-light-${level}` and `-dark-${level}` respectively. Here are some examples:
```
/// Classnames which applies background-color:
.bg-red { background-color: #F44336 }
.bg-gray-5 { background-color: #959595 }
.bg-primary { background-color: #682CAB }
.bg-primary-light-1 { background-color: #7741b3 }

/// Classnames which applies text color
.clr-danger { color: #F44336 }
.clr-secondary-light-2 { color: #42a6f5 }
.clr-secondary-dark-4 { color: #1971b6 }

/// Classnames which applies SVG fill color
.fill-white { fill: #ffffff }
.fill-dark { fill: #555555 }
.fill-success-dark-2 { fill: #3c964d }
```
If you need to apply colors in Sass files you can use `color($name, $style, $rate)` function. It returns hex value of color by its `$name`. Additionally you can pass optional arguments `$style` and `$rate` to determine level of brightness or darkness of color. Here are some examples of usage in SCSS:
```
box-shadow: 1px 1px 4px color('primary');
// => box-shadow: 1px 1px 4px #682CAB;

border-color: color('brown', light, 4);
// => border-color: #9b8076;

background-color: color('secondary');
// => background-color: #2196F3;

color: color('white');
// => color: #ffffff;

fill: color('gray-4');
// => fill: #aaaaaa;
```
You may have noticed that we use `gray()` function in `$grays` map to generate shades of gray. Keep in mind that this function receives two arguments `$level` and `$from`. Last one **must be equal to length of gray colors** in order to generate steady achromatic list. Argument `$level` is level of gray color in this list. In order to simplify take a look at already generated list:
```
"gray-1":  #eaeaea,
"gray-2":  #d5d5d5,
"gray-3":  #bfbfbf, 
"gray-4":  #aaaaaa, 
"gray-5":  #959595, 
"gray-6":  #cccccc, 
"gray-7":  #6a6a6a, 
"gray-8":  #555555, 
"gray-9":  #404040,
"gray-10": #2b2b2b
```
Each next color is darker than the previous one. When you call `gray(3, 10)` function returns third color in this list (`#bfbfbf`). Also you can pass different color level and total length of list. Here are some examples:
```
color: gray($level: 12, $from: 50);
// => color: #c4c4c4;

color: gray($level: 4, $from: 4);
// => color: #555555;

color: gray(7, 24);
// => color: #bababa;
```

# To-do list Q3-Q4 2022 ✅

- [ ] Migrate to Vue.js 3.x
- [ ] Migrate to Vue CLI 5.x
- [ ] Write documentation in README file
- [ ] Create landing page with presentation and documentation
- [ ] Release package on npmjs.com
