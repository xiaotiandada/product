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
</style>

