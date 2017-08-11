<template>
  <div class="HistoryMeeting">
    <select-bar :options="options" :types="types"></select-bar>
    <infinite-scroll-list :cells="cells" :fetchCells="fetchCells" :loading="loading"></infinite-scroll-list>
  </div>
</template>

<script>
  import InfiniteScrollList from '@/components/InfiniteScrollList'
  import SelectBar from '@/components/SelectBar'
  import apiGenerator from '@/api'
  export default {
    name: 'HistoryMeeting',
    _router: {
      name,
      path: '/history-meeting',
      component: resolve => require.ensure([], () => resolve(require('./HistoryMeeting')), 'HistoryMeeting')
    },
    components: {
      SelectBar,
      InfiniteScrollList
    },
    data () {
      this.fetchCells()
      return {
        options: [1, 2, 3],
        types: ['类型', '领域', '时间'],
        loading: false,
        cells: []
      }
    },
    methods: {
      fetchCells () {
        this.loading = true
        apiGenerator({}).then(response => {
          const { list } = response.body
          // TODO timer need to be removed when api was added
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

  .HistoryMeeting {
    max-height: p2r(1132);
    overflow: scroll;
    .InfiniteScrollList {
      padding-top: p2r(76);
    }
  }
</style>
