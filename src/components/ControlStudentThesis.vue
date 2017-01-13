<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="btn-group">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" @click="clearInput">
        添加论文 <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" role="menu" style="width: 500px;">
        <div class="input-group" style="width: 80%;margin-left: 10%">
          <span class="input-group-addon">标题</span>
          <input type="text" class="form-control" placeholder="演讲标题" v-model="inputtitle">
        </div>
        <li class="divider"></li>
        <div class="input-group" style="width: 80%;margin-left: 10%">
          <span class="input-group-addon">路径</span>
          <input type="text" class="form-control" placeholder="演讲文件路径" v-model="inputurl">
        </div>
        <li class="divider"></li>
        <div  style="width: 100%;text-align: center">
          <button type="button" class="btn btn-default" @click="addThesis()">提交</button>
        </div>
      </ul>
    </div>
    <table width="100%" class="table table-striped" style="margin-top: 30px">
      <thead>
      <tr>
        <th>论文题目</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in thesisslist">
        <!-- 显示 -->
        <td width="80%">{{ item.title }}</td>
        <td>
          <!-- 删除 -->
          <button type="button" class="btn btn-default" @click="delThesis(item.id)">删除</button>
          <!-- 编辑 -->
          <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" @click="fetchInput(item.title, item.path)">
              编辑 <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" style="width: 500px;margin-left: -435px">
              <div class="input-group" style="width: 80%;margin-left: 10%">
                <span class="input-group-addon">标题</span>
                <input type="text" class="form-control" placeholder="论文标题" v-model="inputtitle">
              </div>
              <li class="divider"></li>
              <div class="input-group" style="width: 80%;margin-left: 10%">
                <span class="input-group-addon">路径</span>
                <input type="text" class="form-control" placeholder="论文文件路径" v-model="inputurl">
              </div>
              <li class="divider"></li>
              <div  style="width: 100%;text-align: center">
                <button type="button" class="btn btn-default" @click="modThesis(item.id)">提交</button>
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
        inputtitle: '',
        inputurl: ''
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
      addThesis() {
          let subitem = {
          function: 'add_student',
          student_id: this.$route.query.id,
          title: this.$data.inputtitle,
          path: this.$data.inputurl
        }
        this.$store.dispatch('MOD_STUDENT_DETAIL_THESISES', subitem);
      },
      modThesis(speechid) {
          let subitem = {
          function: 'edit_student',
          id: speechid,
          student_id: this.$route.query.id,
          title: this.$data.inputtitle,
          path: this.$data.inputurl
        }
        this.$store.dispatch('MOD_STUDENT_DETAIL_THESISES', subitem);
      },
      delThesis(thesisid) {
        this.$store.dispatch('DEL_STUDENT_DETAIL_THESIS', thesisid);
      }
    },
    computed: {
      thesisslist: function () {
        return this.$store.state.currStudent.thesises;
      }
    },
    components: {
    },
    mounted() {
      this.$store.dispatch('FETCH_STUDENT_DETAIL_THESISES', this.$route.query.id);
    }
  }
</script>


<style scoped>


</style>
