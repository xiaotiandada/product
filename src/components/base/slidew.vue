<template>
    <div class="main-slide">
          <el-carousel :interval="5000" arrow="hover" height="440px">
            <el-carousel-item v-for="item in slidewList" :key="item.index">
                <img :src="item.url" :alt="item.name">
            </el-carousel-item>
          </el-carousel>
        </div>
</template>

<script>
export default {
  name: 'Slidew',
  props: {
      slidewList:{
          type: Array,
          default: []
      }
  },
  data () {
    return {
       
    }
  },
   mounted () {
        // console.log(this.slidewList)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item img {
    width: 100%;
    height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
