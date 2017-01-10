<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="page-header">
      <h1>学生管理<small>——管理学生信息</small></h1>
    </div>
    <div>
      <p><a class="btn btn-default" href="adminstudentdetail?method=add" role="button">添加学生</a></p>
    </div>
    <div>
      <h3>在校生</h3>
      <table width="100%" class="table table-striped">
        <thead>
        <th style="text-align: center">姓名</th>
        <th style="text-align: center">学号</th>
        <th style="text-align: center">入学年份</th>
        <th style="text-align: center">删除</th>
        <th style="text-align: center">编辑</th>
        </thead>
        <tbody>
        <tr v-for="item in linschoolstudents">
          <td width="10%" style="text-align: center">{{item.name}}</td>
          <td width="10%" style="text-align: center">{{item.id}}</td>
          <td width="60%" style="text-align: center">{{item.time}}</td>
          <td width="10%" style="text-align: center"><button type="button" class="btn btn-default" @click="delDirect(item)">删除</button></td>
          <td width="10%" style="text-align: center">
            <p>
              <a class="btn btn-default" :href="'adminstudentdetail?&method=modify&id=' + item.id" role="button">编辑</a>
            </p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h3>毕业生</h3>
      <table width="100%" class="table table-striped">
        <thead>
        <th style="text-align: center">姓名</th>
        <th style="text-align: center">学号</th>
        <th style="text-align: center">入学年份</th>
        <th style="text-align: center">删除</th>
        <th style="text-align: center">编辑</th>
        </thead>
        <tbody>
        <tr v-for="item in loutschoolstudents">
          <td width="10%" style="text-align: center">{{item.name}}</td>
          <td width="10%" style="text-align: center">{{item.id}}</td>
          <td width="60%" style="text-align: center">{{item.time}}</td>
          <td width="10%" style="text-align: center"><button type="button" class="btn btn-default" @click="delDirect(item)">删除</button></td>
          <td width="10%" style="text-align: center">
            <p>
              <a class="btn btn-default" :href="'adminstudentdetail?&method=modify&id=' + item.id" role="button">编辑</a>
            </p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  var answer;
  import Vue from 'vue';
  export default {
    data: function() {
        return {}
    },
    computed: {
      linschoolstudents: function() {
        return this.$store.state.listStudents;
      },
      loutschoolstudents: function() {
        return this.$store.state.listGraduates;
      },
      lteachers: function() {
        return this.$store.state.listTeachers;
      }
    },
    mounted: function () {
      this.$store.dispatch('FETCH_STUDENTS', 'inschool');
      this.$store.dispatch('FETCH_STUDENTS', 'outschool');
      this.$store.dispatch('FETCH_TEACHERS');
    },
    methods: {
    },
    components: {
    }
  }
</script>


<style scoped>


</style>
