<template>
    <div class="main-index">
        <leftmenu :leftMenu="leftMenu" :leftMenuItems="leftMenuItems"></leftmenu>  
        <slidew :slidewList="slidewList"></slidew>
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

        <picbanner :picbanner="picbanner"></picbanner>
        <floorfv></floorfv>
        <floorah></floorah>
        <floorgo></floorgo>
        <flooras></flooras>

        <div class="pic-bannerm">
            <p>
                <a>
                    <img class="lazy" src="http://img.cnhnb.com/group1/M00/99/85/9FCE23RED4ChRkRloSg_KAPRqTAAFPwNDf77U452.jpg">
                </a>
            </p>
        </div>
    </div>
</template>

<script>
import slidew from '@/components/base/slidew'
import leftmenu from '@/components/base/leftmenu'
import picbanner from '@/components/base/picbanner'
import floorfv from '@/components/base/floorfv'
import floorah from '@/components/base/floorah'
import floorgo from '@/components/base/floorgo'
import flooras from '@/components/base/flooras'
export default {
  name: 'Index',
  components: {
      slidew,
      leftmenu,
      picbanner,
      floorfv,
      floorah,
      floorgo,
      flooras
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
        // fvlist:[
        //     {
        //         fv_tit: {
        //             fv_tit_class: 'fv',
        //             fv_tit_title: '水果蔬菜',
        //             fv_tit_link: [
        //                 '土豆','土豆','土豆','土豆','土豆','土豆',
        //             ]
        //         },
        //         fv_con: [
        //             {
        //                 fv_con_bimg: 'bimg1',
        //                 fv_con_btimgsrc: 'http://img.cnhnb.com/group1/M00/9A/66/1440F9U1A6ChRkRlo7U0aAL2cGAAAlQvGLqCk013.jpg',
        //                 fv_con_bh4: '水果',
        //                 fv_con_barr: [
        //                     '西瓜','西瓜','西瓜','西瓜','西瓜','西瓜','西瓜','西瓜',
        //                 ],
        //                 fv_con_bli: [
        //                     '【资讯】如何预防葡萄根结线虫病？葡萄根结线虫病预防措施',
        //                     '【资讯】如何预防葡萄根结线虫病？葡萄根结线虫病预防措施',
        //                     '【资讯】如何预防葡萄根结线虫病？葡萄根结线虫病预防措施',
        //                     '【资讯】如何预防葡萄根结线虫病？葡萄根结线虫病预防措施'
        //                 ],
        //                 fv_con_bfirst: 'imgfirst',
        //                 fv_con_bchild: 'imgchild',
        //                 fv_con_bimgsl: 'http://img.cnhnb.com/group1/M00/9B/DC/46EE3*H689ChRkRlqnJvKADz0DAADREnz0YX0556.jpg',
        //                 fv_con_bimgsrt: 'http://img.cnhnb.com/group1/M00/9B/DC/46EE3*H689ChRkRlqnJvKADz0DAADREnz0YX0556.jpg',
        //                 fv_con_bimgsrb: 'http://img.cnhnb.com/group1/M00/9B/DC/46EE3*H689ChRkRlqnJvKADz0DAADREnz0YX0556.jpg'
        //             }
        //         ]
        //     }
        // ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
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

.pic-bannerm{
    margin-top: 15px;
    margin-bottom: 15px;
    p{
        text-align: center;
        a{
            display: block;
            width: 100%;
            color: #333;
            text-decoration: none;
            img{
                display: block;
                width: 1190px;
                height: 90px;
                vertical-align: top;
            }
        }
    }
}
</style>

