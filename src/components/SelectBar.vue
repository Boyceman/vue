<template>
  <div class="SelectBar">
    <selector v-for="(type, index) in types" :key="index" :type="type" :onclick="onclick"></selector>
    <ul class="sub">
      <li v-for="(option, index) in options" :key="index" class="option" :class="active">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
  import Selector from '@/components/Selector'
  export default {
    name: 'SelectBar',
    _router: {
      name,
      path: '/SelectBar',
      component: resolve => require.ensure([], () => resolve(require('./SelectBar')), 'SelectBar')
    },
    components: { Selector },
    props: ['options', 'types', 'onclick'],
    data () {
      return {
        active: ''
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../style/functions';

  .SelectBar {
    z-index: 2;
    position: fixed;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eee;
    background: #fff;
    .sub {
      display: none;
      position: absolute;
      top: 100%;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, .5);
      .option {
        background: #fff;
        color: #999999;
        width: 100%;
        text-align: left;
        padding-left: p2r(35);
        font-size: p2r(30);
        line-height: p2r(75);
        border-top: 1px solid #eee;
        &.active {
          color: #dd2637;
        }
      }
    }
  }
</style>
