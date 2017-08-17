<template>
  <div class="LatestMeetingCell" :class="clazz" @click="handleClick">
    <div class="image">
      <img :src="cell.image">
    </div>
    <div class="text">
      <h2 class="title">{{ cell.title }}</h2>
      <p class="date">{{ cell.date }}</p>
      <span class="name">{{ cell.name }}</span>
      <span class="organization">{{ cell.organization }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LatestMeetingCell',
    props: ['cell', 'clazz', 'handleClick'],
    data () {
      return {}
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
      margin-top: p2r(10);
    }
    .image {
      float: left;
      margin-right: p2r(35);
      background: #d52535;
      width: p2r(122);
      height: p2r(112);
      img {
        width: p2r(122);
        height: p2r(112);
      }
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
