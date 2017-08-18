<template>
  <div class="HistoryMeeting">
    <select-bar :options="options"></select-bar>
    <infinite-scroll-list
      :cells="cells"
      ref="infiniteList"
      :fetchCells="fetchCells"
      :refreshCells="refreshCells"
      :handleClick="handleClick"
    >
      <history-meeting-cell v-for="(cell, index) in cells"
        ref="cell"
        :id="cell.id"
        :key="index"
        :cell="cell"
        :handleClick="handleClick"
        :haveNote="cell.haveNote"
        :haveVideo="cell.haveVideo"
        :haveAudio="cell.haveAudio"
        :haveDownload="cell.haveDownload"
      ></history-meeting-cell>
    </infinite-scroll-list>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { fetchCells, refreshCells } from './methods'
  import { getStorage } from '@/utils/storage'
  import SelectBar from '@/components/SelectBar'
  import InfiniteScrollList from '@/components/InfiniteScrollList'
  import HistoryMeetingCell from '@/components/cell/HistoryMeetingCell'

  export default {
    name: 'HistoryMeeting',
    _router: {
      name: 'HistoryMeeting',
      path: '/history',
      component: resolve => require.ensure([], () => resolve(require('./HistoryMeeting')), 'HistoryMeeting')
    },
    components: {
      SelectBar,
      InfiniteScrollList,
      HistoryMeetingCell
    },
    data () {
      return {
        options: [
          {
            name: '类型',
            children: ['IR路演', '分析师路演', '产品路演', '论坛峰会', '金融培训', '其他']
          },
          {
            name: '领域',
            children: ['宏观经济', '策略研究', '固定收益', '非银金融', '房地产', '投资策略', '计算机', '医药生物', '通讯电子', '社会服务', '公用事业', '食品饮料', '批发零售', '汽车及零部件', '有色金属', '军工机械', '纺织服装', '农林牧渔', '交通运输', '建筑建材', '煤炭开采', '金融工程', '化工', '电力设备及新能源', '钢铁', '家电', '文化传播', '造纸印刷', '其他']
          },
          {
            name: '时间',
            children: ['1-3天内', '1-3周内', '1-3月内', '3-6月内', '1-3年内', '其他']
          }
        ],
        loading: false,
        cells: []
      }
    },
    mounted () {
      this.tabBarIf({ if: true })
      this.navBarIf({ if: true })
      getStorage(`${this.$route.path}-list`)
        ? this.cells = getStorage(`${this.$route.path}-list`)
        : this.fetchCells()
    },
    methods: {
      ...mapMutations(['listLoading', 'tabBarIf', 'navBarIf']),
      fetchCells: fetchCells('/list'),
      refreshCells: refreshCells('/list'),
      handleClick () {
        console.log('historyMeeting')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .HistoryMeeting {
    -webkit-overflow-scrolling: touch;
    z-index: 1;
    height: calc(100% - 95px);
    overflow: scroll;
    width: 100%;
    position: static;
    .InfiniteScrollList {
      margin-top: p2r(76);
    }
  }
</style>
