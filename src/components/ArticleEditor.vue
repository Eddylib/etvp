<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="divcenter">
      <div id="editor" type="text/plain" style="width:100%;height:500px;"></div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  const UE = require('UE');// eslint-disable-line
  export default {
    name: 'editorView',
    data() {
        return { editor: null, htmlcontent: {} };
    },
    methods: {
      geteditorcontent() {
        return this.editor.getContent();
      },
      seteditorcontent(str) {
        this.editor.setContent(str);
      },
      printHtml() {
        this.htmlcontent = this.editor.getContent();
      }
    },
    computed: {
        htmlContent() {
            if(this.editor == null) {
              return '';
            } else {
              return this.editor.getContent();
            }
        }
    },
    mounted() {
      this.editor = UE.getEditor('editor');
    },
    destroyed() {
      this.editor.destroy();
    }
  };
</script>
<style scoped>
  .divcenter {
    margin: 0 auto;
    width: 80%;
  }
</style>
