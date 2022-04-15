<template>
  <!-- eslint-disable vue/max-attributes-per-line -->
  <section>
    <div class="h1" id="colors">Цвета</div>
    <h2 id="colors-list">Библиотека цветов</h2>
    <p>По умолчанию в NightVue предустановлена библиотека из 10 стандартных цветов. Из этих базовых цветов далее можно настроить цвета темы. Мы не рекомендуем изменять либо удалять из библиотеки цвета <code>$black</code> и <code>$white</code> по причине их распространённости и универсальности в абсолютно любом проекте. Кроме того, на их основе выстраивается ряд ахроматических цветов, о которых мы поговорим далее.</p>
    <ul class="d-flex list-unstyled colors my-3">
      <li
        v-for="(color, value) in colors"
        :key="`color-${color}-${value}`"
        class="color icon-size-48 mr-75 radius-circle material-shadow-1"
        :class="[`bg-${value}`, { 'mr-2' : value === 'white' }]" />
    </ul>
    <p>Список цветов доступен в файле <code>_varaibles.scss</code>:</p>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.defaultColors }}
      </template>
    </CodeExample>
    <h2 id="color-monochrome">
      Ахроматические цвета
    </h2>
    <p>В NighVue доступен ахроматический ряд из 24 цветов, где крайними выступают белый и чёрный цвета, а в промежутке между ними — оттенки серого, различающихся по яркости. Длину ряда можно изменять, редактируя переменную <code>$shades: 22</code> в файле <code>_varaibles.scss</code>. Миксин автоматически сгенерирует заданное количество промежуточных цветов.</p>
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
      Уровни цветов
    </h2>
    <p class="mb-3 test">
      К каждому из цветов в библиотеке применяются модификаторы, изменяющие их яркость. Благодаря этому палитра цветов заметно расширяется. Это достигается с помощью Sass миксинов, чтобы осветлять (<code>lighten</code>) или затемнять (<code>darken</code>) цвета с помощью встроенной функции Sass <code>mix()</code>. Использование <code>mix()</code> — не то же самое, что <code>lighten()</code> и <code>darken()</code>. Первое смешивает указанный цвет с белым или черным, тогда как второе лишь регулирует величину яркости цвета.
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
    <h2 id="color-levels">
      Цвета темы
    </h2>
    <p>
      Пользователю доступна компактная схема из 8 цветов, составленных из библиотеки. Эта схема доступна в виде карты Sass <code>$theme-colors</code> в файле <code>_varaibles.scss</code>.
    </p>
    <h2 id="color-usage">
      Использование цветов
    </h2>
    <p class="mt-3">
      Использовать цвета в проекте можно несколькими способами:
    </p>
    <ol class="pl-2">
      <li>
        Применять зарезервированные классы к HTML-элементам,
      </li>
      <li>
        Использовать пользовательские Sass <code>@mixin</code>-ы к нужному классу,
      </li>
      <li>
        Использовать встроенный модуль <code>map.get()</code> для прямого доступа к картам цветов в Sass.
      </li>
    </ol>
    <p>Остановимся подробнее на каждом из них.</p>
    <ol class="pl-2">
      <li>
        <p>
          Для использования цветов в HTML-документе используйте классы вида <code>bg-${color}</code>, <code>clr-${color}</code> и <code>fill-${color}</code> для придания нужного цвета фону, тексту и заливке SVG-элемента соответственно. В переменную <code>${color}</code> можно подставлять как любой цвет из библиотеки цветов, так и любой цвет темы. При необходимости вы можете указать модификатор <code>-lighten-${level}</code> или <code>-darken-${level}</code> для уточнения уровня цвета. Вот как это выглядит:
        </p>
        <CodeExample :language="'html'">
          <template v-slot:snippet>
            {{ codeExamples.colors.defaultColorsMethods }}
          </template>
        </CodeExample>
        <p>В случае с ахроматическими цветами логика написания классов слегка другая. Для каждого из оттенков серого указывайте классы вида <code>bg-shade-${level}</code>, <code>clr-shade-${level}</code> и <code>fill-shade-${level}</code> для придания нужного цвета фону, тексту и заливке SVG-элемента соответственно.</p>
        <CodeExample :language="'html'">
          <template v-slot:snippet>
            {{ codeExamples.colors.monochromeColorsMethods }}
          </template>
        </CodeExample>
      </li>
    </ol>
  </section>
</template>

<script>
import CodeExample from './CodeExample'
import { codeExamples } from './code_examples'

export default {
  name: 'Colors',
  components: { CodeExample },
  data() {
    return {
      codeExamples,

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
      shades: 22,
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
