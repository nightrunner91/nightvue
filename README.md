<div align="center">
  <img width="200" height="200" src="src/assets/logo-vue.png">
  <img width="200" height="200" src="src/assets/logo-sn.png">
  <h1>Nightrunner's Vue Front-end Boilerplate</h1>
  <p>It uses best features from <a href='https://cli.vuejs.org/'>Vue CLI</a> and <a href='https://github.com/nightrunner91/nightpack'>nightpack</a> to provide a modern and ready to use boilerplate for Front-end developement</p>
</div>

## What is it, exactly?

Basically, it is already configured [Vue CLI](https://cli.vuejs.org/) project with some cool and handly features from my another Webpack Front-end project named [nightpack](https://github.com/nightrunner91/nightpack). 

Vue CLI settings used:

- Babel
- Router (with history mode enabled)
- Vuex
- SASS/SCSS Preprocessor (based on node-sass)
- ESLint with error prevention only (on save)

## How to use it?

First of all, you need to install Vue CLI globally:

```
npm install -g @vue/cli
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

- Vue
- Router
- Vuex
- Babel
- Hot reload server
- PUG
- SASS (with node-sass autoprefixer)
- Flex Grid
- Normalize.css
- Images loader
- SVG Sprite loader
