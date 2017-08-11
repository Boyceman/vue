<template>
  <div class="LatestMeetingCell">
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
    name: 'LatestMeetingCell',
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
  @import "../../style/functions";

  .LatestMeetingCell {
    overflow: hidden;
    padding: p2r(30) p2r(60) p2r(30) p2r(35);
    background: #fff;
    border: 1px solid #eee;
    border-left: none;
    border-right: none;
    &:not(:first-child) {
      margin-Top: p2r(10);
    }
    .image {
      float: left;
      margin-right: p2r(35);
      width: p2r(122);
      height: p2r(112);
    }
    .text {
      text-align: left;
      overflow: hidden;
      .title {
        margin-top: p2r(-6);
        font-size: p2r(30);
        color: #333333;
        @include Ellipsis(auto);
        margin-bottom: p2r(10);
      }
      p, span {
        font-size: p2r(20);
        color: #999999;
      }
      .date {
        line-height: 1.3;
      }
    }
  }
</style>
