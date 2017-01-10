<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div style="text-align: center">
      <table width="100%">
        <thead>
          <th width="20%"></th>
          <th width="80%"></th>
        </thead>
        <tbody>
          <tr>
            <td>
              <h3>头像</h3>
            </td>
            <td>
              <div class="col-sm-10">
                <input class="form-control" id="inputpicture" v-model:value="pictureurl" placeholder="请输入头像URL">
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img :src="pictureurl" :alt="pictureurl" width="50%" height="150">
            </td>
            <td><table class="table" width="100%">
              <thead>
                <th width="10%"></th>
                <th width="100%"></th>
              </thead>
              <tbody>
              <td>
                <tr><p>姓名</p></tr>
                <tr><p>学号</p></tr>
                <tr><p>邮箱</p></tr>
                <tr><p>入学时间</p></tr>
                <tr><p>工作去向</p></tr>
                <tr><p>方向</p></tr>
              </td>
              <td>
                <tr><input class="form-control" id="inputname"   placeholder="姓名"></tr>
                <tr><input class="form-control" id="inputid"   placeholder="学号"></tr>
                <tr><input class="form-control" id="inputemail"   placeholder="邮箱"></tr>
                <tr><input class="form-control" id="inputtime"   placeholder="入学时间"></tr>
                <tr><input class="form-control" id="inputwork"   placeholder="工作去向（未毕业请填“--”）"></tr>
                <tr>
                  <select style="width: 500px" class="selectpicker">
                  <option value ="1">Volvo</option>
                  <option value ="2">Saab</option>
                  <option value="3">Opel</option>
                  <option value="4">Audi</option>
                </select> </tr>
              </td>
              </tbody>
            </table></td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-default" @click="delDirect(item)">提交</button>
    </div>
    <div v-if="this.$route.query.method=== 'modify'"> hello world</div>
  </div>
</template>

<script>
  var answer;
  import Vue from 'vue';
  export default {
    data: function() {
      return {valuedata: '', pictureurl: ''}
    },
    methods: {
    },
    components: {
    }
  }
</script>


<style scoped>


</style>
