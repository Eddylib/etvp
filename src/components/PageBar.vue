<template lang="html">
  <div class="page">
    <ul>
      <li><a v-on:click="prevClick()">上一页</a></li>
      <li v-for="index in pages"  v-bind:class="{ active: curPage == index}">
        <a v-on:click="btnClick(index)">{{ index }}</a>
      </li>
      <li><a v-on:click="nextClick()">下一页</a></li>
      <li><a>共<i>{{totalPages}}</i>页</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      dataNum: {
        type: Number,
        default: 100
      },
      cur: {
        type: Number,
        default: 1
      },
      each: {
        type: Number,
        default: 10
      },
      visiblepage: {
        type: Number,
        default: 10
      }
    },
    computed: {
      totalPages: function() {
        return Math.ceil(this.dataNum / this.each) || 0
      },
      pages: function() {
        var lowPage = 1;
        var highPage = this.totalPages;
        var pageArr = [];
        if(this.totalPages > this.visiblepage) {
          var sub = Math.ceil(this.visiblepage / 2);
          if(this.curPage > sub && this.curPage < this.totalPages - sub + 1) {
            lowPage = this.curPage - sub;
            highPage = this.curPage + sub - 2;
          }else if(this.curPage <= sub) {
            lowPage = 1;
            highPage = this.visiblepage;
          }else{
            lowPage = this.totalPages - this.visiblepage + 1;
            highPage = this.totalPages;
          }
        }

        while(lowPage <= highPage) {
          pageArr.push(lowPage);
          lowPage++;
        }
        return pageArr;
      }
    },
    data: function() {
      return {
        curPage: 0
      }
    },
    methods: {
      btnClick: function(index) {
        this.curPage = index;
        this.$emit('change-page', index)
      },
      nextClick: function() {
        if (this.curPage < this.totalPages) {
          this.curPage++;
          this.$emit('change-page', this.curPage)
        }
      },
      prevClick: function() {
        if (this.curPage > 0) {
          this.curPage--;
          this.$emit('change-page', this.curPage)
        }
      }
    },
    created: function() {
      this.curPage = this.cur;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  ul,li {
    margin: 0px;
    padding: 0px;
  }

  .page-bar li {
    list-style: none;
    display: inline-block;
  }

  .page-bar li:first-child>a {
    margin-left: 0px
  }

  .page-bar a {
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer
  }

  .page-bar a:hover {
    background-color: #eee;
  }

  .page-bar .active a {
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
  }

  .page-bar i {
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
  }


</style>
