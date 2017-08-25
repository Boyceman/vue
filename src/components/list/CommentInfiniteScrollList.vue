<template>
  <div class="CommentInfiniteScrollList">
    <div class="wrap" ref="wrap">
      <slot></slot>
      <mt-spinner type="double-bounce"></mt-spinner>
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
    name: 'CommentInfiniteScrollList',
    props: ['cells', 'fetchCells'],
    components: {
      PlaceholderCell
    },
    data () {
      return {
        storageScrollTop: getStorage(`${this.$route.path}-scrollTop`)
      }
    },
    updated () {
      if (this.storageScrollTop && !this.loading && this.$props.cells.length) {
        this.$el.parentNode.parentNode.scrollTop = this.storageScrollTop
      }
      this.$el.parentNode.parentNode.addEventListener('scroll', this.handleScroll, false)
    },
    computed: {
      ...mapState({ loading: state => state.detail.commentLoading })
    },
    methods: {
      ...mapMutations(['detailCommentLoading']),
      handleScroll: throttle(function () {
        const scrollTop = loadMore.bind(this)(this.$el.parentNode.parentNode)
        setStorage(`${this.$route.path}-scrollTop`, scrollTop)
        this.storageScrollTop = scrollTop
        hiddenOutViewport.bind(this)()
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .CommentInfiniteScrollList {
    .mint-spinner-double-bounce {
      margin: 5px auto;
    }
  }
</style>
