<template>
  <div id="app">



    <div id="nav-div">

      <div class="navbarback" style="">
        <a href="index"><img class="logoimg" src="../static/logo.png" alt="西安电子科技大学嵌入式与视觉处理研究中心" width="40%"></a>
        <div >
          <div class="navbaritembox" id="daohang">
            <ul>
              <li><a href="index"><span class="glyphicon glyphicon-calendar">主页</span></a></li>
              <li><a href="asplist?request=activity"><span class="glyphicon glyphicon-calendar">动态</span></a></li>
              <li><a href="asplist?request=study"><span class="glyphicon glyphicon-book">项目</span></a></li>
              <li><a href="asplist?request=project"><span class="glyphicon glyphicon-wrench">科研</span></a></li>
              <li><a href="team"><span class="glyphicon glyphicon-user">团队</span></a></li>
              <li><a href="about"><span class="glyphicon glyphicon-comment">关于</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- headers here -->
      <!--<div>-->
        <!--<nav class="navbar  navbar-costum" role="navigation">-->
          <!--<div class="container-fluid ">-->
            <!--<div class="navbar-header title-in-html">-->
              <!--&lt;!&ndash;<img src="../static/logo.png" alt="/index" width="100%" height="100">&ndash;&gt;-->
              <!--<a class="navbar-brand" href="index" style="margin-left: 10px;"><img src="../static/logo.png" alt="" width="50%" style="margin-left:20px;margin-top: 20px;margin-bottom: 20px "></a>-->
            <!--</div>-->
            <!--<div class="collapse navbar-collapse navbar-right">-->
              <!--<ul class="nav navbar-nav subject-margin-box">-->
                <!--<li><a class="subject-item" href="/index"><span class="glyphicon glyphicon-home"></span> 首页</a></li>-->
                <!--<li><a class="subject-item" href="asplist?request=activity"><span class="glyphicon glyphicon-calendar"></span> 动态</a></li>-->
                <!--<li><a class="subject-item" href="asplist?request=study"><span class="glyphicon glyphicon-book"></span>科研</a></li>-->
                <!--<li><a class="subject-item" href="asplist?request=project"><span class="glyphicon glyphicon-wrench"></span>项目</a></li>-->
                <!--<li><a class="subject-item" href="/team"><span class="glyphicon glyphicon-user"></span>团队</a></li>-->
                <!--<li><a class="subject-item" href="/about"><span class="glyphicon glyphicon-comment"></span>关于</a></li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
        <!--</nav>-->
      <!--</div>-->


    </div>

    <!-- unknown -->
    <transition name="fade" mode="out-in">
      <router-view class="view" style="margin-left: 5%;margin-right: 5%;"></router-view>
    </transition>


    <div class="container clearfix">
      <hr/>
      <footer class="text-muted">
        <div>
          <span class="footeritem">南校区地址：陕西省西安市西沣路兴隆段266号</span>
          <span class="footeritem"> 邮编：710126</span>
          <span class="footeritem">北校区地址：陕西省西安市太白南路2号</span>
          <span class="footeritem"> 邮编：710071</span>
        </div>
        <div>
          <span class="footeritem">电话：029-88201000</span></div>
      </footer>
      <br/>
    </div>
  </div>
</template>

<script>
  import Home from './views/Home';

  export default {

  };
</script>

<style>

  html {
    height: 100%;
  }

  body {
    display: flex;
    /*align-items: center;*/
    /*justify-content: center;*/
    height: 100%;
  }

  #app {
    /*color: #2c3e50;*/
    /*font-family: Source Sans Pro, Helvetica, sans-serif;*/
    /*text-align: center;*/
    width: 100%;
  }




  .navbarback{
     background-image: url("../static/45-degree-fabric-dark.png");
     background-color: #910307;
     margin-bottom: 20px;
     width: 100%;
     height: 110px;
   }
  .logoimg{
    margin: 30px;
  }
  .footeritem{
    margin-right: 30px;
  }
  #daohang{
    position: absolute;
    top: 70px;
    right: 0px;
    width: 700px;
    height: 50px;
  }
  #daohang ul{ list-style:none; margin-left: 55px}
  #daohang ul li{ width:90px;   float:left;}
  #daohang ul li:hover{}
  #daohang ul li a{text-decoration:none; display:block;height: 40px; text-align: center; color: white; font-size: 17px; line-height: 30px}
  #daohang ul li a:hover{ background:#eeeeee; color:#750D10;}
</style>
