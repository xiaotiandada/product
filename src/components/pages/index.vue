<template>
    <div class="main-index">
        <div class="category">
            <div class="label">
               <!-- <dl class="cate-01">
                   <dt>
                       <h3>
                         <a href="#">水果</a>
                        </h3>
                   </dt>
                   <dd>
                        <a href="#">核果仁果类</a>
                        <a href="#">浆果类</a>
                   </dd>
               </dl> -->
                <dl v-for="(item, index) in leftMenu" :class="'cate-0'+ index" @mouseover="overShow" @mouseout="outHide">
                   <dt>
                       <h3>
                           <a href="#">{{item.title}}</a>
                       </h3>
                   </dt>
                   <dd>
                       <a href="#" v-for="items in item.titleChild">{{items}}</a>
                   </dd>
               </dl>
            </div>

            <div class="panel">
                <template v-for="item in leftMenuItems">
                        <div class="item" :class="{show:showItem,hide:hideItem}">
                            <div class="sub-cate">
                                <!-- <dl>
                                    <dt>
                                    <h3>
                                        <a href="#">
                                            核果仁果类
                                        </a>
                                    </h3> 
                                    </dt>
                                    <dd>
                                        <h3>
                                            <a href="#">苹果</a>
                                        </h3>
                                    </dd>
                                </dl>   -->


                                <dl>
                                    <dt>
                                        <h3>
                                            <a href="#">
                                                {{item.title}}
                                            </a>
                                        </h3>
                                    </dt>
                                    <dd>
                                        <h3>
                                            <a href="#" v-for="itemarr in item.titleChild">
                                                {{itemarr}}
                                            </a>
                                        </h3>
                                    </dd>
                                </dl>
                            </div>
                            <div class="sub-rcmd">
                                <a href="#" v-for="itemsrc in item.titleSrc">
                                    <img :src="itemsrc" alt="汁多爽口">
                                </a>
                            </div>
                        </div>
                </template>
                
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
        showItem: true,
        hideItem: false,
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
        ],
        leftMenu: [
            {   
                title: '水果',
                titleChild: [
                    '核桃仁果类',
                    '浆果类'
                ]
            },
            {   
                title: '水果',
                titleChild: [
                    '核桃仁果类',
                    '浆果类'
                ]
            },
            {   
                title: '水果',
                titleChild: [
                    '核桃仁果类',
                    '浆果类'
                ]
            },
            {   
                title: '水果',
                titleChild: [
                    '核桃仁果类',
                    '浆果类'
                ]
            },
            {   
                title: '水果',
                titleChild: [
                    '核桃仁果类',
                    '浆果类'
                ]
            },
            {   
                title: '水果',
                titleChild: [
                    '核桃仁果类',
                    '浆果类'
                ]
            },
            {   
                title: '水果',
                titleChild: [
                    '核桃仁果类',
                    '浆果类'
                ]
            },
            {   
                title: '水果',
                titleChild: [
                    '核桃仁果类',
                    '浆果类'
                ]
            }
        ],
        leftMenuItems: [
                    {
                        title: '核桃仁果类1',
                        titleChild: [
                            '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                            '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                        ],
                        titleSrc : [
                            'http://img.cnhnb.com/group1/M00/87/F9/225943R2A1ChRkRllDjgqAbCqNAABkzcbU5xs411.jpg',
                            'http://img.cnhnb.com/group1/M00/87/F9/A9359EPA97ChRkRllDjmeAWpuRAAAe65c86FU842.jpg',
                        ]
                    },
                    {
                        title: '核桃仁果类1',
                        titleChild: [
                            '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                            '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                        ],
                        titleSrc : [
                            'http://img.cnhnb.com/group1/M00/87/F9/225943R2A1ChRkRllDjgqAbCqNAABkzcbU5xs411.jpg',
                            'http://img.cnhnb.com/group1/M00/87/F9/A9359EPA97ChRkRllDjmeAWpuRAAAe65c86FU842.jpg',
                        ]
                    }
        ]
    }
  },
  methods: {
      overShow(){
          console.log(1)
      },
      outHide(){
          console.log(2)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-index{
    width: 1190px;
    min-width: 1190px;
    height: 2000px;
    margin: 0 auto;
    position: relative;
}
.category{
    float: left;
    position: relative;
    text-align: left;
    font-size: 12px;
    z-index: 998;
}
.label{
    width: 198px;
    border: 1px solid #eee;
    line-height: 20px;
    background: #f8f8f8;
}
 .label dl{
    padding: 8px 10px 8px 48px;
    border-bottom: 1px solid #eee;
    cursor: default;
    background: url(../../assets/sprite/bg-index-page.png) no-repeat;
    background-position: -252px 18px;
    margin: 0;
    &:hover{
        background-color: #eee;
        border: 1px solid #dcdcdc;
        border-right-color: #eee;
        margin-top: -1px;
        margin-left: -1px;
        z-index: 999;
        position:relative;
    }
    &:hover dt a:after{
        border-left-color: #eee;
    }
}

 .label dl dt{
    position: relative;
    font-size: 16px;
    h3{
        font-size: 16px;
        font-weight: normal;
        margin: 0;
        padding: 0;
        a{
            text-decoration: none;
            color: #000;
            text-align: left;
            padding: 0;
            position: relative;
            display: inline;
            &::before,&::after{
                position: absolute;
                content: ' ';
                display: block;
                width: 0;
                height: 0;
                border: 6px solid transparent;
                top: 4px;
            }
            &::after{
                right: -18px;
                border-left-color: #f8f8f8;
            }
            &::before{
                right: -20px;
                border-left-color: #b2b2b2;
            }
        }
    }
 }
 .label dl dd{
    height: 20px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    a{
        color: #666;
        text-decoration: none;
        margin-right: 10px;
        padding: 0;
        text-align: left;
    }
 }
.cate-00{
    background-position: -252px -35px !important;
}
.cate-01{
    background-position: -252px -379px !important;
}
.cate-02{
    background-position: -252px -92px !important;
}
.cate-03{
    background-position: -252px -149px !important;
}
.cate-04{
    background-position: -252px -208px !important;
}
.cate-05{
    background-position: -252px -263px !important;
}
.cate-06{
    background-position: -252px -321px !important;
}
.cate-07{
    background-position: -252px -35px !important;
}

.show{
    display: block !important;
}
.hide{
    display: none !important;
}
.panel{
    position: absolute;
    width: 768px;
    min-width: 453px;
    // height: 453px;
    top: 0;
    left: 200px;
    margin-left: -2px;
    border: 1px solid #dcdcdc;
    background: #eee;
    overflow: hidden;
}
.panel .item{
    zoom: 1;
    overflow: hidden;
    display: none;
    .sub-cate{
        float: left;
        width: 550px;
        margin: 20px 0;
        padding: 0 0 0 10px;
    }
}
.panel .sub-cate dl{
    margin-bottom: 10px;
    overflow: hidden;
    line-height: 2em;
    dt{
        position: relative;
        float: left;
        width: 88px;
        padding: 8px 30px 0 0;
        text-align: right;
        font-size: 14px;
        h3{
            font-size: 100%;
            font-weight: normal;
            margin: 0;
            padding: 0;
            a{
                color: #009234;
                text-decoration: none;
                &::before,&::after{
                position: absolute;
                content: ' ';
                display: block;
                width: 0;
                height: 0;
                border: 6px solid transparent;
                top: 14px;
                }
                &::after{
                    right: 16px;
                    border-left-color: #eeeeef;
                }
                &::before{
                    right: 14px;
                    border-left-color: #b2b2b2;
                }
            }
        }
    }
    dd{
        float: left;
        width: 380px;
        padding: 6px 0;
        border-top: 1px solid #eee;
        margin: 0;
        h3{
            font-size: 100%;
            font-weight: normal;
            margin: 0;
            padding: 0;
            a{
                color: #666;
                text-decoration: none;
                float: left;
                padding: 0 8px;
                margin: 6px 0;
                line-height: 14px;
                height: 14px;
                border-left: 1px solid #e0e0e0;
                white-space: nowrap;
                display: inline;
            }
        }
    }
}
.panel .sub-rcmd{
    float: right;
    width: 166px;
    padding: 25px 30px 20px 10px;
    overflow: hidden;
    a{
        display: block;
        height: 134px;
        margin-bottom: 5px;
        padding: 0;
        text-decoration: none;
        img{
            vertical-align: top;
            border: 0;
        }
    }
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

