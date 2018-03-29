<template>
    <div class="main-index">
        <leftmenu :leftMenu="leftMenu" :leftMenuItems="leftMenuItems"></leftmenu>
        <div class="slidew">
             <!-- 轮播图 -->
            <slidew :slidewList="slidewList"></slidew>
        </div>
        <div class="side-info">
            <div class="side-log">
                <div class="btns">
                    <a href="">下载惠农网</a>
                </div>
                <div class="idtab">
                </div>
            </div>
        </div>
        <div class="clear"></div>

        <div class="pic-banner">
            <ul class="clearfix">
                <template v-for="item in picbanner">
                    <li :class="item.pic_class">
                        <a :href="item.pic_href" :title="item.pic_title">
                            <img :src="item.pic_src" :alt="item.pic_alt" class="lazy">
                        </a>
                    </li>
                </template>
            </ul>
        </div>
        <div class="floor1">
            <div class="wrap-tit">
                <h3 class="wrap-tit-l">水果蔬菜</h3>
                <div class="wrap-tit-r">
                        <p class="dark-link">
                            <a href="">土豆</a>
                            <a href="">土豆</a>
                            <a href="">土豆</a>
                            <a href="">土豆</a>
                            <a href="">土豆</a>
                            <a href="">土豆</a>
                        </p>
                </div>
            </div>

            <div class="wrap-inner">
                <div class="wfl fl">
                    <div class="title">
                        <a href="">
                            <img class="lazy" src="http://img.cnhnb.com/group1/M00/9A/66/1440F9U1A6ChRkRlo7U0aAL2cGAAAlQvGLqCk013.jpg" alt="">
                        </a>
                        <h4 class="t">
                            <a href="">水果</a>
                        </h4>
                        <p>
                            <a href="">西瓜</a>
                            <a href="">西瓜</a>
                            <a href="">西瓜</a>
                            <a href="">西瓜</a>
                            <a href="">西瓜</a>
                            <a href="">西瓜</a>
                            <a href="">西瓜</a>
                            <a href="">西瓜</a>
                        </p>
                        <ul class="bg-a">
                            <li>
                                <a href="">【资讯】如何预防葡萄根结线虫病？葡萄根结线虫病预防措施</a>
                            </li>
                            <li>
                                <a href="">【资讯】如何预防葡萄根结线虫病？葡萄根结线虫病预防措施</a>
                            </li>
                            <li>
                                <a href="">【资讯】如何预防葡萄根结线虫病？葡萄根结线虫病预防措施</a>
                            </li>
                        </ul>
                    </div>

                    <div class="imgs">
                        <a href="">
                            <img class="lazy" src="http://img.cnhnb.com/group1/M00/9B/DC/46EE3*H689ChRkRlqnJvKADz0DAADREnz0YX0556.jpg" alt="">
                        </a>
                        <a href="">
                            <img class="lazy" src="http://img.cnhnb.com/group1/M00/9A/3B/231AA8Z554ChRkRlozNLqAE0PfAAAYUmupcpw460.jpg" alt="">
                        </a>
                        <a href="">
                            <img class="lazy" src="http://img.cnhnb.com/group1/M00/99/9B/8117B4KA86ChRkRloWMeCAOVxhAAAU-X5By-U450.jpg" alt="">
                        </a>
                    </div>
                </div>
                <div class="wfl fl"></div>
            </div>
        </div>
    </div>
</template>

