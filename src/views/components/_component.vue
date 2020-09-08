<template lang="pug">
  div(class='component') 
    //- {{prop1}} {{prop2}}
</template>

<script>
export default {
  name: 'Component-name',
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
};
</script>
