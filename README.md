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

# File Structure

# Documentation

* [Layout](#layout)
* [Colors](#colors)
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

Working with colors in NightVue will be familiar to a Booststrap user. In general, the systems are similar, but there are small differences that an experienced developer will surely determine on their own.

### Color maps

The `$colors` map located in the `_varaibles.scss` file has 12 standard colors. Based on them, you can customize the colors of the theme, which will be discussed later.
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
Working with the standard color library is not always convenient and appropriate. Usually, delevlopers use a set of semantically named colors compiled from a library. The `$theme-colors` map lists such colors and is also located in the `_varaibles.scss` file. By default, it describes the widely used scheme of 8 colors.
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

### Color usage

There are several ways to use colors in a project:

* Apply reserved classnames to HTML elements,
* Use the global Sass function `@color()`,
* Use the built-in Sass `map.get()` module to access color maps directly.

Practice shows that most often there is a need to change the color of the block, the color of the text and the fill background of the SVG element. For these purposes, NightVue reserves a number of classes `bg-${color}`, `clr-${color}` and `fill-${color}`. Any color from the above maps can be substituted into the `${color}` variable. Optionally, you can specify the `-light-${level}` or `-dark-${level}` modifier to refine the color brightness level. Here's what it looks like:
```
<div class="bg-red"></div>
<div class="bg-red-light-3"></div>

<div class="bg-primary"></div>
<div class="bg-primary-dark-5"></div>

<span class="clr-white"></span>
<span class="clr-danger"></span>
<span class="clr-gray-5"></span>

<svg class="fill-secondary">
  <use xlink:href="#icon" />
</svg>
```
To apply colors in a stylesheet, the `@color($name, $style, $rate)` global function has been prepared, which returns the color specified by the arguments. The `$name` argument will be the name of a color from any of the available maps - `$colors`, `$grays`, and `$theme-colors`. The following arguments are optional and indicate the level deviation of the selected color. Possible `$style` arguments are 'light' and 'dark'. Any of the levels of the $levels map is substituted into the `$rate` argument.
```
.selector {
  box-shadow: 1px 1px 4px color('primary');
}

.selector {
  border-color: color('brown', light, 4);
}

.selector {
  text-decoration: underline;
  text-decoration-color: color('gray-6');
}

.selector {
  background-color: color('secondary');
  color: color('white');

  &:hover {
    background-color: color('secondary', light, 2);
  }
}
```
Finally, you can use the built-in Sass `map.get()` module to directly access the `$colors`, `$grays`, `$theme-colors`, and `$levels` maps. We do, however, recommend using our global function, as it do exactly what you intend to do yourself. But the choice, of course, is yours.
```
.selector {
  background-color: map-get($colors, 'orange');
  color: map-get($theme-colors, 'secondary');
}

.selector {
  background-color: lighten(map-get($theme-colors, 'danger'), map-get($levels, 2));
}
```

## Gradients

Working with linear gradients in CSS can be awkward at times. To do this, NightVue has prepared tools for you to simplify this process. Working with gradients is not much different from working with colors, which we talked about in the previous section. For details about the syntax and features of CSS gradients, see the MDN documentation.

### Gradients map

You have at your disposal the `$gradients` gradient map located in the `_varaibles.scss` file. By default, it provides four gradients as an example:
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

  primary-l3_primary: (
    direction: to bottom,
    fallback: map-get($theme-colors, 'primary'),
    list: (
      map-get($theme-colors, 'primary'),
      lighten(map-get($theme-colors, 'primary'), map-get($levels, 2))
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
Our recommendation would be to name the gradients in this map like this: `{color1}_{color2}`, i.e., through an underscore. So, the gradient called `primary_success` speaks for itself. If you need to use a lightened or darkened color in the gradient, you can add the prefix `-l${level}` or `-d${level}` to the color name, respectively. For example, `primary-l3_primary` is a gradient from the primary color to the primary color, clarified by three levels. Of course, you are free to name the gradients whatever you like, this is only a recommendation.

Let's take a closer look at a single gradient. To write your own, follow the structure:
```
gradientName: (
  // Gradient direction (keyword | angle)
  direction: String,

  // Color by default for unsupported browsers
  fallback: String,

  // List of colors in the gradient, separated by a comma
  list: ( String, String, String... )
),
```
You can substitute in the direction parameter:

* **Keyword**: to top, to top right, to right, to bottom right, to bottom, to bottom left, to left, to left top,
* **Numeric value** in deg, rad, grad, or turn.

The **fallback** and **list** parameters must be filled with colors from the available `$colors`, `$grays`, or `$theme-colors` color maps using the built-in Sass `map-get()` module.

As output, the mixin generates code that includes the default color for browsers that do not support linear gradients and modern syntax. The gradients from our examples after compilation looks like this:
```
.gradient-primary_success {
  background: #682CAB;
  background: linear-gradient(145deg, #8e51d2 10%, #68c279 80%);
}

.gradient-primary-l3_primary {
  background: #682CAB;
  background: linear-gradient(to bottom, #682CAB, #9b65d8);
}

.gradient-red_yellow_blue {
  background: #F44336;
  background: linear-gradient(to right, #F44336, #FFEE58, #2196F3);
}

.gradient-info_transparent {
  background: #009688;
  background: linear-gradient(90deg, #009688, transparent);
}
```
### Gradients usage

There are two ways to apply gradients in NightVue:

* Apply reserved classnames to HTML elements,
* Apply a custom `@linear-gradient()` mixin.