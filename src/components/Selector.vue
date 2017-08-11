<template>
  <div class="Selector">
    <div class="select">{{ type }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Selector',
    components: {},
    props: ['type'],
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

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
      &:after {
        content: '‹';
        display: inline-block;
        transform: rotate(-90deg) translate(0, p2r(10));
      }
    }
    &:not(:first-child) {
      .select {
        border-left: 1px solid #eee;
      }
    }
  }
</style>
