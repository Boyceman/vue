<template>
  <div class="LatestMeeting">
    <div class="banner"></div>
    <infinite-scroll-list
      :cells="cells"
      ref="infiniteList"
      :count="listCount"
      :fetchCells="fetchCells"
      :refreshCells="refreshCells"
      :handleClick="handleClick"
    >
      <latest-meeting-cell v-for="(cell, index) in cells"
        ref="cell"
        :key="index"
        :cell="cell"
        :handleClick="handleClick"
        :haveVideo="cell.haveVideo"
        :recommend="cell.recommend"
      ></latest-meeting-cell>
    </infinite-scroll-list>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { getStorage } from '@/utils/storage'
  import { fetchCells, refreshCells } from './methods'
  import InfiniteScrollList from '@/components/list/InfiniteScrollList'
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
        cells: [],
        listCount: 0
      }
    },
    mounted () {
      this.tabBarIf({ if: true })
      this.navBarIf({ if: true })
      getStorage(`${this.$route.path}-list`)
        ? this.cells = getStorage(`${this.$route.path}-list`)
        : this.fetchCells()
      this.listCount = getStorage(`${this.$route.path}-count`)
    },
    methods: {
      ...mapMutations(['listLoading', 'tabBarIf', 'navBarIf']),
      fetchCells: fetchCells('/list'),
      refreshCells: refreshCells('/list'),
      handleClick (id) {
        this.$router.push(`/detail/${id}`)
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
