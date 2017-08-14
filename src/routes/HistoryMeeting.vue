<template>
  <div class="HistoryMeeting">
    <select-bar :options="options"></select-bar>
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
    width: 100%;
    .InfiniteScrollList {
      padding-top: p2r(76);
    }
  }
</style>
