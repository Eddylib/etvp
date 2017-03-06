<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <!--message-->
    <div style="background-color:whitesmoke;">
      <table width="100%">
        <tbody>
        <td width="30%" align="center">
          <img width="150px" height="200px" style="margin: 10%;"
               :src="stupicture">
        </td>
        <td width="50%">
          <table class="table" style="margin-top: 50px">
            <thead>
            <p style="font-size: 25px"><b>基本信息</b></p>
            </thead>
            <tbody>

            <td width="30%">
              <tr><h4><b>姓名</b></h4></tr>
              <tr><h4><b>方向</b></h4></tr>
              <tr><h4><b>年级</b></h4></tr>
              <tr><h4><b>邮箱</b></h4></tr>
              <tr><h4><b>毕业去向</b></h4></tr>
            </td>
            <td>
              <tr><h4>{{ stuname }}</h4></tr>
              <tr><h4>{{ studirect }}</h4></tr>
              <tr><h4>{{ stustate }}</h4></tr>
              <tr><h4>{{ stuemail }}</h4></tr>
              <tr><h4>{{ stuwork }}</h4></tr>
            </td>
            </tbody>
          </table>

        </td>
        </tbody>
      </table>
    </div>
    <!--总结报告-->

    <h3><b>总结报告</b></h3>
    <ol>
      <ul v-for="item in stuspeeches"><a :href="item.path" style="color: black"><i>{{ item.title }}</i></a></ul>
    </ol>
    <!--获奖-->
    <h3><b>获奖</b></h3>
    <ol>
      <ul v-for="item in stuprizes"><i>{{ item.title }}</i></ul>
    </ol>
    <!--论文-->
    <h3><b>论文</b></h3>
    <ol>
      <ul v-for="item in stuthesises"><a :href="item.path" style="color: black"><u><i>{{ item.title }}</i></u></a></ul>
    </ol>
    <h3><b>项目</b></h3>
    <ol>
      <ul v-for="item in stuprojects"><a :href="'index'" style="color: black"><i>{{ item.title }}</i></a></ul>
    </ol>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    computed: {
      stuname: function () {
        return this.$store.state.currStudent.baseInfo.name;
      },
      stustate: function () {
        return this.$store.state.currStudent.baseInfo.state;
      },
      stupicture: function () {
        return this.$store.state.currStudent.baseInfo.picture;
      },
      stuwork: function () {
        return this.$store.state.currStudent.baseInfo.work;
      },
      studirect: function () {
        return this.$store.state.currStudent.baseInfo.direction;
      },
      stuemail: function () {
        return this.$store.state.currStudent.baseInfo.email;
      },
      stuspeeches: function () {
        return this.$store.state.currStudent.speeches;
      },
      stuprojects: function () {
        return this.$store.state.currStudent.projects;
      },
      stuprizes: function () {
        return this.$store.state.currStudent.prizes;
      },
      stuthesises: function () {
        return this.$store.state.currStudent.thesises;
      }
    },
    methods: {},
    mounted: function () {
      this.$store.dispatch('FETCH_STUDENT_DETAIL_BASE_INFO', this.$route.query.id);
      this.$store.dispatch('FETCH_STUDENT_DETAIL_SPEECHES', this.$route.query.id);
      this.$store.dispatch('FETCH_STUDENT_DETAIL_PROJECTS', this.$route.query.id);
      this.$store.dispatch('FETCH_STUDENT_DETAIL_PRIZES', this.$route.query.id);
      this.$store.dispatch('FETCH_STUDENT_DETAIL_THESISES', this.$route.query.id);
    }
  }

</script>

<style scoped>

</style>
