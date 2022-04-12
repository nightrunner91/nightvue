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
    <p></p>
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
