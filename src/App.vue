<template>
  <div id="app">
    <el-container>
      <el-header height="194px">
        <div class="head-top">
          <div class="site-logo fl">
            <a href="#">
              <h1 class="site-name">惠农网</h1>
              <img src="./assets/layout/logo.jpg" alt="惠农网" width="388" height="123">
            </a>
          </div>
          <div class="site-search ri">
            <div>
              <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="供应大厅" class="search-select">
                  <el-option label="采供大厅" value="1"></el-option>
                  <el-option label="市场行情" value="2"></el-option>
                  <el-option label="农业资讯" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>
        </div>
        <div class="head-nav">
          <div class="head-nav-context">
            <el-menu
            :default-active="activeIndex1"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#009237"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1"><a href="#" target="_blank">订单管理</a></el-menu-item>
            <el-menu-item index="2"><a href="#" target="_blank">订单管理</a></el-menu-item>
            <el-menu-item index="3"><a href="#" target="_blank">订单管理</a></el-menu-item>
            <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
            <el-menu-item index="5"><a href="#" target="_blank">订单管理</a></el-menu-item>
            <el-menu-item index="6"><a href="#" target="_blank">订单管理</a></el-menu-item>
           </el-menu>
          </div>
          
        </div>
        
      </el-header>
      <el-main>
        <!-- <keep-view> -->
          <router-view></router-view>
        <!-- </keep-view> -->
      </el-main>
      <el-footer class="footers">&copy; 惠农网</el-footer>
    </el-container>
  </div>
</template>

<script>
import 'normalize.css'
export default {
  name: 'App',
  data() {
      return {
        activeIndex1: '1',
        input1: '',
        select: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  position: relative;
}
.clear{
  display: block;
  width: 0;
  height: 0;
  content: '';
  clear: both;
  overflow: hidden;
  visibility: hidden;
}

.el-header, .el-main, .el-footer{
  padding: 0;
}

.el-header, .el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  // background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  overflow: visible;
}

body > .el-container {
  margin-bottom: 40px;
}
// base
body{
  background: #fff;
}
.fl{
  float: left;
  display: inline;
}
.ri{
  float: right;
  display: inline;  
}
ul,ol,li{
  list-style: none;
}

// container
.el-container{
  // width: 1190px;
  // min-width: 1190px;
  width: 100%;
  margin: 0 auto;
}
/* header */
.head-top{
    width: 1190px;
    min-width: 1190px;
    height: 133px;
    margin: 0 auto;
  .site-logo{
    height: 123px;
    line-height: 123px;
    padding: 5px 0 5px 10px;
    overflow: hidden;
    h1{
      display: none;
      position: absolute;
      text-indent: -9999px;
    }
  }

  .site-search{
   width: 360px;
   height: 123px;
   margin-right: 18px; 
   line-height: 123px;
   font-size: 14px;
   display: inline;
   .search-select{
     width: 106px;
   }
  }
}

.head-nav{
  height: 61px;
  background: #009237;
}
.head-nav-context{
  width: 1190px;
  min-width: 1190px;
  margin: 0 auto;
}
.el-menu-demo li a{
  text-decoration: none;
}

// main



.el-footer{
  background: #cecece;
}
</style>
