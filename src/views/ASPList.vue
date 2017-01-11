<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div>
      <div class="page-header">
        <h1>{{ headtitle }} <small>——{{ headsubtitle }}</small></h1>
      </div>
      <table width="100%" class="table table-striped" style="margin-top: 30px">
        <thead>
        <tr>
          <th><h3>{{ listhead }}</h3></th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in contentList" style="height:  150px;">
          <!-- 显示 -->
          <td width="20%"><img :src="item.picture" :alt="item.picture" width="200" height="150"></td>

          <td width="3%"></td>
          <td  width="80%">
            <tr>
              <a :href="'aspdetail?request=' + ruquestparm + '&id=' + item.id">
                <h4>{{ item.title }}</h4>
              </a>
            </tr>
            <tr>
                <h5>{{ item.guide }}</h5>
            </tr>
          </td>

        </tr>
        </tbody>
      </table>
    </div>
    <pagebar :all="pageamount" v-on:btn-click="btnclick"></pagebar>
  </div>
</template>

<script>
  import Vue from 'vue';
  import pagebar from '../components/PageBar.vue'
  export default {
    data() {
        return {
            headtitle: '',
            headsubtitle: '',
            addbuttontext: '',
            listhead: '',
            ruquestparm: ''
        }
    },
    computed: {
      dirlist: function () {
        return [
          {num: 1},
          {num: 2},
          {num: 3},
          {num: 4},
          {num: 5},
          {num: 6}
        ]
      },
      contentList: function () {
        if(this.$data.ruquestparm === 'activity') {
          return this.$store.state.listActivity;
        }else if(this.$data.ruquestparm === 'project') {
          return this.$store.state.listProject;
        }else if(this.$data.ruquestparm === 'study') {
          return this.$store.state.listScience;
        }
      },
      pageamount: function () {
        return this.$store.state.sumpage;
      }
    },
    methods: {
      addDirect: function() {
        console.log("add direct ");
      },
      delDirect: function (item) {
        console.log("del direct " + item.num);
      },
      modDirect: function (item) {
        console.log("mod direct " + item.num);
      },
      btnclick: function (item) {
        var argumentin = this.$route.query.request;
        if(argumentin === 'activity') {
          this.$store.dispatch('FETCH_LIST_ACTIVITY', item);
        } else if(argumentin === 'study') {
          this.$store.dispatch('FETCH_LIST_SCIENCE', item);
        } else if(argumentin === 'project') {
          this.$store.dispatch('FETCH_LIST_PROJECT', item);
        }
      }
    },
    mounted() {
      var argumentin = this.$route.query.request;
      if(argumentin === 'activity') {
        this.$data.headtitle = '实验室动态';
        this.$data.headsubtitle = '实验室动态';
        this.$data.listhead = '动态';
        this.$store.dispatch('FETCH_LIST_ACTIVITY', 0);
      } else if(argumentin === 'study') {
        this.$data.headtitle = '实验室科研';
        this.$data.headsubtitle = '实验室科研';
        this.$data.listhead = '科研';
        this.$store.dispatch('FETCH_LIST_SCIENCE', 0);
      } else if(argumentin === 'project') {
        this.$data.headtitle = '实验室项目';
        this.$data.headsubtitle = '实验室项目';
        this.$data.listhead = '项目';
        this.$store.dispatch('FETCH_LIST_PROJECT', 0);
      }
      this.$data.ruquestparm = argumentin;
        // you can use current swiper object to do something(swiper methods)
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了

    },
    components: {
      pagebar
    }
  }
</script>


<style scoped>


</style>
