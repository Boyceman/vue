<template>
  <div class="LatestMeeting">
    <div class="banner"></div>
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
</template>

<script>
  import apiGenerator from '@/api'
  import { mapMutations } from 'vuex'
  import { fetchCells, refreshCells } from './methods'
  import { getStorage } from '@/utils/storage'
  import InfiniteScrollList from '@/components/InfiniteScrollList'
  import LatestMeetingCell from '@/components/cell/LatestMeetingCell'

  export default {
    name: 'LatestMeeting',
    _router: {
      name: 'LatestMeeting',
      path: '/',
      component: resolve => require.ensure([], () => resolve(require('./LatestMeeting')), 'LatestMeeting')
    },
    components: {
      InfiniteScrollList,
      LatestMeetingCell
    },
    data () {
      return {
        cells: []
      }
    },
    mounted () {
      getStorage(`${this.$route.path}-list`)
        ? this.cells = getStorage(`${this.$route.path}-list`)
        : this.fetchCells()
    },
    methods: {
      ...mapMutations(['listLoading']),
      fetchCells: fetchCells('/list'),
      refreshCells: refreshCells('/list'),
      handleClick () {
        console.log('latestMeeting')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";
  @import "../style/trick";

  .LatestMeeting {
    width: 100%;
    height: calc(100% - 95px);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 1;
  }

  .banner {
    height: p2r(255);
    @include monster
  }
</style>