<script>
import slidew from '@/components/base/slidew'
import leftmenu from '@/components/base/leftmenu'
export default {
  name: 'Index',
  components: {
      slidew,
      leftmenu
  },
  data () {
    return {
        slidewList: [
            {   
                index: '1',
                name: 'one',
                url: require('../../assets/slidews/slidew1.jpg')
            },
            {
                index: '2',
                name: 'two',
                url: require('../../assets/slidews/slidew2.png')
            },
            {
                index: '3',
                name: 'three',
                url: require('../../assets/slidews/slidew3.jpg')
            },
            {
                index: '4',
                name: 'four',
                url: require('../../assets/slidews/slidew4.png')
            },
            {
                index: '5',
                name: 'fives',
                url: require('../../assets/slidews/slidew5.jpg')
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
                        title_dl:[
                            {
                                title: '核桃仁果类1',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类1',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类1',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类1',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类1',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类1',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类1',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            }
                        ],
                        title_src:[
                            'http://img.cnhnb.com/group1/M00/87/F9/225943R2A1ChRkRllDjgqAbCqNAABkzcbU5xs411.jpg',
                            'http://img.cnhnb.com/group1/M00/87/F9/A9359EPA97ChRkRllDjmeAWpuRAAAe65c86FU842.jpg'    
                        ]
              
                    },
                    {
                        title_dl:[
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            }
                        ],
                        title_src:[
                            'http://img.cnhnb.com/group1/M00/87/F9/225943R2A1ChRkRllDjgqAbCqNAABkzcbU5xs411.jpg',
                            'http://img.cnhnb.com/group1/M00/87/F9/A9359EPA97ChRkRllDjmeAWpuRAAAe65c86FU842.jpg'    
                        ]
              
                    },
                    {
                        title_dl:[
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            }
                        ],
                        title_src:[
                            'http://img.cnhnb.com/group1/M00/87/F9/225943R2A1ChRkRllDjgqAbCqNAABkzcbU5xs411.jpg',
                            'http://img.cnhnb.com/group1/M00/87/F9/A9359EPA97ChRkRllDjmeAWpuRAAAe65c86FU842.jpg'    
                        ]
              
                    },
                    {
                        title_dl:[
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            }
                        ],
                        title_src:[
                            'http://img.cnhnb.com/group1/M00/87/F9/225943R2A1ChRkRllDjgqAbCqNAABkzcbU5xs411.jpg',
                            'http://img.cnhnb.com/group1/M00/87/F9/A9359EPA97ChRkRllDjmeAWpuRAAAe65c86FU842.jpg'    
                        ]
              
                    },
                    {
                        title_dl:[
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            }
                        ],
                        title_src:[
                            'http://img.cnhnb.com/group1/M00/87/F9/225943R2A1ChRkRllDjgqAbCqNAABkzcbU5xs411.jpg',
                            'http://img.cnhnb.com/group1/M00/87/F9/A9359EPA97ChRkRllDjmeAWpuRAAAe65c86FU842.jpg'    
                        ]
              
                    },
                    {
                        title_dl:[
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            }
                        ],
                        title_src:[
                            'http://img.cnhnb.com/group1/M00/87/F9/225943R2A1ChRkRllDjgqAbCqNAABkzcbU5xs411.jpg',
                            'http://img.cnhnb.com/group1/M00/87/F9/A9359EPA97ChRkRllDjmeAWpuRAAAe65c86FU842.jpg'    
                        ]
              
                    },
                    {
                        title_dl:[
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            }
                        ],
                        title_src:[
                            'http://img.cnhnb.com/group1/M00/87/F9/225943R2A1ChRkRllDjgqAbCqNAABkzcbU5xs411.jpg',
                            'http://img.cnhnb.com/group1/M00/87/F9/A9359EPA97ChRkRllDjmeAWpuRAAAe65c86FU842.jpg'    
                        ]
              
                    },
                    {
                        title_dl:[
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            },
                            {
                                title: '核桃仁果类2',
                                titleChild: [
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果',
                                    '苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果','苹果'
                                ],
                            }
                        ],
                        title_src:[
                            'http://img.cnhnb.com/group1/M00/87/F9/225943R2A1ChRkRllDjgqAbCqNAABkzcbU5xs411.jpg',
                            'http://img.cnhnb.com/group1/M00/87/F9/A9359EPA97ChRkRllDjmeAWpuRAAAe65c86FU842.jpg'    
                        ]
              
                    }
        ],
        picbanner:[
            {   
                pic_class: 'first',
                pic_href: '#',
                pic_title: 'picbanner1',
                pic_alt: 'pic1',
                pic_src: require('../../assets/picbanner/pic1.jpg')
            },
            {   
                pic_class: '',
                pic_href: '#',
                pic_title: 'picbanner2',
                pic_alt: 'pic2',
                pic_src: require('../../assets/picbanner/pic2.jpg')
            },
            {   
                pic_class: '',
                pic_href: '#',
                pic_title: 'picbanner3',
                pic_alt: 'pic3',
                pic_src: require('../../assets/picbanner/pic3.jpg')
            },
            {   
                pic_class: '',
                pic_href: '#',
                pic_title: 'picbanner4',
                pic_alt: 'pic4',
                pic_src: require('../../assets/picbanner/pic4.jpg')
            },
            {   
                pic_class: '',
                pic_href: '#',
                pic_title: 'picbanner5',
                pic_alt: 'pic5',
                pic_src: require('../../assets/picbanner/pic5.jpg')
            },
            {   
                pic_class: 'last',
                pic_href: '#',
                pic_title: 'picbanner6',
                pic_alt: 'pic6',
                pic_src: require('../../assets/picbanner/pic6.jpg')
            },
        ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-index{
    width: 1190px;
    min-width: 1190px;
    margin: 0 auto;
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
    .side-log{
        width: 208px;
        border: 1px solid #eee;
        .btns{
            margin: -1px -1px 0;
            padding-bottom: 17px;
            font-size: 16px;
            line-height: 36px;
            text-align: center;
            a{
                display: block;
                width: 210px;
                background: #009237;
                color: #fff;
                text-decoration: none;
            }
        }
        .idtab{
            width: 100%;
            padding-bottom: 3px;
            overflow: hidden;
        }
    }
}

.pic-banner{
    margin-top: 15px;
    margin-bottom: 15px;
}
.pic-banner .clearfix{
        margin: 0;
        padding: 0;
        zoom: 1;
        &::after{
            visibility: hidden;
            display: block;
            font-size: 0;
            content: ".";
            clear: both;
            height: 0;
        }
        li{
            float: left;
            width: 195px;
            display: inline;
            margin: 0 2px;
        }
}

.pic-banner .clearfix li a{
    position: relative;
    display: block;
    color: #333;
    text-decoration: none;
    &::before,
    &::after
    {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: 0 -534px;
        background: url(../../assets/sprite/bg-index-page.png) no-repeat;
    }
    &::after{
        background-position: -78px -589px;
    }
    &::before{
        background-position: -78px -589px;
    }
    img{
        width: 100%;
        height: 120px;
        display: block;
        vertical-align: top;
        border: 0;
    }
}
.pic-banner li:first-child{
    margin-left: 0;
}
.first{
    margin-left: 0;
}
.pic-banner li:last-child{
    margin-right: 0;
}
.last{
    margin-right: 0;
}
.lazy{
    background: url(../../assets/layout/loading-64.gif) no-repeat;
}

.floor1{
    margin-bottom: 15px;
    .wrap-tit{
        line-height: 20px;
        border-bottom: 2px solid #009237;
        background: #fff;
        &::after{
            visibility: hidden;
            display: block;
            font-size: 0;
            content: ".";
            clear: both;
            height: 0;
        }
    }
}
.floor1 .wrap-tit{
    .wrap-tit-l{
        padding-left: 36px;
        padding-top: 10px;
        padding-bottom: 4px;
        background: url(../../assets/sprite/bg-index-page.png) no-repeat;
        background-position: -141px 0;    
        height: 100%;
        font-size: 16px;
        cursor: default;
        float: left;
        margin: 0;
    }
    .wrap-tit-r{
        padding-right: 5px;
        padding-top: 10px;
        height: 100%;
        font-size: 12px;
        color: #999;
        float: right;
    }
} 
.floor1 .wrap-tit-r{
    .dark-link{
        font-size: 14px;
        margin: 0;
        padding: 0;
        a{
            text-decoration: none;
            color: #666;
            margin-left: 10px;
            &:hover{
                color: rgb(255, 136, 0);
            }
        }
    }
}

.floor1 .wrap-inner{
    background: #fff;
    border-left: none;
    border-right: none;
    zoom: 1;
    .wfl{
        width: 595px;
    }
}
.floor1 .wrap-inner .wfl{
    .title{
        background-color: #ffedef;
        float: left;
        width: 214px;
        height: 380px;
        border-right: 1px solid #eee;
        overflow: hidden;
        font-size: 14px;
        a{
            color: #333;
            text-decoration: none;
            img{
                width: 100%;
                height: 155px;
                display: block;
            }
        }
        h4.t{
            margin: 0 20px 12px;
            padding-bottom: 12px;
            font-size: 20px;
            border-bottom: 1px solid #ddd;
            line-height: normal;
            text-align: left;
            a{
                color: #333;
                text-decoration: none;
                &::before{
                    content: '';
                    display: inline-block;
                    width: 4px;
                    height: 18px;
                    margin-right: 7px;
                    vertical-align: -2px;
                    background: #f57a11;
                }
            }
        }
        p{
            height: 58px;
            margin-bottom: 5px;
            padding: 0 20px;
            line-height: 14px;
            overflow: hidden;
            a{
                float: left;
                margin-bottom: 15px;
                margin-right: 7px;
                padding-right: 7px;
                border-right: 1px solid #ddd;
                white-space: nowrap;
                color: #666;
                text-decoration: none;
            }
        }
        ul.bg-a{
            margin: 0 10px 10px;
            padding: 8px;
            background: #fafafa;
            border: 1px solid #ebe4e5;
            line-height: 24px;
            background-color: #fff7f8;
            li{
                a{
                    color: #333;
                    text-decoration: none;
                    display: block;
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: #333;
                    text-decoration: none;
                    &:hover{
                        color: #ef812c;
                    }
                }
            }
        }
    }
}
</style>

