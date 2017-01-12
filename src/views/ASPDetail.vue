<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="page-header">
      <h1>{{ headtitleType }}<small>——{{ headsubtitle }}</small></h1>
    </div>
    <table>
      <td width="70%">
        <div  v-html="contentinfocontent" style="background-color: #f1f1f1; width: 90%; margin-top:50px;margin-left: 5%;" ></div>
      </td>
      <td  width="30%"><table class="table table-striped" style="margin-top: 30px;margin-left: 50px">
        <thead>
        <th><h3>最近{{ headtitleType }}</h3></th>
        </thead>
        <tbody>
        <tr v-for="item in contentList" >
          <!-- 显示 -->
          <a :href="'aspdetail?request=' + ruquestparm + '&id=' + item.id" style="color: #333333;">
            <h4>{{ item.title }}</h4>
          </a>
        </tr>
        </tbody>
      </table></td>
    </table>

    <div>

    </div>
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
            articlecontent: '',
          ruquestparm: ''
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
      },
      contentList: function () {
        if(this.$data.ruquestparm === 'activity') {
          return this.$store.state.listActivity;
        }else if(this.$data.ruquestparm === 'project') {
          return this.$store.state.listProject;
        }else if(this.$data.ruquestparm === 'science') {
          return this.$store.state.listScience;
        }
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
        this.$data.ruquestparm = argumentin;
        let item = {};
        if(argumentin === 'activity') {
          this.$data.headtitleType = '动态';
          item.classify = 'activity';
          this.$store.dispatch('FETCH_LIST_ACTIVITY', 0);
        } else if(argumentin === 'study') {
          this.$data.headtitleType = '科研';
          item.classify = 'science';
          this.$store.dispatch('FETCH_LIST_SCIENCE', 0);
        } else if(argumentin === 'project') {
          this.$data.headtitleType = '项目';
          item.classify = 'project';
          this.$store.dispatch('FETCH_LIST_PROJECT', 0);
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
