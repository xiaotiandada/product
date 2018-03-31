<template>
  <div id="app">
    <el-container>
      <el-header height="179px">
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
            <div class="market">
              <span>惠农市场</span>
            </div>
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
      <el-footer class="footers">
        <div class="container">
            <div class="quick-nav">
                <ul class="icon">
                <li class="i1">
                    <img src="./assets/footer/quick-nav-icon-1.gif" alt="">
                    <p>
                    <a href="">资源多</a>
                    <a href="">海量信息免费发</a>
                    </p>
                </li>
                <li class="i1">
                    <img src="./assets/footer/quick-nav-icon-2.gif" alt="">
                    <p>
                    <a href="">资源多</a>
                    <a href="">海量信息免费发</a>
                    </p>
                </li>
                <li class="i1">
                    <img src="./assets/footer/quick-nav-icon-3.gif" alt="">
                    <p>
                    <a href="">资源多</a>
                    <a href="">海量信息免费发</a>
                    </p>
                </li>
                <li class="i1">
                    <img src="./assets/footer/quick-nav-icon-4.gif" alt="">
                    <p>
                    <a href="">资源多</a>
                    <a href="">海量信息免费发</a>
                    </p>
                </li>
                </ul>
            </div>
            <div class="ptb">
                <p>
                <a href="">
                    关于我们
                </a>
                |
                <a href="">
                    法律声明
                </a>
                |
                <a href="">
                    使用协议
                </a>
                |
                <a href="">
                    版权隐私
                </a>
                |
                <a href="">
                    友情链接
                </a>
                |
                <a href="">
                    成功案例
                </a>
                |
                <a href="">
                    惠农大事记
                </a>
                |
                <a href="">
                    产品库
                </a>
                |
                <a href="">
                    品种库
                </a>
                |
                <a href="">
                    网站地图
                </a>
                </p>
                <p>湘ICP备13007354号-1  | 服务热线：400-008-8688</p>
                <p>互联网药品信息服务资格证书:(湘)-经营性-2014-0005 湖南惠农科技有限公司</p>
                <p>©2011-2018 Cnhnb B2B SYSTEM All Rights Reserved</p>
            </div>
        </div>
      </el-footer>
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
.lazy{
    background: url(./assets/layout/loading-64.gif) no-repeat;
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


// headernav
.market{
  float: left;

  width: 200px;
  background: #0da944;
  text-align: center;
  color: #fff;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 46px;
  span{
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
}
.head-nav{
  height: 46px;
  background: #009237;
}
.head-nav-context{
  width: 1190px;
  min-width: 1190px;
  margin: 0 auto;
  overflow: hidden;
}
.el-menu{
  float: left;
  height: 45px;
  .el-menu-item{
    height: 45px;
    line-height: 45px;
  }
}
.el-menu-demo li a{
  text-decoration: none;
}

// main



// footer
.el-footer{
  min-width: 1190px;
  padding: 0;
  border-top: 1px solid #ddd;
  clear: both;
  background: #ddd;
  height: 100% !important;
}

.container{
  width: 1190px;
  min-width: 1190px;
  margin: 0 auto;
}

.container .quick-nav{
  .icon{
      padding: 20px 70px 10px;
      line-height: 21px;
      font-size: 16px;
      color: #666;
      overflow: hidden;
      margin: 0;
      zoom: 1;
      li{
        float: left;
        padding: 0 40px;
        img{
          float: left;
          display: block;
          width: 54px;
          height: 54px;
          vertical-align: top;
          border: 0;
          -webkit-transition: transform 0.3s;
          -moz-transition: transform 0.3s;
          -ms-transition: transform 0.3s;
          -o-transition: transform 0.3s;
          transition: transform 0.3s;
        }
        &:hover img{
          transform: rotate(30deg);
        }

        p{
          float: left;
          padding: 5px 8px;
          cursor: default;
          margin: 0;
          a{
            display: block;
            white-space: nowrap;
            color: #666;
            text-decoration: none;
            text-align: left;
          }
        }
      }
  }
}

.el-footer .container .ptb{
    padding-top: 20px;
    padding-bottom: 20px;
    p{
      margin: 0;
      padding: 0;
      font-size: 14px;
      line-height: 2;
      color: #666;      
      a{
        text-decoration: none;
        color: #666;
        &:hover{
          color: #f57a11;
        }
      }
    }
}
</style>
