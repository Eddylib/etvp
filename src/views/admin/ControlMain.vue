<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="jumbotron">
    <h1>Hello World!</h1>
    <p>This is the about page of our research center</p>
    <p><a class="btn btn-primary btn-lg" herf="index" role="button">Learn more</a></p>
    <button v-on:click="sendpost()">sendpost</button>

  </div>
</template>

<script>
  var answer;
  import Vue from 'vue';
  import axios from 'axios';
  export default {
    methods: {
      sendpost () {
        var instance = axios.create({
          baseURL: 'http://192.168.1.111:8080/',
          timeout: 3000,
          withCredentials: true,
          headers: {'X-Custom-Header': 'foobar'}
        });
        instance.post('hi', {'firstname': 'baoyu'}).then(function (response) {
          console.log(response.data);
        });
      }
    }
  }
</script>


<style scoped>


</style>
