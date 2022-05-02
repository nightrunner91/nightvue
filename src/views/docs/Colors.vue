<template>
  <!-- eslint-disable vue/max-attributes-per-line -->
  <section>
    <h1 id="colors">
      Цвета
    </h1>
    <p>Работа с цветами в NightVue будет привычна пользователю Booststrap. В общем и целом системы похожи, но есть небольшие различия, которые опытный разработчик наверняка определит самостоятельно.</p>

    <h2 id="colors-list">
      Карты цветов
    </h2>
    <p>Карта <code>$colors</code>, расположенная в файле <code>_varaibles.scss</code> насчитывает 12 стандартных цветов. Беря их за основу, можно настроить цвета темы, о которых пойдёт речь далее. Разумеется, вы можете изменять, удалять или добавлять новые цвета в эту карту.</p>
    <ul class="d-flex list-unstyled colors my-2">
      <li
        v-for="color in colors"
        :key="`color-${color}`"
        class="color icon-size-48 mr-75 radius-circle material-shadow-2"
        :class="[`bg-${color}`, { 'mr-2' : color === 'white' }]" />
    </ul>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.colorsMap }}
      </template>
    </CodeExample>

    <p>Также вам доступен ахроматический ряд из 12 цветов, где крайними выступают белый и чёрный цвета, а в промежутке между ними — оттенки серого, различающихся по яркости. Длину этого ряда можно изменять, редактируя переменную <code>$shadesNum: 10</code> в файле <code>_varaibles.scss</code>. Наш код автоматически сгенерирует заданное количество промежуточных цветов в карте <code>$grays</code>.</p>
    <ul class="d-flex list-unstyled colors my-2">
      <li class="color icon-size-48 mr-75 radius-circle material-shadow-2 bg-white" />
      <li
        v-for="shade in shades"
        :key="`shade-${shade}`"
        class="color icon-size-48 mr-75 radius-circle material-shadow-2"
        :class="`bg-gray-${shade}`" />
      <li class="color icon-size-48 mr-75 radius-circle material-shadow-2 bg-black" />
    </ul>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.graysMap }}
      </template>
    </CodeExample>

    <p>Работать со стандартной библиотекой цветов не всегда удобно и уместно. Как правило, в проектах используется набор семантически названных цветов, составленных из библиотеки. Карта <code>$theme-colors</code> перечисляет такие цвета и также расположена в файле <code>_varaibles.scss</code>. По умолчанию в ней описана широко распространённая схема из 8 цветов. Вы можете переименовать их, удалить или добавить новые.</p>
    <ul class="d-flex list-unstyled colors my-2">
      <li
        v-for="color in themeColors"
        :key="`theme-color-${color}`"
        class="color icon-size-48 mr-75 radius-circle material-shadow-2"
        :class="`bg-${color}`" />
    </ul>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.themeColorsMap }}
      </template>
    </CodeExample>

    <p class="mb-2">К каждому из цветов в библиотеке применяются модификаторы, изменяющие их яркость. Благодаря этому палитра цветов заметно расширяется. Это достигается с помощью Sass миксинов, чтобы осветлять или затемнять цвета с помощью встроенной функции Sass <code>mix()</code>. Количество уровней и их значения можно регулировать в карте <code>$levels</code> в файле <code>_varaibles.scss</code>. Миксин автоматически сгенерирует требуемое количество уровней, на каждом из которых осветлит либо затемнит базовый цвет на указанное значение. По умолчанию настроена 5 ступенчатая схема с шагом в 5%. Подробнее о работе с цветами в Sass можно ознакомиться в <a rel="nofollow" target="_blank" href="https://sass-lang.com/documentation/modules/color">официальной документации</a>.</p>
    <ul
      v-for="color in colors"
      :key="`variants-${color}`"
      class="d-flex list-unstyled colors my-1"
      :class="color == 'black' || color == 'white' ? 'd-none' : ''">
      <li
        v-for="(level, index) in levels"
        :key="`level-${index}`"
        class="color icon-size-36 mr-75 radius-circle material-shadow-2"
        :class="levelClassname(color, level)" />
    </ul>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.colorLevels }}
      </template>
    </CodeExample>

    <h2 id="color-usage">
      Использование цветов
    </h2>
    <p class="mt-3">Использовать цвета в проекте можно несколькими способами:</p>
    <ol class="pl-2">
      <li>
        Применять зарезервированные классы к HTML-элементам,
      </li>
      <li>
        Использовать глобальную функцию <code>@color()</code>,
      </li>
      <li>
        Использовать встроенный Sass модуль <code>map.get()</code> для прямого доступа к картам цветов.
      </li>
    </ol>
    <p>Остановимся подробнее на каждом из них.</p>

    <h3 id="color-tags">
      Зарезервированные классы в HTML
    </h3>
    <p>Практика показывает, что наиболее часто возникает необходимость изменить цвет блока, цвет текста и фон заливки SVG-элемента. Для этих целей в NightVue зарезервирован ряд классов <code>bg-${color}</code>, <code>clr-${color}</code> и <code>fill-${color}</code> для придания нужного цвета фону, тексту и заливке SVG-элемента соответственно. В переменную <code>${color}</code> можно подставлять любой цвет из вышеназванных карт. При необходимости вы можете указать модификатор <code>-light-${level}</code> или <code>-dark-${level}</code> для уточнения уровня цвета. Вот как это выглядит:</p>
    <CodeExample :language="'html'">
      <template v-slot:snippet>
        {{ codeExamples.colors.defaultColorsMethods }}
      </template>
    </CodeExample>
    <p>Мы настоятельно рекомендуем использовать этот способ как можно чаще, т.к. это ощутимо сокращает количество скомпилированного CSS кода. Предпочительней использовать по максимуму классы с уже описанными свойствами, чем генерировать новые.</p>
    <CodeExample :language="'markup'">
      <template v-slot:snippet>
        {{ codeExamples.colors.classnamesVsSass }}
      </template>
    </CodeExample>

    <h3 id="color-function">
      Глобальная функция @color
    </h3>
    <p class="example">Для применения цветов в таблице стилей подготовлена глобальная функция <code>@color($name, $style, $rate)</code>, которая возвращает цвет, заданный аргументами. Аргумент <code>$name</code> обозначет название цвета из любой из доступных карт — <code>$colors</code>, <code>$grays</code> и <code>$theme-colors</code>. Следующие далее аргументы не обязательны и обозначают отклонение уровня выбранного цвета. Возможные аргументы <code>$style</code> — это <code>'light'</code> и <code>'dark'</code>. В аргумент <code>$rate</code> подставляется любой из уровней карты <code>$levels</code>.</p>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.colorFunction }}
      </template>
    </CodeExample>

    <h3 class="color-map-get">
      Доступ к картам цветов через модуль map-get()
    </h3>
    <p>Наконец, вы можете воспользоваться встроенным Sass модулем <code>map.get()</code> для прямого доступа к картам <code>$colors</code>, <code>$theme-colors</code> и <code>$levels</code>. Мы, однако, рекомендуем использовать наши миксины и глобальную функцию, так как они выполняют именно то, что вы намереваетесь делать сами. Но выбор, разумеется, за вами. Подробнее о работе с картами Sass можно ознакомиться в <a rel="nofollow" target="_blank" href="https://sass-lang.com/documentation/values/maps">официальной документации</a>.</p>
    <p>Вот несколько примеров использования карт цветов в NightVue:</p>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.sassMaps }}
      </template>
    </CodeExample>

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

      colors: ['red', 'pink', 'orange', 'yellow', 'green', 'brown', 'teal', 'cyan', 'blue', 'purple'],
      themeColors: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
      levels: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
      shades: 10,
    }
  },
  methods: {
    levelClassname(color, level) {
      if (level < 0) {
        return `bg-${color}-light-${Math.abs(level)}`
      } else if (level === 0) {
        return `bg-${color}`
      } else if (level > 0) {
        return `bg-${color}-dark-${level}`
      }
    },
  },
}
</script>

<style lang="scss">

</style>
