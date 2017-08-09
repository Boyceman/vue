<template>
  <div class="LatestMeeting">
    <cell v-for="(cell, index) in cells" :key="index" :cell="cell"></cell>
  </div>
</template>

<script>
  import Cell from '@/components/Cell'

  export default {
    name: 'LatestMeeting',
    components: {
      Cell
    },
    _router: {
      name,
      path: '/',
      component: resolve => require.ensure([], () => resolve(require('./LatestMeeting')), 'LatestMeeting')
    },
    data () {
      return {
        cells: [
          {
            title: '医药工业景气度回升，提早工业吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧',
            image: 'http://placehold.it/56x56',
            date: '2017-04-19（周二）10:00-11:00',
            name: '杨德龙（宏观研究主管）',
            organization: '前海开源'
          },
          {
            title: '医药工业景气度回升，提早工业吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧',
            image: 'http://placehold.it/56x56',
            date: '2017-04-19（周二）10:00-11:00',
            name: '杨德龙（宏观研究主管）',
            organization: '前海开源'
          },
          {
            title: '医药工业景气度回升，提早工业吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧',
            image: 'http://placehold.it/56x56',
            date: '2017-04-19（周二）10:00-11:00',
            name: '杨德龙（宏观研究主管）',
            organization: '前海开源'
          },
          {
            title: '医药工业景气度回升，提早工业吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧',
            image: 'http://placehold.it/56x56',
            date: '2017-04-19（周二）10:00-11:00',
            name: '杨德龙（宏观研究主管）',
            organization: '前海开源'
          },
          {
            title: '医药工业景气度回升，提早工业吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧',
            image: 'http://placehold.it/56x56',
            date: '2017-04-19（周二）10:00-11:00',
            name: '杨德龙（宏观研究主管）',
            organization: '前海开源'
          },
          {
            title: '医药工业景气度回升，提早工业吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧',
            image: 'http://placehold.it/56x56',
            date: '2017-04-19（周二）10:00-11:00',
            name: '杨德龙（宏观研究主管）',
            organization: '前海开源'
          },
          {
            title: '医药工业景气度回升，提早工业吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧',
            image: 'http://placehold.it/56x56',
            date: '2017-04-19（周二）10:00-11:00',
            name: '杨德龙（宏观研究主管）',
            organization: '前海开源'
          },
          {
            title: '医药工业景气度回升，提早工业吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧',
            image: 'http://placehold.it/56x56',
            date: '2017-04-19（周二）10:00-11:00',
            name: '杨德龙（宏观研究主管）',
            organization: '前海开源'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/functions";

  .LatestMeeting {
    max-height: p2r(1116);
    padding-top: p2r(10);
    overflow: scroll;
  }
</style>
