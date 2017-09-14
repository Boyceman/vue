<template>
  <div class="MeetingDetail">
    <div class="mask" v-if="loading">
      <detail-loading></detail-loading>
    </div>
    <title-h1 :title="title" :isHistory="false"></title-h1>
    <div class="block">
      <div class="info">
        <h2 class="title">{{ detail.title }}</h2>
        <span class="date">{{ detail.startTime }}</span>
        <div class="lecturers">
          <span v-for="lecturer in detail.lecturers" class="name">{{ lecturer.name }}（{{ lecturer.title }}）</span>
        </div>
        <span v-for="sponsor in detail.sponsors" class="sponsor">{{ sponsor.name }}</span>
      </div>
      <div class="intro">
        <h2 class="title bd">简介</h2>
        <p>{{ detail.description }}</p>
      </div>
      <div v-if="detail.agenda" class="agenda">
        <h2 class="title bd">议程</h2>
        <div v-html="detail.agenda" class="html" :class="extend?'extend':''"></div>
        <p class="more" @click="extend = !extend">{{ extend ? '收起' : '点击查看全部' }}</p>
      </div>
      <div class="comment">
        <h2 class="title bd">最近互动 <span class="count">({{ commentCount }})</span></h2>
        <comment-infinite-scroll-list
          :cells="comments"
          :count="commentCount"
          ref="infiniteList"
          :fetchCells="fetchComments"
        >
          <detail-comment-cell v-for="(comment, index) in comments"
            ref="cell"
            :key="index"
            :cell="comment"
            :commentTime="comment.commentTime"
          ></detail-comment-cell>
        </comment-infinite-scroll-list>
      </div>
    </div>
    <div class="action">
      <span class="write-comment" @click="comment">互动</span>
      <div class="latest-sign-up" v-if="detail.meetingStatus === 'STARTED'">
        <span @click="signUp">{{ detail.signupStatus ? '已报名' : '立即参加' }}</span>
      </div>
      <div class="history-sign-up" v-else>
        <span class="note" @click="openNote" :class="{ 'have-document': detail.pdfId }">看速记</span>
        <div class="border" v-if="!detail.pdfId && !detail.audioId"></div>
        <span class="audio" @click="openAudio" :class="{ 'have-document': detail.audioId }">听录音</span>
      </div>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <form class="comment-form">
        <textarea placeholder="请输入评论，不超过140字"></textarea>
        <span class="radio" :class="{ anonymous: isAnonymous }" @click="anonymous">匿名</span>
        <button @click.prevent="submitComment">提交</button>
      </form>
    </mt-popup>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { getStorage } from '@/utils/storage'
  import { fetchDetail, fetchComments } from './methods'
  import CommentInfiniteScrollList from '@/components/list/CommentInfiniteScrollList'
  import DetailCommentCell from '@/components/cell/DetailCommentCell'
  import DetailLoading from '@/components/loading/DetailLoading'

  const id = window.location.pathname.split('/')[2]
  export default {
    name: 'MeetingDetail',
    _router: {
      name: 'MeetingDetail',
      path: '/detail/:id',
      component: resolve => require.ensure([], () => resolve(require('./MeetingDetail')), 'MeetingDetail')
    },
    components: {
      CommentInfiniteScrollList,
      DetailCommentCell,
      DetailLoading,
      'TitleH1': () => import('@/components/title/DetailTitle')
    },
    data () {
      return {
        detail: {},
        comments: [],
        extend: false,
        title: '详情',
        commentCount: 0,
        popupVisible: false,
        isAnonymous: false
      }
    },
    computed: {
      ...mapState({
        loading: state => state.detail.loading
      })
    },
    mounted () {
      this.tabBarIf({ if: false })
      this.navBarIf({ if: false })
      this.fetchDetail('/detail', { params: this.$route.params })
      getStorage(`${this.$route.path}-list`)
        ? this.comments = getStorage(`${this.$route.path}-list`)
        : this.fetchComments()
      this.commentCount = getStorage(`${this.$route.path}-count`)
    },
    methods: {
      fetchDetail,
      fetchComments: fetchComments('/comments', { id }),
      ...mapMutations(['navBarIf', 'tabBarIf', 'detailLoading', 'detailCommentLoading']),
      comment (e) {
        this.popupVisible = !this.popupVisible
        console.log(e, 'click comment button')
      },
      signUp (e) {
        if (this.detail.signupStatus) return false
        console.log(e, 'click sign up button')
      },
      openNote (e) {
        if (!this.detail.pdfId) return false
        console.log(e, 'click note button')
      },
      openAudio (e) {
        if (!this.detail.audioId) return false
        console.log(e, 'click audio button')
      },
      anonymous (e) {
        this.isAnonymous = !this.isAnonymous
      },
      submitComment (e) {
        console.log(111111)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .MeetingDetail {
    line-height: 1;
    box-sizing: border-box;
    height: 100%;
    .block {
      text-align: left;
      position: relative;
      overflow: scroll;
      height: calc(100% - 45px - 40px);
      -webkit-overflow-scrolling: touch;
      > div {
        position: relative;
        &:not(:last-child):after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 1px;
          width: 100%;
          border-bottom: 1px solid #ccc;
          transform: scaleY(0.5);
        }
      }
      .title {
        font-size: p2r(30);
        color: #333333;
        &.bd {
          line-height: 1.2;
          text-indent: p2r(29);
          border-left: p2r(6) solid #5470b5;
        }
      }
    }

    .info {
      padding: p2r(35);
      color: #999999;
      font-size: p2r(20);
      .title {
        margin-bottom: p2r(12);
      }
      span {
        display: inline-block;
        margin-top: p2r(16);
      }
    }

    .intro {
      padding: p2r(16) 0;
      p {
        line-height: 1.4;
        font-size: p2r(20);
        color: #666666;
        margin: p2r(10) p2r(35);
      }
    }

    .agenda {
      padding: p2r(16) 0;
      .html {
        transition: all .3s ease-in-out;
        overflow: hidden;
        max-height: p2r(190);
        &.extend {
          max-height: p2r(1000);
        }
      }
      div {
        line-height: 1.4;
        font-size: p2r(20);
        color: #666666;
        margin: p2r(10) p2r(35);
      }
      .more {
        color: #999999;
        text-align: center;
        &:before {
          content: '';
        }
      }
    }

    .comment {
      padding-top: p2r(16);
      .title {
        .count {
          color: #999999;
        }
      }
      > div {
        line-height: 1.4;
        font-size: p2r(20);
        color: #666666;
        margin: p2r(2) 0;
      }
    }

    .action {
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      height: p2r(80);
      line-height: p2r(80);
      text-align: center;
      width: 100%;
      font-size: p2r(32);
      .write-comment {
        flex: 1;
        background: #ffffff;
      }
      .latest-sign-up {
        flex: 2;
        color: #ffffff;
        background: #f44d5d;
      }
      .history-sign-up {
        flex: 4;
        display: flex;
        span {
          flex: 1;
          background: #ccc;
          &.have-document {
            background: #f44d5d;
            color: #ffffff;
          }
        }
        .border {
          width: 1px;
          height: 100%;
          background: #2c3e50;
          transform: scaleX(.5);
        }
      }
    }

    .mint-popup {
      width: 100%;
      height: p2r(300);
      .comment-form {
        height: 100%;
        width: 100%;
        padding-top: p2r(10);
        font-size: p2r(28);
        textarea {
          box-sizing: border-box;
          word-break: break-all;
          text-align: justify;
          padding: 0 p2r(20) p2r(10) p2r(20);
          margin-bottom: p2r(13);
          height: p2r(208);
          outline: none;
          width: 100%;
          resize: none;
        }
        .radio {
          float: left;
          height: p2r(60);
          line-height: p2r(60);
          margin-left: p2r(20);
          padding-left: p2r(36);
          position: relative;
          &.anonymous {
            &:before {
              background: #f44d5d;
              border: none;
            }
            &:after {
              content: '';
              box-sizing: border-box;
              position: absolute;
              left: p2r(11);
              top: p2r(18);
              width: p2r(8);
              height: p2r(14);
              border-right: 1px solid #fefefe;
              border-bottom: 1px solid #fefefe;
              border-radius: 1px;
              transform: rotate(45deg);
            }
          }
          &:before {
            content: '';
            box-sizing: border-box;
            position: absolute;
            left: 0;
            top: p2r(12);
            width: p2r(30);
            height: p2r(30);
            border-radius: 50%;
            border: 1px solid #2c3e50;
          }
        }
        button {
          width: p2r(100);
          height: p2r(60);
          float: right;
          margin-right: p2r(20);
          background: #f44d5d;
          border: none;
          border-radius: 3px;
          color: #ffffff;
          letter-spacing: 1px;
          outline: none;
        }
        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: p2r(70);
          height: 1px;
          width: 100%;
          transform: scaleY(.5);
          background: #ccc;
        }
      }
    }
  }

  .mask {
    position: absolute;
    left: 0;
    top: 45px;
    background: #fff;
    z-index: 1;
    width: 100%;
    height: calc(100% - 45px);
    .la-ball-atom {
      position: absolute;
      top: -45px;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
</style>
