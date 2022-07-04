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
  * `src/styles/animations` folder includes [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
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
* [Layout](#Layout)
* [Typography](#Typography)
* [Position](#Position)
* [Display](#Display)
* [Spacing](#Spacing)
* [Sizing](#Sizing)
* [Colors](#Colors)
* [Gradients](#Gradients)
* [Icons](#Icons)
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

### Sass grid mixins

Although this method is very familiar to most developers, we highly recomend to use Sass mixins to build grid right in SCSS files. This will make Vue templates noticeably cleaner and at the same time help keep all the styles in one place.

To convert any selector to container type just apply `@container()` mixin to it.
```
@include container();
@include container('full');
@include container($type: 'boxed', $gutter: 2rem);
```
From now on this selector will have same properties as `.container` class. Notice that you can define `$type` and `$gutter`.

Just like with container you can convert any selector to `.row`. Simply apply `@row()` mixin to it. Additionally you can pass `$gutter` value. It will apply alternate negative left and right margins.
```
@include row();
@include row(0);
@include row($gutter: 2rem);
```
To apply column styles use `@col()` mixin. If you don't pass any params mixin will apply only `padding-left` and `padding right` based on `$gutter-width` varaible. To apply width properties you can pass number from 1 to 12 for each breakpoint.
```
@include col();
@include col(12);
@include col(10, $md: 8);
@include col(10, $md: 8, $lg: 6, $xs: 12);
@include col(12, 10, 10, 8, 6, 9);
```
If you need to apply offset to column use `@offset()` mixin. It will add `margin-left` property to selector. You can pass number from 0 to 12 for each breakpoint. Note that if you don't pass any params, mixin won't apply any styles.
```
@include offset(6);
@include offset(0, $sm: 4);
@include offset(10, $md: 8);
@include offset(10, $md: 8, $lg: 6, $xs: 12);
@include offset($sm: 1, $lg: 4, $xl: 0);
```
In case you need to apply order to column use `@order` mixin. It will apply `order` property from 1 to 12 to selector.
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
$xs-up; // > 540px
$sm-up; // > 720px
$md-up; // > 960px
$lg-up; // > 1140px
$xl-up; // > 1320px

// max-width queries
$xs-dw; // < 539px
$sm-dw; // < 719px
$md-dw; // < 959px
$lg-dw; // < 1139px
$xl-dw; // < 1319px
```
Or queries *between* breakpoints:
```
$xs-sm; // 540px … 719px
$sm-md; // 720px … 959px
$md-lg; // 960px … 1139px
$lg-xl; // 1140px … 1319px
```
Here are some examples of usage in SCSS document:
```
.selector { @media #{$sm-up} { ... } } // styles above 720px
.selector { @media #{$md-up} { ... } } // styles above 960px

.selector { @media #{$xl-dw} { ... } } // styles below 1319px
.selector { @media #{$lg-dw} { ... } } // styles below 1139px

.selector { @media #{$sm-md} { ... } } // styles between 720px and 959px
.selector { @media #{$md-lg} { ... } } // styles between 920px and 1139px
```

## Layout

[ 🚧 *this part of the documentation is in progress* ]

## Typography

Typography settings are located in [varaibles.scss](src/styles/core/varaibles.scss) file.
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

$letter-spacings: (
  normal:  normal,
  tight:   -0.05em,
  wide:   .1em,
  wider:  .5em,
);

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
  top: 1.5em,
  bottom: 0.5em,
);

$displays-fz: (
  display-1: 74px,
  display-2: 62px,
  display-3: 48px,
  display-4: 34px,
);
$displays-lh: map-get($line-heights, 25);
$displays-fw: map-get($font-weights, 500);
$displays-margins: (
  top: 1.5em,
  bottom: 1em,
);
```
Crucial varaibles are:
```
$base-fz: 16px;
$base-lh: map-get($line-heights, 50);
$base-fw: map-get($font-weights, 400);
$base-mg: map-get($spacers, 1);
$small-fz: 0.875;
```
The place where this settings are applied is [typography.scss](src/styles/core/typography.scss) file. Here are declared global settings, styles for headings, displays, body text, lists, and more. Also here you can import fonts by using `@font-face` mixin. Make sure to store your fonts in `'src/assets/fonts'` folder. Each font must be saved in a folder with the same name as font itself. By default NightVue uses [Onest font](https://onest.md/en). This is how we stored and imported it, use this as example to import your own fonts.
```
Font files location:

├── src
│   ├── assets
│       ├── fonts
│           └── Onest

Import font using @font-face mixin:

@include font-face('Onest', 'OnestRegular', 400, normal, 'recent');
@include font-face('Onest', 'OnestMedium', 500, normal, 'recent');
@include font-face('Onest', 'OnestBold', 700, normal, 'recent');
@include font-face('Onest', 'OnestBlack', 900, normal, 'recent');
```

## Position

[ 🚧 *this part of the documentation is in progress* ]

## Display

[ 🚧 *this part of the documentation is in progress* ]

## Display

[ 🚧 *this part of the documentation is in progress* ]

## Spacing

NightVue uses the same logic as [Bootstrap spacing system](https://getbootstrap.com/docs/4.0/utilities/spacing/) to generate responsive margin and padding utility classnames.

The classnames are named using the format `{$property}-{$breakpoint}-{$side}-{$size}`.

Where `$property` is one of:
* `m` - for classnames that set margin
* `p` - for classnames that set padding

Where `$breakpoint` is one of:
* `xs` - for classnames that set property on XS breakpoint > 576px
* `sm` - for classnames that set property on SM breakpoint > 768px
* `md` - for classnames that set property on MD breakpoint > 992px
* `lg` - for classnames that set property on LG breakpoint > 1200px
* `xl` - for classnames that set property on XL breakpoint > 1400px
* blank - if you want to set a margin and padding on all breakpoint

Where `$side` is one of:
* `t` - for classnames that set margin-top or padding-top
* `b` - for classnames that set margin-bottom or padding-bottom
* `l` - for classnames that set margin-left or padding-left
* `r` - for classnames that set margin-right or padding-right
* `x` - for classnames that set both *-left and *-right
* `y` - for classnames that set both *-top and *-bottom
* blank - for classnames that set a margin or padding on all 4 sides of the element

Where `$size` is one of spacing sizes defined in [varaibles.scss](src/styles/core/varaibles.scss) file:
```
$spacers: (
  0:    0,
  25:   .25rem,
  50:   .5rem,
  75:   .75rem,
  1:    1rem,
  2:    2rem,
  3:    3rem,
  4:    4rem,
  5:    5rem,
  auto: auto
);
```
In case you prefer SCSS method to define spacers use `spacer()` function for that.

* If you pass one param it will return spacer value
* If you pass two params it will return X and Y spacer values
* If you pass four params it will return top, right, bottom and left spacer values

```
padding: spacer(2);
// => padding: 2rem;

padding-right: spacer(1);
// => padding-right: 1rem;

margin: spacer(3, auto);
// => margin: 3rem auto;

margin: spacer(50, auto, 2, 0);
// => margin: .5rem auto 2rem 0;
```

## Sizing

[ 🚧 *this part of the documentation is in progress* ]

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

## Gradients

[ 🚧 *this part of the documentation is in progress* ]

## Icons

[ 🚧 *this part of the documentation is in progress* ]

## Radius

[ 🚧 *this part of the documentation is in progress* ]

## Shadows

[ 🚧 *this part of the documentation is in progress* ]

## Rotations

[ 🚧 *this part of the documentation is in progress* ]

## Opacity

[ 🚧 *this part of the documentation is in progress* ]

## Z-index

[ 🚧 *this part of the documentation is in progress* ]

## Utilities

[ 🚧 *this part of the documentation is in progress* ]

## Transitions

[ 🚧 *this part of the documentation is in progress* ]

# To-do list Q3-Q4 2022 ✅

- [ ] Write documentation
- [ ] Migrate to Vue.js 3.x
- [ ] Migrate to Vue CLI 5.x
- [ ] Release package on npmjs.com
