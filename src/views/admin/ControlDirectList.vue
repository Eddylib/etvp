<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div>
      <div class="page-header">
        <h1>研究方向 <small>——编辑研究方向</small></h1>
      </div>
      <!-- 添加 -->
      <div class="btn-group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" @click="clearInput">
          增加方向 <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu" style="width: 500px;">
          <div class="input-group" style="width: 80%;margin-left: 10%;">
            <span class="input-group-addon">标题</span>
            <input type="text" class="form-control" placeholder="方向标题" v-model="inputtitle">
          </div>
          <li class="divider"></li>
          <div class="input-group" style="width: 80%;margin-left: 10%">
            <span class="input-group-addon">简介</span>
            <input type="text" class="form-control" placeholder="方向简介" v-model="inputguide">
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
          <th>简介</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.dirlist">
              <!-- 显示 -->
            <td width="15%">{{ item.name }}</td>
            <td width="60%">{{ item.guide }}</td>
            <td>
              <!-- 删除 -->
              <button type="button" class="btn btn-default" @click="delDirect(item.id)">删除</button>
              <!-- 编辑 -->
              <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" @click="fetchInput(item.name, item.guide)">
                  编辑 <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" style="width: 500px;margin-left: -435px">
                  <div class="input-group" style="width: 80%;margin-left: 10%">
                    <span class="input-group-addon">标题</span>
                    <input type="text" class="form-control" placeholder="方向标题" v-model="inputtitle">
                  </div>
                  <li class="divider"></li>
                  <div class="input-group" style="width: 80%;margin-left: 10%">
                    <span class="input-group-addon">简介</span>
                    <input type="text" class="form-control" placeholder="方向简介" v-model="inputguide">
                  </div>
                  <li class="divider"></li>
                  <div  style="width: 100%;text-align: center">
                    <button type="button" class="btn btn-default" @click="modDirect(item.id)">提交</button>
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
    data: function () {
      return {
         inputguide: '',
         inputtitle: ''
      }
    },
    computed: {
      dirlist: function () {
          return this.$store.state.directionList;
      }
    },
    methods: {
      clearInput: function () {
        this.$data.inputtitle = '';
        this.$data.inputguide = '';
      },
      fetchInput: function (title, guide) {
        this.$data.inputtitle = title;
        this.$data.inputguide = guide;
      },
      addDirect: function() {
//        let title = document.getElementById('adddirect-title').value;
//        let guide = document.getElementById('adddirect-guide').value;
        let title = this.$data.inputtitle;
        let guide = this.$data.inputguide;
        let isok = true;
        if(title === '') {
            alert('方向标题不能为空');
          isok = false;
        }
        if(guide === '') {
          alert('方向简介不能为空');
          isok = false;
        }
        if(isok) {
          this.$store.dispatch('ADD_DIRECTION', {name: title, guide: guide})
        }
      },
      delDirect: function (item) {
          this.$store.dispatch('DEL_DIRECTION', item);
      },
      modDirect: function (id) {
        let title = this.$data.inputtitle;
        let guide = this.$data.inputguide;
        let isok = true;
        if(title === '') {
          alert('方向标题不能为空');
          isok = false;
        }
        if(guide === '') {
          alert('方向简介不能为空');
          isok = false;
        }
        if(isok) {
            this.$store.dispatch('EDIT_DIRECTION', {id: id, name: title, guide: guide})
        }
      }
    },
    mounted() {
      this.$store.dispatch('FETCH_DIRECTION_LIST');
    }
  }
</script>


<style scoped>


</style>
