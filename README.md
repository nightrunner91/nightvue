<div align="center">
  <img width="200" height="200" src="src/assets/logo-vue.png">
  <img width="200" height="200" src="src/assets/logo-sn.png">
  <h1>Nightrunner's Vue Front-end Boilerplate</h1>
  <p>It uses best features from <a href='https://cli.vuejs.org/'>Vue CLI</a> and <a href='https://github.com/nightrunner91/nightpack'>nightpack</a> to provide a modern and ready to use boilerplate for Front-end developement</p>
</div>

## What is it, exactly?

Basically, it is already configured [Vue CLI](https://cli.vuejs.org/) project with some cool and handly features from another Webpack Front-end project named [nightpack](https://github.com/nightrunner91/nightpack).

Vue CLI settings used in this project are:

- Babel
- Router (with history mode enabled)
- Vuex
- SASS/SCSS Preprocessor based on node-sass
- ESLint with error prevention only (on save)

## How to use it?

First of all, you need to install Vue CLI

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

Then clone repo and install dependencies

```
git clone git@github.com:nightrunner91/nightvue.git
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

## Features included:

- Vue.js
- Babel
- Hot reload server
- PUG
- SASS (with node-sass autoprefixer)
- Flex Grid
- Normalize.css

## Documentation

- [SASS Structure](#sass-structure)
- [Grid system](#grid-system)

### `SASS structure`

Just like in PUG Templates I use [BEM methodology](https://en.bem.info/methodology/css/) to separate **B**locks and **E**lements. Default file structure looks lke this:

```
styles
  ├── animations
      └── _animations.sass
  ├── blocks
      ├── _header.sass
      ├── _footer.sass
      ├── etc...
  ├── core
      ├── _colors.sass
      ├── _extends.sass
      ├── _grid.sass
      ├── _mixins.sass
      ├── _normalize.sass
      ├── _typography.sass
  └── elements
      ├── _button.sass
      ├── etc...
  main.sass
```

I use [SASS @extends](https://sass-lang.com/documentation/at-rules/extend) feature very often, thats why I included many useful shortenings in [_extends.sass](src/styles/core/_extends.sass) file. 

### `Grid system`

Nightpack uses custom 12 column grid system based on flex. Actually, you can modify number of columns. For example, 24 or 36 depends on project you work on. You can use grid system both in PUG or SASS. I personally prefer SASS method because in that case output HTML looks pretty and clean.

**PUG**:

```
.col.lg-6.md-6.sm-6.xs-6.mb-12
// or
div(class='col lg-6 md-6 sm-6 xs-6 mb-12')
```

**SASS**:

```
.classname
  @extend .col
  @extend .lg-6
  @extend .md-6
  @extend .sm-6
  @extend .xs-6
  @extend .mb-12
```

It also includes list of popular breakpoints:

```
$mb-screen: 320px !default // mobile (mobile portrait)
$xs-screen: 480px !default // extra small (mobile landscape)
$sm-screen: 648px !default // small
$md-screen: 960px !default // medium
$lg-screen: 1140px !default // large 
$xl-screen: 1600px !default // extra large
```

With this, you can use @media queries like this:

```
@media #{$lg-up} // styles will apply on LG+ resolutions (>1140px)
@media #{$sm-dw} // styles will apply on SM- resolutions (<648px)
@media #{md-lg} // styles will apply between MD and LG resolutions only (>960px && <1140px)
```

See [_grid.sass](src/styles/core/_grid.sass) file for more details.
