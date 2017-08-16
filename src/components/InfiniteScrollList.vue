<template>
  <div class="InfiniteScrollList">
    <div class="wrap" ref="wrap">
      <placeholder-cell v-if="!cells.length" v-for="n in 10" :key="n"></placeholder-cell>
      <latest-meeting-cell v-for="(cell, index) in cells"
        ref="cell"
        :key="index"
        :cell="cell"
        :clazz="cell.class"
        :handleClick="handleClick"
      ></latest-meeting-cell>
      <mt-spinner type="double-bounce"></mt-spinner>
    </div>
  </div>
</template>

<script>
  import throttle from '@/utils/throttle'
  import { setStorage, getStorage } from '@/utils/storage'
  import { loadMore, hiddenOutViewport } from '@/utils/list'
  import PlaceholderCell from '@/components/cell/PlaceholderCell'
  import LatestMeetingCell from '@/components/cell/LatestMeetingCell'
  import { mapState } from 'vuex'

  export default {
    name: 'InfiniteScrollList',
    props: ['cells', 'newCells', 'fetchCells', 'handleClick'],
    components: { LatestMeetingCell, PlaceholderCell },
    data () {
      return {
        storageScrollTop: getStorage(`${this.$route.path}-scrollTop`)
      }
    },
    computed: {
      ...mapState({ loading: state => state.list.loading })
    },
    updated () {
      if (this.storageScrollTop && !this.loading && this.$props.cells.length) {
        this.$parent.$el.scrollTop = this.storageScrollTop
      }
      this.$parent.$el.addEventListener('scroll', this.handleScroll, false)
    },
    methods: {
      handleScroll: throttle(function () {
        const scrollTop = loadMore.bind(this)()
        setStorage(`${this.$route.path}-scrollTop`, scrollTop)
        this.storageScrollTop = scrollTop
        hiddenOutViewport.bind(this)()
      })
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
