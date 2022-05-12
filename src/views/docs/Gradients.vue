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
      :id="'gradients-map'"
      :title="'Карта градиентов'" />
    <p>
      В вашем распоряжении имеется карта градиентов <code>$gradients</code>, расположенная в файле <code>_varaibles.scss</code>. По умолчанию в ней, в качестве примера, представлено четыре градиента:
    </p>
    <ol class="pl-2 mb-2">
      <li>
        <p>
          Градиент от основного цвета темы (<code>$primary</code>) к успешному (<code>$success</code>):
        </p>
        <div
          class="gradient-example mb-1 radius-base material-shadow-1"
          :class="`gradient-${gradients[0]}`" />
      </li>
      <li>
        <p>
          Градиент от основного цвета темы (<code>$primary</code>) к такому же, осветлённому на 3 уровня:
        </p>
        <div
          class="gradient-example mb-1 radius-base material-shadow-1"
          :class="`gradient-${gradients[1]}`" />
      </li>
      <li>
        <p>
          Градиент c плавным переходом между цветами <code>$red</code>, <code>$yellow</code> и <code>$blue</code>:
        </p>
        <div
          class="gradient-example mb-1 radius-base material-shadow-1"
          :class="`gradient-${gradients[2]}`" />
      </li>
      <li>
        <p>
          Градиент от цвета <code>$info</code> к прозрачному (transparent):
        </p>
        <div
          class="gradient-example mb-1 radius-base material-shadow-1"
          :class="`gradient-${gradients[3]}`" />
      </li>
    </ol>
    <p>
      В карте цветов <code>$gradients</code> градиенты описаны следующим образом:
    </p>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.gradients.gradientsMap }}
      </template>
    </CodeExample>
    <p>
      Нашей рекомендацией будет именование градиентов в этой карте подобным образом: <code>{color1}_{color2}</code>, т.е., через нижнее подчёркивание. Так, градиент с названием <code>primary_success</code> говорит сам за себя. Если в градиенте необходимо использовать осветлённый либо затемнённый цвет, можно добавить к названию цвета префикс <code>-l${level}</code> или <code>-d${level}</code> соответственно. К примеру, <code>primary-l3_primary</code> — это градиент от основного цвета к основному, осветлённому на три уровня. Разумеется, вы вольны называть градиенты как вам угодно, это носит лишь рекомендационный характер.
    </p>
    <p>
      Разберём подробнее отдельно взятый градиент. Для написания своего придерживайтесь следующей структуры:
    </p>
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
      На выходе миксин сгенерирует кроссбраузерный код, включающий в себя цвет по умолчанию для браузеров, не поддерживающих линейные градиенты, синтаксис для устаревших браузеров (<code>-webkit-linear-gradient</code>) и современный синтаксис.
    </p>
    <Heading
      :tag="'h2'"
      :id="'gradients-usage'"
      :title="'Использование градиентов'" />
    <p class="mt-3">
      Существуют два способа применения градиентов:
    </p>
    <ol class="pl-2">
      <li>
        Применять зарезервированные классы к HTML-элементам,
      </li>
      <li>
        Использовать пользовательский миксин <code>@linear-gradient()</code>,
      </li>
    </ol>
    <Heading
      :tag="'h3'"
      :id="'color-tags'"
      :title="'Зарезервированные классы градиентов в HTML'" />
    <p>
      NightVue автоматически генерирует соответствующий класс вида <code>gradient-${name}</code> при добавлении градиента в карту <code>$gradients</code>. Так, на основе четырёх примеров выше, вам доступны классы <code>gradient-primary_success</code>, <code>gradient-primary-l2_primary</code>, <code>gradient-red_yellow_blue</code> и <code>gradient-info_transparent</code>. Вы можете добавить сгенерированный класс к любому HTML элементу и это применит к нему соотвествующие стили.
    </p>
    
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

      gradients: ['primary_success', 'primary-l3_primary', 'red_yellow_blue', 'info_transparent'],
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
.gradient-example {
  min-width: 100px;
  min-height: 64px;
}
</style>
