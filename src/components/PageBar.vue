<template>
  <div class="page-bar">
    <ul>
      <li v-if="cur!=1"><a @click="prev()">上一页</a></li>
      <li v-for="index in indexes" :class="{ active: cur == index}">
        <a v-on:click="btnClick(index)">{{ index }}</a>
      </li>
      <li v-if="cur!=all"><a @click="next()">下一页</a></li>
      <li><a>共<i>{{all}}</i>页</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cur: 1
    }
  },
  methods: {
    btnClick(data) {
      if (data === this.cur) {
      } else {
        this.cur = data;
        this.$emit('btn-click', data)
      }
    },
    prev() {
      this.$emit('btn-click', --this.cur)
    },
    next() {
      this.$emit('btn-click', ++this.cur)
    }
  },
  props: {
      all: ''
  },
  computed: {
      indexes: function () {
        var left = 1;
        var right = this.all;
        var num = 10;
        var ar = [];
        if (this.all >= num + 1) {
            if (this.cur > num / 2 && this.cur < this.all - (num / 2 - 1)) {
                left = this.cur - num / 2;
                right = this.cur + (num / 2 - 1)
            }else {
                if (this.cur <= num / 2) {
                    left = 1;
                    right = num
                }else {
                    right = this.all;
                    left = this.all - (num - 1)
                }
            }
        }
        while (left <= right) {
            ar.push(left);
            left++
        }
        return ar
      }

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
  }

  .page-bar a {
    border: solid 2px #7d7d7d;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #7d7d7d;
    cursor: pointer;
  }

  .page-bar a:hover {
    background-color: #eee;
  }

  .page-bar .active a {
    color: #ffffff;
    cursor: default;
    background-color: #b7161f;
    border-color: #7d7d7d;
  }

  .page-bar i {
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
  }
</style>
