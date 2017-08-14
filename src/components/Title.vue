<template>
  <h1 class="Title">
    {{ title }}
  </h1>
</template>

<script>
  export default {
    name: 'Title',
    props: ['title'],
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .Title {
    font-size: p2r(30);
    line-height: p2r(90);
    color: #ffffff;
    background: #dd2738;
    height: p2r(90);
  }
</style>
