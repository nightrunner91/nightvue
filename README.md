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
│       ├── blocks
│       ├── core
│           └── helpers
│           normalize.scss
│           functions.scss
│           globals.scss
│           mixins.scss
│           varaibles.scss
│       ├── elements
│       └── plugins
│       style.scss
│   └── views
│       Home.vue
│   App.vue
│   main.js
```
