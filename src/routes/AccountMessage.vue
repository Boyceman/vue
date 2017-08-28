<template>
  <div class="AccountMessage">
    <title-h1 :title="title" :hidden="true"></title-h1>
    <div class="scroll">
      <infinite-scroll-list
        :cells="cells"
        ref="infiniteList"
        :count="listCount"
        :fetchCells="fetchCells"
        :refreshCells="refreshCells"
        :handleClick="handleClick"
      >
        <account-message-cell v-for="(cell, index) in cells"
          ref="cell"
          :key="index"
          :cell="cell"
          :clazz="cell.class"
          :handleClick="handleClick"
        ></account-message-cell>
      </infinite-scroll-list>
    </div>
  </div>
</template>

<script>
  import apiGenerator from '@/api'
  import { mapMutations } from 'vuex'
  import { fetchCells, refreshCells } from './methods'
  import { getStorage } from '@/utils/storage'
  import InfiniteScrollList from '@/components/list/InfiniteScrollList'
  import AccountMessageCell from '@/components/cell/AccountMessageCell'

  export default {
    name: 'AccountMessage',
    _router: {
      name: 'AccountMessage',
      path: '/account/message',
      component: resolve => require.ensure([], () => resolve(require('./AccountMessage')), 'AccountMessage')
    },
    components: {
      InfiniteScrollList,
      AccountMessageCell,
      'TitleH1': () => import('@/components/title/AccountTitle')
    },
    data () {
      return {
        title: '消息通知',
        cells: [],
        listCount: 0
      }
    },
    mounted () {
      this.tabBarIf({ if: false })
      getStorage(`${this.$route.path}-list`)
        ? this.cells = getStorage(`${this.$route.path}-list`)
        : this.fetchCells()
      this.listCount = getStorage(`${this.$route.path}-count`)
    },
    methods: {
      ...mapMutations(['listLoading', 'tabBarIf']),
      fetchCells: fetchCells('/message'),
      refreshCells: refreshCells('/message'),
      handleClick () {
        console.log('accountMessage')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .AccountMessage {
    overflow: hidden;
    height: 100%;
    .scroll {
      width: 100%;
      height: calc(100% - 45px);
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      z-index: 1;
    }
  }
</style>
