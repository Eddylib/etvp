<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <!-- teacher -->
    <h1>导师</h1>
    <table width="100%"><div><div class="col-xs-3" v-for="item in lteachers">
      <table>
        <img class="team-mamber-teacher-pict"
             :src="item.picture"></tr>
        <tr><a :href="item.web"><p width=100% align="center" style="margin-top: 10px">{{item.name}}</p></a></tr>
        <tr><p width=100% align="center">研究方向:{{item.direction}}</p></tr>
      </table>
    </div></div></table>

    <!-- reading students -->
    <div>
      <h4>在读研究生</h4>
    </div>
    <table width="90%">
      <thead>
        <th>研一</th>
        <th>研二</th>
        <th>研三</th>
      </thead>
      <tbody width="100%">
      <td width="30%">
        <table class="table table-striped table-hover">
          <tbody>
          <tr v-for="item in linschoolstudents1">
            <ul style="text-align: center">{{ item.name }}</ul>
          </tr>
          </tbody>
        </table>
      </td>
      <td width="30%">
        <table class="table table-striped table-hover">
          <tbody>
          <tr v-for="item in linschoolstudents2">
            <ul style="text-align: center">{{ item.name }}</ul>
          </tr>
          </tbody>
        </table>
      </td>
      <td width="30%">
        <table class="table table-striped table-hover">
          <tbody>
          <tr v-for="item in linschoolstudents3">
            <ul style="text-align: center">{{ item.name }}</ul>
          </tr>
          </tbody>
        </table>
      </td>
      </tbody>
    </table>

    <!-- gratudeate students -->
    <h4>毕业生</h4>
    <div class="row">
      <div class="col-xs-3" v-for="item in loutschoolstudents"><a href="/student"><p style="text-align: center">{{ item.name }}</p></a></div>
    </div>

  </div>
</template>

<script>
  var answer;
  import Vue from 'vue';
  function checkgrade1(item) {
      let monthup = 8;
      let nowdate = new Date();
      let itemyear = new Date(item.time).getFullYear();
      if(nowdate.getMonth() >= 8) {
        return itemyear === nowdate.getFullYear();
      } else {
        return itemyear === nowdate.getFullYear() - 1;
      }

  }
  function checkgrade2(item) {
    let monthup = 8;
    let nowdate = new Date();
    let itemyear = new Date(item.time).getFullYear();
    if(nowdate.getMonth() >= 8) {
      return itemyear === nowdate.getFullYear() - 1;
    } else {
      return itemyear === nowdate.getFullYear() - 2;
    }
  }
  function checkgrade3(item) {
    let monthup = 8;
    let nowdate = new Date();
    let itemyear = new Date(item.time).getFullYear();
    if(nowdate.getMonth() >= 8) {
      return itemyear === nowdate.getFullYear() - 2;
    } else {
      return itemyear === nowdate.getFullYear() - 3;
    }
  }
  export default {
    computed: {
        linschoolstudents1: function() {
          return this.$store.state.listStudents.filter(checkgrade1);
        },
        linschoolstudents2: function() {
        return this.$store.state.listStudents.filter(checkgrade2);
        },
        linschoolstudents3: function() {
        return this.$store.state.listStudents.filter(checkgrade3);
        },
        loutschoolstudents: function() {
          return this.$store.state.listGraduates;
        },
        lteachers: function() {
          return this.$store.state.listTeachers;
        }
    },
    beforeMount: function () {
      this.$store.dispatch('FETCH_STUDENTS', 'inschool');
      this.$store.dispatch('FETCH_STUDENTS', 'outschool');
      this.$store.dispatch('FETCH_TEACHERS');
    },
    methods: {}
  }
</script>


<style scoped>
  .team-mamber-teacher-pict {
    margin-left: 15%;
    margin-right: 15%;
    width: 70%;
  }

  .team-mamber-teacher-box {
    width: 100%;
    align-content: center;
    alignment: center;
    align-self: center;
  }

  .team-mamber-teacher-box p {
    width: 100%;
    align-content: center;
    alignment: center;
    align-self: center;
  }
</style>
