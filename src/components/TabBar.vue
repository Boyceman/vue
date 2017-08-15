<template>
  <mt-tabbar class="TabBar" v-model="active">
    <mt-tab-item v-for="(tabBar, index) in tabBars" :key="tabBar.clazz"
      :id="tabBar.clazz" @click.native="navigator(tabBar)">
      <i slot="icon" class="icon" :class="tabBar.clazz"></i>
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
      this.$utils.logs.group('tabBar  --Mounted LifeCircle', this.$route.path)
      this.$props.tabBars.forEach(item => {
        if (this.$route.path === item.path) {
          this.active = item.clazz
          this.$store.commit('tabBar-active', { active: item.clazz })
        }
      })
    },
    methods: {
      navigator: function (tabBar) {
        this.$store.commit('tabBar-active', { active: tabBar.clazz })
        this.$router.push(tabBar.path)
      }
    },
    watch: {
      '$route': function (to) {
        this.$props.tabBars.forEach(tabBar => {
          if (tabBar.path === to.path) {
            this.active = tabBar.clazz
          }
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .TabBar {
    overflow: hidden;
    height: p2r(100);
    .mint-tab-item {
      padding: 5px 0;
      background: #333333 !important;
      .mint-tab-item-icon {
        margin-bottom: p2r(5);
        .icon {
          margin: 0 auto;
          &.latest {
            width: p2r(51);
            height: p2r(42);
            background: url('../assets/tab1.png') no-repeat center / cover;
          }
          &.history {
            width: p2r(36);
            height: p2r(42);
            background: url('../assets/tab2.png') no-repeat center / cover;
          }
          &.news {
            width: p2r(42);
            height: p2r(42);
            background: url('../assets/tab3.png') no-repeat center / cover;
          }
          &.account {
            width: p2r(36);
            height: p2r(42);
            background: url('../assets/tab4.png') no-repeat center / cover;
          }
        }
      }
      .mint-tab-item-label {
        color: #666666;
        transition: .3s ease-in-out;
      }
      &.is-selected {
        color: #ff4949;
        .icon {
          &.latest {
            background: url('../assets/tab11.png') no-repeat center / cover;
          }
          &.history {
            background: url('../assets/tab21.png') no-repeat center / cover;
          }
          &.news {
            background: url('../assets/tab31.png') no-repeat center / cover;
          }
          &.account {
            background: url('../assets/tab41.png') no-repeat center / cover;
          }
        }
        .mint-tab-item-label {
          color: #999999;
        }
      }
    }
  }
</style>
