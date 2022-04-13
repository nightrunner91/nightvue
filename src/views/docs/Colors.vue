<template>
  <!-- eslint-disable vue/max-attributes-per-line -->
  <section>
    <div class="h1" id="colors">Цвета</div>
    <h2 id="colors-list">Библиотека цветов</h2>
    <p>По умолчанию в NightVue предустановлена библиотека из 15 стандартных цветов. Разумеется, вы можете полностью изменить её либо использовать свою. Из этих базовых цветов далее можно настроить цвета темы.</p>
    <ul class="d-flex list-unstyled colors my-3">
      <li
        v-for="color in defaultColors"
        :key="`color-${color}`"
        class="color mr-75 radius-circle material-shadow-1" />
    </ul>
    <p>Список цветов доступен в файле <code>_varaibles.scss</code>:</p>
    <p>
      <pre class="language-css mb-3"><code class="language-css">$colors: (
  'black':     #000000,
  'dark':      #343a40,
  'grey':      #E5EBEB,
  'light':     #F9F9F9,
  'white':     #ffffff,
  'red':       #f94144,
  'orange':    #f3722c,
  'amber':     #f8961e,
  'yellow':    #f9c74f,
  'green':     #00B154,
  'turquoise': #43aa8b,
  'pale':      #6A747D,
  'cyan':      #bbadff,
  'blue':      #4361ee,
  'purple':    #682cab,
);</code></pre>
    </p>
    <h2 id="color-levels">
      Уровни цветов
    </h2>
    <p>
      К каждому из цветов применяется система, изменяющая его яркость и насыщенность.
    </p>
    <p>
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
      defaultColors: 15
    }
  },
}
</script>

<style lang="scss">
@import "@/styles/core/globals";

.color {
  @include icon-size(48);

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      @include background(nth(nth($colors, $i), 1));
    }
  }
}
</style>
