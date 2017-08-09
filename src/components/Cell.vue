<template>
  <div class="Cell">
    <img class="image" :src="image">
    <div class="text">
      <h2 class="title">{{ title }}</h2>
      <p class="date">{{ date }}</p>
      <span class="name">{{ name }}</span>
      <span class="organization">{{ organization }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cell',
    props: ['cell'],
    data () {
      const { image, title, date, name, organization } = this.$props.cell
      return {
        image, title, date, name, organization
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .Cell {
    overflow: hidden;
    padding: p2r(30) p2r(35);
    background: #fff;
    border: 1px solid #eee;
    border-left: none;
    border-right: none;
    margin-bottom: p2r(10);
    .image {
      float: left;
      margin-right: p2r(35);
    }
    .text {
      text-align: left;
      .title {
        font-size: p2r(30);
        line-height: 1;
        color: #333333;
        height: p2r(30);
        @include Ellipsis(auto);
        margin-bottom: p2r(22);
        line-height: 1;
      }
      p, span {
        font-size: p2r(20);
        color: #999999;
      }
    }
  }
</style>
