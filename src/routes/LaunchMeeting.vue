<template>
  <div class="LaunchMeeting">
    <title-h1 :title="title" :hidden="true"></title-h1>
    <mt-tabbar v-model="active">
      <mt-tab-item id="1">公开会议</mt-tab-item>
      <mt-tab-item id="2">私人会议</mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="active" :swipeable="true">
      <mt-tab-container-item id="1">
        <launch-meeting-form :handleConfirm="handleConfirm"></launch-meeting-form>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <launch-meeting-form :handleConfirm="handleConfirm"></launch-meeting-form>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-datetime-picker
      ref="picker"
      type="datetime"
      v-model="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      hourFormat="{value} :"
      @confirm="handleConfirm"
    >
    </mt-datetime-picker>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'LaunchMeeting',
    _router: {
      name,
      path: '/launch',
      component: resolve => require.ensure([], () => resolve(require('./LaunchMeeting')), 'LaunchMeeting')
    },
    components: {
      'TitleH1': () => import('@/components/title/AccountTitle'),
      'LaunchMeetingForm': () => import('@/components/LaunchMeetingForm')
    },
    data () {
      return {
        title: '发起会议',
        date: '',
        active: '1'
      }
    },
    mounted () {
      this.navBarIf({ if: false })
    },
    methods: {
      ...mapMutations(['navBarIf']),
      handleConfirm (a) {
        console.log(a, 'click confirm dataTime')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .LaunchMeeting {
    background: #fff;
    height: 100%;
    * {
      box-sizing: border-box;
    }
    .mint-tabbar {
      top: 45px;
      height: p2r(70);
      .mint-tab-item {
        height: p2r(70);
        color: #999999;
        padding: p2r(20) 0;
        background: transparent;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          height: p2r(4);
          width: 0;
          left: 50%;
          transform: translate(-50%, 0);
          background: #cb1e2e;
          transition: width .3s ease-in-out;
        }
        &.is-selected {
          color: #666666;
          &:after {
            width: 100%;
          }
        }
        .mint-tab-item-label {
          font-size: p2r(30);
        }
      }
    }
    .mint-tab-container {
      top: p2r(70);
    }
  }
</style>
