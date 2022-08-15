<template>
<!-- eslint-disable -->
<div class="container">
  <div class="row">
    <div class="col col-12">


      <div class="mume markdown-preview  "  >
      <p></p>
<h1 class="mume-header" id="introduction">Introduction &#x1F44B;</h1>

<p>NightVue is a &#x201C;crystal clear&#x201D; development framework for <a href="https://ru.vuejs.org/v2/guide/">Vue.js 2.x</a> powered by <a href="https://cli.vuejs.org/">Vue CLI 4.x</a>, one of the most convenient tools for developing with Vue.js.</p>
<p>While many other frameworks comes with pre-build components and styles, NightVue gives you the maximum freedom to develop your own web interfaces. It is created for those who prefer to develop &#x201C;from scratch&#x201D;. NightVue gives you tools to work with and what you do with them is up to you.</p>
<p>For those developers who needs framework with ready-to-use UI solutions, we would recomend to use popular ones like <a href="https://bootstrap-vue.org/">BootstrapVue</a>, <a href="https://vuetifyjs.com/en/">Vuetify</a>, <a href="https://www.creative-tim.com/vuematerial/">Vue Material</a>, or whatever you like. Anyway, take a look at our documentation, maybe NightVue is what you need!</p>
<h1 class="mume-header" id="whats-included">What&apos;s Included? &#x1F4E6;</h1>

<p><strong>Modules:</strong></p>
<ul>
<li>vue.js v2.6.11</li>
<li>vue-cli v.4.5.0</li>
<li>vuex v3.4.0</li>
<li>vue-router v2.6.11</li>
<li>axios v0.24.0</li>
<li>eslint v6.7.2</li>
<li>svg-sprite-loader v6.0.11</li>
<li>lodash v4.17.21</li>
<li>babel 10.1.0</li>
<li>vue2-touch-events v3.2.2</li>
<li>vue-waves-effect v1.0.0</li>
</ul>
<p><strong>Features:</strong></p>
<ul>
<li>Hot-reload dev server</li>
<li>Well organized file structure</li>
<li>Bunch of Sass mixins and functions</li>
<li>ESLint validator</li>
<li>Router layouts support</li>
<li>Router pages transition</li>
<li>Flexbox grid</li>
<li>Normalize.css</li>
<li>SVG sprite loader</li>
<li>Images loader</li>
<li>Fonts loader</li>
</ul>
<h1 class="mume-header" id="getting-started">Getting Started &#x1F5B1;</h1>

<p>Clone repo and install dependencies</p>
<pre data-role="codeBlock" data-info class="language-"><code>git clone https://github.com/nightrunner91/nightvue.git
npm i
</code></pre><p>Run hot-reload dev server</p>
<pre data-role="codeBlock" data-info class="language-"><code>npm run serve
</code></pre><p>Build your project</p>
<pre data-role="codeBlock" data-info class="language-"><code>npm run build
</code></pre><p>Test or test and fix errors</p>
<pre data-role="codeBlock" data-info class="language-"><code>npm run lint
npm run lint --fix
</code></pre><h1 class="mume-header" id="file-structure">File Structure &#x1F4C2;</h1>

<p>This is default NightVue file structure. We followed to the principles of modularity and extensibility during the development and recommend that you follow them aswell.</p>
<pre data-role="codeBlock" data-info class="language-"><code>.
&#x251C;&#x2500;&#x2500; public
&#x251C;&#x2500;&#x2500; src
&#x2502;   &#x251C;&#x2500;&#x2500; assets
&#x2502;       &#x251C;&#x2500;&#x2500; fonts
&#x2502;       &#x251C;&#x2500;&#x2500; icons
&#x2502;       &#x2514;&#x2500;&#x2500; images
&#x2502;   &#x251C;&#x2500;&#x2500; components
&#x2502;       &#x251C;&#x2500;&#x2500; Footer
&#x2502;       &#x251C;&#x2500;&#x2500; Header
&#x2502;       &#x2514;&#x2500;&#x2500; SvgIcon
&#x2502;   &#x251C;&#x2500;&#x2500; layouts
&#x2502;       AppLayout.vue
&#x2502;       AppLayoutDefault.vue
&#x2502;       AppLayoutFull.vue
&#x2502;   &#x251C;&#x2500;&#x2500; router
&#x2502;       &#x2514;&#x2500;&#x2500; modules
&#x2502;       index.js
&#x2502;       RouterView.vue
&#x2502;   &#x251C;&#x2500;&#x2500; store
&#x2502;       &#x2514;&#x2500;&#x2500; modules
&#x2502;       index.js
&#x2502;   &#x251C;&#x2500;&#x2500; styles
|       &#x251C;&#x2500;&#x2500; @core
&#x2502;           &#x2514;&#x2500;&#x2500; helpers
&#x2502;           _functions.scss
&#x2502;           _mixins.scss
&#x2502;           _varaibles.scss
&#x2502;           globals.scss
&#x2502;           normalize.scss
&#x2502;           typography.scss
&#x2502;       &#x251C;&#x2500;&#x2500; animations
&#x2502;       &#x251C;&#x2500;&#x2500; components
&#x2502;       &#x2514;&#x2500;&#x2500; sections
&#x2502;       nightvue.scss
&#x2502;       style.scss
&#x2502;   &#x2514;&#x2500;&#x2500; views
&#x2502;       Home.vue
&#x2502;   App.vue
&#x2502;   main.js
</code></pre><p>Let&apos;s take a look at the crucial parts of framework.</p>
<ul>
<li><code>src/assets</code> folder includes any types of assets you are using in your project, such as icons, fonts, images, files etc. NightVue uses set of Webpack and Sass loaders to easy serve and manage them</li>
<li><code>src/components</code> folder includes <a href="https://vuejs.org/guide/essentials/component-basics.html">reusable Vue components</a>. By default this folder already includes <strong>Header</strong>, <strong>Footer</strong> and <strong>SvgIcon</strong> components as examples</li>
<li><code>src/layouts</code> folder includes different layout types for your project</li>
<li><code>src/router</code> folder includes <a href="https://router.vuejs.org/">Vue Router</a> files</li>
<li><code>src/store</code> folder includes <a href="https://vuex.vuejs.org/">Vuex</a> files</li>
<li><code>src/styles</code> folder includes stylesheets, Sass functions and mixins, usefull utilities.
<ul>
<li><code>src/styles/@core</code> folder includes crucial NightVue Sass mixins, functions and code generators to work with
<ul>
<li><code>src/styles/@core/helpers</code> - the folder includes SCSS files that generates utility classnames to use in HTML (grid, spacers, text styles, colors etc.)</li>
<li><code>src/styles/@core/globals.scss</code> - this is key file where we import all <strong>functions</strong>, <strong>mixins</strong> and <strong>variables</strong> from so-called files at the same directory</li>
<li><code>src/styles/@core/typography.scss</code> file describes all text styles (headings, displays, paragraphs, fonts etc)</li>
<li><code>src/styles/@core/normalize.scss</code> makes browsers render all elements more consistently and in line with modern standards. It is basicly slightly modified SCSS version of widely used <a href="https://necolas.github.io/normalize.css/">Normalize.css</a></li>
</ul>
</li>
<li><code>src/styles/animations</code> folder includes <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes">@keyframes</a></li>
<li><code>src/styles/components</code> folder includes styles for reusable components like buttons, dropdowns, inputs, avatars, modals, alerts, etc.</li>
<li><code>src/styles/sections</code> folder includes styles for &quot;big&quot; and unique parts like: header, footer, article, hero, etc.</li>
<li><code>src/styles/nightvue.scss</code> file includes all NightVue settings, styles and code generators</li>
<li><code>src/styles/style.scss</code> is file where you can write your own styles</li>
</ul>
</li>
<li><code>src/views</code> folder includes Vue pages you are using in your project. By default it&apos;s only <strong>Home.vue</strong> page</li>
<li><code>src/App.vue</code> is the root Vue file</li>
<li><code>src/main.js</code> is the file where you import and register components, directives, styles, plugins etc.</li>
</ul>
<h1 class="mume-header" id="documentation">Documentation &#x1F4DA;</h1>

<ul>
<li><a href="#layout">Layout</a></li>
<li><a href="#grid">Grid</a></li>
<li><a href="#typography">Typography</a></li>
<li><a href="#position">Position</a></li>
<li><a href="#display">Display</a></li>
<li><a href="#spacing">Spacing</a></li>
<li><a href="#sizing">Sizing</a></li>
<li><a href="#colors">Colors</a></li>
<li><a href="#gradients">Gradients</a></li>
<li><a href="#opacity">Opacity</a></li>
<li><a href="#icons">Icons</a></li>
<li><a href="#radius">Radius</a></li>
<li><a href="#shadows">Shadows</a></li>
<li><a href="#rotations">Rotations</a></li>
<li><a href="#z-index">Z-index</a></li>
<li><a href="#transitions">Transitions</a></li>
<li><a href="#utilities">Utilities</a></li>
</ul>
<h2 class="mume-header" id="layout">Layout</h2>

<p>Vue.js doesn&apos;t provide layout functionality by default, but people found <a href="https://markus.oberlehner.net/blog/dynamic-vue-layout-components/">the way to do it</a>, which is realy great. We also combined this method with <a href="https://router.vuejs.org/guide/advanced/transitions.html">Vue Router transitions</a> to create smooth, dynamic and easy expandible layout system.</p>
<p>Key file in this system is <a href="file:///C:\Boostraps\nightvue\src\layouts\AppLayout.vue">AppLayout.vue</a>. Here we created dynamic component to which we apply different layout types using <code>is</code> attribute:</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;component
  :is=&quot;layout&quot;
  class=&quot;layout&quot;
  :class=&quot;[layoutClassnames]&quot;&gt;
  &lt;slot /&gt;
&lt;/component&gt;
</code></pre><p>NightVue offers 2 types of layouts at the begining:</p>
<ul>
<li><strong>default</strong> - widely used <code>&lt;header&gt;&lt;/header&gt;</code> &#x2192; <code>&lt;main&gt;&lt;/main&gt;</code> &#x2192; <code>&lt;footer&gt;&lt;/footer&gt;</code> layout</li>
<li><strong>full</strong> - plain page without any additional elements, just a simple <code>&lt;div&gt;&lt;/div&gt;</code></li>
</ul>
<p>These templates are stored in <a href="file:///C:\Boostraps\nightvue\src\layouts\AppLayoutDefault.vue">AppLayoutDefault.vue</a> and <a href="file:///C:\Boostraps\nightvue\src\layouts\AppLayoutFull.vue">AppLayoutFull.vue</a> files respectively:</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;app-header /&gt;
    &lt;main class=&quot;main position-relative&quot;&gt;
      &lt;slot /&gt;
    &lt;/main&gt;
    &lt;app-footer /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>&lt;template&gt;
  &lt;div class=&quot;minvh-100&quot;&gt;
    &lt;slot /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><p>You can modify them or create your own layouts. To do this create new Vue file named in such manner as default ones and don&apos;t forget to add new layouts in computed property of core file. This classnames will apply to root element:</p>
<pre data-role="codeBlock" data-info class="language-"><code>layoutClassnames() {
  const layout = this.$route.meta.layout || defaultLayout

  if (layout === &apos;AppLayoutFull&apos;) return &apos;layout--full&apos;
  if (layout === &apos;AppLayoutDefault&apos;) return &apos;layout--default&apos;

  return null
},
</code></pre><p>Pay your attention to computed property <code>layout()</code>. It returns current page layout type using <a href="https://router.vuejs.org/guide/advanced/meta.html">Vue Router meta fields</a>:</p>
<pre data-role="codeBlock" data-info class="language-"><code>const defaultLayout = &apos;AppLayoutDefault&apos;

