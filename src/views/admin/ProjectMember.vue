<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="page-header">
      <h1>项目成员管理<small>——编辑项目成员</small></h1>
    </div>
    <h3>项目内老师</h3>
    <div>
      <!--项目成员（老师）-->
      <table class="table table-striped" width="40%">
        <thead>
          <th>老师</th>
          <th>操作</th>
        </thead>
        <tbody>
          <tr v-for="n in 3">
            <td >
              <a href="http://www.baidu.com">老师{{ n }}</a>
            </td>
            <td>
              <button type="button" class="btn btn-default" @click="delDirect(item)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!--项目成员（学生）-->
      <!--非项目成员（老师）-->
      <!--非项目成员（学生）-->
    </div>
    <h3>项目内学生</h3>
    <div>
      <!--项目成员（学生）-->
      <table class="table table-striped" width="40%">
        <thead>
        <th>学生</th>
        <th>操作</th>
        </thead>
        <tbody>
        <tr v-for="n in 3">
          <td >
            <a href="/student">学生{{ n }}</a>
          </td>
          <td>
            <button type="button" class="btn btn-default" @click="delDirect(item)">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <!--非项目成员（老师）-->
      <!--非项目成员（学生）-->
    </div>
    <h3>项目外老师</h3>
    <div>
      <!--非项目成员（老师）-->
      <table class="table table-striped" width="40%">
        <thead>
        <th>学生</th>
        <th>操作</th>
        </thead>
        <tbody>
        <tr v-for="n in 3">
          <td >
            <a href="http://www.baidu.com">老师{{ n }}</a>
          </td>
          <td>
            <button type="button" class="btn btn-default" @click="delDirect(item)">添加</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <h3>项目外学生</h3>
    <div>
      <!--非项目成员（学生）-->
      <table class="table table-striped" width="40%">
        <thead>
        <th>学生</th>
        <th>操作</th>
        </thead>
        <tbody>
        <tr v-for="n in 3">
          <td >
            <a href="/student">学生{{ n }}</a>
          </td>
          <td>
            <button type="button" class="btn btn-default" @click="delDirect(item)">添加</button>
          </td>
        </tr>
        </tbody>
      </table>
      <!--非项目成员（老师）-->
      <!--非项目成员（学生）-->
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    methods: {
    }
  }
</script>


<style scoped>
</style>
