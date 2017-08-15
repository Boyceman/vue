<template>
  <div id="app">
    <nav-bar v-if="nav"></nav-bar>
    <router-view></router-view>
    <tab-bar v-if="tab" :tabBars="tabBars"></tab-bar>
  </div>
</template>

<script>
  import '../mintUI'
  import '@/mocks'
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
        tab: this.$store.getters['tabBar-if'],
        active: '',
        tabBars: [
          {
            clazz: 'latest',
            display: '最近会议',
            path: LatestMeeting.path
          },
          {
            clazz: 'history',
            display: '历史会议',
            path: HistoryMeeting.path
          },
          {
            clazz: 'news',
            display: '会议资讯',
            path: MeetingNews.path
          },
          {
            clazz: 'account',
            display: '个人中心',
            path: Account.path
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
    watch: {
      '$route': function (to) {
        this.tabBars.forEach(tabBar => {
          if (tabBar.path === to.path) {
            this.nav = tabBar.clazz !== 'account'
            this.$store.commit('tabBar-active', { active: tabBar.clazz })
          }
        })
      }
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

  h1, h2, h3, h4, h5 {
    font-weight: normal;
  }
</style>
