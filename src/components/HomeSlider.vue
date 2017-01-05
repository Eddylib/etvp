<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiperA">
      <!-- 幻灯内容 -->
      <swiper-slide v-for="item in homeslide">
        <a :href="item.url"><img :src="item.pictpath" alt="item.pictpath" width="100%"></a>
        <div style="position:absolute;z-index: auto; right: 10%; top: 90%;align: center; background-color: black">
          <p style="color: whitesmoke; font-size: large">{{item.title}}</p>
        </div>
      </swiper-slide>
      <!-- ... -->
      <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
          loop: true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiperA.swiper
      },
      homeslide () {
        return this.$store.state.homeslide;
      }
    },
    mounted() {
      // you can use current swiper object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      this.$store.dispatch('FETCH_HOME_SLIDE_LIST');
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
