<template>
  <div class="demo">
    <select-bar :options="options"></select-bar>
    <storage-scroll-list
      :cells="cells"
      ref="infiniteList"
      :count="listCount"
      :fetchCells="fetchCells"
      :refreshCells="refreshCells"
      :handleClick="handleClick"
    >
      <history-meeting-cell v-for="(cell, index) in cells"
        ref="cell"
        :id="cell.id"
        :key="index"
        :cell="cell"
        :style="{ top: index * (127 + 5) + 5 + 'px', position: 'absolute' }"
        :handleClick="handleClick"
        :haveNote="cell.haveNote"
        :haveVideo="cell.haveVideo"
        :haveAudio="cell.haveAudio"
        :haveDownload="cell.haveDownload"
      ></history-meeting-cell>
    </storage-scroll-list>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { getStorage } from '@/utils/storage'
  import { fetchCells, refreshCells } from './methods'
  import SelectBar from '@/components/selector/SelectBar'
  import StorageScrollList from '@/components/list/StorageScrollList'
  import HistoryMeetingCell from '@/components/cell/HistoryMeetingCell'

  export default {
    name: 'demo',
    _router: {
      name: 'demo',
      path: '/demo',
      component: resolve => require.ensure([], () => resolve(require('./demo')), 'demo')
    },
    components: {
      SelectBar,
      StorageScrollList,
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
        cells: [],
        listCount: 0
      }
    },
    mounted () {
      this.tabBarIf({ if: true })
      this.navBarIf({ if: true })
      getStorage(`${this.$route.path}-list`)
        ? this.cells = getStorage(`${this.$route.path}-list`)
        : this.fetchCells()
      this.listCount = getStorage(`${this.$route.path}-count`)
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

  .demo {
    height: calc(100% - 95px);
    overflow: hidden;
    width: 100%;
    .StorageScrollList {
      margin-top: p2r(76);
    }
  }
</style>
