<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <select  class="selectpicker" style="display: inline; width:100px;" v-model="selectpage">
      <option v-for="option in sumpages" v-bind:value="option">
        {{ option }}
      </option>
    </select>
    <select  class="selectpicker" style="display: inline; width:500px;" v-model="selectitem">
      <option v-for="option in contentList" v-bind:value="option.id">
        {{ option.title }}
      </option>
    </select>
    <button type="button" class="btn btn-default" @click="addProject()">添加项目</button>
    <table width="100%" class="table table-striped" style="margin-top: 30px">
      <thead>
      <tr>
        <th>项目</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in stuproject">
        <!-- 显示 -->
        <td width="80%">{{ item.title }}</td>
        <td>
          <!-- 删除 -->
          <button type="button" class="btn btn-default" @click="delProject(item.id)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    data: function() {
      return {
          selectpage: 1,
          selectitem: ''}
    },
    methods: {
//      id: item.id,
//      project: item.project
      addProject: function () {
          let subitem = {
            id: this.$route.query.id,
            project: this.$data.selectitem
          };
        if(subitem.project === '') {
            alert("请选择一个项目！")
        } else {
          this.$store.dispatch('ADD_STUDENT_DETAIL_PROJECTS', subitem);
        }
      },
      delProject: function (projid) {
          let subitem = {
            id: projid
          }
          this.$store.dispatch('DEL_STUDENT_DETAIL_PROJECTS', subitem);
      }
    },
    watch: {
      selectpage: function (newv, oldv) {
        this.$store.dispatch('FETCH_LIST_PROJECT', newv);
      }
    },
    components: {
    },
    mounted() {
      this.$store.dispatch('FETCH_LIST_PROJECT', 1);
      this.$store.dispatch('FETCH_STUDENT_DETAIL_PROJECTS', this.$route.query.id);
    },
    computed: {
      contentList: function () {
          return this.$store.state.listProject;
      },
      sumpages: function () {
          return Number(this.$store.state.sumpage);
      },
      stuproject: function () {
          return this.$store.state.currStudent.projects;
      }
    }
  }
</script>


<style scoped>
</style>
