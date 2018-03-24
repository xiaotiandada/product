<template>
    <div class="main-index">
        <div class="category">
            <div class="label">
               <dl class="cate-01">
                   <dt>
                       <h3>
                         <a href="#">水果</a>
                        </h3>
                   </dt>
                   <dd>
                        <a href="#">核果仁果类</a>
                        <a href="#">浆果类</a>
                   </dd>
               </dl>
            </div>
        </div>
        <div class="slidew">
             <!-- 轮播图 -->
            <slidew :slidewList="slidewList"></slidew>
        </div>
        <div class="side-info">
            info
        </div>
    </div>
</template>

<script>
import slidew from '@/components/base/slidew'
export default {
  name: 'Index',
  components: {
      slidew
  },
  data () {
    return {
        slidewList: [
            {   
                index: '1',
                name: 'one',
                url: 'http://a.hiphotos.baidu.com/image/pic/item/faf2b2119313b07eaad49f0c00d7912397dd8c4d.jpg'
            },
            {
                index: '2',
                name: 'two',
                url: 'http://g.hiphotos.baidu.com/image/pic/item/8694a4c27d1ed21b88b95aeca16eddc451da3f42.jpg'
            },
            {
                index: '3',
                name: 'three',
                url: 'http://g.hiphotos.baidu.com/image/pic/item/80cb39dbb6fd526686b4731da718972bd407361f.jpg'
            },
            {
                index: '4',
                name: 'four',
                url: 'http://a.hiphotos.baidu.com/image/pic/item/10dfa9ec8a136327b260b83a9d8fa0ec08fac72e.jpg'
            }
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-index{
    width: 1190px;
    min-width: 1190px;
    height: 455px;
    margin: 0 auto;
}
.category{
    float: left;
    position: relative;
    text-align: left;
    font-size: 12px;
    z-index: 998;
    .label{
        width: 198px;
        border: 1px solid #eee;
        line-height: 20px;
        background: #f8f8f8;
    }
}
 .label dl{
        padding: 8px 10px 8px 48px;
        border-bottom: 1px solid #eee;
        cursor: default;
        background: url(../../assets/sprite/bg-index-page.png) no-repeat;
        background-position: -252px 18px !important;
        margin: 0;
        dt{
            position: relative;
            font-size: 16px;
            h3{
                font-size: 100%;
                font-weight: normal;
                margin: 0;
                a{
                    text-decoration: none;
                    color: #000;
                }
            }
        }
        dd{
            height: 20px;
            overflow: hidden;
            a{
                color: #666;
                text-decoration: none;
            }
        }
}

.cate-01{
    background-position: -252px -35px !important;
}
.slidew{
    float: left;
    width: 750px;
    margin-top: 15px;
    margin-left: 15px;
}
.side-info{
    float: left;
    width: 210px;
    overflow: hidden;
    margin-top: 15px;
    margin-left: 15px;
}
</style>

