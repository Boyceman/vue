<template>
  <div class="PlaceholderCell">
    <div class="image"></div>
    <div class="text">
      <h2 class="title"></h2>
      <p class="date"></p>
      <span class="name"></span>
      <span class="organization"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlaceholderCell',
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../../style/functions";

  .PlaceholderCell {
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
      position: relative;
      float: left;
      margin-right: p2r(35);
      width: p2r(122);
      height: p2r(112);
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background-color: #ddd;
        @include PlaceholderTransform;
      }
    }
    .text {
      text-align: left;
      overflow: hidden;
      .title {
        font-size: p2r(30);
        color: #333333;
        @include Ellipsis(auto);
        margin-bottom: p2r(10);
        position: relative;
        height: p2r(38);
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background-color: #cacaca;
          @include PlaceholderTransform;
        }
      }
      p, span {
        font-size: p2r(20);
        color: #999999;
        position: relative;
        height: p2r(20);
      }
      span {
        height: p2r(24);
        display: inline-block;
        width: 20%;
        margin-right: p2r(50);
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background-color: #dfdfdf;
          @include PlaceholderTransform;
        }
      }
      .date {
        line-height: 1.3;
        position: relative;
        height: p2r(24);
        width: 60%;
        margin-bottom: p2r(10);
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background-color: #efefef;
          @include PlaceholderTransform;
        }
      }
    }
  }
</style>
