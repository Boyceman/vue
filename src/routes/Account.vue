<template>
  <div class="Account">
    <title-h1 :title="title"></title-h1>
    <div class="info">
      <img class="avatar" :src="info.avatar">
      <h2 class="name">{{ info.name }}</h2>
      <p class="organization">{{ info.organization }}</p>
    </div>
    <ul class="menu">
      <li>我的消息</li>
      <li>我的会议</li>
      <li>我的收藏</li>
      <li>下载管理</li>
    </ul>
  </div>
</template>

<script>
  import apiGenerator from '@/api'

  export default {
    name: 'Account',
    _router: {
      name,
      path: '/account',
      component: resolve => require.ensure([], () => resolve(require('./Account')), 'Account')
    },
    components: {
      'TitleH1': () => import('@/components/Title')
    },
    data () {
      return {
        title: '个人中心',
        info: {}
      }
    },
    created () {
      apiGenerator({ url: '/info' }).then(response => {
        this.info = response.body.object
      }, filedDate => console.log(filedDate))
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .Account {
    * {
      box-sizing: border-box;
    }
    .info {
      overflow: hidden;
      padding: p2r(25) 0 p2r(25) p2r(35);
      text-align: left;
      border-bottom: 1px solid #eee;
      background: #fff;
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
      }
    }
  }
</style>
