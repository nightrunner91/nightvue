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
* eslint v6.7.2
* svg-sprite-loader v6.0.11
* lodash v4.17.21
* babel 10.1.0
* vue2-touch-events v3.2.2
* vue-waves-effect v1.0.0

**Features:**
* Hot-reload dev server
* Well organized file structure
* ESLint validator
* Bunch of Scss mixins and functions
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

# Documentation 📚

* [Layout](#layout)
* [Colors](#Colors)
* [Gradients](#gradients)
* [Typography](#typography)
* [Icons](#icons)
* [Spacing](#spacing)
* [Sizing](#sizing)
* [Display](#display)
* [Position](#position)
* [Shadows](#shadows)
* [Radius](#radius)
* [Transitions](#transitions)
* [Opacity](#opacity)
* [Z-index](#zindex)

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
NightVue automatically generates classnames from Sass maps above. Each color will have unique classname with `background-color`, `color` and `fill` styles. For each color in `$colors` and `$theme-colors` maps will be generated classnames with suffixes `-light-${level}` and `-dark-${level}` with brightened and darkened colors. Here are some examples:
```
.bg-red { background-color: #F44336 }
.bg-gray-5 { background-color: #959595 }
.bg-primary { background-color: #682CAB }
.clr-secondary-light-2 { color: #42a6f5 }
.fill-secondary-dark-4 { fill: #1971b6 }
```
If you need to apply colors in Sass files you can use `color($name, $style: false, $rate:false)` function. It returns Hex value of color by its `$name`. Additionally you can pass `$style` and `$rate` params to determine level of brightness or darkness of color. Here are some examples of usage in Scss:
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

# To-do list Q3-Q4 2022 ✅

- [ ] Migrate to Vue.js 3.x
- [ ] Migrate to Vue CLI 5.x
- [ ] Write documentation in README file
- [ ] Create landing page with presentation and documentation
- [ ] Release package on npmjs.com
