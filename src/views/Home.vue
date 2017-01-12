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
            <tr v-for="item in activityList">
              <td width="30%">
                <img class="home-news-pict" :src="item.picture">
              </td>
              <td width="60%">
                <table>
                  <a class="things-title" :href="'aspdetail?request=activity&id=' + item.id" style="color: #333333">{{ item.title }}</a>
                  <p>{{ item.guide }}</p>
                </table>
              </td>
              <td>
                <table>
                  <span class="label label-default">{{ new Date(item.time).toLocaleDateString() }}</span>
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
            <tr v-for="item in projectList">
              <td width="30%">
                <img class="home-news-pict" :src="item.picture">
              </td>
              <td width="60%">
                <table>
                  <a class="things-title" :href="'aspdetail?request=project&id=' + item.id" style="color: #333333">{{ item.title }}</a>
                  <p>{{ item.guide }}</p>
                </table>
              </td>
              <td>
                <table>
                  <span class="label label-default">{{ new Date(item.time).toLocaleDateString() }}</span>
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
      this.$store.dispatch('FETCH_HOME_LIST', 'activity');
      this.$store.dispatch('FETCH_HOME_LIST', 'project');
    },
    watch: {},
    computed: {
      activityList: function () {
          return this.$store.state.homeActivities;
        },
      projectList: function () {
        return this.$store.state.homeProjects;
      },
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
