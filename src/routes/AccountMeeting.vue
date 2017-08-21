<template>
  <div class="AccountMeeting">
    <title-h1 :title="title"></title-h1>
    <div class="scroll">
      <infinite-scroll-list
        :cells="cells"
        ref="infiniteList"
        :fetchCells="fetchCells"
        :refreshCells="refreshCells"
        :handleClick="handleClick"
      >
        <latest-meeting-cell v-for="(cell, index) in cells"
          ref="cell"
          :key="index"
          :cell="cell"
          :clazz="cell.class"
          :handleClick="handleClick"
          :haveVideo="cell.haveVideo"
          :recommend="cell.recommend"
        ></latest-meeting-cell>
      </infinite-scroll-list>
    </div>
  </div>
</template>

<script>
  import apiGenerator from '@/api'
  import { mapMutations } from 'vuex'
  import { fetchCells, refreshCells } from './methods'
  import { getStorage } from '@/utils/storage'
  import InfiniteScrollList from '@/components/InfiniteScrollList'
  import LatestMeetingCell from '@/components/cell/LatestMeetingCell'

  export default {
    name: 'AccountMeeting',
    _router: {
      name: 'AccountMeeting',
      path: '/account/meeting',
      component: resolve => require.ensure([], () => resolve(require('./AccountMeeting')), 'AccountMeeting')
    },
    components: {
      InfiniteScrollList,
      LatestMeetingCell,
      'TitleH1': () => import('@/components/title/AccountTitle')
    },
    data () {
      return {
        title: '我的会议',
        cells: []
      }
    },
    mounted () {
      this.tabBarIf({ if: false })
      getStorage(`${this.$route.path}-list`)
        ? this.cells = getStorage(`${this.$route.path}-list`)
        : this.fetchCells()
    },
    methods: {
      ...mapMutations(['tabBarIf', 'listLoading']),
      fetchCells: fetchCells('/list'),
      refreshCells: refreshCells('/list'),
      handleClick () {
        console.log('accountMeeting')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .AccountMeeting {
    overflow: hidden;
    height: 100%;
    .scroll {
      width: 100%;
      height: calc(100% - 45px);
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      z-index: 1;
    }
  }
</style>
