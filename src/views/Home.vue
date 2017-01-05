<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="book-page">
    <div>
      <homeswiper></homeswiper>
    </div>
    <div>
      <table border=0 width="100%" height="100px" style="margin-top:25px">
        <tbody>
        <td width="48%" style="vertical-align: top;">
          <h2>动态</h2>
          <table class="table table-hover">
            <tbody>
            <tr v-for="n in 5">
              <td width="30%">
                <img class="home-news-pict" src="http://www.runoob.com/wp-content/uploads/2014/07/slide3.png">
              </td>
              <td width="60%">
                <table>
                  <a class="things-title" href="/addarticle">hello1</a>
                  <p>hello world</p>
                </table>
              </td>
              <td>
                <table>
                  <span class="label label-default">date</span>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
        </td>
        <td width="48%" style="vertical-align: top;">
          <h2>项目</h2>
          <table class="table table-hover">
            <tbody>
            <tr v-for="h in 5">
              <td width="30%">
                <img class="home-news-pict" src="http://www.runoob.com/wp-content/uploads/2014/07/slide3.png">
              </td>
              <td width="60%">
                <table>
                  <a class="things-title" href="/activity">hello1</a>
                  <p>hello world</p>
                </table>
              </td>
              <td>
                <table>
                  <span class="label label-default">date</span>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
        </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import * as service from '../service';
  import axios from 'axios';
  import homeswiper from '../components/HomeSlider.vue'
  export default {
    data() {
        return {
            msg: "hello"
        };
    },
    mounted() {
    },
    watch: {},
    computed: {
      DUMP: () => {}
    },
    methods: {

      DUMP: function() {}
    },
    components: {
      homeswiper
    }
  }
</script>

<style scoped>


  .book-page {
    margin-left: 5%;
    margin-right: 5%;
  }

  .home-news-pict {
    width: 150px;
    height: 100px;
    margin-top: 1%;
  }
  tr > td:first-child {
    /*width: 100px;*/
  }
</style>