layout() {
  const layout = this.$route.meta.layout || defaultLayout
  return () =&gt; import(`@/layouts/${layout}.vue`)
},
</code></pre><p>When you add new page to Router, define it&apos;s layout using <code>meta.layout</code> param. If you don&apos;t provide any type, NightVue will apply default layout to this page:</p>
<pre data-role="codeBlock" data-info class="language-"><code>{
  path: &apos;/&apos;,
  name: &apos;Home&apos;,
  component: () =&gt; import(&apos;@/views/Home.vue&apos;),
  meta: {
    layout: &apos;AppLayoutDefault&apos;,
  },
},
</code></pre><p>Now let&apos;s make things a bit more fancy. We wrapped root dynamic component in <code>&lt;transition&gt;&lt;/transition&gt;</code> tag to add smooth <a href="https://router.vuejs.org/guide/advanced/transitions.html#transitions">transition between pages</a>:</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;transition
  appear
  name=&quot;page&quot;
  mode=&quot;out-in&quot;&gt;
  &lt;component
    :is=&quot;layout&quot;
    class=&quot;layout&quot;
    :class=&quot;[layoutClassnames]&quot;&gt;
    &lt;slot /&gt;
  &lt;/component&gt;
&lt;/transition&gt;
</code></pre><p>NightVue uses simple fade-out &#x2192; fade-in transition effect by default. Here is small SCSS snippet to work with:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.layout {
  &amp;.page-enter,
  &amp;.page-leave-to {
    .main {
      opacity: 0;
    }
  }
}

.main {
  transition: transition(opacity, lazy);
}
</code></pre><p>You can learn more about transition classnames <a href="https://vuejs.org/guide/built-ins/transition.html#transition">here</a> and create your own. Also check this <a href="https://learnvue.co/tutorials/vue-router-transitions">tutorial</a> with examples of Vue Router transitions.</p>
<h2 class="mume-header" id="grid">Grid</h2>

<p>NightVue grid system is built with flexbox and is fully responsive. It uses a series of containers, rows, and cols to align content. If you are not familiar with flex we recomend to read this <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background">article</a>.</p>
<p>There are 3 types of containers in NightVue:</p>
<ul>
<li><strong>boxed</strong> - on each <code>$breakpoint</code> container will have fixed <code>max-width</code> based on <code>$containers</code> map</li>
<li><strong>combined</strong> - container will have <code>max-width</code> of <em>last</em> value from <code>$containers</code> map, then will have 100%</li>
<li><strong>full</strong> - container will <em>always</em> have 100% width</li>
</ul>
<p>Base grid settings are stored in <a href="file:///C:\Boostraps\nightvue\src\styles\@core\_varaibles.scss">_varaibles.scss</a> file:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$num-cols:      12;
$gutter-width:  1rem;
$grid-type:     &apos;combined&apos;;

// Breakpoints are dublicated in &apos;store/modules/config.js&apos;
$breakpoints: (
  xs: 576px,
  sm: 768px,
  md: 992px,
  lg: 1200px,
  xl: 1400px
);

