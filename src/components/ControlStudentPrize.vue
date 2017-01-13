<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="btn-group">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" @click="clearInput">
        添加获奖 <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" role="menu" style="width: 500px;">
        <div class="input-group" style="width: 80%;margin-left: 10%">
          <span class="input-group-addon">标题</span>
          <input type="text" class="form-control" placeholder="获奖标题" v-model="inputtitle">
        </div>
        <li class="divider"></li>
        <li class="divider"></li>
        <div  style="width: 100%;text-align: center">
          <button type="button" class="btn btn-default" @click="addPrize()">提交</button>
        </div>
      </ul>
    </div>
    <table width="100%" class="table table-striped" style="margin-top: 30px">
      <thead>
      <tr>
        <th>获奖题目</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in prizelist">
        <!-- 显示 -->
        <td width="80%">{{ item.title }}</td>
        <td>
          <!-- 删除 -->
          <button type="button" class="btn btn-default" @click="delPrize(item.id)">删除</button>
          <!-- 编辑 -->
          <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" @click="fetchInput(item.title, item.path)">
              编辑 <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" style="width: 500px;margin-left: -435px">
              <div class="input-group" style="width: 80%;margin-left: 10%">
                <span class="input-group-addon">标题</span>
                <input type="text" class="form-control" placeholder="演讲标题" v-model="inputtitle">
              </div>
              <li class="divider"></li>
              <li class="divider"></li>
              <div  style="width: 100%;text-align: center">
                <button type="button" class="btn btn-default" @click="modPrize(item.id)">提交</button>
              </div>
            </ul>
          </div>
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
        valuedata: '',
        inputtitle: ''
      }
    },
    methods: {
      fetchInput(title, url) {
        this.$data.inputtitle = title;
        this.$data.inputurl = url;
      },
      clearInput() {
        this.$data.inputtitle = '';
        this.$data.inputurl = '';
      },
      addPrize() {
          let subitem = {
          function: 'add_student',
          student_id: this.$route.query.id,
          title: this.$data.inputtitle
        }
        this.$store.dispatch('MOD_STUDENT_DETAIL_PRIZES', subitem);
      },
      modPrize(prizeid) {
          let subitem = {
          function: 'edit_student',
          id: prizeid,
          student_id: this.$route.query.id,
          title: this.$data.inputtitle
        }
        this.$store.dispatch('MOD_STUDENT_DETAIL_PRIZES', subitem);
      },
      delPrize(prizeid) {
        this.$store.dispatch('DEL_STUDENT_DETAIL_PRIZE', prizeid);
      }
    },
    computed: {
      prizelist: function () {
        return this.$store.state.currStudent.prizes;
      }
    },
    components: {
    },
    mounted() {
      this.$store.dispatch('FETCH_STUDENT_DETAIL_PRIZES', this.$route.query.id);
    }
  }
</script>


<style scoped>


</style>
