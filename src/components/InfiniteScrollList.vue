<template>
  <div class="InfiniteScrollList">
    <div class="wrap" ref="wrap">
      <placeholder-cell v-if="!cells.length" v-for="n in 5" :key="n"></placeholder-cell>
      <latest-meeting-cell v-for="(cell, index) in cells" :key="index" :cell="cell" ref="cell"></latest-meeting-cell>
      <mt-spinner v-show="loading" type="double-bounce"></mt-spinner>
    </div>
  </div>
</template>

<script>
  import throttle from '@/utils/throttle'
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
        const wrap = this.$refs.wrap
        const wrapPaddingTop = Math.ceil(parseFloat(window.getComputedStyle(wrap).paddingTop))
        const wrapHeight = parseInt(window.getComputedStyle(wrap).height) + wrapPaddingTop * 2
        const view = this.$parent.$el
        const viewHeight = parseInt(window.getComputedStyle(view).height)
        const viewScrollTop = view.scrollTop
        const diff = wrapHeight - viewHeight - viewScrollTop

        this.$utils.logs.group('diff', diff, 'black')
        console.log(`viewHeight: ${viewHeight}\nwrapHeight: ${wrapHeight}`)

        const cells = this.$refs.cell
        const rects = cells.map(item => {
          const rect = item.$el.getBoundingClientRect()
          return rect
        })
        console.log(rects[0].top, 'first cell top')
        console.log(rects[0].height, 'first cell height')

        if (diff <= 0 && !this.$props.loading) {
          this.$utils.logs.group('diff', diff, 'red')
          this.$props.fetchCells()
        }
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .InfiniteScrollList {
    .wrap {
      padding: p2r(10) 0;
      .mint-spinner-double-bounce {
        margin: 5px auto;
      }
    }
  }
</style>
