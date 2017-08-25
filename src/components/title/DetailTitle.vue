<template>
  <h1 class="Title">
    <span class="back" @click="()=>{this.$router.go(-1)}">
      <i class="iconfont icon-back"></i>
    </span>
    <span class="text move-right">{{ title }}</span>
    <div class="icons">
      <span v-if="isHistory" class="download" @click="download"><i class="iconfont icon-download"></i></span>
      <span class="favorite" @click="favorite"><i class="iconfont icon-favorite"></i></span>
      <span class="share" @click="share"><i class="iconfont icon-share"></i></span>
    </div>
  </h1>
</template>

<script>
  export default {
    name: 'Title',
    props: ['title', 'isHistory'],
    data () {
      return {}
    },
    methods: {
      download () {
        console.log('download')
      },
      favorite () {
        console.log('favorite')
      },
      share () {
        console.log('share')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../../style/functions";

  .Title {
    font-size: p2r(30);
    line-height: p2r(90);
    color: #ffffff;
    background: #dd2738;
    height: 45px;
    padding: 0 p2r(18);
    .iconfont {
      font-size: 26px;
      font-weight: 600;
    }
    .back {
      float: left;
      height: 45px;
    }
    .text {
      &.move-right {
        display: inline-block;
        margin-left: p2r(70);
      }
    }
    .icons {
      float: right;
      height: 45px;
      padding-right: 8px;
      span {
        margin-left: p2r(6);
        .iconfont {
          font-size: 20px;
        }
      }
    }
  }
</style>
