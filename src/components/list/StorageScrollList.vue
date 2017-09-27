<template>
  <div class="StorageScrollList">
    <div class="wrap" ref="wrap">
      <placeholder-cell v-if="!cells.length" v-for="n in 10" :key="n"></placeholder-cell>
      <slot></slot>
      <!--<mt-spinner v-show="!loadedAll" type="double-bounce"></mt-spinner>-->
    </div>
  </div>
</template>

<script>
  import throttle from '@/utils/throttle'
  import { setStorage, getStorage, removeStorage } from '@/utils/storage'
  import { loadMore, hiddenOutViewport } from '@/utils/list'
  import PlaceholderCell from '@/components/cell/PlaceholderCell'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'StorageScrollList',
    props: ['cells', 'count', 'newCells', 'fetchCells', 'refreshCells', 'handleClick'],
    components: {
      PlaceholderCell
    },
    data () {
      return {
        storageScrollTop: getStorage(`${this.$route.path}-scrollTop`),
        loadedAll: false,
        touchStart: '',
        scrollTop: 0
      }
    },
    computed: {
      ...mapState({ loading: state => state.list.loading })
    },
    updated () {
      if (this.storageScrollTop && !this.loading && this.$props.cells.length) {
        this.$parent.$el.scrollTop = this.storageScrollTop
      }
      this.$el.addEventListener('scroll', this.handleScroll, false)
      this.loadedAll = this.count <= this.cells.length
    },
    methods: {
      ...mapMutations(['listLoading']),
      handleScroll () {
        const scrollTop = this.$el.scrollTop
        const itemHeight = this.$children[0].$el.offsetHeight
        this.$children.forEach((child, index) => {
          if (scrollTop >= (itemHeight + 8) * index) {
            child.$el.style.top = 45 + 38 + 5 + 'px'
            child.$el.style.position = 'fixed'
          } else {
            child.$el.style.top = index * (itemHeight + 5) + 5 + 'px'
            child.$el.style.position = 'absolute'
          }
        })
      },
      loadTop () {
        this.$props.refreshCells()
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../../style/functions";

  .StorageScrollList {
    height: calc(100% - 38px);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    .mint-loadmore, .mint-loadmore-content, .wrap {
      height: 100%;
    }
    .wrap {
      padding: p2r(10) 0;
      position: relative;
      .mint-spinner-double-bounce {
        margin: 5px auto;
      }
    }
  }
</style>
