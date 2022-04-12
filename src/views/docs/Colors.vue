<template>
  <div>
    <h2 id="colors">Цвета</h2>
    <p>По умолчанию в NightVue предустановлена библиотека из 15 стандартных цветов. Однако, вы можете полностью изменить её либо использовать свою. Список цветов доступен в файле <code>_colors.scss</code>. Из этих базовых цветов далее можно настроить цвета темы.</p>
    <ul class="d-flex list-unstyled colors my-3">
      <li
        v-for="color in defaultColors"
        :key="`color-${color}`"
        class="color mr-75 radius-circle material-shadow-1" />
    </ul>
    <p>
      <pre class="language-css"><code class="language-css">// List of colors defined by user
$colors: (
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
  </div>
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
@import "../../styles/core/grid";
@import "../../styles/core/colors";
@import "../../styles/core/icon";

.color {
  @include icon-size(48);

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      @include background(nth(nth($colors, $i), 1));
    }
  }
}
</style>
