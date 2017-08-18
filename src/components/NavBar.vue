<template>
  <header class="NavBar">
    <span v-if="this.$route.path === '/'" class="back" @click="()=>{this.$router.go(-1)}"><i
      class="iconfont icon-back"></i></span>
    <div class="search">
      <i class="iconfont icon-search"></i>
      <input type="text" class="input" v-model="value">
    </div>
    <span class="add" @click="launchMeeting"><i class="iconfont icon-add"></i></span>
  </header>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'NavBar',
    components: {},
    data () {
      return {
        value: ''
      }
    },
    methods: {
      ...mapMutations(['tabBarIf']),
      launchMeeting () {
        this.tabBarIf({ if: false })
        this.$router.push('/launch')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../style/functions';

  .NavBar {
    box-sizing: border-box;
    height: 45px;
    background: #dd2738;
    position: relative;
    padding: 3px 0;
    .back {
      float: left;
      margin-left: p2r(18);
      .iconfont {
        font-size: 26px;
        font-weight: 600;
      }
    }
    .add {
      float: right;
      margin-right: p2r(18);
      .iconfont {
        font-size: 26px;
        font-weight: 600;
      }
    }
    .search {
      width: p2r(490);
      height: p2r(60);
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      padding: 0 p2r(10);
      background: #c01e2c;
      .icon-search {
        position: absolute;
        font-size: 20px;
        opacity: .6;
      }
      .input {
        background: transparent;
        outline: none;
        border: none;
        color: #ffffff;
        width: 100%;
        height: 100%;
        text-indent: p2r(50);
        font-family: PingFang TC;
      }
    }
  }
</style>
