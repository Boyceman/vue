<template>
  <div class="LatestMeeting" ref="view">
    <div class="banner"></div>
    <infinite-scroll-list :cells="cells" :fetchCells="fetchCells" :loading="loading"></infinite-scroll-list>
  </div>
</template>

<script>
  import InfiniteScrollList from '@/components/InfiniteScrollList'
  import apiGenerator from '@/api'

  export default {
    name: 'LatestMeeting',
    components: {
      InfiniteScrollList
    },
    _router: {
      name,
      path: '/',
      component: resolve => require.ensure([], () => resolve(require('./LatestMeeting')), 'LatestMeeting')
    },
    data () {
      this.fetchCells()
      return {
        loading: false,
        cells: []
      }
    },
    methods: {
      fetchCells () {
        this.loading = true
        apiGenerator({ url: '/list' }).then(response => {
          const { list } = response.body
          // TODO timer need to be removed when api was added
          console.log(list, 999)
          setTimeout(() => {
            this.cells = this.cells.concat(list)
            this.loading = false
          }, 800)
        }, filedDate => console.log(filedDate))
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
