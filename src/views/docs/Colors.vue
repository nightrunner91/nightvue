<template>
  <!-- eslint-disable vue/max-attributes-per-line -->
  <section>
    <div class="h1" id="colors">Цвета</div>
    <h2 id="colors-list">Библиотека цветов</h2>
    <p>По умолчанию в NightVue предустановлена библиотека из 15 стандартных цветов. Разумеется, вы можете полностью изменить её либо использовать свою. Из этих базовых цветов далее можно настроить цвета темы. Мы не рекомендуем удалять из библиотеки набор монохромных цветов <code>$black</code>,<code>$dark</code>,<code>$grey</code>,<code>$light</code> и <code>$white</code> по причине их распространённости и универсальности в абсолютно любом проекте.</p>
    <ul class="d-flex list-unstyled colors my-3">
      <li
        v-for="(color, value) in colors"
        :key="`color-${color}-${value}`"
        class="color icon-size-48 mr-75 radius-base material-shadow-1"
        :class="[`bg-${value}`, { 'mr-2' : value === 'white' }]" />
    </ul>
    <p>Список цветов доступен в файле <code>_varaibles.scss</code>:</p>
    <p>
      <pre class="language-css mb-3"><code class="language-css">$colors: (
  'black':     '#000000,
  'dark':      '#343a40,
  'grey':      '#E5EBEB,
  'light':     '#F9F9F9,
  'white':     '#ffffff,
  'red':       '#f94144,
  'orange':    '#f3722c,
  'amber':     '#f8961e,
  'yellow':    '#f9c74f,
  'green':     '#00B154,
  'turquoise': '#43aa8b,
  'pale':      '#6A747D,
  'cyan':      '#bbadff,
  'blue':      '#4361ee,
  'purple':    '#682cab,
);</code></pre>
    </p>
    <h2 id="color-levels">
      Уровни цветов
    </h2>
    <p class="mb-3">
      За исключением белого и чёрного, к каждому из цветов в библиотеке применяется ряд модификаторов, изменяющих его яркость. Для этого используются встроенные модули SASS <code>lighten()</code> и <code>darken()</code>. Подробнее о работе с цветами в SASS можно ознакомиться в <a rel="nofollow" target="_blank" href="https://sass-lang.com/documentation/modules/color">документации</a>.
    </p>
    <ul
      v-for="(color, value) in colors"
      :key="`variants-${color}-${value}`"
      class="d-flex list-unstyled colors my-75"
      :class="value == 'black' || value == 'white' ? 'd-none' : ''">
      <li
        class="d-flex align-items-center h4 m-0 minw-15"
        :class="value == 'dark' || value == 'grey' || value == 'light' ? 'clr-dark-lighten-4' : `clr-${value}`">{{ value }}</li>
      <li
        v-for="(level, index) in levels"
        :key="`level-${index}`"
        class="color icon-size-48 mr-75 radius-base material-shadow-1"
        :class="levelClassname(value, level)" />
    </ul>
    <p class="mt-3">
      Использовать цвета в проекте можно несколькими способами:
    </p>
    <ol class="pl-2">
      <li>
        Применять HTML классы к элементам. Для этого используйте классы вида <code>bg-red</code>, <code>clr-red</code> или <code>fill-red</code> для придания нужного цвета фону, тексту или SVG элементу соответственно.
      </li>
      <li>
        Использовать <code>@mixin</code> к нужному классу <code>.scss</code> документе.
      </li>
    </ol>

  </section>
</template>

<script>
export default {
  name: 'Colors',
  data() {
    return {
      colors: {
        'black':     '#000000',
        'dark':      '#343a40',
        'grey':      '#E5EBEB',
        'light':     '#F9F9F9',
        'white':     '#ffffff',
        'red':       '#f94144',
        'orange':    '#f3722c',
        'amber':     '#f8961e',
        'yellow':    '#f9c74f',
        'green':     '#00B154',
        'turquoise': '#43aa8b',
        'pale':      '#6A747D',
        'cyan':      '#bbadff',
        'blue':      '#4361ee',
        'purple':    '#682cab',
      },

      levels: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
    }
  },
  methods: {
    levelClassname(color, level) {
      if (level < 0) {
        return `bg-${color}-lighten-${Math.abs(level)}`
      } else if (level === 0) {
        return `bg-${color}`
      } else if (level > 0) {
        return `bg-${color}-darken-${level}`
      }
    },
  },
}
</script>

<style lang="scss">

</style>
