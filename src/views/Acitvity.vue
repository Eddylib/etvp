<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id>
    <div class="content">
      <ul class="list">
        <li v-for="i in curList">{{ i }}</li>
      </ul>
    </div>
    <pagebar :data-num="pagedata.length" :each="eachPageSize" :visiblepage="visiblepage" v-on:change-page="changePage"></pagebar>
  </div>
</template>

<script>
  var answer;
  import pagebar from '../components/PageBar.vue'
  export default {
    data: function() {
      return{
        cur: 0,
        dataNum: 0,
        eachPageSize: 3,
        visiblepage: 5,
        pagedata: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        curpage: 1
      }
    },
    computed: {
      curList: function () {
        var p = [];
        for(var i = 0, l = this.pagedata.length; i < l; i++) {
          p[i] = this.pagedata[i];
        }
        return p.splice((this.curpage - 1) * this.eachPageSize, this.eachPageSize);
      }
    },
    methods: {
      changePage: function (cur) {
        this.curpage = cur
      }
    },
    components: {
      pagebar
    }
  }
</script>


<style scoped>


</style>
