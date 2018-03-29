<template>
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
</template>

<script>
export default {
  name: 'Picbanner',
  props: {
      picbanner:{
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
</style>
