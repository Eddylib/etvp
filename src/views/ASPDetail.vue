<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="page-header">
      <h1>{{ headtitleType }}<small>——{{ headsubtitle }}</small></h1>
    </div>

    <div v-html="contentinfocontent" style="margin-top:50px;width: 90%;margin-left: 5%"></div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import editor from '../components/ArticleEditor.vue';
  export default {
    data() {
        return {
            headtitleType: '',
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
      },
      headsubtitle: function () {
        return this.$store.state.currArticle.title;
      }
    },
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
        item.id = this.$route.query.id;
        this.$store.dispatch('FETCH_ASP_DETAIL', item);
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
