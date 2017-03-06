<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="jumbotron">
    <h2 style="margin-left: 60px;margin-right: 60px">嵌入式技术与视觉处理研究中心</h2><br>
    <p style="margin-left: 60px;margin-right: 60px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;西安电子科技大学嵌入式技术与视觉处理研究中心（XD-ETVP），成立于2015年10月。中心依托于原西电软件学院大数据技术和嵌入式系统实验室基础成立，重点关注嵌入式技术、机器人复杂场景中环境感知与场景理解、地图构建与导航、机器学习、图像分布式编码、图像去雾增强等热点研究方向。软件学院张亮副教授现担任中心主任。</p>
    <Hello :msgp="valuedata"></Hello>
  </div>
</template>

<script>
  var answer;
  import Vue from 'vue';
  import Hello from '../components/Hello.vue';
  export default {
    data: function() {
        return {valuedata: ''}
    },
    methods: {
    },
    components: {
        Hello
    }
  }
</script>


<style scoped>


</style>
