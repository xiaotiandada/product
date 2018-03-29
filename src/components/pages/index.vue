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
                <!-- <li class="first">
                    <a href="">
                        <img class="lazy" src="http://img.cnhnb.com/group1/M00/9B/34/313E86LE38ChRkRlpiyzGAYvm8AAA1PW3pK1o319.jpg" alt="">
                    </a>
                </li> -->
                <template v-for="item in picbanner">
                    <li :class="item.pic_class">
                        <a :href="item.pic_href" :title="item.pic_title">
                            <img :src="item.pic_src" :alt="item.pic_alt" class="lazy">
                        </a>
                    </li>
                </template>
            </ul>
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
</style>

