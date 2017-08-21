<template>
  <div class="LaunchMeeting">
    <title-h1 :title="title" :hidden="true"></title-h1>
    <launch-meeting-form :startDate="startDate" :endDate="endDate"></launch-meeting-form>
    <mt-datetime-picker
      ref="picker"
      type="datetime"
      v-model="date"
      :startDate="baseDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      hourFormat="{value} 时"
      minuteFormat="{value} 分"
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
        baseDate: new Date(),
        click: '',
        startDate: '',
        endDate: ''
      }
    },
    mounted () {
      this.navBarIf({ if: false })
    },
    methods: {
      ...mapMutations(['navBarIf']),
      handleConfirm (dateTime) {
        let [date, time] = dateTime.toLocaleString('en-US', { hour12: false }).split(', ')
        let dateArray = date.split('/')
        dateArray.unshift(dateArray.pop())
        let dateString = dateArray.join('-')
        const getTime = str => (new Date(str).getTime())
        if (this.click === 'start') {
          (!this.endDate || getTime(dateTime) < getTime(this.endDate))
            ? (this.startDate = `${dateString} ${time}`)
            : window.alert('hey man, don\'t do this') // TODO add popup
        } else {
          (!this.startDate || getTime(dateTime) > getTime(this.startDate))
            ? (this.endDate = `${dateString} ${time}`)
            : window.alert('hey man, don\'t do this') // TODO add popup
        }
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
    .picker-item {
      padding: 0 p2r(10);
    }
  }
</style>
