<template>
  <div class="SelectBar">
    <selector v-for="(option, index) in options" :key="index" :type="option.name" :index="index"
      :onclick="handleClick" :class="index === active ? 'active' : ''">
    </selector>
    <ul class="sub" :class="typeof(active) === 'number' ? 'active' : ''">
      <li v-for="(child, index) in children" :key="index" class="option">
        {{ child }}
      </li>
    </ul>
  </div>
</template>

<script>
  import Selector from './Selector'
  export default {
    name: 'SelectBar',
    _router: {
      name,
      path: '/SelectBar',
      component: resolve => require.ensure([], () => resolve(require('./SelectBar')), 'SelectBar')
    },
    components: { Selector },
    props: ['options', 'onclick'],
    data () {
      return {
        active: '',
        children: []
      }
    },
    methods: {
      handleClick (index) {
        for (let i = 0, len = this.$props.options.length; i < len; i++) {
          if (index === i) {
            this.children = this.$props.options[i].children
          }
        }
        index !== this.active ? this.active = index : this.active = ''
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../style/functions';

  .SelectBar {
    z-index: 2;
    position: fixed;
    top: p2r(90);
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eee;
    background: #fff;
    .sub {
      position: absolute;
      top: 100%;
      width: 100%;
      height: 0;
      background: rgba(0, 0, 0, .5);
      transition: height .2s ease-in-out;
      overflow: scroll;
      .option {
        box-sizing: border-box;
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
      &.active {
        height: calc(100vh - 45px - 37px)
      }
    }
  }
</style>
