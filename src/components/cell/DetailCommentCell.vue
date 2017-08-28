<template>
  <div class="DetailCommentCell">
    <h3 class="top">
      <span class="name">{{ cell.author.name }}</span>
      <span class="time-ago">{{ timeAgo }}</span>
    </h3>
    <p class="content">
      {{ cell.content }}
    </p>
  </div>
</template>

<script>
  import timeAgo from '@/utils/timeAgo'

  export default {
    name: 'DetailCommentCell',
    props: ['cell', 'commentTime'],
    data () {
      return {
        timeAgo: timeAgo(this.commentTime)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../../style/functions";

  .DetailCommentCell {
    position: relative;
    font-size: p2r(20);
    color: #999999;
    padding: p2r(35);
    &:not(:first-child):after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      top: 0;
      left: 0;
      transform: scaleY(.5);
      border-top: 1px dashed #000;
    }
    .top {
      margin-bottom: p2r(20);
      .name {
        color: #5470b5;
        margin-right: p2r(20);
      }
    }
    .content {
      color: #666666;
    }
  }
</style>
