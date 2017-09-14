<template>
  <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')"
    @collapse="main_log('collapse')" class="pb" :radius="80"
    ref="target" mainButtonStyle="color:#fff;background-color:#f44d5d;"
  >
    <div class="popup-item" @touchstart.prevent="sub_log(1)"></div>
    <div class="popup-item" @touchstart.prevent="sub_log(2)"></div>
    <div class="popup-item" @touchstart.prevent="sub_log(3)"></div>
  </mt-palette-button>
</template>

<script>
  export default {
    name: 'Storage',
    components: {},
    props: ['main_log', 'sub_log'],
    data () {
      return {
        msg: 'Welcome to Component Storage'
      }
    },
    methods: {
      /** props methods demo
       *main_log (val) {
       *  console.log('main_log', val)
       *},
       *sub_log (val) {
       *  console.log('sub_log', val)
       *  this.$refs.target.collapse()
       *}
       */
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .mint-palette-button {
    position: fixed !important;
    right: .5rem;
    bottom: .5rem;

    .popup-item {
      background: #f44d5d;
      border-radius: 50%;
    }
  }
</style>
