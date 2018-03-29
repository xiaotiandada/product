<template>
    <div class="floor1">
            <div class="wrap-tit">
                <h3 class="wrap-tit-l fv">水果蔬菜</h3>
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
                        <div class="title bimg1">
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
                                <img class="lazy imgfirst" src="http://img.cnhnb.com/group1/M00/9B/DC/46EE3*H689ChRkRlqnJvKADz0DAADREnz0YX0556.jpg" alt="">
                            </a>
                            <a href="">
                                <img class="lazy imgchild" src="http://img.cnhnb.com/group1/M00/9A/3B/231AA8Z554ChRkRlozNLqAE0PfAAAYUmupcpw460.jpg" alt="">
                            </a>
                            <a href="">
                                <img class="lazy imgchild" src="http://img.cnhnb.com/group1/M00/99/9B/8117B4KA86ChRkRloWMeCAOVxhAAAU-X5By-U450.jpg" alt="">
                            </a>
                        </div>
                    </div> 
                
                <div class="wfl fl">
                    <div class="title bimg2">
                        <a href="">
                            <img class="lazy" src="http://img.cnhnb.com/group1/M00/9A/66/A71F6FT5C7ChRkRlo7U3OAKfTAAAAlwsUl-SU565.jpg" alt="">
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
                            <img class="lazy imgfirst" src="http://img.cnhnb.com/group1/M00/99/A3/22A001C991ChRkRloXiaaACAJGAADTXp-8u8I825.jpg" alt="">
                        </a>
                        <a href="">
                            <img class="lazy imgchild" src="http://img.cnhnb.com/group1/M00/99/DB/DCE553RB25ChRkRlog86aAPP_dAABZI4OTdt4806.jpg" alt="">
                        </a>
                        <a href="">
                            <img class="lazy imgchild" src="http://img.cnhnb.com/group1/M00/9A/0A/CA08E1CCFAChRkRloo1l2ADHAoAAA2q1UJtII208.jpg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Flooras',
//   props: {
    //   fvlist:{
    //       type: Array,
    //       default: []
    //   }
//   },
  data () {
    return {
       
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

.floor1{
    margin-bottom: 15px;
    overflow:hidden;
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
        background-color: #eee;
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
                &:hover{
                    color: #ef812c;
                }
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

    .imgs{
        float: left;
        width: 380px;
        height: 380px;
        overflow: hidden;
        a{
            float: left;
            color: #333;
            text-decoration: none;
            margin: 0;
            img{
                border: 1px solid #eee;
                border-left: none;
                vertical-align: top;
            }
        }
    }
}

.imgfirst{
    width: 224px;
    height: 378px;
}
.imgchild{
    width: 154px;
    height: 188px;
}
.bimg1{
    background-color: #ffedef !important;
}
.bimg2{
    background-color: #e0ffe7 !important;
}
.fv{
    background-position: -141px 0 !important;
}
</style>
