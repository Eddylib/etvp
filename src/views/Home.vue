<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="book-page">
    <div id="myCarousel" class="carousel slide">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="http://www.xidian.edu.cn/_mediafile/xadzkjdx2/2016/12/19/3e8aibylk2.jpg" alt="First slide"
               width="100%">
          <div class="carousel-caption">标题1</div>
        </div>
        <div class="item">
          <img src="http://www.xidian.edu.cn/_mediafile/xadzkjdx2/2016/12/19/3e8aibylk2.jpg" alt="Second slide"
               width="100%">
          <div class="carousel-caption">标题2</div>
        </div>
        <div class="item">
          <img src="http://www.xidian.edu.cn/_mediafile/xadzkjdx2/2016/12/19/3e8aibylk2.jpg" alt="Third slide"
               width="100%">
          <div class="carousel-caption">标题3</div>
        </div>
      </div>
      <!-- 轮播（Carousel）导航 -->
      <a class="carousel-control left" href="#myCarousel"
         data-slide="prev">&lsaquo;</a>
      <a class="carousel-control right" href="#myCarousel"
         data-slide="next">&rsaquo;</a>
    </div>

    <div>
      <table border=0 width="100%" height="100px" style="margin-top:25px">
        <tbody>
        <td width="48%" style="vertical-align: top;">
          <h2>动态</h2>
          <table class="table table-hover">
            <tbody>
            <tr v-for="n in 5">
              <td width="30%">
                <img class="home-news-pict" src="http://www.runoob.com/wp-content/uploads/2014/07/slide3.png">
              </td>
              <td width="60%">
                <table>
                  <a class="things-title">hello1</a>
                  <p>hello world</p>
                </table>
              </td>
              <td>
                <table>
                  <span class="label label-default">date</span>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
        </td>
        <td width="48%" style="vertical-align: top;">
          <h2>项目</h2>
          <table class="table table-hover">
            <tbody>
            <tr v-for="n in 5">
              <td width="30%">
                <img class="home-news-pict" src="http://www.runoob.com/wp-content/uploads/2014/07/slide3.png">
              </td>
              <td width="60%">
                <table>
                  <a class="things-title">hello1</a>
                  <p>hello world</p>
                </table>
              </td>
              <td>
                <table>
                  <span class="label label-default">date</span>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
        </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import * as service from '../service';

  import BookTraceList from '../components/BookTraceList';

  let inArray = (arr, element) => {
    if (arr instanceof Array) {
      for (let i in arr) {
        let e = arr[i];
        if (e === element) {
          return true;
        }
      }
      return false;
    }
    return undefined;
  };

  export default {
    data() {
      return {
        searchInput: '',
        current: null
      }
    },
    watch: {},
    computed: {

      filteredBooks: function() {
        let self = this;
        return this.$store.state.books.filter(e => self.isBookVisible(e));
      },

      DUMP: () => {}

    },
    methods: {
      search: function() {
        const value = this.searchInput;
        if (value) {
          this.$store.dispatch('SEARCH_BOOKS', {
            isbn: value,
            name: value
          });
        }
      },
      isBookVisible: function(e) {
        return e && inArray(['NORMAL'], e.status);
      },
      isActiveBook: function(book) {
        return book.active;
      },
      toggleBook: function(book) {
        Vue.set(book, 'active', !book.active);
        if (book.active) {
          this.$store.dispatch('FETCH_BOOK_TRACES', book);
        }
      },

      DUMP: function() {}
    },
    components: {

      "trace-list": BookTraceList

    }
  }
</script>

<style scoped>


  .book-page {
    margin-left: 5%;
    margin-right: 5%;
  }

  .home-news-pict {
    width: 150px;
    height: 100px;
    margin-top: 1%;
  }
  tr > td:first-child {
    /*width: 100px;*/
  }
</style>
