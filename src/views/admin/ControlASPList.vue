<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div>
      <div class="page-header">
        <h1>{{ headtitle }} <small>——{{ headsubtitle }}</small></h1>
      </div>
      <!-- 添加 -->
      <div>
        <p><a class="btn btn-default" :href="'adminaspdetail?request=' + ruquestparm + '&method=add'" role="button">{{ addbuttontext }}</a></p>
      </div>
      <table width="100%" class="table table-striped" style="margin-top: 30px">
        <thead>
        <tr>
          <th>{{ listhead }}</th>
          <th>图片</th>
          <th></th>
          <th>删除</th>
          <th>编辑</th>
          <th v-if="$route.query.request === 'project'" width="10%">管理成员</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in contentList">
          <!-- 显示 -->
          <td  style="margin-left: 70%">{{ item.title }}</td>
          <td><img :src="item.picture" :alt="item.picture" width="100%"></td>
          <td width="45%"></td>
          <td>
            <!-- 删除 -->
            <button type="button" class="btn btn-default" @click="delASP(item)">删除</button>
          </td>
            <!-- 编辑 -->
          <td>
            <p><a class="btn btn-default" :href="'adminaspdetail?request=' + ruquestparm + '&method=modify&id=' + item.id + '&picture=' + item.picture" role="button">编辑</a></p>
          </td>
          <td v-if="$route.query.request === 'project'">
            <p><a class="btn btn-default" :href="'projectmember?id=' + item.num" role="button">编辑</a></p>
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
  import pagebar from '../../components/PageBar.vue'
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
        return {}
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
      delASP: function (item) {
//        {function: 'delete_list',
//          classify: item.classify,
//            id: item.id});
        let subitem = {};
        let isok = false;
        let debug = false;
        subitem = {
          id: item.id
        };
        if(this.$data.ruquestparm === 'activity') {
          isok = !debug;
          subitem.classify = 'activity';
        }else if(this.$data.ruquestparm === 'study') {
          isok = !debug;
          subitem.classify = 'science';
        }else if(this.$data.ruquestparm === 'project') {
          isok = !debug;
          subitem.classify = 'project';
        }
        if(isok) {
            this.$store.dispatch('DEL_ASP', subitem);
        }else {
          if(debug) {
            let data = '';
            subitem.id = this.$route.query.id;
            for(let index in subitem) {
              data = data + index + ':' + subitem[index] + '\n';
            }
            alert(data);
          }else {
            alert("add or edit article error!");
          }
        }
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
        this.$data.headtitle = '实验室动态管理';
        this.$data.headsubtitle = '实验室动态管理';
        this.$data.addbuttontext = '增加动态';
        this.$data.listhead = '动态';
        this.$store.dispatch('FETCH_LIST_ACTIVITY', 0);
      } else if(argumentin === 'study') {
        this.$data.headtitle = '实验室科研管理';
        this.$data.headsubtitle = '实验室科研管理';
        this.$data.addbuttontext = '增加科研';
        this.$data.listhead = '科研';
        this.$store.dispatch('FETCH_LIST_SCIENCE', 0);
      } else if(argumentin === 'project') {
        this.$data.headtitle = '实验室项目管理';
        this.$data.headsubtitle = '实验室项目管理';
        this.$data.addbuttontext = '增加项目';
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
