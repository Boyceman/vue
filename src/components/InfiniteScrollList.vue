<template>
  <div class="InfiniteScrollList">
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <div class="wrap" ref="wrap">
        <placeholder-cell v-if="!cells.length" v-for="n in 10" :key="n"></placeholder-cell>
        <slot></slot>
        <mt-spinner type="double-bounce"></mt-spinner>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
  import throttle from '@/utils/throttle'
  import { setStorage, getStorage, removeStorage } from '@/utils/storage'
  import { loadMore, hiddenOutViewport } from '@/utils/list'
  import PlaceholderCell from '@/components/cell/PlaceholderCell'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'InfiniteScrollList',
    props: ['cells', 'newCells', 'fetchCells', 'refreshCells', 'handleClick'],
    components: {
      PlaceholderCell
    },
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
      ...mapMutations(['listLoading']),
      handleScroll: throttle(function () {
        const scrollTop = loadMore.bind(this)()
        setStorage(`${this.$route.path}-scrollTop`, scrollTop)
        this.storageScrollTop = scrollTop
        hiddenOutViewport.bind(this)()
      }),
      loadTop () {
        this.$props.refreshCells()
      }
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
