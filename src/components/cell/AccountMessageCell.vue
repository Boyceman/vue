<template>
  <div class="AccountMessageCell" @click="handleClick">
    <h2 class="title">系统消息<span class="now">{{ cell.now }}</span></h2>
    <p class="content">
      您已成功预订由{{ cell.organization }}发起的"{{ cell.title }}"会议。
    </p>
    <p class="date">时间：{{ cell.date }}</p>
    <p class="phone">拨入电话：{{ cell.phone }}</p>
    <p class="bottom">
      <span>会议室号码：<span>{{ cell.roomNumber }}</span></span>
      <span>密码：<span>{{ cell.password }}</span></span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'AccountMessageCell',
    props: ['cell', 'handleClick'],
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../../style/functions";

  .AccountMessageCell {
    text-align: left;
    box-sizing: border-box;
    padding: p2r(30) p2r(48) p2r(30) p2r(35);
    height: p2r(280);
    background: #fff;
    border: 1px solid #eee;
    border-left: none;
    border-right: none;
    position: relative;
    &:not(:first-child) {
      margin-top: p2r(10);
    }
    .title {
      font-size: p2r(30);
      color: #000000;
      line-height: 1;
      margin-bottom: p2r(20);
      .now {
        font-size: p2r(20);
        color: #999999;
        display: inline-block;
        margin-left: p2r(16);
      }
    }
    .bottom {
      span {
        margin-right: p2r(10);
        span {
          color: #dd2637;
        }
      }
    }
  }
</style>
