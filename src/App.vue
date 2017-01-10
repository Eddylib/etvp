<template>
  <div id="app">
    <div id="nav-div">

      <!-- headers here -->

      <nav class="navbar  navbar-costum" role="navigation">
        <div class="container-fluid ">
          <div class="navbar-header title-in-html">
            <!--<img src="../static/logo.png" alt="/index" width="100%" height="100">-->
            <a class="navbar-brand" href="index">EmbadedAndVision</a>
          </div>
          <div class="collapse navbar-collapse navbar-right">
            <ul class="nav navbar-nav subject-margin-box">
              <li><a class="subject-item" href="/index"><span class="glyphicon glyphicon-search"></span> 首页</a></li>
              <li><a class="subject-item" href="asplist?request=activity"><span class="glyphicon glyphicon-search"></span> 动态</a></li>
              <li><a class="subject-item" href="asplist?request=study">科研</a></li>
              <li><a class="subject-item" href="asplist?request=project">项目</a></li>
              <li><a class="subject-item" href="/team">团队</a></li>
              <li><a class="subject-item" href="/about">关于</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <!-- unknown -->
    <transition name="fade" mode="out-in">
      <router-view class="view" style="margin-left: 5%;margin-right: 5%;"></router-view>
    </transition>


    <div class="container clearfix">
      <hr/>
      <footer class="text-muted">
        ETVP 2016.
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

  .navbar-costum {
    background-color: #910307;
    border-color: #af2125;
  }

  .navbar-costum .navbar-brand {
    color: #ecf0f1;
  }

  .navbar-costum .navbar-brand:hover,
  .navbar-costum .navbar-brand:focus {
    color: #ffbbbc;
  }

  .navbar-costum .navbar-text {
    color: #ecf0f1;
  }

  .navbar-costum .navbar-nav > li > a {
    color: #ecf0f1;
  }

  .navbar-costum .navbar-nav > li > a:hover,
  .navbar-costum .navbar-nav > li > a:focus {
    color: #af2125;
  }

  .navbar-costum .navbar-nav > .active > a,
  .navbar-costum .navbar-nav > .active > a:hover,
  .navbar-costum .navbar-nav > .active > a:focus {
    color: #af2125;
    background-color: #af2125;
  }

  .navbar-costum .navbar-nav > .open > a,
  .navbar-costum .navbar-nav > .open > a:hover,
  .navbar-costum .navbar-nav > .open > a:focus {
    color: #af2125;
    background-color: #af2125;
  }

  .navbar-costum .navbar-toggle {
    border-color: #af2125;
  }

  .navbar-costum .navbar-toggle:hover,
  .navbar-costum .navbar-toggle:focus {
    background-color: #af2125;
  }

  .navbar-costum .navbar-toggle .icon-bar {
    background-color: #ecf0f1;
  }

  .navbar-costum .navbar-collapse,
  .navbar-costum .navbar-form {
    border-color: #ecf0f1;
  }

  .navbar-costum .navbar-link {
    color: #ecf0f1;
  }

  .navbar-costum .navbar-link:hover {
    color: #af2125;
  }

  .subject-margin-box {
  }

  .subject-item {
  }

  .title-in-html {
  }

  .things-title {
    color: #000;
  }
  * {
    border-radius: 0 !important;
  }


</style>
