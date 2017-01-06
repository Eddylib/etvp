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
          <th>删除</th>
          <th>编辑</th>
          <th v-if="$route.query.request === 'project'" width="10%">管理成员</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in this.dirlist">
          <!-- 显示 -->
          <td width="80%" style="margin-left: 70%">{{ item.num }}</td>
          <td>
            <!-- 删除 -->
            <button type="button" class="btn btn-default" @click="delDirect(item)">删除</button>
          </td>
            <!-- 编辑 -->
          <td>
            <p><a class="btn btn-default" :href="'adminaspdetail?request=' + ruquestparm + '&method=modify&id=' + item.num" role="button">编辑</a></p>
          </td>
          <td v-if="$route.query.request === 'project'">
            <p><a class="btn btn-default" :href="'projectmember?id=' + item.num" role="button">编辑</a></p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
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
      }
    },
    mounted() {
      var argumentin = this.$route.query.request;
      if(argumentin === 'activity') {
        this.$data.headtitle = '实验室动态管理';
        this.$data.headsubtitle = '实验室动态管理';
        this.$data.addbuttontext = '增加动态';
        this.$data.listhead = '动态';
      } else if(argumentin === 'study') {
        this.$data.headtitle = '实验室科研管理';
        this.$data.headsubtitle = '实验室科研管理';
        this.$data.addbuttontext = '增加科研';
        this.$data.listhead = '科研';
      } else if(argumentin === 'project') {
        this.$data.headtitle = '实验室项目管理';
        this.$data.headsubtitle = '实验室项目管理';
        this.$data.addbuttontext = '增加项目';
        this.$data.listhead = '项目';
      }
      this.$data.ruquestparm = argumentin;
    }
  }
</script>


<style scoped>


</style>
