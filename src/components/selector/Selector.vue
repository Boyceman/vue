<template>
  <div class="Selector">
    <div class="select" @click="handleClick">{{ type }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Selector',
    components: {},
    props: ['type', 'onclick', 'index'],
    data () {
      return {}
    },
    methods: {
      handleClick () {
        this.$props.onclick(this.$props.index)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../../style/functions";

  .Selector {
    box-sizing: border-box;
    flex: 1;
    font-size: p2r(30);
    height: p2r(75);
    padding: p2r(10) 0;
    .select {
      color: #666666;
      line-height: p2r(55);
      height: p2r(55);
      position: relative;
      &:after {
        content: '';
        width: 8px;
        height: 4.5px;
        position: absolute;
        top: p2r(26);
        right: p2r(66);
        transition: transform .3s ease-in-out;
        transform-origin: 50% 0;
        background: url("../../assets/type.png") no-repeat center / cover;
      }
    }
    &.active {
      .select {
        &:after {
          transform: rotateX(180deg);
        }
      }
    }
    &:not(:first-child) {
      .select {
        border-left: 1px solid #eee;
      }
    }
  }
</style>
