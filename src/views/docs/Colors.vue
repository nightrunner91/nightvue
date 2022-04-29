<template>
  <!-- eslint-disable vue/max-attributes-per-line -->
  <section>
    <div class="h1" id="colors">Цвета</div>
    <p>
      Работа с цветами в NightVue будет привычна пользователям Booststrap. В общем и целом системы похожи, но есть небольшие различия, которые опытный пользователь Boostrap наверняка определит самостоятельно.
    </p>
    <h2 id="colors-list">Карты цветов</h2>
    <p>Карта цветов <code>$colors</code>, расположенная в файле <code>_varaibles.scss</code> насчитывает 12 стандартных цветов. Из них далее можно настроить цвета темы.</p>
    <ul class="d-flex list-unstyled colors my-2">
      <li
        v-for="color in colors"
        :key="`color-${color}`"
        class="color icon-size-48 mr-75 radius-circle material-shadow-2"
        :class="[`bg-${color}`, { 'mr-2' : color === 'white' }]" />
    </ul>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.defaultColors }}
      </template>
    </CodeExample>
    <p>Также пользователю доступен ахроматический ряд из 12 цветов, где крайними выступают белый и чёрный цвета, а в промежутке между ними — оттенки серого, различающихся по яркости. Длину этого ряда можно изменять, редактируя переменную <code>$shadesNum: 10</code> в файле <code>_varaibles.scss</code>. Наш код автоматически сгенерирует заданное количество промежуточных цветов в карте <code>$grays</code>.</p>
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
        {{ codeExamples.colors.shadeColors }}
      </template>
    </CodeExample>
    <p>
      Работать со стандартной библиотекой цветов не всегда удобно и уместно. Как правило, в проектах используется набор семантически названных цветов, составленных из библиотеки. Карта <code>$theme-colors</code> перечисляет такие цвета и также расположена в файле <code>_varaibles.scss</code>. По умолчанию в ней описана широко распространённая схема из 8 цветов — <code>$primary, $secondary, $success, $info, $warning, $danger, $light, $dark</code>. Вы можете переименовать эти цвета, удалить их или добавить новые. Наши миксины автоматически сгенерируют наборы классов, о которых пойдёт речь далее.
    </p>
    <ul class="d-flex list-unstyled colors my-2">
      <li
        v-for="color in themeColors"
        :key="`theme-color-${color}`"
        class="color icon-size-48 mr-75 radius-circle material-shadow-2"
        :class="`bg-${color}`" />
    </ul>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.themeColors }}
      </template>
    </CodeExample>
    <p class="mb-2">
      К каждому из цветов в библиотеке применяются модификаторы, изменяющие их яркость. Благодаря этому палитра цветов заметно расширяется. Это достигается с помощью Sass миксинов, чтобы осветлять или затемнять цвета с помощью встроенной функции Sass <code>mix()</code>. Количество уровней и их значения можно регулировать в карте <code>$levels</code> в файле <code>_varaibles.scss</code>. Миксин автоматически сгенерирует требуемое количество уровней, на каждом из которых осветлит либо затемнит базовый цвет на указанное значение. По умолчанию настроена 5 ступенчатая схема с шагом в 5%. Подробнее о работе с цветами в Sass можно ознакомиться в <a rel="nofollow" target="_blank" href="https://sass-lang.com/documentation/modules/color">официальной документации</a>.
    </p>
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
    <p class="mt-3">
      Использовать цвета в проекте можно несколькими способами:
    </p>
    <ol class="pl-2">
      <li>
        Применять зарезервированные классы к HTML-элементам,
      </li>
      <li>
        Использовать к нужному классу пользовательские Sass <code>@mixin</code>-ы,
      </li>
      <li>
        Использовать глобальную функцию <code>@color()</code>,
      </li>
      <li>
        Использовать встроенный Sass модуль <code>map.get()</code> для прямого доступа к картам цветов.
      </li>
    </ol>
    <p>Остановимся подробнее на каждом из них.</p>
    <h3>
      Использование зарезервированных классов
    </h3>
    <p>
      Для использования цветов в HTML-документе используйте классы вида <code>bg-${color}</code>, <code>clr-${color}</code> и <code>fill-${color}</code> для придания нужного цвета фону, тексту и заливке SVG-элемента соответственно. В переменную <code>${color}</code> можно подставлять как любой цвет из библиотеки цветов, так и любой цвет темы. При необходимости вы можете указать модификатор <code>-light-${level}</code> или <code>-dark-${level}</code> для уточнения уровня цвета. Вот как это выглядит:
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
    <p>Мы настоятельно рекомендуем использовать этот способ как можно чаще, т.к. это сильно сокращает количество CSS кода. Предпочительней использовать по максимуму классы с уже описанными свойствами, чем генерировать новые.</p>
    <CodeExample :language="'markup'">
      <template v-slot:snippet>
        {{ codeExamples.colors.classnamesVsSass }}
      </template>
    </CodeExample>
    <h3>
      Использование пользовательских Sass миксинов
    </h3>
    <p>
      Мы подготовили ряд Sass миксинов для использования цветов в таблице стилей. Ознакомиться с ними можно файле <code>_mixins.scss</code>. Практика показывает, что чаще всего возникает необходимость изменить цвет фона, текста или заливки SVG элемента. Именно для этих целей подготовлены миксины <code>@background</code>, <code>@color</code> и <code>@fill</code>. Подробнее о работе с <code>@mixin</code> и <code>@include</code> можно ознакомиться в <a rel="nofollow" target="_blank" href="https://sass-lang.com/documentation/at-rules/mixin">официальной документации</a>.
    </p>
    <p>
      Для каждого из трёх миксинов работает одинаковый синтаксис: <code>@mixin {mixinName}($name, $style: false, $rate: false)</code>. Аргумент <code>$name</code> обязателен и может быть названием цвета из обеих карт <code>$colors</code> и <code>$theme-colors</code>. Следующие далее аргументы не обязательны и обозначают отклонение уровня выбранного цвета. Возможные аргументы <code>$style</code> — это <code>'light'</code> и <code>'dark'</code>. В аргумент <code>$rate</code> подставляется любой из уровней карты <code>$levels</code>.
    </p>
    <p>В случае с ахроматическими цветами достаточно лишь указывать в качестве названия цвета <code>$name: 'shade'</code> и его уровень, зависящий от количества оттенков серого, заданного в переменной <code>$shades</code> в файле <code>_varaibles.scss</code>.</p>
    <p>
      Вот несколько примеров использования наших миксинов:
    </p>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.sassMixins }}
      </template>
    </CodeExample>
    <h3>
      Использование глобальной функции @color
    </h3>
    <p class="example">
      Порой подготовленных нами миксинов для изменения фона, цвета текста и заливки SVG бывает недостаточно. Для таких случаев у вас есть возможность использовать глобальную функцию <code>@color($name, $style: false, $rate: false)</code>. Функция очень похожа на вышеописанный миксин, однако лишь возвращает цвет, заданный аргументами. Вот примеры использования функции:
    </p>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.colorFunction }}
      </template>
    </CodeExample>
    <h3>
      Доступ к картам цветов через модуль map-get()
    </h3>
    <p>
      Наконец, вы можете воспользоваться встроенным Sass модулем <code>map.get()</code> для прямого доступа к картам <code>$colors</code>, <code>$theme-colors</code> и <code>$levels</code>. Мы, однако, рекомендуем использовать наши миксины и глобальную функцию, так как они выполняют именно то, что вы намереваетесь делать сами. Но выбор, разумеется, за вами. Подробнее о работе с картами Sass можно ознакомиться в <a rel="nofollow" target="_blank" href="https://sass-lang.com/documentation/values/maps">официальной документации</a>.
    </p>
    <p>
      Вот несколько примеров использования карт цветов в NightVue:
    </p>
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
