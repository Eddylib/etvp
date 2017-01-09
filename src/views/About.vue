<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="jumbotron">
    <h1>Hello World!</h1>
    <p>This is the about page of our research center</p>
    <p><a class="btn btn-primary btn-lg" herf="index" role="button">Learn more</a></p>
    <input type="text" v-model:value="valuedata">
    <Hello :msgp="valuedata"></Hello>
  </div>
</template>

<script>
  var answer;
  import Vue from 'vue';
  import Hello from '../components/Hello.vue';
  export default {
    data: function() {
        return {valuedata: ''}
    },
    methods: {
    },
    components: {
        Hello
    }
  }
</script>


<style scoped>


</style>
