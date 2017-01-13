<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div>
      <table width="100%" style="display: inline">
        <thead>
        <th></th>
        <th></th>
        </thead>
        <tbody>
        <td width="10%">
          <tr>姓名</tr>
          <tr>工号</tr>
          <tr>Email</tr>
          <tr>头像</tr>
          <tr>主页</tr>
          <tr>方向</tr>
        </td>
        <td >
          <tr><input class="form-control"  v-model="inputname" placeholder="姓名"></tr>
          <tr><input class="form-control"  v-model="inputid" placeholder="工号"></tr>
          <tr><input class="form-control"  v-model="inputemail" placeholder="Email"></tr>
          <tr><input class="form-control"  v-model="inputpicture" placeholder="头像图片链接"></tr>
          <tr><input class="form-control"  v-model="inputweb" placeholder="主页地址"></tr>
          <tr>
            <select style="width: 500px" v-model="selectdirection">
              <option v-for="item in directionlist" :value="item.id">{{ item.name }}</option>
            </select>
          </tr>
        </td>
        </tbody>
      </table>
      <button style="display: inline" type="button" class="btn btn-default" @click="addTeacher()">添加老师</button>
    </div>
    <div>
      <table class="table" width="100%" style="margin-top: 30px">
        <thead>
          <th width="10%">姓名</th>
          <th width="50%">研究方向</th>
          <th width="10%">删除</th>
        </thead>
        <tbody>
          <tr v-for="item in teacherlist">
            <td>
              {{ item.name }}
            </td>
            <td>
              {{ item.direction }}
            </td>
            <td>
              <button style="display: inline" type="button" class="btn btn-default" @click="delTeacher(item.id)">删除</button>
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
    data: function() {
      return {
          selectdirection: '',
          inputname: '',
          inputpicture: '',
          inputweb: '',
          inputid: '',
        inputemail: ''}
    },
    methods: {
//      name: item.name,
//      id: item.id,
//      email: item.email,
//      homepage: item.homepage,
//      picture: item.picture,
//      direction_id: item.direction_id});
        addTeacher: function () {
//          ADD_TEACHERS
          let subitem = {
              id: this.$data.inputid,
              name: this.$data.inputname,
              email: this.$data.inputemail,
              homepage: this.$data.inputweb,
              picture: this.$data.inputpicture,
              direction_id: this.$data.selectdirection
          }
          this.$store.dispatch('ADD_TEACHERS', subitem);
        },
        delTeacher: function (itemid) {
          this.$store.dispatch('DEL_TEACHERS', itemid);
        }
    },
    components: {
    },
    computed: {
      teacherlist: function () {
        return this.$store.state.listTeachers;
      },
      directionlist: function () {
        return this.$store.state.directionList;
      }
    },
    mounted() {
      this.$store.dispatch('FETCH_TEACHERS');
      this.$store.dispatch('FETCH_DIRECTION_LIST');
    }
  }
</script>


<style scoped>


</style>
