<template>
  <div class="LatestMeeting" ref="view">
    <div class="banner"></div>
    <infinite-scroll-list
      :cells="cells"
      :fetchCells="fetchCells"
      :handleClick="handleClick"
    ></infinite-scroll-list>
  </div>
</template>

<script>
  import apiGenerator from '@/api'
  import { mapMutations } from 'vuex'
  import { fetchCells } from './methods'
  import { getStorage } from '@/utils/storage'
  import InfiniteScrollList from '@/components/InfiniteScrollList'

  export default {
    name: 'LatestMeeting',
    _router: {
      name,
      path: '/',
      component: resolve => require.ensure([], () => resolve(require('./LatestMeeting')), 'LatestMeeting')
    },
    components: {
      InfiniteScrollList
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
