<template>
  <div class="HistoryMeetingCell" @click="handleClick">
    <div class="image">
      <img :src="cell.image">
    </div>
    <div class="text">
      <h2 class="title">{{ cell.title }}</h2>
      <span class="name">{{ cell.name }}</span>
      <span class="organization">{{ cell.organization }}</span>
      <p class="date">{{ cell.date }}</p>
      <div class="icon">
        <i v-if="haveDownload" :class="['download', { grey: haveDownload === 1 }]" @click="entryDownload"></i>
        <i v-if="haveVideo" :class="['video', { grey: haveVideo === 1 }]" @click="entryVideo"></i>
        <i v-if="haveAudio" :class="['audio', { grey: haveAudio === 1 }]" @click="entryAudio"></i>
        <i v-if="haveNote" :class="['note', { grey: haveNote === 1 }]" @click="entryNote"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HistoryMeetingCell',
    props: ['cell', 'handleClick', 'haveVideo', 'haveDownload', 'haveAudio', 'haveNote'],
    data () {
      return {}
    },
    methods: {
      entryNote (e) {
        e.stopPropagation()
        console.log('entry note page')
      },
      entryAudio (e) {
        e.stopPropagation()
        console.log('entry audio page')
      },
      entryVideo (e) {
        e.stopPropagation()
        console.log('entry video page')
      },
      entryDownload (e) {
        e.stopPropagation()
        console.log('entry download page')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../../style/functions";

  .HistoryMeetingCell {
    box-sizing: border-box;
    overflow: hidden;
    padding: p2r(30) p2r(48) p2r(20) p2r(35);
    background: #fff;
    border: 1px solid #eee;
    border-left: none;
    border-right: none;
    position: relative;
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
      .icon {
        overflow: hidden;
        margin: p2r(10) 0;
        i {
          float: right;
          position: relative;
          height: p2r(40);
          width: p2r(131);
          &:not(:first-child) {
            border-right: 1px solid #e9e9e9;
          }
          &:after {
            content: '';
            position: absolute;
            width: p2r(40);
            height: p2r(40);
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
          }
          @include HistoryMeetingListIcon(download);
          @include HistoryMeetingListIcon(video);
          @include HistoryMeetingListIcon(audio);
          @include HistoryMeetingListIcon(note);
        }
      }
    }
  }
</style>
