<template lang='pug'>
  header(class='header')
    //- router-link(to='/') Home
    //- router-link(to='/page') Page
</template>

<script>
export default {
  name: 'Header',
  props: {
    prop1: String,
    prop2: Boolean
  },
  data() {
    return {
      foo: 'foo'
    }
  },
  methods: {

  },
  mounted() {
    //console.log(this.prop1, this.prop2);
  }
}
</script>