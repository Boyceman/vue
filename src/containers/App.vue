<template>
  <div id="app" @onscroll.default="">
    <nav-bar v-if="nav"></nav-bar>
    <router-view></router-view>
    <tab-bar :tabBars="tabBars"></tab-bar>
  </div>
</template>

<script>
  import '../mintUI'
  import { _router as LatestMeeting } from '@/routes/LatestMeeting'
  import { _router as HistoryMeeting } from '@/routes/HistoryMeeting'
  import { _router as MeetingNews } from '@/routes/MeetingNews'
  import { _router as Account } from '@/routes/Account'

  export default {
    name: 'app',
    components: {
      'TabBar': () => import('@/components/TabBar'),
      'NavBar': () => import('@/components/NavBar')
    },
    data () {
      return {
        nav: true,
        active: '',
        tabBars: [
          {
            clazz: 'latest',
            display: '最近会议',
            path: LatestMeeting.path,
            icon: 'icon-training'
          },
          {
            clazz: 'history',
            display: '历史会议',
            path: HistoryMeeting.path,
            icon: 'icon-Meeting-Participants'
          },
          {
            clazz: 'news',
            display: '会议资讯',
            path: MeetingNews.path,
            icon: 'icon-survey'
          },
          {
            clazz: 'account',
            display: '个人中心',
            path: Account.path,
            icon: 'icon-account'
          }
        ]
      }
    },
    mounted () {
      this.tabBars.forEach(item => {
        if (this.$route.path === item.path) {
          this.active = item.clazz
        }
      })
      const html = document.getElementsByTagName('html')[0]
      html.addEventListener('touchmove', e => {
        e.stopPropagation()
      }, { passive: true })
    },
    updated () {
      this.nav = this.$store.getters['tabBar-active'] !== 'account'
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/reset";
  @import "../style/iconfont.css";

  html, body {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }

  body {
    background: #f8f8f8;
  }

  .iconfont {
    color: #ffffff;
  }

  .vh {
    visibility: hidden;
  }
</style>
