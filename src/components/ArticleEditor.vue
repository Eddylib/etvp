<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="editor">
    <vue-html-editor name="html-editor" :model.sync="text"></vue-html-editor>
    <div style="margin-top:40px">
      <div> The HTML contents are as follows:</div>
      <hr>
      <div >{{text}}</div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  export default {
    data() {
      return {text: "Hello World!"}
    },
    methods: {
    },
    components: {
      "vue-html-editor": require("vue-html-editor")
    }
  }
</script>
<style scoped>
  #app {
    margin: 50px auto;
    width: 800px;
    max-width: 100%;
  }

</style>
