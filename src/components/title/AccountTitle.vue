<template>
  <h1 class="Title">
    <span class="back" @click="()=>{this.$router.go(-1)}">
      <i class="iconfont icon-back"></i>
    </span>
    <span class="text" :class="hidden ? 'moveLeft': ''">{{ title }}</span>
    <span v-if="!hidden" class="add" @click="launchMeeting"><i class="iconfont icon-add"></i></span>
  </h1>
</template>

<script>
  export default {
    name: 'Title',
    props: ['title', 'hidden'],
    data () {
      console.log(this.$props.hidden)
      return {}
    },
    methods: {
      launchMeeting () {
        this.$router.push('/launch')
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
    .iconfont {
      font-size: 26px;
      font-weight: 600;
    }
    .back {
      float: left;
      margin-left: p2r(18);
      height: 45px;
    }
    .add {
      float: right;
      margin-right: p2r(18);
      height: 45px;
    }
    .text {
      &.moveLeft {
        display: inline-block;
        margin-left: p2r(-70);
      }
    }
  }
</style>
