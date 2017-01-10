<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="page-header">
      <h1>{{ headtitleMethod + headtitleType }}<small>——{{ this.$data.headsubtitle }}</small></h1>
    </div>
    <div>
    </div>
    <div style="margin-left: 10%">
      <table width="100%" style="border-collapse:separate; border-spacing:0px 30px;">
        <tr>
          <td width="11%" style="text-align: center"><h4>标题：</h4></td>
          <td width="90%"><div class="col-sm-10">
            <input class="form-control" id="inputtitle"  :value="contentinfo.title" placeholder="此标题在外部展示，正文请再次加入标题">
          </div></td>
        </tr>
        <tr>
        <td width="11%" style="text-align: center"><h4>简介：</h4></td>
        <td width="90%">
          <div class="col-sm-10">
            <textarea class="form-control" id="inputguide" :value="contentinfo.guide" placeholder="简介"></textarea>
          </div></td>
      </tr>
        <tr>
          <td width="11%" style="text-align: center"><h4>图片链接：</h4></td>
          <td width="90%"><div class="col-sm-10">
            <input class="form-control" id="inputpicture" v-model:value="pictureurl" placeholder="图为科研/项目/活动列表左侧的小图片，宽高比为4:3">
          </div></td>
        </tr>
      </table>
    </div>
    <div>
      <div style="text-align: center">
        <h3>列表图片效果</h3>
        <img :src="pictureurl" :alt="pictureurl" width="200px" height="150px">
      </div>
      <h3 style="margin-left: 10%">正文：</h3>
      <h5 style="margin-left: 10%">(由于技术问题，请点击下面的按钮获取原文内容，也可用它重置)</h5>
      <h5 style="margin-left: 10%">(正文请再次加入标题)</h5>
      <div style="text-align: center;width: 100%;margin-top: 10px">
        <button type="button" class="btn btn-default" @click="retsetContent()" style="width: 50%">重置</button>
      </div>
      <editor ref="editorref" :initialcontent="contentinfocontent"></editor>
    </div>
    <div style="text-align: center;width: 100%;margin-top: 10px">
      <button type="button" class="btn btn-default" @click="submit()" style="width: 30%">提交</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import editor from '../components/ArticleEditor.vue';
  export default {
    data() {
        return {
            headtitleMethod: '',
            headtitleType: '',
            headsubtitle: '',
            methodtype: '',
            requesttype: '',
            pictureurl: '',
            articlecontent: ''
        }
    },
    /*
     condition: item.type,
     title: item.title,
     guide: item.guide,
     picture: item.picture,
     path: item.path
     document.getElementById("input1").value="bbb";
    */
    computed: {
      contentinfo: function () {
          return this.$store.state.currArticle;
      },
      contentinfocontent: function () {
        return this.$store.state.currArticle.url;
      }
    },
//    watch: {
//      contentinfocontent: function (val, oldval) {
//        this.articlecontent = val;
//        this.$children[0].seteditorcontent(val);
//      }
//    },
    methods: {
      submit: function() {
        let subitem = {};
        let isok = false;
        let debug = false;
        subitem = {
          title: document.getElementById("inputtitle").value,
          guide: document.getElementById("inputguide").value,
          picture: document.getElementById("inputpicture").value,
          path: this.$refs.editorref.geteditorcontent()}
        if(this.$data.requesttype === 'activity') {
          isok = !debug;
          subitem.condition = 'activity';
        }else if(this.$data.requesttype === 'study') {
          isok = !debug;
          subitem.condition = 'science';
        }else if(this.$data.requesttype === 'project') {
          isok = !debug;
          subitem.condition = 'project';
        }
        if(isok) {
            if(this.$data.methodtype === 'add') {
              this.$store.dispatch('ADD_ASP', subitem);
            }else if(this.$data.methodtype === 'modify') {
              subitem.id = this.$route.query.id;
              if(subitem.path !== '') {
                this.$store.dispatch('EDIT_ASP', subitem);
              }else {
                  alert('文章内容不能为空')
              }
            }
        }else {
            if(debug) {
              let data = '';
              subitem.id = this.$route.query.id;
              for(let index in subitem) {
                data = data + index + ':' + subitem[index] + '\n';
              }
              alert(data);
            }else {
                alert("add or edit article error!");
            }
        }
      },
      retsetContent: function () {
        this.$refs.editorref.seteditorcontent(this.contentinfocontent);
      }
    },

    mounted() {
        var argumentin = this.$route.query.request;
        let item = {};
        if(argumentin === 'activity') {
          this.$data.headtitleType = '动态';
          item.classify = 'activity';
        } else if(argumentin === 'study') {
          this.$data.headtitleType = '科研';
          item.classify = 'science';
        } else if(argumentin === 'project') {
          this.$data.headtitleType = '项目';
          item.classify = 'project';
        }
        this.$data.requesttype = argumentin;
        argumentin = this.$route.query.method;
        if(argumentin === 'add') {
          this.$data.headtitleMethod = '增加';
          this.$store.commit('CLEAR_CURR_ARTICLE_INFO');
        } else if(argumentin === 'modify') {
          this.$data.headtitleMethod = '编辑';
          /*
           * {function: 'get_article_detail',
           classify: item.classify,
           id: item.id} */
          item.id = this.$route.query.id;
          this.$store.dispatch('FETCH_ASP_DETAIL', item);
        }
        this.$data.headsubtitle = '编辑信息并提交';
        this.$data.methodtype = argumentin;
        this.$data.pictureurl = this.$route.query.picture;
    },
    components: {
      editor
    }
  }
</script>


<style scoped>


</style>
