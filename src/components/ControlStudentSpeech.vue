<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="btn-group">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" @click="clearInput">
        添加演讲 <span class="caret"></span>
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
          <button type="button" class="btn btn-default" @click="addSpeech()">提交</button>
        </div>
      </ul>
    </div>
    <table width="100%" class="table table-striped" style="margin-top: 30px">
      <thead>
      <tr>
        <th>演讲题目</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in speecheslist">
        <!-- 显示 -->
        <td width="80%">{{ item.title }}</td>
        <td>
          <!-- 删除 -->
          <button type="button" class="btn btn-default" @click="delSpeech(item.id)">删除</button>
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
              <div class="input-group" style="width: 80%;margin-left: 10%">
                <span class="input-group-addon">路径</span>
                <input type="text" class="form-control" placeholder="演讲文件路径" v-model="inputurl">
              </div>
              <li class="divider"></li>
              <div  style="width: 100%;text-align: center">
                <button type="button" class="btn btn-default" @click="modSpeech(item.id)">提交</button>
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
        addSpeech() {
// MOD_STUDENT_DETAIL_SPEECHES
//          添加学生演讲
//          {"function":"add_student","condition":"speech","student_id":"(学号)","title":"(题目)","path":"(ppt路径)"}
          let subitem = {
              function: 'add_student',
              student_id: this.$route.query.id,
              title: this.$data.inputtitle,
              path: this.$data.inputurl
          }
          this.$store.dispatch('MOD_STUDENT_DETAIL_SPEECHES', subitem);
        },
        modSpeech(speechid) {
//          修改学生演讲
//          {"function":"edit_student","condition":"speech","id":4,"student_id":"(学号)","title":"(新题目)","path":"(新ppt路径)"}
            let subitem = {
            function: 'edit_student',
            id: speechid,
            student_id: this.$route.query.id,
            title: this.$data.inputtitle,
            path: this.$data.inputurl
          }
          this.$store.dispatch('MOD_STUDENT_DETAIL_SPEECHES', subitem);
        },
        delSpeech(speechid) {
            this.$store.dispatch('DEL_STUDENT_DETAIL_SPEECH', speechid);
        }
    },
    computed: {
      speecheslist: function () {
        return this.$store.state.currStudent.speeches;
      }
    },
    components: {
    },
    mounted() {
        this.$store.dispatch('FETCH_STUDENT_DETAIL_SPEECHES', this.$route.query.id);
    }
  }
</script>


<style scoped>


</style>
