<template>
  <div class="LatestMeetingCell" :class="clazz" @click="handleClick">
    <div class="image">
      <img :src="cell.image">
    </div>
    <div class="text">
      <h2 class="title">{{ cell.title }}</h2>
      <span class="name">{{ cell.name }}</span>
      <span class="organization">{{ cell.organization }}</span>
      <p class="date">{{ cell.date }}</p>
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
    box-sizing: border-box;
    overflow: hidden;
    padding: p2r(30) p2r(48) p2r(40) p2r(35);
    background: #fff;
    border: 1px solid #eee;
    border-left: none;
    border-right: none;
    height: p2r(208);
    &:not(:first-child) {
      margin-top: p2r(10);
    }
    .image {
      float: left;
      margin-right: p2r(35);
      background: #d52535;
      width: p2r(100);
      height: p2r(100);
      img {
        width: p2r(100);
        height: p2r(100);
      }
    }
    .text {
      text-align: left;
      overflow: hidden;
      .title {
        font-weight: bold;
        margin-top: p2r(-6);
        font-size: p2r(34);
        color: #333333;
        @include Ellipsis(auto);
        margin-bottom: p2r(10);
      }
      span {
        font-size: p2r(28);
        color: #999999;
        display: inline-block;
        margin-bottom: p2r(10);
        &.name {
          color: #3ba3df;
          margin-right: p2r(10);
        }
      }
      .date {
        font-size: p2r(28);
        color: #999999;
        line-height: 1.3;
      }
    }
  }
</style>