// Containers max-widths (if you are using &apos;boxed&apos; or &apos;combined&apos; type)
$containers: (
  xs: 540px,
  sm: 720px,
  md: 960px,
  lg: 1140px,
  xl: 1320px
);
</code></pre><p>Remember that <code>$breakpoints</code> are dublicated in Vuex store in <a href="file:///C:\Boostraps\nightvue\src\store\modules\config.js">config.js</a> file. NightVue watches for <a href="https://developer.mozilla.org/ru/docs/Web/API/Window/resize_event">window resize event</a> to update global Vuex store variables in real-time. It also constantly tracks current <a href="https://developer.mozilla.org/ru/docs/Web/API/Window/scrollY">scroll position</a>. You can read these values with computed properties <code>windowSize()</code>, <code>currentBreakpoint()</code> and <code>windowScroll()</code>.</p>
<ul>
<li><code>windowSize()</code> returns current window <code>width</code> and <code>height</code></li>
<li><code>currentBreakpoint()</code> returns current &quot;morphological&quot; breakpoint value based on window width. By defaults there might be: <strong>&apos;xs&apos;, &apos;sm&apos;, &apos;md&apos;, &apos;lg&apos;</strong> and <strong>&apos;xl&apos;</strong></li>
<li><code>windowScroll()</code> returns current scroll position</li>
</ul>
<pre data-role="codeBlock" data-info class="language-"><code>computed: {
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
</code></pre><h3 class="mume-header" id="html-grid-usage">HTML grid usage</h3>

<p>To apply column width in HTML you can use prepared classnames <code>col-${breakpoint}-${value}</code>:</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;col col-12 col-xs-10 col-sm-11 col-md-8 col-lg-6 col-xl-4&quot;&gt;
      width 12 by default
      width 10 on &apos;xs&apos; breakpoint
      width 11 on &apos;sm&apos; breakpoint
      width 8 on &apos;md&apos; breakpoint
      width 6 on &apos;lg&apos; breakpoint
      width 4 on &apos;xl&apos; breakpoint
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><p>If you need to apply offset to column use <code>offset-${breakpoint}-${value}</code> classnames like this:</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;col col-4 offset-xs-4 offset-sm-5 offset-md-8 offset-lg-0&quot;&gt;
      offset 4 columns on &apos;xs&apos; breakpoint
      offset 5 columns on &apos;sm&apos; breakpoint
      offset 8 columns on &apos;md&apos; breakpoint
      don&apos;t do any offset on &apos;lg&apos; breakpoint
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><p>If you need to apply order to column use <code>order-${breakpoint}-${value}</code> classnames like this:</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;col col-6 order-xs-1 order-md-5&quot;&gt;
      order 1 on &apos;xs&apos; breakpoint
      order 5 on &apos;md&apos; breakpoint
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><h3 class="mume-header" id="sass-grid-mixins">Sass grid mixins</h3>

<p>Although HTML method is very familiar to most developers, we highly recomend to use Sass mixins to build grid directly in SCSS files. This will make Vue templates noticeably cleaner and at the same time help keep all the styles in one place.</p>
<p>To convert any selector to container just apply <code>@container()</code> mixin to it:</p>
<pre data-role="codeBlock" data-info class="language-"><code>@include container();
@include container(&apos;full&apos;);
@include container($type: &apos;boxed&apos;, $gutter: 2rem);
</code></pre><p>From now on this selector will have same properties as <code>.container</code> class. Notice that you can define <code>$type</code> and <code>$gutter</code>.</p>
<p>Just like with container you can convert any selector to <code>.row</code>. Simply apply <code>@row()</code> mixin to it. Additionally you can pass <code>$gutter</code> value. It will apply alternate negative left and right margins:</p>
<pre data-role="codeBlock" data-info class="language-"><code>@include row();
@include row(0);
@include row($gutter: 2rem);
</code></pre><p>To apply column styles use <code>@col()</code> mixin. If you don&apos;t pass any params mixin will apply only <code>padding-left</code> and <code>padding right</code> based on <code>$gutter-width</code> varaible. To apply width properties you can pass number from 1 to 12 for each breakpoint:</p>
<pre data-role="codeBlock" data-info class="language-"><code>@include col();
@include col(12);
@include col(10, $md: 8);
@include col(10, $md: 8, $lg: 6, $xs: 12);
@include col(12, 10, 10, 8, 6, 9);
</code></pre><p>If you need to apply offset to column use <code>@offset()</code> mixin. It will add <code>margin-left</code> property to selector. You can pass number from 0 to 12 for each breakpoint. Note that if you don&apos;t pass any params, mixin won&apos;t apply any styles:</p>
<pre data-role="codeBlock" data-info class="language-"><code>@include offset(6);
@include offset(0, $sm: 4);
@include offset(10, $md: 8);
@include offset(10, $md: 8, $lg: 6, $xs: 12);
@include offset($sm: 1, $lg: 4, $xl: 0);
</code></pre><p>In case you need to apply order to column use <code>@order()</code> mixin. It will apply <code>order</code> property from 1 to 12 to selector:</p>
<pre data-role="codeBlock" data-info class="language-"><code>@include order(2);
@include order(1, $sm: 4);
@include order(1, $md: 2, $lg: 3, $xs: 12);
@include order($sm: 12, $lg: 4, $xl: 3);
</code></pre><h3 class="mume-header" id="media-queries">Media queries</h3>

<p>NightVue provides set of handy <a href="https://developer.mozilla.org/ru/docs/Web/CSS/Media_Queries/Using_media_queries">media queries</a> based on <code>$breakpoints</code>. You can use queries based on <code>min-width</code> and <code>max-width</code>:</p>
<pre data-role="codeBlock" data-info class="language-"><code>// min-width queries
$xs-up; // &gt; 576px
$sm-up; // &gt; 768px
$md-up; // &gt; 992px
$lg-up; // &gt; 1200px
$xl-up; // &gt; 1400px

// max-width queries
$xs-dw; // &lt; 578px
$sm-dw; // &lt; 767px
$md-dw; // &lt; 991px
$lg-dw; // &lt; 1199px
$xl-dw; // &lt; 1399px
</code></pre><p>Or queries between breakpoints:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$xs-sm; // 576px &#x2026; 767px
$sm-md; // 768px &#x2026; 991px
$md-lg; // 992px &#x2026; 1199px
$lg-xl; // 1200px &#x2026; 1399px
</code></pre><p>Here are some examples of usage:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.selector { @media #{$sm-up} { ... } } // styles applies above 768px
.selector { @media #{$md-up} { ... } } // styles applies above 992px

.selector { @media #{$xl-dw} { ... } } // styles applies below 1399px
.selector { @media #{$lg-dw} { ... } } // styles applies below 1199px

.selector { @media #{$sm-md} { ... } } // styles applies between 768px &#x2026; 991px
.selector { @media #{$md-lg} { ... } } // styles applies between 992px &#x2026; 1199px
</code></pre><h2 class="mume-header" id="typography">Typography</h2>

<p>NightVue stores all typography settings in Sass maps located in <a href="file:///C:\Boostraps\nightvue\src\styles\@core\_varaibles.scss">_varaibles.scss</a> file. In <a href="file:///C:\Boostraps\nightvue\src\styles\@core\typography.scss">typography.scss</a> file are described styles for headings, displays, body text, lists, and more.</p>
<h3 class="mume-header" id="font-import">Font import</h3>

<p>We recomend to start with importing fonts by using <code>@font-face</code> mixin. Make sure to store your fonts in <code>src/assets/fonts</code> folder. Each font must be saved in a folder with the same name as font itself. By default NightVue uses <a href="https://onest.md/en">Onest</a>. This is how we stored and imported it, use this as an example to add your own fonts:</p>
<pre data-role="codeBlock" data-info class="language-"><code>// Font files location:

&#x251C;&#x2500;&#x2500; src
&#x2502;   &#x251C;&#x2500;&#x2500; assets
&#x2502;       &#x251C;&#x2500;&#x2500; fonts
&#x2502;           &#x2514;&#x2500;&#x2500; Onest

// Import font using @font-face mixin:

@include font-face(&apos;Onest&apos;, &apos;OnestRegular&apos;, 400, normal, &apos;recent&apos;);
@include font-face(&apos;Onest&apos;, &apos;OnestMedium&apos;, 500, normal, &apos;recent&apos;);
@include font-face(&apos;Onest&apos;, &apos;OnestBold&apos;, 700, normal, &apos;recent&apos;);
@include font-face(&apos;Onest&apos;, &apos;OnestBlack&apos;, 900, normal, &apos;recent&apos;);
</code></pre><h3 class="mume-header" id="typography-sass-maps">Typography Sass maps</h3>

<p>These are Sass maps with typography settings we talked earlier. Each one is self explanatory, so take a look at them:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$font-families: (
  base:      &quot;Onest&quot;,
  headings:  &quot;Onest&quot;,
  displays:  &quot;Onest&quot;
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
</code></pre><p>Important part is settings for headings and displays:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$headings-fz: (
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
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>$displays-fz: (
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
</code></pre><p>Here you can manage styles for base body text, small and tagline styles:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$base-fz:      16px; // CRUCIAL VALUE! A lot of things depends on it. Be aware.
$base-lh:      map-get($line-heights, 50);
$base-fw:      map-get($font-weights, 400);

$small-fz:     0.875; // Ratio of text size for &lt;small&gt; tag and .small classname
$small-lh:     map-get($line-heights, 25);
$small-fw:     map-get($font-weights, 400);

$tagline-fz:   1.25; // Ratio of text size for .tagline classname
$tagline-lh:   map-get($line-heights, 50);
$tagline-fw:   map-get($font-weights, 500);
</code></pre><h3 class="mume-header" id="typography-utility-classnames">Typography utility classnames</h3>

<p>For each Sass map NightVue generates set of utility classnames to use in HTML:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.font-base     { font-family: &quot;Onest&quot; }
.font-headings { font-family: &quot;Onest&quot; }
.font-displays { font-family: &quot;Onest&quot; }

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

.text-normal   { white-space: normal }
.text-nowrap   { white-space: nowrap }
.text-pre      { white-space: pre }
.text-pre-line { white-space: pre-line }
.text-pre-wrap { white-space: pre-wrap }

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
</code></pre><p>Each classname supports breakpoints. You can use template <code>${property}-${breakpoint}-{$value}</code> to easy change text styles across different breakpoints. For example this <code>font-weight</code> will apply only on <code>sm</code> breakpoint:</p>
<pre data-role="codeBlock" data-info class="language-"><code>@media screen and (min-width: 768px) {
  .font-weight-sm-500 {
      font-weight: 500 ;
  }
}
</code></pre><p>To apply small styles to text you can add <code>.small</code> classname or wrap element in <code>&lt;small&gt;&lt;/small&gt;</code> tag. Another way is to use <code>@small()</code> mixin:</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;div class=&quot;small&quot;&gt;I am small text&lt;/div&gt;
&lt;small&gt;Me too!&lt;/small&gt;
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.selector { @include small() }
</code></pre><p>Apply tagline styles to text in similar way:</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;div class=&quot;tagline&quot;&gt;I am tagline text&lt;/div&gt;
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.selector { @include tagline() }
</code></pre><p>Often you need to truncate some long text and put dots at the end of the line. Use one of these helpers to do that:</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;div class=&quot;text-truncate&quot; style=&quot;width: 120px;&quot;&gt;
  I am very long text and I will be truncated at 120px width
&lt;/div&gt;

&lt;div class=&quot;text-truncate max-w-25&quot;&gt;
  I am very long text and I will be truncated at 25% width
&lt;/div&gt;

&lt;div class=&quot;text-dotted&quot;&gt;
  I will not be truncated, but will have &apos;&#x2026;&apos; at the end
&lt;/div&gt;
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.text-truncate {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-dotted {
  &amp;:after {
    content: &apos;&#x2026;&apos;
  }
}
</code></pre><p>Or use <code>@text-truncate($width)</code> mixin for that. It requires a single argument <code>$width</code> in <code>px</code> or <code>%</code>.</p>
<pre data-role="codeBlock" data-info class="language-"><code>.text { @include text-truncate(150px) }

// =&gt;
.text {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}
</code></pre><h2 class="mume-header" id="position">Position</h2>

<p>These utility classnames will help you to set and change position property of elements.</p>
<pre data-role="codeBlock" data-info class="language-"><code>.position-relative  { position: relative }
.position-absolute  { position: absolute }
.position-static    { position: static }
.position-fixed     { position: fixed }
.position-static    { position: static }
</code></pre><p>Each classname supports breakpoint, so you can easily change behaviour of element across different breakpoints. Use template <code>.position-${breakpoint}-{$value}</code> for that. For example, this element will be in <code>position: absolute</code> only on LG breakpoint:</p>
<pre data-role="codeBlock" data-info class="language-"><code>@media screen and (min-width: 1280px) {
  .position-lg-absolute {
     position: absolute
  }
}
</code></pre><h2 class="mume-header" id="display">Display</h2>

<p>Display system allows you to change display property and quickly manage the layout, alignment, and sizing of elements with a full suite of responsive flexbox utilities. If you are not familiar with flex we advice you to read this <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background">article</a> first. Utility classnames are generated in <a href="file:///C:\Boostraps\nightvue\src\styles\@core\helpers\_display.scss">_display.scss</a> file.</p>
<p>Here are listed possible variants of <code>display</code> property:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.d-none          { display: none }
.d-block         { display: block }
.d-inline        { display: inline }
.d-inline-block  { display: inline-block }
.d-flex          { display: flex }
.d-inline-flex   { display: inline-flex }
.d-table         { display: table }
.d-table-cell    { display: table-cell }
.d-table-row     { display: table-row }
</code></pre><p>NightVue generates classnames based on flexbox settings:</p>
<ul>
<li><code>flex-direction</code></li>
<li><code>justify-content</code></li>
<li><code>align-items</code></li>
<li><code>align-self</code></li>
<li><code>align-content</code></li>
<li><code>flex-wrap</code></li>
<li><code>flex-grow</code></li>
<li><code>flex-shrink</code></li>
</ul>
<p>Here are possible variants for each of those:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.flex-row             { flex-direction: row }
.flex-row-reverse     { flex-direction: row-reverse }
.flex-column          { flex-direction: column }
.flex-column-reverse  { flex-direction: column-reverse }
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.justify-content-start    { justify-content: start }
.justify-content-end      { justify-content: end }
.justify-content-center   { justify-content: center }
.justify-content-between  { justify-content: space-between }
.justify-content-around   { justify-content: space-around }
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.align-items-start     { align-items: start }
.align-items-end       { align-items: end }
.align-items-center    { align-items: center }
.align-items-baseline  { align-items: baseline }
.align-items-stretch   { align-items: stretch }
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.align-self-start     { align-self: start }
.align-self-end       { align-self: end }
.align-self-center    { align-self: center }
.align-self-baseline  { align-self: baseline }
.align-self-stretch   { align-self: stretch }
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.align-content-start     { align-content: start }
.align-content-end       { align-content: end }
.align-content-center    { align-content: center }
.align-content-baseline  { align-content: baseline }
.align-content-stretch   { align-content: stretch }
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.flex-wrap          { flex-wrap: wrap }
.flex-nowrap        { flex-wrap: nowrap }
.flex-wrap-reverse  { flex-wrap: wrap-reverse }
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.flex-grow-0    { flex-grow: 0 }
.flex-grow-1    { flex-grow: 1 }
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.flex-shrink-0  { flex-shrink: 0 }
.flex-shrink-1  { flex-shrink: 1 }
</code></pre><p>Each classname supports breakpoints, which can help you to easy change display and flex properties across different breakpoints. Use template <code>${property}-${breakpoint}-{$value}</code> for that. Take a look at some examples:</p>
<pre data-role="codeBlock" data-info class="language-"><code>@media screen and (min-width: 1400px) {
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
</code></pre><p>Often you need to align content right in the center of X and Y axes. In that case use classname <code>.flex-center</code> on parent element. It also supports breakpoints.</p>
<pre data-role="codeBlock" data-info class="language-"><code>.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.flex-xs-center { ... }  // styles applies above 576px
.flex-sm-center { ... }  // styles applies above 768px
.flex-md-center { ... }  // styles applies above 992px
.flex-lg-center { ... }  // styles applies above 1200px
.flex-xl-center { ... }  // styles applies above 1400px
</code></pre><h2 class="mume-header" id="spacing">Spacing</h2>

<p>NightVue generates responsive margin and padding utility classnames. The classnames are named using the format <code>{$property}-{$breakpoint}-{$side}-{$size}</code>.</p>
<p>Where <code>$property</code> is one of:</p>
<ul>
<li><code>m</code> - for classnames that set margin</li>
<li><code>p</code> - for classnames that set padding</li>
</ul>
<p>Where <code>$breakpoint</code> is one of:</p>
<ul>
<li><code>xs</code> - for classnames that set property on XS breakpoint &gt; 576px</li>
<li><code>sm</code> - for classnames that set property on SM breakpoint &gt; 768px</li>
<li><code>md</code> - for classnames that set property on MD breakpoint &gt; 992px</li>
<li><code>lg</code> - for classnames that set property on LG breakpoint &gt; 1200px</li>
<li><code>xl</code> - for classnames that set property on XL breakpoint &gt; 1400px</li>
<li>blank - if you want to set a margin and padding on all breakpoint</li>
</ul>
<p>Where <code>$side</code> is one of:</p>
<ul>
<li><code>t</code> - for classnames that set margin-top or padding-top</li>
<li><code>b</code> - for classnames that set margin-bottom or padding-bottom</li>
<li><code>l</code> - for classnames that set margin-left or padding-left</li>
<li><code>r</code> - for classnames that set margin-right or padding-right</li>
<li><code>x</code> - for classnames that set both *-left and *-right</li>
<li><code>y</code> - for classnames that set both *-top and *-bottom</li>
<li>blank - for classnames that set a margin or padding on all 4 sides of the element</li>
</ul>
<p>Where <code>$size</code> is one of spacing sizes defined in <a href="file:///C:\Boostraps\nightvue\src\styles\@core\_varaibles.scss">_varaibles.scss</a> file:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$spacers: (
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

$base-mg: map-get($spacers, 1); // Universal margin used for &lt;p&gt;, &lt;ul&gt; etc.
</code></pre><p>In case you prefer SCSS method to define spacers use <code>spacer()</code> function for that.</p>
<ul>
<li>If you pass one param it will return spacer value</li>
<li>If you pass two params it will return X and Y spacer values</li>
<li>If you pass four params it will return top, right, bottom and left spacer values</li>
</ul>
<pre data-role="codeBlock" data-info class="language-"><code>padding: spacer(2);
// =&gt; padding: 2rem;

padding-right: spacer(1);
// =&gt; padding-right: 1rem;

margin: spacer(3, auto);
// =&gt; margin: 3rem auto;

margin: spacer(50, auto, 2, 0);
// =&gt; margin: .5rem auto 2rem 0;
</code></pre><h2 class="mume-header" id="sizing">Sizing</h2>

<p>These utility classnames can be used to apply to selector these CSS styles: <code>width</code>, <code>max-width</code>, <code>min-width</code>, <code>height</code>, <code>max-height</code>, <code>min-height</code>. And units can be percentages <code>%</code> or relative to viewport <code>vw</code> and <code>vh</code>.</p>
<p>NightVue generates set of classnames which uses format <code>${property}-${breakpoint}-${size}</code>, where <code>${property}</code> is one of:</p>
<ul>
<li><code>w</code> - for <code>width</code> in <code>%</code></li>
<li><code>vw</code> - for <code>width</code> in <code>vw</code></li>
<li><code>max-w</code> - for <code>max-width</code> in <code>%</code></li>
<li><code>max-vw</code> - for <code>max-width</code> in <code>vw</code></li>
<li><code>min-w</code> - for <code>min-width</code> in <code>%</code></li>
<li><code>min-vw</code> - for <code>min-width</code> in <code>vw</code></li>
<li><code>h</code> - for <code>height</code> in <code>%</code></li>
<li><code>vh</code> - for <code>height</code> in <code>vw</code></li>
<li><code>max-h</code> - for <code>max-height</code> in <code>%</code></li>
<li><code>max-vh</code> - for <code>max-height</code> in <code>vw</code></li>
<li><code>min-h</code> - for <code>min-height</code> in <code>%</code></li>
<li><code>min-vh</code> - for <code>min-height</code> in <code>vw</code></li>
</ul>
<p>Where <code>$size</code> is one of sizing values defined in <a href="file:///C:\Boostraps\nightvue\src\styles\@core\_varaibles.scss">_varaibles.scss</a> file:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$sizings: (
  0:    0,
  25:   25,
  50:   50,
  75:   75,
  100:  100,
  auto: auto
);
</code></pre><p>Here are generated sizing classnames based on 50 size as an example:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.w-50      { width: 50% }
.vw-50     { width: 50vw }
.max-w-50  { max-width: 50% }
.max-vw-50 { max-width: 50vw }
.min-w-50  { min-width: 50% }
.min-vw-50 { min-width: 50vw }

.wh-50     { height: 50% }
.vh-50     { height: 50vw }
.max-h-50  { max-height: 50% }
.max-vh-50 { max-height: 50vw }
.min-h-50  { min-height: 50% }
.min-vh-50 { min-height: 50vw }
</code></pre><p>You can also apply <code>${breakpoints}</code> to dynamically change behavior on different screen sizes. For example, this <code>min-width</code> style will apply only below 768px (<strong>sm</strong> breakpoint):</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;div class=&quot;min-w-sm-50 min-w-75&quot;&gt;
  I have min-width 50% below 768px and 75% above
&lt;/div&gt;
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>@media screen and (min-width: 768px) {
  .min-w-sm-50 {
    min-width: 50%;
  }
}

.min-w-sm-75 {
  min-width: 75%;
}
</code></pre><p>Don&apos;t forget that you can also apply <code>auto</code> sizing to an element:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.w-auto     { width: auto }
.max-w-auto { max-width: auto }
.min-w-auto { min-width: auto }

.h-auto     { height: auto }
.max-h-auto { max-height: auto }
.min-h-auto { min-height: auto }
</code></pre><h2 class="mume-header" id="colors">Colors</h2>

<p>NightVue uses Sass maps to store project colors. This maps will help you quickly and easily loop over a list of colors and their hex values.</p>
<ul>
<li><code>$colors</code> map includes all available &quot;basic&quot; colors in project</li>
<li><code>$grays</code> map includes achromatic list (shades of gray between <code>#fff</code> and <code>#000</code>)</li>
<li><code>$theme-colors</code> map includes semantically named colors composed from maps above</li>
</ul>
<p>All this maps are described in <a href="file:///C:\Boostraps\nightvue\src\styles\@core\_varaibles.scss">_varaibles.scss</a> file:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$colors: (
  &apos;red&apos;:       #F44336,
  &apos;pink&apos;:      #EC407A,
  &apos;orange&apos;:    #FF9800,
  &apos;yellow&apos;:    #FFEE58,
  &apos;green&apos;:     #47b05b,
  &apos;brown&apos;:     #795548,
  &apos;teal&apos;:      #009688,
  &apos;cyan&apos;:      #00BCD4,
  &apos;blue&apos;:      #2196F3,
  &apos;purple&apos;:    #682CAB,
);

$grays: (
  &apos;white&apos;:   #ffffff,
  &apos;gray-1&apos;:  #eaeaea,
  &apos;gray-2&apos;:  #d5d5d5,
  &apos;gray-3&apos;:  #bfbfbf,
  &apos;gray-4&apos;:  #aaaaaa,
  &apos;gray-5&apos;:  #959595,
  &apos;gray-6&apos;:  #cccccc,
  &apos;gray-7&apos;:  #6a6a6a,
  &apos;gray-8&apos;:  #555555,
  &apos;gray-9&apos;:  #404040,
  &apos;gray-10&apos;: #2b2b2b,
  &apos;black&apos;:   #000000,
);

$theme-colors: (
  &apos;primary&apos;:    map-get($colors, &apos;purple&apos;),
  &apos;secondary&apos;:  map-get($colors, &apos;blue&apos;),
  &apos;success&apos;:    map-get($colors, &apos;green&apos;),
  &apos;info&apos;:       map-get($colors, &apos;teal&apos;),
  &apos;warning&apos;:    map-get($colors, &apos;yellow&apos;),
  &apos;danger&apos;:     map-get($colors, &apos;red&apos;),
  &apos;light&apos;:      map-get($grays, &apos;gray-2&apos;),
  &apos;dark&apos;:       map-get($grays, &apos;gray-8&apos;),
);
</code></pre><p>In map <code>$levels</code> you can define levels of lightening and saturation of each color in <code>$theme-colors</code> map. By default this map has 5 levels:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$levels: (
  1: 10%,
  2: 15%,
  3: 20%,
  4: 25%,
  5: 30%,
);
</code></pre><h3 class="mume-header" id="colors-html-usage">Colors HTML Usage</h3>

<p>NightVue automatically generates classnames from maps <code>$grays</code> and <code>$theme-colors</code> above. Each color have unique classname with <code>background-color</code>, <code>color</code> and <code>fill</code> styles and uses template <code>${property}-${color}</code>, where <code>${property}</code> is one of:</p>
<ul>
<li><code>bg</code> for background-color</li>
<li><code>clr</code> for text color</li>
<li><code>fill</code> for SVG fill color</li>
</ul>
<p>Here are some examples:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.bg-white   { background-color: #ffffff }
.clr-white  { color: #ffffff }
.fill-white { fill: #ffffff }

.bg-gray-1   { background-color: #eaeaea }
.clr-gray-1  { color: #eaeaea }
.fill-gray-1 { fill: #eaeaea }

.bg-primary   { background-color: #682CAB }
.clr-primary  { color: #682CAB }
.fill-primary { fill: #682CAB }
</code></pre><p>Additionally for each color NightVue generates classnames with brightened, darkened, saturated and desaturated color variations from <code>$theme-colors</code> map. We are using <a href="https://sass-lang.com/documentation/modules/color#mix">mix()</a> and <a href="https://sass-lang.com/documentation/modules/color#scale">scale()</a> functions for that. They help to create smooth and steady color pallete.</p>
<p>Generated classnames uses pattern <code>${property}-${color}-${style}-${level}</code>. Let&apos;s take a look at color variations of <code>primary</code> color:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.clr-primary-light-1 { color: #7741b3 }
.clr-primary-light-2 { color: #7f4cb8 }
.clr-primary-light-3 { color: #8656bc }
.clr-primary-light-4 { color: #8e61c0 }
.clr-primary-light-5 { color: #956bc4 }

.clr-primary-dark-1 { color: #5e289a }
.clr-primary-dark-2 { color: #582591 }
.clr-primary-dark-3 { color: #532389 }
.clr-primary-dark-4 { color: #4e2180 }
.clr-primary-dark-5 { color: #491f78 }
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.clr-primary-sat-1 { color: #6828af }
.clr-primary-sat-2 { color: #6825b2 }
.clr-primary-sat-3 { color: #6823b4 }
.clr-primary-sat-4 { color: #6721b6 }
.clr-primary-sat-5 { color: #671fb8 }

.clr-primary-desat-1 { color: #6832a5 }
.clr-primary-desat-2 { color: #6936a1 }
.clr-primary-desat-3 { color: #69399e }
.clr-primary-desat-4 { color: #693c9b }
.clr-primary-desat-5 { color: #693f98 }
</code></pre><p>Beside that you can use <code>rgba</code> versions of <code>$theme-colors</code>. For each <code>opacity</code> value from <code>$opacities</code> map NightVue generates set of transparent colors:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$opacities: (
  0: 0%,
  25: 25%,
  50: 50%,
  75: 75%,
  100: 100%
);
</code></pre><p>These classnames uses pattern <code>${property}-${color}-opacity-${opacity}</code>. Take a look at <code>rgba</code> variants of <code>success</code> color as example:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.bg-success-opacity-100 { rgba(71, 176, 91, 1) }
.bg-success-opacity-75  { rgba(71, 176, 91, 0.75) }
.bg-success-opacity-50  { rgba(71, 176, 91, 0.5) }
.bg-success-opacity-25  { rgba(71, 176, 91, 0.25) }
.bg-success-opacity-0   { rgba(71, 176, 91, 0) }
</code></pre><h3 class="mume-header" id="color-sass-functions">Color Sass functions</h3>

<p>If you need to apply colors in SCSS files you can use <code>color($name, $style, $level)</code> function. It returns hex value of color by its <code>$name</code>. Additionally you can pass optional arguments <code>$style</code> and <code>$level</code> to determine level of brightness or saturation. Here are some examples of usage in SCSS:</p>
<pre data-role="codeBlock" data-info class="language-"><code>box-shadow: 1px 1px 4px color(&apos;primary&apos;);
// =&gt; box-shadow: 1px 1px 4px #682CAB;

border-color: color(&apos;secondary&apos;, light, 2);
// =&gt; border-color: #42a6f5;

border-color: color(&apos;success&apos;, dark, 4);
// =&gt; border-color: #358444;

color: color(&apos;danger&apos;, sat, 2);
// =&gt; color: #f64234;

background-color: color(&apos;warning&apos;, desat, 4);
// =&gt; background-color: #eadd6d;

color: color(&apos;white&apos;);
// =&gt; color: #ffffff;

fill: color(&apos;gray-4&apos;);
// =&gt; fill: #aaaaaa;
</code></pre><h2 class="mume-header" id="gradients">Gradients</h2>

<p>Working with <code>linear-gradient</code> may be akward and cluncy sometimes. It&apos;s not easy to remember all settings and features of this CSS function. NightVue provides some tools to easy manage group of gradients and create new ones with ease. Read <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient">MDN Documentation</a> describing <code>linear-gradients</code> if you are not quite familiar with them.</p>
<p>First of all NightVue uses Sass map <code>$gradients</code> to store all gradients used in project. This map is located in <a href="file:///C:\Boostraps\nightvue\src\styles\@core\_varaibles.scss">_varaibles.scss</a> file. By default there are already 4 gradients as examples:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$gradients: (
  primary_success: (
    direction: 145deg,
    fallback: map-get($theme-colors, &apos;primary&apos;),
    list: (
      lighten(map-get($theme-colors, &apos;primary&apos;), map-get($levels, 2)) 10%,
      lighten(map-get($theme-colors, &apos;success&apos;), map-get($levels, 1)) 80%
    )
  ),

  primary-light-3_primary: (
    direction: to bottom,
    fallback: map-get($theme-colors, &apos;primary&apos;),
    list: (
      map-get($theme-colors, &apos;primary&apos;),
      lighten(map-get($theme-colors, &apos;primary&apos;), map-get($levels, 3))
    )
  ),

  red_yellow_blue: (
    direction: to right,
    fallback: map-get($colors, &apos;red&apos;),
    list: (
      map-get($colors, &apos;red&apos;),
      map-get($colors, &apos;yellow&apos;),
      map-get($colors, &apos;blue&apos;)
    )
  ),

  info_transparent: (
    direction: 90deg,
    fallback: map-get($theme-colors, &apos;info&apos;),
    list: (
      map-get($theme-colors, &apos;info&apos;),
      transparent
    )
  ),
);
</code></pre><p>We recomend to name gradients in such pattern: <code>&lt;color1&gt;_&lt;color2&gt;_&lt;color3&gt;</code>. It will help you to easy understand what colors are used and what is direction of gradient. Here are some examples: <code>info_success</code>, <code>primary_danger</code>, <code>light_dark</code>, <code>transparent_black</code>, <code>red_yellow_blue</code>.</p>
<p>If gradient uses modified color you may name it like this: <code>&lt;color-${style}-${value}&gt;_&lt;color-${style}-${value}&gt;</code>. For example, gradient named <code>primary-light-3_primary</code> indicates that it uses lightened by 3 levels <code>$primary</code> and base <code>$primary</code> colors and shows the direction of it. Pretty self explanatory, right?</p>
<p>Now let&apos;s take a look at gradient itself. Each one is written by template:</p>
<pre data-role="codeBlock" data-info class="language-"><code>gradientName: (
  direction: { String },
  fallback: { String },
  list: ( { String }, { String }, { String }... )
)
</code></pre><p>Where <code>direction</code> is obviously direction of <code>linear-gradient</code>. It may be keyword:</p>
<ul>
<li><code>to top</code></li>
<li><code>to top right</code></li>
<li><code>to right</code></li>
<li><code>to bottom right</code></li>
<li><code>to bottom</code></li>
<li><code>to bottom left</code></li>
<li><code>to left</code>,</li>
<li><code>to left top</code></li>
</ul>
<p>or any angle value in <code>deg</code>, <code>rad</code>, <code>grad</code> or <code>turn</code>.</p>
<p>Parameter <code>fallback</code> is color by default for unsupported browsers. To know which browsers don&apos;t support <code>linear-gradient</code> visit <a href="https://caniuse.com/?search=linear-gradient">caniuse.com</a> website.</p>
<p>And finally most inetersting part is <code>list</code> parameter. This is basicly a list of colors in gradient, separated by a comma. One way to fill it is by using <code>map-get()</code> function like we did in examples above.</p>
<h3 class="mume-header" id="gradients-html-usage">Gradients HTML usage</h3>

<p>For each gradient in <code>$gradients</code> map NightVue generates unique classname with template <code>.gradient-${gradient}</code>:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.gradient-primary_success {
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
</code></pre><h3 class="mume-header" id="gradient-sass-mixin">Gradient Sass mixin</h3>

<p>In case you need to apply gradient in SCSS file insted of HTML use <code>@linear-gradient($name)</code> mixin. It requires only name of gradient from <code>$gradients</code> map.</p>
<pre data-role="codeBlock" data-info class="language-"><code>.selector {
  @include linear-gradient(&apos;primary_success&apos;);
}

// =&gt;
.selector {
  background: #682cab;
  background: linear-gradient(145deg, #8e51d2 10%, #68c279 80%);
}
</code></pre><h2 class="mume-header" id="opacity">Opacity</h2>

<p>For each opacity value from <code>$opacities</code> map NightVue generates utility classnames with pattern <code>.opacity-${value}</code>:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$opacities: (
  0: 0%,
  25: 25%,
  50: 50%,
  75: 75%,
  100: 100%
);
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>.opacity-0   { opacity: 0 }
.opacity-25  { opacity: 0.25 }
.opacity-50  { opacity: 0.5 }
.opacity-75  { opacity: 0.75 }
.opacity-100 { opacity: 1 }
</code></pre><p>These classnames supports <code>$breakpoints</code> so you can easily manage <code>opacity</code> level on each specific breakpoint. Use template <code>.opacity-${breakpoint}-{$value}</code> to do that. For example this <code>opacity</code> will apply only on <code>lg</code> breakpoint:</p>
<pre data-role="codeBlock" data-info class="language-"><code>@media screen and (min-width: 1280px) {
  .opacity-lg-50 {
    opacity: 0.5
  }
}
</code></pre><p>In case you need to apply <code>opacity</code> in SCSS use <code>opacity($level)</code> function:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.selector { opacity: opacity(0); }
// =&gt; .selector { opacity: 0; }

.selector { opacity: opacity(25); }
// =&gt; .selector { opacity: 0.25; }

.selector { opacity: opacity(50); }
// =&gt; .selector { opacity: 0.5; }

.selector { opacity: opacity(75); }
// =&gt; .selector { opacity: 0.75; }

.selector { opacity: opacity(100); }
// =&gt; .selector { opacity: 1; }

</code></pre><h2 class="mume-header" id="icons">Icons</h2>

<p>To serve SVG icons NightVue uses <a href="https://github.com/JetBrains/svg-sprite-loader">SVG Sprite Loader</a>.</p>
<p>Store your icons in <code>src/assets/icons/library</code> folder. We already included there 3 icons for example. There are many icon packs on internet, just pick whatever you like most and import icons in this folder.</p>
<pre data-role="codeBlock" data-info class="language-"><code>&#x251C;&#x2500;&#x2500; src
&#x2502;   &#x251C;&#x2500;&#x2500; assets
&#x2502;       &#x251C;&#x2500;&#x2500; icons
&#x2502;           &#x251C;&#x2500;&#x2500; library
&#x2502;               face.svg
&#x2502;               lightbulb.svg
&#x2502;               link.svg
&#x2502;            index.js
</code></pre><p>Plugin automatically creates and injects in <code>&lt;body&gt;</code> client-side SVG sprite containing each icon from the folder above. Keep in mind that each icon will have an id based on its name. To include icon in HTML use <code>&lt;SvgIcon&gt;</code> component. It accepts properties <code>icon</code> and <code>size</code>.</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;svg-icon icon=&quot;face&quot; /&gt;
</code></pre><p>To set icon size define its <code>size</code> property. All icon sizes are stored in <code>$icons</code> map located in <a href="file:///C:\Boostraps\nightvue\src\styles\@core\_varaibles.scss">_varaibles.scss</a> file:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$icon-sizes: (18, 24, 36, 48, 64);
</code></pre><pre data-role="codeBlock" data-info class="language-"><code>&lt;svg-icon icon=&quot;face&quot; size=&quot;48&quot; /&gt;
</code></pre><p>Any other classname can be applied as usual:</p>
<pre data-role="codeBlock" data-info class="language-"><code>&lt;svg-icon
  icon=&quot;face&quot;
  size=&quot;48&quot;
  class=&quot;m-2 fill-primary&quot; /&gt;
</code></pre><p><code>&lt;SvgIcon&gt;</code> component and plugin itself renders HTML in a widely used format <code>&lt;svg&gt;&lt;use xlink:href=&quot;#id&quot;&gt;&lt;/use&gt;&lt;/svg&gt;</code>. If you are not quite familiar with this feature read <a href="https://developer.mozilla.org/ru/docs/Web/SVG/Element/use">MDN Docs</a>.</p>
<p>In case you prefer to set icon size in SCSS file, use <code>@icon-size</code> mixin. This mixin apply specific <code>width</code>, <code>height</code> and <code>background-size</code> to an element. If you apply this mixin to selector you can be pretty sure it will have passed dimensions no matter what and will not be compressed or stretched:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.icon-name { @include icon-size(24); }

// =&gt;
.icon-name {
  width: 24px !important;
  max-width: 24px !important;
  min-width: 24px !important;
  height: 24px !important;
  max-height: 24px !important;
  min-height: 24px !important;
  background-size: 24px 24px !important;
}
</code></pre><p>We <em>recomend</em> to use predefined icon sizes from <code>$icons</code> map, but here you can pass whatever dimensions you want:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.icon-name { @include icon-size(18, 34); }

// =&gt;
.icon-name {
  width: 18px !important;
  max-width: 18px !important;
  min-width: 18px !important;
  height: 34px !important;
  max-height: 34px !important;
  min-height: 34px !important;
  background-size: 18px 34px !important;
}
</code></pre><h2 class="mume-header" id="radius">Radius</h2>

<p>[ &#x1F6A7; <em>this part of the documentation is in progress</em> ]</p>
<h2 class="mume-header" id="shadows">Shadows</h2>

<p>[ &#x1F6A7; <em>this part of the documentation is in progress</em> ]</p>
<h2 class="mume-header" id="rotations">Rotations</h2>

<p>[ &#x1F6A7; <em>this part of the documentation is in progress</em> ]</p>
<h2 class="mume-header" id="z-index">Z-index</h2>

<p>Z-index property has a huge role in how web interface works. To position elements in Z-axis NightVue provides list of utility classnames. Taking into account that each project is unuque and NightVue don&apos;t have any pre-build components we decided to make an unversal list from -1 to 12. It&apos;s quite possible that this solution won&apos;t work for you, in that case use any other you like more.</p>
<p>Utility classnames uses format <code>.z-plus-${value}</code> for positive values and <code>.z-minus-${value}</code> for negatives. You can also determine start and end values in <a href="file:///C:\Boostraps\nightvue\src\styles\@core\helpers\_zindex.scss">_zindex.scss</a> file:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$zindex-start: -1;
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
</code></pre><p>Each of these classnames supports <code>$breakpoints</code> so you can easily manage <code>z-index</code> value on each specific breakpoint:</p>
<pre data-role="codeBlock" data-info class="language-"><code>@media screen and (min-width: 1280px) {
  .z-lg-plus-12 {
     z-index: 12
  }
}
</code></pre><h2 class="mume-header" id="transitions">Transitions</h2>

<p>NightVue provides set of most usable transition timings in web. They are stored in <code>$transition-timings</code> map located in <a href="file:///C:\Boostraps\nightvue\src\styles\@core\_varaibles.scss">_varaibles.scss</a> file:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$transition-timings: (
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
</code></pre><ul>
<li>First group are &quot;standard&quot; easing functions, that are already well described in <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#easing_functions">MDN Docs</a></li>
<li>Second group are easings from <a href="https://material.io/design/motion/speed.html#easing">Material Design 2 guidelines</a>. They have some similarities with previous group, although they are developed to be more &quot;eye catchy&quot; and each one serves some purpose</li>
<li>Third group is where you can add your own easings. We added there &quot;sharp&quot; easing. This curve may be used for objects that may return to the screen at any time in fast way. Try <a href="https://cubic-bezier.com/">cubic-bezier.com</a> - it&apos;s a cool tool to create your own easings</li>
</ul>
<p>Besides timing functions there is set of transition speed:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$transition-speed: (
  shortest: .15s,
  shorter:  .2s,
  short:    .25s,
  base:     .3s,
  slow:     .375s,
  slower:   .5s,
  lazy:     .75s,
);
</code></pre><p>NightVue generates classnames based on this maps to use them in HTML:</p>
<pre data-role="codeBlock" data-info class="language-"><code>.timing-linear      { transition-timing-function: cubic-bezier(0, 0, 1, 1) }
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
</code></pre><p>But we recomend to apply transitions in SCSS files. To do that use <code>transition()</code> and <code>complex-transition()</code> functions.</p>
<p>Function <code>transition()</code> returns transition based on <code>$property</code>, <code>$speed</code>, <code>$timings</code> and <code>$delay</code> params. Only first one param is required, others are by default <code>base =&gt; .3s</code>, <code>ease</code> and <code>0s</code>. Function searches params in <code>$transition-speed</code> and <code>$transition-timings</code> maps, but you could pass whatever you want. We advice you to pass predefined <code>$speed</code> and <code>$timing</code> values tho. Here are some examples of usage:</p>
<pre data-role="codeBlock" data-info class="language-"><code>transition: transition(transform);
// =&gt; transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

transition: transition(opacity, short, ease-in);
// =&gt; transition: opacity 0.25s cubic-bezier(0.42, 0, 1, 1);

transition: transition(background-color, slow, emphasized);
// =&gt; transition: background-color 0.375s cubic-bezier(0, 0, 0.2, 1);

transition: transition(color, lazy, linear, 1s);
// =&gt; transition: color 0.75s cubic-bezier(0, 0, 1, 1) 1s;

transition: transition(box-shadow, 2s, cubic-bezier(.08,1.04,.82,-0.73));
// =&gt; transition: box-shadow 2s cubic-bezier(.08,1.04,.82,-0.73);
</code></pre><p>If you need to apply many transitions at once we recomend to use <code>complex-transition()</code> function. It does basically the same as previous one, but you can write many transitions in clear and fancy way like this:</p>
<pre data-role="codeBlock" data-info class="language-"><code>transition: complex-transition(
  transition(opacity, short, ease-in),
  transition(background-color, slow, emphasized),
  transition(color, lazy, linear, 1s),
);

// =&gt; transition: opacity 0.25s cubic-bezier(0.42, 0, 1, 1), background-color 0.375s cubic-bezier(0, 0, 0.2, 1), color 0.75s cubic-bezier(0, 0, 1, 1) 1s;
</code></pre><h2 class="mume-header" id="utilities">Utilities</h2>

<p>In this section are collected small helpers which didn&apos;t find a place in the sections listed above. These classnames are described in <a href="file:///C:\Boostraps\nightvue\src\styles\@core\helpers\_utilities.scss">_utilities.scss</a> file:</p>
<pre data-role="codeBlock" data-info class="language-"><code>$cursors: pointer, help, wait, move, not-allowed, context-menu, alias;

@each $cursor in $cursors {
  .cursor-#{$cursor} { cursor: $cursor }
}

.no-select   { user-select: none }
.no-overflow { overflow: hidden }
.no-events   { pointer-events: none }
.visible     { visibility: visible }
.invisible   { visibility: hidden }
</code></pre>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.katex {
    text-rendering: auto;
    font: normal 1.21em Onest, Times New Roman, serif;
    line-height: 1.2;
    text-indent: 0;
}
.katex * {
    -ms-high-contrast-adjust: none !important;
    border-color: currentColor;
}
.katex .katex-version:after {
    content: "0.15.3";
}
.katex .katex-mathml {
    clip: rect(1px, 1px, 1px, 1px);
    border: 0;
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
.katex .katex-html > .newline {
    display: block;
}
.katex .base {
    position: relative;
    white-space: nowrap;
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
}
.katex .base,
.katex .strut {
    display: inline-block;
}
.katex .textbf {
    font-weight: 700;
}
.katex .textit {
    font-style: italic;
}
.katex .textrm {
    font-family: Onest;
}
.katex .textsf {
    font-family: KaTeX_SansSerif;
}
.katex .texttt {
    font-family: KaTeX_Typewriter;
}
.katex .mathnormal {
    font-family: KaTeX_Math;
    font-style: italic;
}
.katex .mathit {
    font-family: Onest;
    font-style: italic;
}
.katex .mathrm {
    font-style: normal;
}
.katex .mathbf {
    font-family: Onest;
    font-weight: 700;
}
.katex .boldsymbol {
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 700;
}
.katex .amsrm,
.katex .mathbb,
.katex .textbb {
    font-family: KaTeX_AMS;
}
.katex .mathcal {
    font-family: KaTeX_Caligraphic;
}
.katex .mathfrak,
.katex .textfrak {
    font-family: KaTeX_Fraktur;
}
.katex .mathtt {
    font-family: KaTeX_Typewriter;
}
.katex .mathscr,
.katex .textscr {
    font-family: KaTeX_Script;
}
.katex .mathsf,
.katex .textsf {
    font-family: KaTeX_SansSerif;
}
.katex .mathboldsf,
.katex .textboldsf {
    font-family: KaTeX_SansSerif;
    font-weight: 700;
}
.katex .mathitsf,
.katex .textitsf {
    font-family: KaTeX_SansSerif;
    font-style: italic;
}
.katex .mainrm {
    font-family: Onest;
    font-style: normal;
}
.katex .vlist-t {
    border-collapse: collapse;
    display: inline-table;
    table-layout: fixed;
}
.katex .vlist-r {
    display: table-row;
}
.katex .vlist {
    display: table-cell;
    position: relative;
    vertical-align: bottom;
}
.katex .vlist > span {
    display: block;
    height: 0;
    position: relative;
}
.katex .vlist > span > span {
    display: inline-block;
}
.katex .vlist > span > .pstrut {
    overflow: hidden;
    width: 0;
}
.katex .vlist-t2 {
    margin-right: -2px;
}
.katex .vlist-s {
    display: table-cell;
    font-size: 1px;
    min-width: 2px;
    vertical-align: bottom;
    width: 2px;
}
.katex .vbox {
    align-items: baseline;
    display: inline-flex;
    flex-direction: column;
}
.katex .hbox {
    width: 100%;
}
.katex .hbox,
.katex .thinbox {
    display: inline-flex;
    flex-direction: row;
}
.katex .thinbox {
    max-width: 0;
    width: 0;
}
.katex .msupsub {
    text-align: left;
}
.katex .mfrac > span > span {
    text-align: center;
}
.katex .mfrac .frac-line {
    border-bottom-style: solid;
    display: inline-block;
    width: 100%;
}
.katex .hdashline,
.katex .hline,
.katex .mfrac .frac-line,
.katex .overline .overline-line,
.katex .rule,
.katex .underline .underline-line {
    min-height: 1px;
}
.katex .mspace {
    display: inline-block;
}
.katex .clap,
.katex .llap,
.katex .rlap {
    position: relative;
    width: 0;
}
.katex .clap > .inner,
.katex .llap > .inner,
.katex .rlap > .inner {
    position: absolute;
}
.katex .clap > .fix,
.katex .llap > .fix,
.katex .rlap > .fix {
    display: inline-block;
}
.katex .llap > .inner {
    right: 0;
}
.katex .clap > .inner,
.katex .rlap > .inner {
    left: 0;
}
.katex .clap > .inner > span {
    margin-left: -50%;
    margin-right: 50%;
}
.katex .rule {
    border: 0 solid;
    display: inline-block;
    position: relative;
}
.katex .hline,
.katex .overline .overline-line,
.katex .underline .underline-line {
    border-bottom-style: solid;
    display: inline-block;
    width: 100%;
}
.katex .hdashline {
    border-bottom-style: dashed;
    display: inline-block;
    width: 100%;
}
.katex .sqrt > .root {
    margin-left: 0.27777778em;
    margin-right: -0.55555556em;
}
.katex .fontsize-ensurer.reset-size1.size1,
.katex .sizing.reset-size1.size1 {
    font-size: 1em;
}
.katex .fontsize-ensurer.reset-size1.size2,
.katex .sizing.reset-size1.size2 {
    font-size: 1.2em;
}
.katex .fontsize-ensurer.reset-size1.size3,
.katex .sizing.reset-size1.size3 {
    font-size: 1.4em;
}
.katex .fontsize-ensurer.reset-size1.size4,
.katex .sizing.reset-size1.size4 {
    font-size: 1.6em;
}
.katex .fontsize-ensurer.reset-size1.size5,
.katex .sizing.reset-size1.size5 {
    font-size: 1.8em;
}
.katex .fontsize-ensurer.reset-size1.size6,
.katex .sizing.reset-size1.size6 {
    font-size: 2em;
}
.katex .fontsize-ensurer.reset-size1.size7,
.katex .sizing.reset-size1.size7 {
    font-size: 2.4em;
}
.katex .fontsize-ensurer.reset-size1.size8,
.katex .sizing.reset-size1.size8 {
    font-size: 2.88em;
}
.katex .fontsize-ensurer.reset-size1.size9,
.katex .sizing.reset-size1.size9 {
    font-size: 3.456em;
}
.katex .fontsize-ensurer.reset-size1.size10,
.katex .sizing.reset-size1.size10 {
    font-size: 4.148em;
}
.katex .fontsize-ensurer.reset-size1.size11,
.katex .sizing.reset-size1.size11 {
    font-size: 4.976em;
}
.katex .fontsize-ensurer.reset-size2.size1,
.katex .sizing.reset-size2.size1 {
    font-size: 0.83333333em;
}
.katex .fontsize-ensurer.reset-size2.size2,
.katex .sizing.reset-size2.size2 {
    font-size: 1em;
}
.katex .fontsize-ensurer.reset-size2.size3,
.katex .sizing.reset-size2.size3 {
    font-size: 1.16666667em;
}
.katex .fontsize-ensurer.reset-size2.size4,
.katex .sizing.reset-size2.size4 {
    font-size: 1.33333333em;
}
.katex .fontsize-ensurer.reset-size2.size5,
.katex .sizing.reset-size2.size5 {
    font-size: 1.5em;
}
.katex .fontsize-ensurer.reset-size2.size6,
.katex .sizing.reset-size2.size6 {
    font-size: 1.66666667em;
}
.katex .fontsize-ensurer.reset-size2.size7,
.katex .sizing.reset-size2.size7 {
    font-size: 2em;
}
.katex .fontsize-ensurer.reset-size2.size8,
.katex .sizing.reset-size2.size8 {
    font-size: 2.4em;
}
.katex .fontsize-ensurer.reset-size2.size9,
.katex .sizing.reset-size2.size9 {
    font-size: 2.88em;
}
.katex .fontsize-ensurer.reset-size2.size10,
.katex .sizing.reset-size2.size10 {
    font-size: 3.45666667em;
}
.katex .fontsize-ensurer.reset-size2.size11,
.katex .sizing.reset-size2.size11 {
    font-size: 4.14666667em;
}
.katex .fontsize-ensurer.reset-size3.size1,
.katex .sizing.reset-size3.size1 {
    font-size: 0.71428571em;
}
.katex .fontsize-ensurer.reset-size3.size2,
.katex .sizing.reset-size3.size2 {
    font-size: 0.85714286em;
}
.katex .fontsize-ensurer.reset-size3.size3,
.katex .sizing.reset-size3.size3 {
    font-size: 1em;
}
.katex .fontsize-ensurer.reset-size3.size4,
.katex .sizing.reset-size3.size4 {
    font-size: 1.14285714em;
}
.katex .fontsize-ensurer.reset-size3.size5,
.katex .sizing.reset-size3.size5 {
    font-size: 1.28571429em;
}
.katex .fontsize-ensurer.reset-size3.size6,
.katex .sizing.reset-size3.size6 {
    font-size: 1.42857143em;
}
.katex .fontsize-ensurer.reset-size3.size7,
.katex .sizing.reset-size3.size7 {
    font-size: 1.71428571em;
}
.katex .fontsize-ensurer.reset-size3.size8,
.katex .sizing.reset-size3.size8 {
    font-size: 2.05714286em;
}
.katex .fontsize-ensurer.reset-size3.size9,
.katex .sizing.reset-size3.size9 {
    font-size: 2.46857143em;
}
.katex .fontsize-ensurer.reset-size3.size10,
.katex .sizing.reset-size3.size10 {
    font-size: 2.96285714em;
}
.katex .fontsize-ensurer.reset-size3.size11,
.katex .sizing.reset-size3.size11 {
    font-size: 3.55428571em;
}
.katex .fontsize-ensurer.reset-size4.size1,
.katex .sizing.reset-size4.size1 {
    font-size: 0.625em;
}
.katex .fontsize-ensurer.reset-size4.size2,
.katex .sizing.reset-size4.size2 {
    font-size: 0.75em;
}
.katex .fontsize-ensurer.reset-size4.size3,
.katex .sizing.reset-size4.size3 {
    font-size: 0.875em;
}
.katex .fontsize-ensurer.reset-size4.size4,
.katex .sizing.reset-size4.size4 {
    font-size: 1em;
}
.katex .fontsize-ensurer.reset-size4.size5,
.katex .sizing.reset-size4.size5 {
    font-size: 1.125em;
}
.katex .fontsize-ensurer.reset-size4.size6,
.katex .sizing.reset-size4.size6 {
    font-size: 1.25em;
}
.katex .fontsize-ensurer.reset-size4.size7,
.katex .sizing.reset-size4.size7 {
    font-size: 1.5em;
}
.katex .fontsize-ensurer.reset-size4.size8,
.katex .sizing.reset-size4.size8 {
    font-size: 1.8em;
}
.katex .fontsize-ensurer.reset-size4.size9,
.katex .sizing.reset-size4.size9 {
    font-size: 2.16em;
}
.katex .fontsize-ensurer.reset-size4.size10,
.katex .sizing.reset-size4.size10 {
    font-size: 2.5925em;
}
.katex .fontsize-ensurer.reset-size4.size11,
.katex .sizing.reset-size4.size11 {
    font-size: 3.11em;
}
.katex .fontsize-ensurer.reset-size5.size1,
.katex .sizing.reset-size5.size1 {
    font-size: 0.55555556em;
}
.katex .fontsize-ensurer.reset-size5.size2,
.katex .sizing.reset-size5.size2 {
    font-size: 0.66666667em;
}
.katex .fontsize-ensurer.reset-size5.size3,
.katex .sizing.reset-size5.size3 {
    font-size: 0.77777778em;
}
.katex .fontsize-ensurer.reset-size5.size4,
.katex .sizing.reset-size5.size4 {
    font-size: 0.88888889em;
}
.katex .fontsize-ensurer.reset-size5.size5,
.katex .sizing.reset-size5.size5 {
    font-size: 1em;
}
.katex .fontsize-ensurer.reset-size5.size6,
.katex .sizing.reset-size5.size6 {
    font-size: 1.11111111em;
}
.katex .fontsize-ensurer.reset-size5.size7,
.katex .sizing.reset-size5.size7 {
    font-size: 1.33333333em;
}
.katex .fontsize-ensurer.reset-size5.size8,
.katex .sizing.reset-size5.size8 {
    font-size: 1.6em;
}
.katex .fontsize-ensurer.reset-size5.size9,
.katex .sizing.reset-size5.size9 {
    font-size: 1.92em;
}
.katex .fontsize-ensurer.reset-size5.size10,
.katex .sizing.reset-size5.size10 {
    font-size: 2.30444444em;
}
.katex .fontsize-ensurer.reset-size5.size11,
.katex .sizing.reset-size5.size11 {
    font-size: 2.76444444em;
}
.katex .fontsize-ensurer.reset-size6.size1,
.katex .sizing.reset-size6.size1 {
    font-size: 0.5em;
}
.katex .fontsize-ensurer.reset-size6.size2,
.katex .sizing.reset-size6.size2 {
    font-size: 0.6em;
}
.katex .fontsize-ensurer.reset-size6.size3,
.katex .sizing.reset-size6.size3 {
    font-size: 0.7em;
}
.katex .fontsize-ensurer.reset-size6.size4,
.katex .sizing.reset-size6.size4 {
    font-size: 0.8em;
}
.katex .fontsize-ensurer.reset-size6.size5,
.katex .sizing.reset-size6.size5 {
    font-size: 0.9em;
}
.katex .fontsize-ensurer.reset-size6.size6,
.katex .sizing.reset-size6.size6 {
    font-size: 1em;
}
.katex .fontsize-ensurer.reset-size6.size7,
.katex .sizing.reset-size6.size7 {
    font-size: 1.2em;
}
.katex .fontsize-ensurer.reset-size6.size8,
.katex .sizing.reset-size6.size8 {
    font-size: 1.44em;
}
.katex .fontsize-ensurer.reset-size6.size9,
.katex .sizing.reset-size6.size9 {
    font-size: 1.728em;
}
.katex .fontsize-ensurer.reset-size6.size10,
.katex .sizing.reset-size6.size10 {
    font-size: 2.074em;
}
.katex .fontsize-ensurer.reset-size6.size11,
.katex .sizing.reset-size6.size11 {
    font-size: 2.488em;
}
.katex .fontsize-ensurer.reset-size7.size1,
.katex .sizing.reset-size7.size1 {
    font-size: 0.41666667em;
}
.katex .fontsize-ensurer.reset-size7.size2,
.katex .sizing.reset-size7.size2 {
    font-size: 0.5em;
}
.katex .fontsize-ensurer.reset-size7.size3,
.katex .sizing.reset-size7.size3 {
    font-size: 0.58333333em;
}
.katex .fontsize-ensurer.reset-size7.size4,
.katex .sizing.reset-size7.size4 {
    font-size: 0.66666667em;
}
.katex .fontsize-ensurer.reset-size7.size5,
.katex .sizing.reset-size7.size5 {
    font-size: 0.75em;
}
.katex .fontsize-ensurer.reset-size7.size6,
.katex .sizing.reset-size7.size6 {
    font-size: 0.83333333em;
}
.katex .fontsize-ensurer.reset-size7.size7,
.katex .sizing.reset-size7.size7 {
    font-size: 1em;
}
.katex .fontsize-ensurer.reset-size7.size8,
.katex .sizing.reset-size7.size8 {
    font-size: 1.2em;
}
.katex .fontsize-ensurer.reset-size7.size9,
.katex .sizing.reset-size7.size9 {
    font-size: 1.44em;
}
.katex .fontsize-ensurer.reset-size7.size10,
.katex .sizing.reset-size7.size10 {
    font-size: 1.72833333em;
}
.katex .fontsize-ensurer.reset-size7.size11,
.katex .sizing.reset-size7.size11 {
    font-size: 2.07333333em;
}
.katex .fontsize-ensurer.reset-size8.size1,
.katex .sizing.reset-size8.size1 {
    font-size: 0.34722222em;
}
.katex .fontsize-ensurer.reset-size8.size2,
.katex .sizing.reset-size8.size2 {
    font-size: 0.41666667em;
}
.katex .fontsize-ensurer.reset-size8.size3,
.katex .sizing.reset-size8.size3 {
    font-size: 0.48611111em;
}
.katex .fontsize-ensurer.reset-size8.size4,
.katex .sizing.reset-size8.size4 {
    font-size: 0.55555556em;
}
.katex .fontsize-ensurer.reset-size8.size5,
.katex .sizing.reset-size8.size5 {
    font-size: 0.625em;
}
.katex .fontsize-ensurer.reset-size8.size6,
.katex .sizing.reset-size8.size6 {
    font-size: 0.69444444em;
}
.katex .fontsize-ensurer.reset-size8.size7,
.katex .sizing.reset-size8.size7 {
    font-size: 0.83333333em;
}
.katex .fontsize-ensurer.reset-size8.size8,
.katex .sizing.reset-size8.size8 {
    font-size: 1em;
}
.katex .fontsize-ensurer.reset-size8.size9,
.katex .sizing.reset-size8.size9 {
    font-size: 1.2em;
}
.katex .fontsize-ensurer.reset-size8.size10,
.katex .sizing.reset-size8.size10 {
    font-size: 1.44027778em;
}
.katex .fontsize-ensurer.reset-size8.size11,
.katex .sizing.reset-size8.size11 {
    font-size: 1.72777778em;
}
.katex .fontsize-ensurer.reset-size9.size1,
.katex .sizing.reset-size9.size1 {
    font-size: 0.28935185em;
}
.katex .fontsize-ensurer.reset-size9.size2,
.katex .sizing.reset-size9.size2 {
    font-size: 0.34722222em;
}
.katex .fontsize-ensurer.reset-size9.size3,
.katex .sizing.reset-size9.size3 {
    font-size: 0.40509259em;
}
.katex .fontsize-ensurer.reset-size9.size4,
.katex .sizing.reset-size9.size4 {
    font-size: 0.46296296em;
}
.katex .fontsize-ensurer.reset-size9.size5,
.katex .sizing.reset-size9.size5 {
    font-size: 0.52083333em;
}
.katex .fontsize-ensurer.reset-size9.size6,
.katex .sizing.reset-size9.size6 {
    font-size: 0.5787037em;
}
.katex .fontsize-ensurer.reset-size9.size7,
.katex .sizing.reset-size9.size7 {
    font-size: 0.69444444em;
}
.katex .fontsize-ensurer.reset-size9.size8,
.katex .sizing.reset-size9.size8 {
    font-size: 0.83333333em;
}
.katex .fontsize-ensurer.reset-size9.size9,
.katex .sizing.reset-size9.size9 {
    font-size: 1em;
}
.katex .fontsize-ensurer.reset-size9.size10,
.katex .sizing.reset-size9.size10 {
    font-size: 1.20023148em;
}
.katex .fontsize-ensurer.reset-size9.size11,
.katex .sizing.reset-size9.size11 {
    font-size: 1.43981481em;
}
.katex .fontsize-ensurer.reset-size10.size1,
.katex .sizing.reset-size10.size1 {
    font-size: 0.24108004em;
}
.katex .fontsize-ensurer.reset-size10.size2,
.katex .sizing.reset-size10.size2 {
    font-size: 0.28929605em;
}
.katex .fontsize-ensurer.reset-size10.size3,
.katex .sizing.reset-size10.size3 {
    font-size: 0.33751205em;
}
.katex .fontsize-ensurer.reset-size10.size4,
.katex .sizing.reset-size10.size4 {
    font-size: 0.38572806em;
}
.katex .fontsize-ensurer.reset-size10.size5,
.katex .sizing.reset-size10.size5 {
    font-size: 0.43394407em;
}
.katex .fontsize-ensurer.reset-size10.size6,
.katex .sizing.reset-size10.size6 {
    font-size: 0.48216008em;
}
.katex .fontsize-ensurer.reset-size10.size7,
.katex .sizing.reset-size10.size7 {
    font-size: 0.57859209em;
}
.katex .fontsize-ensurer.reset-size10.size8,
.katex .sizing.reset-size10.size8 {
    font-size: 0.69431051em;
}
.katex .fontsize-ensurer.reset-size10.size9,
.katex .sizing.reset-size10.size9 {
    font-size: 0.83317261em;
}
.katex .fontsize-ensurer.reset-size10.size10,
.katex .sizing.reset-size10.size10 {
    font-size: 1em;
}
.katex .fontsize-ensurer.reset-size10.size11,
.katex .sizing.reset-size10.size11 {
    font-size: 1.19961427em;
}
.katex .fontsize-ensurer.reset-size11.size1,
.katex .sizing.reset-size11.size1 {
    font-size: 0.20096463em;
}
.katex .fontsize-ensurer.reset-size11.size2,
.katex .sizing.reset-size11.size2 {
    font-size: 0.24115756em;
}
.katex .fontsize-ensurer.reset-size11.size3,
.katex .sizing.reset-size11.size3 {
    font-size: 0.28135048em;
}
.katex .fontsize-ensurer.reset-size11.size4,
.katex .sizing.reset-size11.size4 {
    font-size: 0.32154341em;
}
.katex .fontsize-ensurer.reset-size11.size5,
.katex .sizing.reset-size11.size5 {
    font-size: 0.36173633em;
}
.katex .fontsize-ensurer.reset-size11.size6,
.katex .sizing.reset-size11.size6 {
    font-size: 0.40192926em;
}
.katex .fontsize-ensurer.reset-size11.size7,
.katex .sizing.reset-size11.size7 {
    font-size: 0.48231511em;
}
.katex .fontsize-ensurer.reset-size11.size8,
.katex .sizing.reset-size11.size8 {
    font-size: 0.57877814em;
}
.katex .fontsize-ensurer.reset-size11.size9,
.katex .sizing.reset-size11.size9 {
    font-size: 0.69453376em;
}
.katex .fontsize-ensurer.reset-size11.size10,
.katex .sizing.reset-size11.size10 {
    font-size: 0.83360129em;
}
.katex .fontsize-ensurer.reset-size11.size11,
.katex .sizing.reset-size11.size11 {
    font-size: 1em;
}
.katex .delimsizing.size1 {
    font-family: KaTeX_Size1;
}
.katex .delimsizing.size2 {
    font-family: KaTeX_Size2;
}
.katex .delimsizing.size3 {
    font-family: KaTeX_Size3;
}
.katex .delimsizing.size4 {
    font-family: KaTeX_Size4;
}
.katex .delimsizing.mult .delim-size1 > span {
    font-family: KaTeX_Size1;
}
.katex .delimsizing.mult .delim-size4 > span {
    font-family: KaTeX_Size4;
}
.katex .nulldelimiter {
    display: inline-block;
    width: 0.12em;
}
.katex .delimcenter,
.katex .op-symbol {
    position: relative;
}
.katex .op-symbol.small-op {
    font-family: KaTeX_Size1;
}
.katex .op-symbol.large-op {
    font-family: KaTeX_Size2;
}
.katex .accent > .vlist-t,
.katex .op-limits > .vlist-t {
    text-align: center;
}
.katex .accent .accent-body {
    position: relative;
}
.katex .accent .accent-body:not(.accent-full) {
    width: 0;
}
.katex .overlay {
    display: block;
}
.katex .mtable .vertical-separator {
    display: inline-block;
    min-width: 1px;
}
.katex .mtable .arraycolsep {
    display: inline-block;
}
.katex .mtable .col-align-c > .vlist-t {
    text-align: center;
}
.katex .mtable .col-align-l > .vlist-t {
    text-align: left;
}
.katex .mtable .col-align-r > .vlist-t {
    text-align: right;
}
.katex .svg-align {
    text-align: left;
}
.katex svg {
    fill: currentColor;
    stroke: currentColor;
    fill-rule: nonzero;
    fill-opacity: 1;
    stroke-width: 1;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-dashoffset: 0;
    stroke-opacity: 1;
    display: block;
    height: inherit;
    position: absolute;
    width: 100%;
}
.katex svg path {
    stroke: none;
}
.katex img {
    border-style: none;
    max-height: none;
    max-width: none;
    min-height: 0;
    min-width: 0;
}
.katex .stretchy {
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;
}
.katex .stretchy:after,
.katex .stretchy:before {
    content: "";
}
.katex .hide-tail {
    overflow: hidden;
    position: relative;
    width: 100%;
}
.katex .halfarrow-left {
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 50.2%;
}
.katex .halfarrow-right {
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 50.2%;
}
.katex .brace-left {
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 25.1%;
}
.katex .brace-center {
    left: 25%;
    overflow: hidden;
    position: absolute;
    width: 50%;
}
.katex .brace-right {
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 25.1%;
}
.katex .x-arrow-pad {
    padding: 0 0.5em;
}
.katex .cd-arrow-pad {
    padding: 0 0.55556em 0 0.27778em;
}
.katex .mover,
.katex .munder,
.katex .x-arrow {
    text-align: center;
}
.katex .boxpad {
    padding: 0 0.3em;
}
.katex .fbox,
.katex .fcolorbox {
    border: 0.04em solid;
    box-sizing: border-box;
}
.katex .cancel-pad {
    padding: 0 0.2em;
}
.katex .cancel-lap {
    margin-left: -0.2em;
    margin-right: -0.2em;
}
.katex .sout {
    border-bottom-style: solid;
    border-bottom-width: 0.08em;
}
.katex .angl {
    border-right: 0.049em solid;
    border-top: 0.049em solid;
    box-sizing: border-box;
    margin-right: 0.03889em;
}
.katex .anglpad {
    padding: 0 0.03889em;
}
.katex .eqn-num:before {
    content: "(" counter(katexEqnNo) ")";
    counter-increment: katexEqnNo;
}
.katex .mml-eqn-num:before {
    content: "(" counter(mmlEqnNo) ")";
    counter-increment: mmlEqnNo;
}
.katex .mtr-glue {
    width: 50%;
}
.katex .cd-vert-arrow {
    display: inline-block;
    position: relative;
}
.katex .cd-label-left {
    display: inline-block;
    position: absolute;
    right: calc(50% + 0.3em);
    text-align: left;
}
.katex .cd-label-right {
    display: inline-block;
    left: calc(50% + 0.3em);
    position: absolute;
    text-align: right;
}
.katex-display {
    display: block;
    margin: 1em 0;
    text-align: center;
}
.katex-display > .katex {
    display: block;
    text-align: center;
    white-space: nowrap;
}
.katex-display > .katex > .katex-html {
    display: block;
    position: relative;
}
.katex-display > .katex > .katex-html > .tag {
    position: absolute;
    right: 0;
}
.katex-display.leqno > .katex > .katex-html > .tag {
    left: 0;
    right: auto;
}
.katex-display.fleqn > .katex {
    padding-left: 2em;
    text-align: left;
}
body {
    counter-reset: katexEqnNo mmlEqnNo;
}

</style>

<style scoped>
      /**
 * prism.js Github theme based on GitHub's theme.
 * @author Sam Clarke
 */
code[class*="language-"],
pre[class*="language-"] {
  color: #333;
  background: none;
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.4;

  -moz-tab-size: 8;
  -o-tab-size: 8;
  tab-size: 8;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: .8em;
  overflow: auto;
  /* border: 1px solid #ddd; */
  border-radius: 3px;
  /* background: #fff; */
  background: #f5f5f5;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
  background: #f5f5f5;
}

.token.comment,
.token.blockquote {
  color: #969896;
}

.token.cdata {
  color: #183691;
}

.token.doctype,
.token.punctuation,
.token.variable,
.token.macro.property {
  color: #333;
}

.token.operator,
.token.important,
.token.keyword,
.token.rule,
.token.builtin {
  color: #a71d5d;
}

.token.string,
.token.url,
.token.regex,
.token.attr-value {
  color: #183691;
}

.token.property,
.token.number,
.token.boolean,
.token.entity,
.token.atrule,
.token.constant,
.token.symbol,
.token.command,
.token.code {
  color: #0086b3;
}

.token.tag,
.token.selector,
.token.prolog {
  color: #63a35c;
}

.token.function,
.token.namespace,
.token.pseudo-element,
.token.class,
.token.class-name,
.token.pseudo-class,
.token.id,
.token.url-reference .token.variable,
.token.attr-name {
  color: #795da3;
}

.token.entity {
  cursor: help;
}

.token.title,
.token.title .token.punctuation {
  font-weight: bold;
  color: #1d3e81;
}

.token.list {
  color: #ed6a43;
}

.token.inserted {
  background-color: #eaffea;
  color: #55a532;
}

.token.deleted {
  background-color: #ffecec;
  color: #bd2c00;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}


/* JSON */
.language-json .token.property {
  color: #183691;
}

.language-markup .token.tag .token.punctuation {
  color: #333;
}

/* CSS */
code.language-css,
.language-css .token.function {
  color: #0086b3;
}

/* YAML */
.language-yaml .token.atrule {
  color: #63a35c;
}

code.language-yaml {
  color: #183691;
}

/* Ruby */
.language-ruby .token.function {
  color: #333;
}

/* Markdown */
.language-markdown .token.url {
  color: #795da3;
}

/* Makefile */
.language-makefile .token.symbol {
  color: #795da3;
}

.language-makefile .token.variable {
  color: #183691;
}

.language-makefile .token.builtin {
  color: #0086b3;
}

/* Bash */
.language-bash .token.keyword {
  color: #0086b3;
}

/* highlight */
pre[data-line] {
  position: relative;
  padding: 1em 0 1em 3em;
}
pre[data-line] .line-highlight-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  display: block;
  width: 100%;
}

pre[data-line] .line-highlight {
  position: absolute;
  left: 0;
  right: 0;
  padding: inherit 0;
  margin-top: 1em;
  background: hsla(24, 20%, 50%,.08);
  background: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));
  pointer-events: none;
  line-height: inherit;
  white-space: pre;
}

pre[data-line] .line-highlight:before,
pre[data-line] .line-highlight[data-end]:after {
  content: attr(data-start);
  position: absolute;
  top: .4em;
  left: .6em;
  min-width: 1em;
  padding: 0 .5em;
  background-color: hsla(24, 20%, 50%,.4);
  color: hsl(24, 20%, 95%);
  font: bold 65%/1.5 sans-serif;
  text-align: center;
  vertical-align: .3em;
  border-radius: 999px;
  text-shadow: none;
  box-shadow: 0 1px white;
}

pre[data-line] .line-highlight[data-end]:after {
  content: attr(data-end);
  top: auto;
  bottom: .4em;
}html body{font-family:"Helvetica Neue",Helvetica,"Segoe UI",Arial,freesans,sans-serif;font-size:16px;line-height:1.6;color:#333;background-color:#fff;overflow:initial;box-sizing:border-box;word-wrap:break-word}html body>:first-child{margin-top:0}html body h1,html body h2,html body h3,html body h4,html body h5,html body h6{line-height:1.2;margin-top:1em;margin-bottom:16px;color:#000}html body h1{font-size:2.25em;font-weight:300;padding-bottom:.3em}html body h2{font-size:1.75em;font-weight:400;padding-bottom:.3em}html body h3{font-size:1.5em;font-weight:500}html body h4{font-size:1.25em;font-weight:600}html body h5{font-size:1.1em;font-weight:600}html body h6{font-size:1em;font-weight:600}html body h1,html body h2,html body h3,html body h4,html body h5{font-weight:600}html body h5{font-size:1em}html body h6{color:#5c5c5c}html body strong{color:#000}html body del{color:#5c5c5c}html body a:not([href]){color:inherit;text-decoration:none}html body a{color:#08c;text-decoration:none}html body a:hover{color:#00a3f5;text-decoration:none}html body img{max-width:100%}html body>p{margin-top:0;margin-bottom:16px;word-wrap:break-word}html body>ul,html body>ol{margin-bottom:16px}html body ul,html body ol{padding-left:2em}html body ul.no-list,html body ol.no-list{padding:0;list-style-type:none}html body ul ul,html body ul ol,html body ol ol,html body ol ul{margin-top:0;margin-bottom:0}html body li{margin-bottom:0}html body li.task-list-item{list-style:none}html body li>p{margin-top:0;margin-bottom:0}html body .task-list-item-checkbox{margin:0 .2em .25em -1.8em;vertical-align:middle}html body .task-list-item-checkbox:hover{cursor:pointer}html body blockquote{margin:16px 0;font-size:inherit;padding:0 15px;color:#5c5c5c;background-color:#f0f0f0;border-left:4px solid #d6d6d6}html body blockquote>:first-child{margin-top:0}html body blockquote>:last-child{margin-bottom:0}html body hr{height:4px;margin:32px 0;background-color:#d6d6d6;border:0 none}html body table{margin:10px 0 15px 0;border-collapse:collapse;border-spacing:0;display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}html body table th{font-weight:bold;color:#000}html body table td,html body table th{border:1px solid #d6d6d6;padding:6px 13px}html body dl{padding:0}html body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:bold}html body dl dd{padding:0 16px;margin-bottom:16px}html body code{font-family:Menlo,Monaco,Consolas,'Courier New',monospace;font-size:.85em !important;color:#000;background-color:#f0f0f0;border-radius:3px;padding:.2em 0}html body code::before,html body code::after{letter-spacing:-0.2em;content:"\00a0"}html body pre>code{padding:0;margin:0;font-size:.85em !important;word-break:normal;white-space:pre;background:transparent;border:0}html body .highlight{margin-bottom:16px}html body .highlight pre,html body pre{padding:1em;overflow:auto;font-size:.85em !important;line-height:1.45;border:#d6d6d6;border-radius:3px}html body .highlight pre{margin-bottom:0;word-break:normal}html body pre code,html body pre tt{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}html body pre code:before,html body pre tt:before,html body pre code:after,html body pre tt:after{content:normal}html body p,html body blockquote,html body ul,html body ol,html body dl,html body pre{margin-top:0;margin-bottom:16px}html body kbd{color:#000;border:1px solid #d6d6d6;border-bottom:2px solid #c7c7c7;padding:2px 4px;background-color:#f0f0f0;border-radius:3px}@media print{html body{background-color:#fff}html body h1,html body h2,html body h3,html body h4,html body h5,html body h6{color:#000;page-break-after:avoid}html body blockquote{color:#5c5c5c}html body pre{page-break-inside:avoid}html body table{display:table}html body img{display:block;max-width:100%;max-height:100%}html body pre,html body code{word-wrap:break-word;white-space:pre}}.markdown-preview{width:100%;height:100%;box-sizing:border-box}.markdown-preview .pagebreak,.markdown-preview .newpage{page-break-before:always}.markdown-preview pre.line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}.markdown-preview pre.line-numbers>code{position:relative}.markdown-preview pre.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:1em;font-size:100%;left:0;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.markdown-preview pre.line-numbers .line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber}.markdown-preview pre.line-numbers .line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}.markdown-preview .mathjax-exps .MathJax_Display{text-align:center !important}.markdown-preview:not([for="preview"]) .code-chunk .btn-group{display:none}.markdown-preview:not([for="preview"]) .code-chunk .status{display:none}.markdown-preview:not([for="preview"]) .code-chunk .output-div{margin-bottom:16px}.scrollbar-style::-webkit-scrollbar{width:8px}.scrollbar-style::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}.scrollbar-style::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(150,150,150,0.66);border:4px solid rgba(150,150,150,0.66);background-clip:content-box}html body[for="html-export"]:not([data-presentation-mode]){position:relative;width:100%;height:100%;top:0;left:0;margin:0;padding:0;overflow:auto}html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{position:relative;top:0}@media screen and (min-width:914px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{padding:2em calc(50% - 457px + 2em)}}@media screen and (max-width:914px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{padding:2em}}@media screen and (max-width:450px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{font-size:14px !important;padding:1em}}@media print{html body[for="html-export"]:not([data-presentation-mode]) #sidebar-toc-btn{display:none}}html body[for="html-export"]:not([data-presentation-mode]) #sidebar-toc-btn{position:fixed;bottom:8px;left:8px;font-size:28px;cursor:pointer;color:inherit;z-index:99;width:32px;text-align:center;opacity:.4}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] #sidebar-toc-btn{opacity:1}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc{position:fixed;top:0;left:0;width:300px;height:100%;padding:32px 0 48px 0;font-size:14px;box-shadow:0 0 4px rgba(150,150,150,0.33);box-sizing:border-box;overflow:auto;background-color:inherit}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar{width:8px}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(150,150,150,0.66);border:4px solid rgba(150,150,150,0.66);background-clip:content-box}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc a{text-decoration:none}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc ul{padding:0 1.6em;margin-top:.8em}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc li{margin-bottom:.8em}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc ul{list-style-type:none}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{left:300px;width:calc(100% -  300px);padding:2em calc(50% - 457px -  150px);margin:0;box-sizing:border-box}@media screen and (max-width:1274px){html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{padding:2em}}@media screen and (max-width:450px){html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{width:100%}}html body[for="html-export"]:not([data-presentation-mode]):not([html-show-sidebar-toc]) .markdown-preview{left:50%;transform:translateX(-50%)}html body[for="html-export"]:not([data-presentation-mode]):not([html-show-sidebar-toc]) .md-sidebar-toc{display:none}
/* Please visit the URL below for more information: */
/*   https://shd101wyy.github.io/markdown-preview-enhanced/#/customize-css */

</style>
