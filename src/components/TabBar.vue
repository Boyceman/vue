<template>
  <mt-tabbar class="TabBar" v-model="active">
    <mt-tab-item v-for="(tabBar, index) in tabBars" :key="tabBar.clazz"
      :id="tabBar.clazz" @click.native="navigator(tabBar.path)">
      <i slot="icon" class="iconfont" :class="tabBar.icon"></i>
      {{ tabBar.display }}
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
    name: 'TabBar',
    props: ['tabBars'],
    data () {
      return {
        active: this.$store.getters['tabBar-active']
      }
    },
    mounted () {
      this.$utils.logs.group('tabBar mounted', this.$route.path)
    },
    methods: {
      navigator: function (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .TabBar {
    overflow: hidden;
    .mint-tab-item {
      padding: 5px 0;
      .mint-tab-item-icon {
        .iconfont {
          font-size: p2r(48);
          position: relative;
          color: #2c3e50;
          &:before {
            position: absolute;
            left: 0;
            top: p2r(-10);
          }
        }
      }
      &.is-selected {
        color: #ff4949;
        .iconfont:before {
          color: #ff4949;
        }
      }
    }
  }
</style>
