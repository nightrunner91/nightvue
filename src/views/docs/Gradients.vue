<template>
  <!-- eslint-disable vue/max-attributes-per-line -->
  <section>
    <Heading
      :tag="'h1'"
      :id="'gradients'"
      :title="'Градиенты'" />
    <p>
      Работа с линейными градиентами в CSS порой бывает неудобной. Для этого в NightVue для вас подготовлены инструменты для упрощения этого процесса. Работа с градиентами не сильно отличается от работы с цветами, о которых мы говорили в предыдущем разделе. За подробностями о синтаксисе и особенностях CSS градиентов обращайтесь к <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient">MDN документации</a>.
    </p>
    <Heading
      :tag="'h2'"
      :id="'gradients-maps'"
      :title="'Карты градиентов'" />
    <p>
      В вашем распоряжении имеется карта градиентов <code>$gradients</code>, расположенная в файле <code>_varaibles.scss</code>. По умолчанию в ней, в качестве примера, представлено три градиента:
    </p>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.gradients.gradientsMap }}
      </template>
    </CodeExample>
    <p>
      Нашей рекомендацией будет именование градиентов в этой карте подобным образом: <code>{color1}_{color2}</code>, т.е., через нижнее подчёркивание. Так, градиент с названием <code>primary_success</code> говорит сам за себя. Если в градиенте необходимо использовать осветлённый либо затемнённый цвет, можно добавить к названию цвета префикс <code>-l${level}</code> или <code>-d${level}</code> соответственно. К примеру, <code>primary_primary-l2</code> — это градиент от основного цвета к основному, осветлённому на два уровня. Разумеется, вы вольны называть градиенты как вам угодно, это носит лишь рекомендационный характер.
    </p>
    <p>Для написания своего градиента придерживайтесь следующей структуры:</p>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.gradients.gradientDetails }}
      </template>
    </CodeExample>
    <p>
      В параметр <code>direction</code> можно подставить:
    </p>
    <ul class="pl-2">
      <li>
        <span class="font-weight-500">Ключевое слово</span>: <code>to top</code>, <code>to top right</code>, <code>to right</code>, <code>to bottom right</code>, <code>to bottom</code>, <code>to bottom left</code>, <code>to left</code>, <code>to left top</code>,
      </li>
      <li>
        <span class="font-weight-500">Числовое значение</span> в <code>deg</code>, <code>rad</code>, <code>grad</code> или <code>turn</code>.
      </li>
    </ul>
    <p>
      В параметры <code>fallback</code> и <code>list</code> необходимо подставлять цвета из доступных карт цветов <code>$colors</code>, <code>$grays</code> или <code>$theme-colors</code>, используя встроенный модуль Sass <code>map-get()</code>.
    </p>
    <p>
      На выходе миксин сгенерирует кроссбраузерный код, включающий в себя цвет по умолчанию для браузеров, не поддерживающих линейные градиенты, синтаксис для устаревших браузеров (<code>-webkit-linear-gradient</code>) и современный синтаксис. Вот несколько примеров использования миксина:
    </p>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.gradients.gradientGenerator }}
      </template>
    </CodeExample>
  </section>
</template>

<script>
import CodeExample from '@/components/CodeExample'
import Heading from '@/components/Heading'
import { codeExamples } from './code_examples'

export default {
  name: 'Gradients',
  components: { CodeExample, Heading },
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
