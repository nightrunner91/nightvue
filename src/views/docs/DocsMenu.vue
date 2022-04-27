<template>
  <section class="gradient-docsmenu p-3 radius-large mt-5">
    <h2 class="mt-0 mb-2 clr-white">Содержание</h2>
    <ul class="list-unstyled">
      <li
        v-for="item, index in menu"
        :key="`menu-${index}`"
        class="h4 my-50 clr-white">
        <span class="clr-white mr-50">&#9866;</span>
        <a
          :href="item.anchor"
          class="docsmenu__link">{{ item.title }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'DocsMenu',
  data() {
    return {
      menu: [
        {
          title: 'Разметка',
          anchor: '#grid'
        },
        {
          title: 'Цвета',
          anchor: '#colors'
        },
        {
          title: 'Градиенты',
          anchor: '#gradient'
        },
        {
          title: 'Типография',
          anchor: '#typography'
        },
        {
          title: 'Интервал',
          anchor: '#spacing'
        },
        {
          title: 'Размеры',
          anchor: '#sizing  '
        },
        {
          title: 'Отображение элементов',
          anchor: '#display  '
        },
        {
          title: 'Позиция',
          anchor: '#position'
        },
        {
          title: 'Тени',
          anchor: '#shadows'
        },
        {
          title: 'Закругление',
          anchor: '#radius'
        },
        {
          title: 'Плавность переходов',
          anchor: '#transition'
        },
        {
          title: 'Прозрачность',
          anchor: '#opacity'
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import "@/styles/core/globals";
@import "@/styles/core/_colors";

.docsmenu {
  &__link {
    @include color('white');
    @include transition(all, base, ease);

    &::before {
      display: none;
    }

    &:hover {
      @include color('black');
    }
  }
}
</style>
