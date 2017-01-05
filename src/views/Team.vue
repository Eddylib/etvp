<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <!-- teacher -->
    <table width="100%">
      <thead><h1>导师</h1></thead>
      <td width="20%">
        <table>
          <img class="team-mamber-teacher-pict"
               src="http://m.tiebaimg.com/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=b811845e8d11bedb605c125b83a38764&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Ff9dcd100baa1cd115ef8d036bb12c8fcc3ce2d5d.jpg"></tr>
          <tr><p width=100% align="center" style="margin-top: 10px">姓名</p></tr>
          <tr><p width=100% align="center">研究方向</p></tr>
        </table>
      </td>
      <td width="20%">
        <table>
          <img class="team-mamber-teacher-pict"
               src="http://m.tiebaimg.com/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=b811845e8d11bedb605c125b83a38764&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Ff9dcd100baa1cd115ef8d036bb12c8fcc3ce2d5d.jpg"></tr>
          <tr><p width=100% align="center" style="margin-top: 10px">姓名</p></tr>
          <tr><p width=100% align="center">研究方向</p></tr>
        </table>
      </td>
      <td width="20%">
        <table>
          <img class="team-mamber-teacher-pict"
               src="http://m.tiebaimg.com/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=b811845e8d11bedb605c125b83a38764&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Ff9dcd100baa1cd115ef8d036bb12c8fcc3ce2d5d.jpg"></tr>
          <tr><p width=100% align="center" style="margin-top: 10px">姓名</p></tr>
          <tr><p width=100% align="center">研究方向</p></tr>
        </table>
      </td>
      <td width="20%">
        <table>
          <img class="team-mamber-teacher-pict"
               src="http://m.tiebaimg.com/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=b811845e8d11bedb605c125b83a38764&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Ff9dcd100baa1cd115ef8d036bb12c8fcc3ce2d5d.jpg"></tr>
          <tr><p width=100% align="center" style="margin-top: 10px">姓名</p></tr>
          <tr><p width=100% align="center">研究方向</p></tr>
        </table>
      </td>
      <td width="20%">
        <table>
          <img class="team-mamber-teacher-pict" width="70%"
               src="http://m.tiebaimg.com/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=b811845e8d11bedb605c125b83a38764&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Ff9dcd100baa1cd115ef8d036bb12c8fcc3ce2d5d.jpg"></tr>
          <tr><p width=100% align="center" style="margin-top: 10px">姓名</p></tr>
          <tr><p width=100% align="center">研究方向</p></tr>
        </table>
      </td>
    </table>
    <!-- reading students -->
    <table width="90%">
      <thead><h4>在读研究生</h4></thead>
      <tbody width="100%">
      <td width="30%">
        <table class="table table-striped table-hover">
          <thead><p style="text-align: center">研一</p></thead>
          <tbody>
          <tr v-for="n in 10">
            <ul style="text-align: center">adsfasdf</ul>
          </tr>
          </tbody>
        </table>
      </td>
      <td width="30%">
        <table class="table table-striped table-hover">
          <thead><p style="text-align: center">研二</p></thead>
          <tbody>
          <tr v-for="n in 10">
            <ul style="text-align: center">adsfasdf</ul>
          </tr>
          </tbody>
        </table>
      </td>
      <td width="30%">
        <table class="table table-striped table-hover">
          <thead><p style="text-align: center">研三</p></thead>
          <tbody>
          <tr v-for="n in 10">
            <ul style="text-align: center">adsfasdf</ul>
          </tr>
          </tbody>
        </table>
      </td>
      </tbody>
    </table>

    <!-- gratudeate students -->
    <h4>毕业生</h4>
    <div class="row">
      <div class="col-xs-3" v-for="n in 100"><a href="/student"><p style="text-align: center">fafa</p></a></div>
    </div>

  </div>
</template>

<script>
  var answer;
  import Vue from 'vue';
  export default {
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
