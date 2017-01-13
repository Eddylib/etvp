<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <!--message-->
    <div style="background-color:whitesmoke;">
      <table width="100%">
        <tbody>
        <td width="30%">
          <img class="img-circle" width="150px" height="200px" style="margin: 10%"
               :src="stupicture">
        </td>
        <td width="50%">
          <table class="table">
            <thead>
            <th>基本信息</th>
            </thead>
            <tbody>

            <td width="30%">
              <tr><h4>姓名</h4></tr>
              <tr><h4>方向</h4></tr>
              <tr><h4>年级</h4></tr>
              <tr><h4>邮箱</h4></tr>
              <tr><h4>毕业去向</h4></tr>
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

    <h3>总结报告</h3>
    <ol>
      <ul v-for="item in stuspeeches"><a :href="item.path">{{ item.title }}</a></ul>
    </ol>
    <!--获奖-->
    <h3>获奖</h3>
    <ol>
      <ul v-for="item in stuprizes">{{ item.title }}</ul>
    </ol>
    <!--论文-->
    <h3>论文</h3>
    <ol>
      <ul v-for="item in stuthesises"><a :href="item.path">{{ item.title }}</a></ul>
    </ol>
    <h3>项目</h3>
    <ol>
      <ul v-for="item in stuprojects"><a :href="'index'">{{ item.title }}</a></ul>
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
