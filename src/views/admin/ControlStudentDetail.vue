<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div style="text-align: center">
      <table width="100%">
        <thead>
          <th ></th>
          <th ></th>
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
            <td style="width: 20%;">
              <img :src="pictureurl" :alt="pictureurl" width="50%" height="150">
            </td>
            <td style="width: 80%;"><table class="table" width="100%">
              <thead>
                <th width="10%"></th>
                <th width="100%"></th>
              </thead>
              <tbody>
              <td style="width: 10%">
                <tr><p>姓名</p></tr>
                <tr><p>学号</p></tr>
                <tr><p>邮箱</p></tr>
                <tr><p>入学时间</p></tr>
                <tr><p>工作去向</p></tr>
                <tr><p>方向</p></tr>
              </td>
              <td style="width: 90%">
                <tr><input class="form-control" id="inputname" v-model="name"  placeholder="姓名"></tr>
                <tr><input class="form-control" id="inputid" v-model="id"  placeholder="学号" :readonly="idreadonly"></tr>
                <tr><input class="form-control" id="inputemail" v-model="email"  placeholder="邮箱"></tr>
                <!--let f = (start,length) => Array.from({length}).map((v,k) => k+start);-->
                <tr><select style="width: 500px" class="selectpicker" v-model="time">
                  <option v-for="item in timeselectable" v-bind:value="item">{{ item }}</option>
                </select> </tr>
                <tr><input class="form-control" id="inputwork" v-model="work"  placeholder="工作去向（未毕业请填“--”）"></tr>
                <tr>
                  <select style="width: 500px" class="selectpicker" v-model="direction">
                    <option v-for="item in directionlist" :value="item.id">{{ item.name }}</option>
                  </select>
                </tr>
              </td>
              </tbody>
            </table></td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-default" @click="editStudent()">提交</button>
    </div>
    <div v-if="this.$route.query.method=== 'modify'">
      <speech></speech>
      <prize></prize>
      <thesis></thesis>
      <project></project>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import speech from '../../components/ControlStudentSpeech.vue'
  import prize from '../../components/ControlStudentPrize.vue'
  import thesis from '../../components/ControlStudentThesis.vue'
  import project from '../../components/ControlStudentProject.vue'
  let arryyear = function (start, length) {
      return Array.from({length}).map((v, k) => -k + start);
  }
  export default {
    data: function() {
      let options = arryyear((new Date()).getFullYear(), 10);
      return {
          name: '',
          id: '',
          email: '',
          time: '',
          work: '',
          direction: '',
          pictureurl: '',
          timeselectable: arryyear((new Date()).getFullYear(), 10)
      }
    },
    watch: {
      baseinfo(newv, oldv) {
          this.$data.name = newv.name;
        this.$data.email = newv.email;
        this.$data.time = newv.time;
        this.$data.work = newv.work;
        this.$data.direction = newv.direction_id;
        this.$data.pictureurl = newv.picture;
      }
    },
    methods: {
      editStudent: function () {
//        ,"name":"(学生名)","id":"(学号)","email":"(email)","time":1234,"work":"(工作去向)","picture":"(照片路径)","direction_id":1
        let subitem = {
            name: this.$data.name,
            id: this.$data.id,
            email: this.$data.email,
            time: this.$data.time,
            work: this.$data.work,
            picture: this.$data.pictureurl,
            direction_id: this.$data.direction
        };
//        modify&id=13130130555
        let method = this.$route.query.method;
        if(method === 'add') {
          subitem.function = 'add_student';
          this.$store.dispatch('MOD_STUDENT_SIMPLE', subitem);
        } else if(method === 'modify') {
          subitem.function = 'edit_student';
          subitem.id = this.$route.query.id;
          this.$store.dispatch('MOD_STUDENT_SIMPLE', subitem);
        }
      }
    },
    computed: {
        directionlist: function () {
          return this.$store.state.directionList;
        },
        baseinfo: function () {
          return this.$store.state.currStudent.baseInfo;
        },
        idreadonly: function () {
          let method = this.$route.query.method;
          if(method === 'add') {
              return false;
          } else if(method === 'modify') {
              return true;
          }
        }
    },
    components: {
      speech: speech, prize: prize, thesis: thesis, project: project
    },
    mounted() {
      this.$store.dispatch('FETCH_DIRECTION_LIST');
//      baseInfo
      let method = this.$route.query.method;
      if(method === 'add') {
      } else if(method === 'modify') {
        this.$store.dispatch('FETCH_STUDENT_DETAIL_BASE_INFO', this.$route.query.id);
          this.$data.id = this.$route.query.id;
      }

    }
  }
</script>


<style scoped>


</style>
