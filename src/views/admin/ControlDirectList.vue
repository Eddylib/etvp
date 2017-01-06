<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div>
      <div class="page-header">
        <h1>研究方向 <small>——编辑研究方向</small></h1>
      </div>
      <!-- 添加 -->
      <div class="btn-group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
          增加方向 <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu" style="width: 500px;">
          <div class="input-group" style="width: 80%;margin-left: 10%;">
            <span class="input-group-addon">标题</span>
            <input type="text" class="form-control" placeholder="方向标题">
          </div>
          <li class="divider"></li>
          <div class="input-group" style="width: 80%;margin-left: 10%">
            <span class="input-group-addon">简介</span>
            <input type="text" class="form-control" placeholder="方向简介">
          </div>
          <li class="divider"></li>
          <div class="input-group" style="width: 100%;text-align: center">
            <button type="button" class="btn btn-default" @click="addDirect()">提交</button>
          </div>
        </ul>
      </div>
      <table width="100%" class="table table-striped" style="margin-top: 30px">
        <thead>
        <tr>
          <th>方向名</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.dirlist">
              <!-- 显示 -->
            <td width="60%">{{ item.num }}</td>
            <td>
              <!-- 删除 -->
              <button type="button" class="btn btn-default" @click="delDirect(item)">删除</button>
              <!-- 编辑 -->
              <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                  编辑 <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" style="width: 500px;margin-left: -435px">
                  <div class="input-group" style="width: 80%;margin-left: 10%">
                    <span class="input-group-addon">标题</span>
                    <input type="text" class="form-control" placeholder="方向标题">
                  </div>
                  <li class="divider"></li>
                  <div class="input-group" style="width: 80%;margin-left: 10%">
                    <span class="input-group-addon">简介</span>
                    <input type="text" class="form-control" placeholder="方向简介">
                  </div>
                  <li class="divider"></li>
                  <div  style="width: 100%;text-align: center">
                    <button type="button" class="btn btn-default" @click="modDirect(item)">提交</button>
                  </div>
                </ul>
              </div>
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
    }
  }
</script>


<style scoped>


</style>
