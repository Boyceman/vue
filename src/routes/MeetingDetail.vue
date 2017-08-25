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
        commentCount: 0
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
      getStorage(`${this.$route.path}-count`)
        ? this.commentCount = getStorage(`${this.$route.path}-count`)
        : this.fetchComments()
    },
    methods: {
      fetchDetail,
      fetchComments: fetchComments('/comments', { id }),
      ...mapMutations(['navBarIf', 'tabBarIf', 'detailLoading', 'detailCommentLoading'])
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
      height: calc(100% - 45px);
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
