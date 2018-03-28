<template>
    <div class="category" id="category">
            <div class="label">
               <template  v-for="(item, index) in leftMenu">
                   <dl :class="'cate-0'+ index">
                        <dt>
                            <h3>
                                <a href="#">{{item.title}}</a>
                            </h3>
                        </dt>
                        <dd>
                            <a href="#" v-for="items in item.titleChild">{{items}}</a>
                        </dd>
                    </dl>
               </template>
            </div>

            <div class="panel">
                <template v-for="item in leftMenuItems">
                        <div class="item">
                            <div class="sub-cate">
                                <dl v-for="itemdl in item.title_dl">
                                    <dt>
                                        <h3>
                                            <a href="#">
                                                {{itemdl.title}}
                                            </a>
                                        </h3>
                                    </dt>
                                    <dd>
                                        <h3>
                                            <a href="#" v-for="itemarr in itemdl.titleChild">
                                                {{itemarr}}
                                            </a>
                                        </h3>
                                    </dd>
                                </dl>
                            </div>
                            <div class="sub-rcmd">
                                <a href="#" v-for="itemsrc in item.title_src">
                                    <img :src="itemsrc" alt="汁多爽口">
                                </a>
                            </div>
                        </div>
                </template>
                
            </div>
        </div>
</template>

<script>
export default {
  name: 'Leftmenu',
  props: {
      leftMenu:{
          type: Array,
          default: []
      },
      leftMenuItems:{
          type: Array,
          default: []
      }
  },
  data () {
    return {
       
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
    // &:hover{
    //     background-color: #eee;
    //     border: 1px solid #dcdcdc;
    //     border-right-color: #eee;
    //     margin-top: -1px;
    //     margin-left: -1px;
    //     z-index: 999;
    //     position:relative;
    // }
    &:hover dt a:after{
        border-left-color: #eee;
    }
}

 .label dl.dlhover{
    background-color: #eee;
    border: 1px solid #dcdcdc;
    border-right-color: #eee;
    margin-top: -1px;
    margin-left: -1px;
    z-index: 999;
    position:relative;
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

.panel{
    position: absolute;
    width: 768px;
    // min-height: 453px;
    // height: 453px;
    top: 0;
    left: 200px;
    margin-left: -2px;
    border: 1px solid #dcdcdc;
    background: #eee;
    overflow: hidden;
    display: none;
}
.panel .item{
    zoom: 1;
    overflow: hidden;
    display: none;
    min-height: 453px;
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

</style>
