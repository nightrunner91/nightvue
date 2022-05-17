<p align="center">
  <img src="src/assets/images/presentation.png" alt="Presentation" width="300" height="284">
</p>

# Introduction

### What is NightVue?

NightVue is a development framework for [Vue.js 2.x](https://ru.vuejs.org/v2/guide/). Its main feature is the absence of popular integrated components (buttons, forms, cards, dropdowns, modal windows, etc.) and the minimum number of preset styles. While many other frameworks offer ready-to-use UI solutions, NightVue gives you the maximum freedom to develop your own web interfaces. In fact, it is a set of useful tools for developers who like to do everything themselves.

The ideological basis of the framework is the most useful utilities from [Bootstrap 4.x](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
, many of which have been improved. NightVue uses best practices from [Material Design 2](https://material.io/) throughout. The framework is powered by [Vue CLI 4.x](https://cli.vuejs.org/), one of the most convenient tools for developing with Vue.js.

### Who is it for?
For Front-end developers who don't like rewriting the built-in styling solutions of third-party frameworks and plugins. Those who prefer to develop "from scratch". NightVue provides much more freedom to write your own code than many other similar frameworks, as you will soon see.

### Who won't it suit?
Front-end developers who need a base of ready-made UI solutions to quickly start developing typed web interfaces. Or those who are used to this approach. In this case, our recommendation would be to use popular solutions like [BootstrapVue](https://bootstrap-vue.org/), [Vuetify](https://vuetifyjs.com/en/), [Vue Material](https://www.creative-tim.com/vuematerial/), or whatever you like. In any case, we advise you to go over the detailed documentation prepared to get acquainted with the functionality of our framework.

# Getting Started

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
Test and/or fix errors
```
npm run lint
npm run lint --fix
```

# Documentation

* [Colors](#colors)
* [Gradients](#gradients)

## Colors

Working with colors in NightVue will be familiar to a Booststrap user. In general, the systems are similar, but there are small differences that an experienced developer will surely determine on their own. The `$colors` map located in the `_varaibles.scss` file has 12 standard colors. Based on them, you can customize the colors of the theme, which will be discussed later.
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
  'purple':    #682CAB
);
```
Also you have achromatic list of 12 colors, where the extreme colors are white and black, and in the interval between them - shades of gray, differing in brightness. The length of this row can be changed by editing the `$shadesNum: 10` variable in the `_varaibles.scss` file. The mixin will automatically generate the specified number of intermediate colors in the `$grays` map.
```
$grays: (
  'white':     #ffffff,
  'gray-1':    #eaeaea,
  'gray-2':    #d5d5d5,
  'gray-3':    #bfbfbf,
  'gray-4':    #aaaaaa,
  'gray-5':    #959595,
  'gray-6':    #cccccc,
  'gray-7':    #6a6a6a,
  'gray-8':    #555555,
  'gray-9':    #404040,
  'gray-10':   #2b2b2b,
  'black':     #000000
);
```
Working with the standard color library is not always convenient and appropriate. As a rule, projects use a set of semantically named colors compiled from a library. The `$theme-colors` map lists such colors and is also located in the `_varaibles.scss` file. By default, it describes the widely used scheme of 8 colors. You can rename them, delete them or add new ones.
```
$theme-colors: (
  'primary':    map-get($colors, 'purple'),
  'secondary':  map-get($colors, 'blue'),
  'success':    map-get($colors, 'green'),
  'info':       map-get($colors, 'teal'),
  'warning':    map-get($colors, 'yellow'),
  'danger':     map-get($colors, 'red'),
  'light':      map-get($shades, 'gray-2'),
  'dark':       map-get($shades, 'gray-8'),
);
```
Modifiers are applied to each of the colors in the library to change their brightness. Thanks to this, the color palette is noticeably expanded. This is achieved using Sass mixins to lighten or darken colors using the built-in Sass `mix()` function. The number of levels and their values can be adjusted in the $levels map in the `_varaibles.scss` file. The mixin will automatically generate the required number of levels, at each of which it will lighten or darken the base color by the specified value. The default setting is 5 steps with 5% steps.
```
$levels: (
  1: 10%,
  2: 15%,
  3: 20%,
  4: 25%,
  5: 30%,
);
```