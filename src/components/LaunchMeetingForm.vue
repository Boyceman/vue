<template>
  <div class="LaunchMeetingForm">
    <form action="">
      <div class="item date" @click="openPicker('start')">
        <label>开始时间<span class="input">{{ startDate }}</span></label>
      </div>
      <div class="item date" @click="openPicker('end')">
        <label>结束时间<span class="input">{{ endDate }}</span></label>
      </div>
      <div class="item topic">
        <label>会议主题<input class="input" type="text" placeholder="请输入会议主题，不超过30字"></label>
      </div>
      <div class="item textarea">
        <textarea name="" placeholder="请输入会议简介，不限字数"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'LaunchMeetingForm',
    components: {},
    props: ['handleConfirm'],
    data () {
      return {
        startDate: '',
        endDate: ''
      }
    },
    methods: {
      openPicker (clazz) {
        console.log(this.$parent.$parent.$parent, 888)
        this.$parent.$parent.$parent.$refs.picker.open()
      },
      closePicker () {
        this.$refs.picker.close()
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .LaunchMeetingForm {
    * {
      box-sizing: border-box;
    }
    label {
      font-size: p2r(30);
      color: #999999;
    }
    .input {
      width: p2r(530);
      height: p2r(60);
      border: none;
      margin-left: p2r(30);
      text-indent: p2r(20);
      font-size: p2r(24);
      outline: none;
      color: #333333;
    }
    textarea {
      resize: none;
      width: p2r(690);
      height: p2r(465);
      background: #f1f1f1;
      border: none;
      padding: p2r(10) p2r(20);
      text-align: justify;
      outline: none;
    }
    .item {
      height: p2r(100);
      padding: p2r(20) p2r(35);
      border-top: 1px solid #e9e9e9;
      text-align: left;
      position: relative;
      &.date {
        input {
          position: relative;
          z-index: 1;
        }
        &:after {
          content: '';
          width: p2r(14);
          height: p2r(25);
          position: absolute;
          right: p2r(35);
          top: 50%;
          margin-top: p2r(-12);
          background: url(../assets/arrow.png) no-repeat center / 100%;
        }
      }
      &.topic {
        input {
          background: #f1f1f1;
        }
      }
      &.textarea {
        height: auto;
      }
    }
  }
</style>
