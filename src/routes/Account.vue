<template>
  <div class="Account">
    <h2 class="title">{{ title }}</h2>
    <div class="info">
      <img class="avatar" :src="info.avatar">
      <h2 class="name">{{ info.name }}</h2>
      <p class="organization">{{ info.organization }}</p>
    </div>
    <ul class="menu">
      <li :class="menu.clazz" v-for="(menu, index) in menus" @click="handleClick(menu.link)">{{ menu.text }}
        <span v-if="index === 0" class="unread">18</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import apiGenerator from '@/api'
  import { mapMutations } from 'vuex'

  export default {
    name: 'Account',
    _router: {
      name: 'Account',
      path: '/account',
//      children: ['Meeting'], TODO add this if you want to use Nested route and add <router-view />
      component: resolve => require.ensure([], () => resolve(require('./Account')), 'Account')
    },
    components: {},
    data () {
      return {
        title: '个人中心',
        menus: [
          {
            clazz: 'message',
            text: '我的消息',
            link: '/account/message'
          },
          {
            clazz: 'meeting',
            text: '我的会议',
            link: '/account/meeting'
          },
          {
            clazz: 'star',
            text: '我的收藏',
            link: '/account/collection'
          },
          {
            clazz: 'download',
            text: '下载管理',
            link: '/account/download'
          }
        ],
        info: {}
      }
    },
    created () {
      apiGenerator({ url: '/info' }).then(response => {
        this.info = response.body.object
      }, filedDate => console.log(filedDate))
    },
    mounted () {
      this.navBarIf({ if: false })
      this.tabBarIf({ if: true })
    },
    methods: {
      ...mapMutations(['navBarIf', 'tabBarIf']),
      handleClick (link) {
        this.$router.push(link)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .Account {
    * {
      box-sizing: border-box;
    }
    .title {
      font-size: p2r(30);
      line-height: p2r(90);
      color: #ffffff;
      background: #dd2738;
      height: 45px;
    }
    .info {
      overflow: hidden;
      padding: p2r(25) 0 p2r(25) p2r(35);
      text-align: left;
      border-bottom: 1px solid #eee;
      background: #fff;
      height: p2r(155);
      .avatar {
        float: left;
        background: #ccc;
        width: p2r(110);
        height: p2r(110);
        border-radius: 100%;
        border: 3px solid #e5edff;
        margin-right: p2r(25);
      }
      .name {
        font-size: p2r(30);
        margin-top: p2r(20);
        color: #333333;
      }
      .organization {
        font-size: p2r(24);
        color: #666666;
      }
    }
    .menu {
      text-align: left;
      li {
        height: p2r(75);
        font-size: p2r(30);
        line-height: p2r(75);
        color: #333333;
        padding-left: p2r(90);
        background: #fff;
        border: 1px solid #eee;
        margin-top: p2r(25);
        border-left: none;
        border-right: none;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          right: p2r(30);
          width: p2r(14);
          height: p2r(25);
          top: 50%;
          margin-top: p2r(-12.5);
          background: url(../assets/arrow.png) center no-repeat /cover;
        }
        &:before {
          content: '';
          position: absolute;
          width: p2r(42);
          height: p2r(40);
          top: 50%;
          margin-top: p2r(-20);
          left: p2r(35);
        }
        @include AccountListIcon(message);
        @include AccountListIcon(meeting);
        @include AccountListIcon(download);
        @include AccountListIcon(star);
        &.message {
          .unread {
            position: absolute;
            right: p2r(60);
            top: p2r(14);
            width: p2r(40);
            height: p2r(40);
            background: #dd2738;
            color: #ffffff;
            font-size: 14px;
            text-align: center;
            line-height: p2r(42);
            letter-spacing: .1px;
            border-radius: 100%;
          }
        }
      }
    }
  }
</style>
