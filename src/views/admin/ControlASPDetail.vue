<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="page-header">
      <h1>{{ headtitleMethod + headtitleType }}<small>——{{ headsubtitle }}</small></h1>
    </div>
    <div>
    </div>
    <div style="margin-left: 10%">
      <table width="100%" style="border-collapse:separate; border-spacing:0px 30px;">
        <tr>
          <td width="11%" style="text-align: center"><h4>标题：</h4></td>
          <td width="90%"><div class="col-sm-10">
            <input class="form-control" id="inputEmail3" placeholder="此标题在外部展示，正文请再次加入标题">
          </div></td>
        </tr>
        <tr>
        <td width="11%" style="text-align: center"><h4>简介：</h4></td>
        <td width="90%"><div class="col-sm-10">
          <textarea class="form-control" id="inputEmail3" placeholder="简介">
        </div></td>
      </tr>
        <tr>
          <td width="11%" style="text-align: center"><h4>图片链接：</h4></td>
          <td width="90%"><div class="col-sm-10">
            <input class="form-control" id="inputEmail3" placeholder="图为科研/项目/活动列表左侧的小图片，宽高比为4:3">
          </div></td>
        </tr>
      </table>
    </div>
    <div>
      <h4 style="margin-left: 10%">正文：</h4>
      <editor></editor>
    </div>
    <div>
      <p style="margin-left: 40%"><a class="btn btn-primary btn-lg" href="adminasplist?request=project" role="button">提交</a></p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import editor from '../../components/ArticleEditor.vue';
  export default {
    data() {
        return {
            headtitleMethod: '',
            headtitleType: '',
            headsubtitle: ''
        }
    },
    methods: {

    },
    mounted() {
        var argumentin = this.$route.query.request;
        if(argumentin === 'activity') {
          this.$data.headtitleType = '动态';
        } else if(argumentin === 'study') {
          this.$data.headtitleType = '科研';
        } else if(argumentin === 'project') {
          this.$data.headtitleType = '项目';
        }
        argumentin = this.$route.query.method;
        if(argumentin === 'add') {
          this.$data.headtitleMethod = '增加';
        } else if(argumentin === 'modify') {
          this.$data.headtitleMethod = '编辑';
        }
        this.$data.headsubtitle = '编辑信息并提交';
    },
    components: {
      editor
    }
  }
</script>


<style scoped>


</style>
