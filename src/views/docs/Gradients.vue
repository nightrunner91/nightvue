<template>
  <!-- eslint-disable vue/max-attributes-per-line -->
  <section>
    <Heading
      :tag="'h1'"
      :id="'gradient'"
      :title="'Градиенты'" />
    <p>
      В NightVue для вас подготовлены инструменты для упрощения работы с линейными градиентами. Работать с ними можно почти также как и с цветами. В вашем распоряжении имеется карта градиентов <code>$gradients</code>, расположенная в файле <code>_varaibles.scss</code>. По умолчанию в ней, в качестве примера, представлено три градиента:
    </p>
    <CodeExample :language="'css'">
      <template v-slot:snippet>
        {{ codeExamples.colors.sassMaps }}
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
