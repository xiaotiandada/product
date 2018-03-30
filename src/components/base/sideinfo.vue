<template>
    <div class="side-info">
        <div class="side-log">
            <div class="btns">
                <a href="">下载惠农网</a>
            </div>
            <div class="idtab">
                <ul class="tit">
                    <li>
                        <a href="#" class="sidetab selected">公告</a>
                    </li>
                    <li>
                        <a href="#" class="sidetab">买家</a>
                    </li>
                    <li>
                        <a href="#" class="sidetab">卖家</a>
                    </li>
                    <li>
                        <a href="#" class="sidetab">规则</a>
                    </li>
                </ul>
                <template   v-for="(item, index) in sideinfo">
                    <div class="tab" :class="{'tabshow' : index==0?true:false}">
                        <ul class="list">
                            <li  v-for="itemarr in item">
                                <a href="">{{itemarr}}</a>
                            </li>
                        </ul>
                    </div>
                </template>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Sideinfo',
  props: {
      sideinfo:{
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
<style lang="less">
.side-info{
    float: left;
    width: 210px;
    height: 440px;
    overflow: hidden;
    margin-top: 15px;
    margin-left: 15px;
    .side-log{
        width: 208px;
        height: 100%;
        border: 1px solid #eee;
        .btns{
            margin: -1px -1px 0;
            padding-bottom: 8px;
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
    }
}
.side-info .idtab{
    width: 100%;
    height: 100%;
    padding-bottom: 3px;
    overflow: hidden;
    ul.tit{
        font-size: 14px;
        text-align: center;
        zoom: 1;
        margin: 0;
        padding: 0;
        line-height: 1.5;
        li{
            margin: 0 -2px;
            display: inline;
            a{
                display: inline-block;
                padding: 3px 9px;
                text-decoration: none !important;
                color: #000;
                border-bottom: 2px solid #ddd;
                -webkit-transition: border-color 0.3s ease;
                -moz-transition: border-color 0.3s ease;
                -ms-transition: border-color 0.3s ease;
                -o-transition: border-color 0.3s ease;
                transition: border-color 0.3s ease;
            }
        }
    }
    .tab{
        padding: 6px 10px;
        display: none;
        ul{
            margin: 0;
            padding: 0;
            line-height: 26px;
            li{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                a{
                    color: #666;
                    text-decoration: none;
                    font-size: 12px;
                    &:hover{
                        color: #f57a11;
                    }
                }
            }
        }
    }
}
.selected{
    border-color: #f57a11 !important;
}
.tabshow{
    display: block !important;
}

.tab:nth-child(0){
    display: block;
}
</style>
