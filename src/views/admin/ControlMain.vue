<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="page-header">
      <h1>实验室控制面板 <small>——信息管理</small></h1>
    </div>
    <div>
      <table>
        <td style="margin-left: 100px">
          <tr ><p><a class="btn btn-primary btn-lg" href="adminmasterlist" role="button">研究方向</a></p></tr>
          <tr><p><a class="btn btn-primary btn-lg" href="adminstudentlist" role="button">学生管理</a></p></tr>
          <tr><p><a class="btn btn-primary btn-lg" href="index" role="button">导师管理</a></p></tr>
        </td>
        <td style="margin-left: 100px">
          <tr ><p><a class="btn btn-primary btn-lg" href="adminasplist?request=activity" role="button">动态管理</a></p></tr>
          <tr><p><a class="btn btn-primary btn-lg" href="adminasplist?request=study" role="button">科研管理</a></p></tr>
          <tr><p><a class="btn btn-primary btn-lg" href="adminasplist?request=project" role="button">项目管理</a></p></tr>
        </td>
        <td style="margin-left: 100px">
          <tr ><p><a class="btn btn-primary btn-lg" href="adminhomeslide" role="button">首页滑块管理</a></p></tr>
        </td>
      </table>
    </div>


  </div>
</template>

<script>
  var answer;
  import Vue from 'vue';
  export default {
    methods: {
    }
  }
</script>


<style scoped>


</style>
