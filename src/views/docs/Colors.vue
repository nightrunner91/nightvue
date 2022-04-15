<template>
  <!-- eslint-disable vue/max-attributes-per-line -->
  <section>
    <div class="h1" id="colors">Цвета</div>
    <h2 id="colors-list">Библиотека цветов</h2>
    <p>По умолчанию в NightVue предустановлена библиотека из 10 стандартных цветов. Разумеется, вы можете полностью изменить её либо использовать свою. Из этих базовых цветов далее можно настроить цвета темы. Мы не рекомендуем изменять либо удалять из библиотеки цвета <code>$black</code> и <code>$white</code> по причине их распространённости и универсальности в абсолютно любом проекте. Кроме того, на их основе выстраивается ряд ахроматических цветов, о которых мы поговорим далее.</p>
    <ul class="d-flex list-unstyled colors my-3">
      <li
        v-for="(color, value) in colors"
        :key="`color-${color}-${value}`"
        class="color icon-size-48 mr-75 radius-circle material-shadow-1"
        :class="[`bg-${value}`, { 'mr-2' : value === 'white' }]" />
    </ul>
    <p>Список цветов доступен в файле <code>_varaibles.scss</code>:</p>
    <p>
      <pre class="language-css mb-3"><code class="language-css">$colors: (
  'black':     #000000,
  'white':     #ffffff,

  'red':       #f94144,
  'orange':    #f3722c,
  'yellow':    #f9c74f,
  'green':     #00B154,
  'teal':      #1aa179,
  'cyan':      #AB9DEF,
  'blue':      #4361ee,
  'purple':    #682cab,
);</code></pre>
    </p>
    <p class="mt-3">
      Использовать цвета в проекте можно несколькими способами:
    </p>
    <ol class="pl-2">
      <li>
        Применять классы к HTML-элементам,
      </li>
      <li>
        Использовать <code>@mixin</code> к нужному классу <code>.scss</code> документе,
      </li>
      <li>
        Использовать встроенный модуль Sass <code>map.get()</code>.
      </li>
    </ol>
    <p>Остановимся подробнее на каждом из них.</p>
    <ol class="pl-2">
      <li>
        Для использования цветов в HTML-документе используйте классы вида <code>bg-red</code>, <code>clr-red</code> или <code>fill-red</code> для придания нужного цвета фону, тексту или SVG элементу соответственно. Примеры: <pre v-pre class="language-html"><code v-pre>
          <div v-pre class="bg-red">ololo</div>
          </code></pre>
      </li>
    </ol>
    <p>Каждый из этих методов рабочий, но мы советуем пользовать первыми двумя.</p>
    <h2 id="color-monoochrome">
      Ахроматические цвета
    </h2>
    <p>Пользователю доступен ахроматический ряд цветов, длину которого можно регулировать. По умолчанию в ряду 18 цветов, различающихся по яркости, начиная от белого и заканчивая чёрным.</p>
    <ul class="d-flex list-unstyled colors my-3">
      <li class="color icon-size-36 mr-75 radius-circle material-shadow-1 bg-white" />
      <li
        v-for="shade in shades"
        :key="`shade-${shade}`"
        class="color icon-size-36 mr-75 radius-circle material-shadow-1"
        :class="`bg-shade-${shade}`" />
      <li class="color icon-size-36 mr-75 radius-circle material-shadow-1 bg-black" />
    </ul>
    <h2 id="color-levels">
      Цвета темы
    </h2>
    <p>
      По умолчанию в NighVue настроена привычная пользователям Boostrap система из 8 цветов, составленных из стандартной библиотеки.
    </p>
    <h2 id="color-levels">
      Уровни цветов
    </h2>
    <p class="mb-3 test">
      К каждому из цветов в библиотеке применяются модификаторы, изменяющие их яркость. Благодаря этому палитра цветов заметно расширяется. Это достигается с помощью пользовательских Sass миксинов, чтобы осветлять (<code>lighten</code>) или затемнять (<code>darken</code>) цвета с помощью встроенной функции <code>mix()</code>. Использование <code>mix()</code> — не то же самое, что <code>lighten()</code> и <code>darken()</code>. Первое смешивает указанный цвет с белым или черным, тогда как второе лишь регулирует величину яркости цвета.
    </p>
    <ul
      v-for="(color, value) in colors"
      :key="`variants-${color}-${value}`"
      class="d-flex list-unstyled colors mb-75"
      :class="value == 'black' || value == 'white' ? 'd-none' : ''">
      <li
        v-for="(level, index) in levels"
        :key="`level-${index}`"
        class="color icon-size-48 mr-75 radius-circle material-shadow-1"
        :class="levelClassname(value, level)" />
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Colors',
  data() {
    return {
      colors: {
        'black':     '#000000',
        'white':     '#ffffff',
        'red':       '#f94144',
        'orange':    '#f3722c',
        'yellow':    '#f9c74f',
        'green':     '#00B154',
        'teal':      '#1aa179',
        'cyan':      '#bbadff',
        'blue':      '#4361ee',
        'purple':    '#682cab',
      },

      levels: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
      shades: 16,
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
