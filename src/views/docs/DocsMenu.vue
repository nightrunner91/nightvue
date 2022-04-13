<template>
  <section>
    <h1>Документация</h1>
    <ul class="list-unstyled">
      <li
        v-for="item, index in menu"
        :key="`menu-${index}`"
        class="h4 my-50">
        <a :href="item.anchor">{{ item.title }}</a>
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

</style>
