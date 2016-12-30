<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <!--message-->
    <div style="background-color:whitesmoke;">
      <table width="100%">
        <tbody>
        <td width="30%">
          <img class="img-circle" width="150px" height="200px" style="margin: 10%"
               src="http://m.tiebaimg.com/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=b811845e8d11bedb605c125b83a38764&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Ff9dcd100baa1cd115ef8d036bb12c8fcc3ce2d5d.jpg">
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
              <tr><h4>入学年份</h4></tr>
              <tr><h4>毕业去向</h4></tr>
            </td>
            <td>
              <tr><h4>姓名</h4></tr>
              <tr><h4>姓名</h4></tr>
              <tr><h4>姓名</h4></tr>
              <tr><h4>姓名</h4></tr>
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
      <ul v-for="n in 10">报告{{n}}</ul>
    </ol>
    <!--获奖-->
    <h3>获奖</h3>
    <ol>
      <ul v-for="n in 10">获奖{{n}}</ul>
    </ol>
    <!--论文-->
    <h3>论文</h3>
    <ol>
      <ul v-for="n in 10">获奖{{n}}</ul>
    </ol>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    methods: {}
  }
</script>

<style scoped>

</style>
