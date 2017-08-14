<template>
  <div class="InfiniteScrollList">
    <div class="wrap" ref="wrap">
      <placeholder-cell v-if="!cells.length" v-for="n in 10" :key="n"></placeholder-cell>
      <latest-meeting-cell v-for="(cell, index) in cells" :key="index" :cell="cell"
        :clazz="cell.class" ref="cell"></latest-meeting-cell>
      <mt-spinner v-show="loading" type="double-bounce"></mt-spinner>
    </div>
  </div>
</template>

<script>
  import throttle from '@/utils/throttle'
  import { loadMore, hiddenOutViewport } from '@/utils/list'
  import PlaceholderCell from '@/components/cell/PlaceholderCell'
  import LatestMeetingCell from '@/components/cell/LatestMeetingCell'

  export default {
    name: 'InfiniteScrollList',
    props: ['cells', 'newCells', 'fetchCells', 'loading'],
    components: { LatestMeetingCell, PlaceholderCell },
    data () {
      return {}
    },
    mounted () {
      this.$parent.$el.addEventListener('scroll', this.handleScroll, false)
    },
    methods: {
      handleScroll: throttle(function () {
        loadMore.bind(this)()
        hiddenOutViewport.bind(this)()
      }, 20)
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .InfiniteScrollList {
    .wrap {
      padding: p2r(10) 0;
      .mint-spinner-double-bounce {
        margin: 5px auto;
      }
    }
  }
</style>
