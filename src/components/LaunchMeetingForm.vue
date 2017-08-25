<template>
  <div class="LaunchMeetingForm">
    <form>
      <div class="item topic">
        <label>会议主题<input class="input" placeholder="请输入会议主题，不超过30字"></label>
      </div>
      <div class="item private">
        <label>私人会议</label>
        <mt-switch v-model="private"></mt-switch>
      </div>
      <div class="item date" @click="openPicker('start')">
        <label>开始时间<span class="input">{{ startDate }}</span></label>
      </div>
      <div class="item date" @click="openPicker('end')">
        <label>结束时间<span class="input">{{ endDate }}</span></label>
      </div>
      <transition name="slide-fade">
        <div v-if="private" class="external">
          <div class="item member">
            <label>参会人<span class="input">{{ member.join() }}</span></label>
          </div>
          <div class="item share">
            <label @click="help">桌面共享</label>
            <mt-switch v-model="share"></mt-switch>
          </div>
        </div>
      </transition>
      <div class="item textarea">
        <textarea name="" placeholder="请输入会议简介，不限字数"></textarea>
      </div>
      <button class="submit" @click.prevent="submit">提交</button>
    </form>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'

  export default {
    name: 'LaunchMeetingForm',
    components: {},
    props: ['startDate', 'endDate'],
    data () {
      return {
        private: true,
        share: true,
        member: []
      }
    },
    methods: {
      // TODO add form data valid
      openPicker (clazz) {
        this.$parent.$refs.picker.open()
        this.$parent.click = clazz
      },
      submit (e) {
        console.log(e, 'click button submit')
      },
      help () {
        Toast('会议过程中，共享电脑Windows桌面或演示PPT、Word等会议资料给参会者查看')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .LaunchMeetingForm {
    * {
      box-sizing: border-box;
    }
    label {
      font-size: p2r(30);
      color: #333;
      line-height: p2r(60);
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
      width: 100%;
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
      background: #fff;
      &.topic {
        input {
          background: #f1f1f1;
        }
      }
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
      .mint-switch {
        .mint-switch-input:checked + .mint-switch-core {
          background: #dd2738;
          border-color: #dd2738;
        }
        float: right;
        height: p2r(59);
      }
      &.member {
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
      &.share {
        label:first-child:after {
          content: '？';
          display: inline-block;
          line-height: p2r(32);
          text-indent: p2r(8);
          width: p2r(32);
          height: p2r(32);
          border-radius: 100%;
          border: 1px solid #000;
        }
      }
      &.textarea {
        height: auto;
      }
    }
    .submit {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: p2r(75);
      line-height: p2r(75);
      font-size: p2r(30);
      background: #dd2738;
      color: #ffffff;
      border: none;
      outline: none;
    }
    .slide-fade-enter-active {
      transition: all .3s cubic-bezier(0.36, -0.64, 0.34, 1.76);
    }
    .slide-fade-leave-active {
      transition: all .5s cubic-bezier(0.36, -0.64, 0.34, 1.76);
    }
    .slide-fade-enter, .slide-fade-leave-to {
      transform: translateX(p2r(20));
      opacity: 0;
    }
  }
</style>
