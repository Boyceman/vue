<template>
  <mt-cell class="Cell" :title="cell.title">
    <img slot="icon" :src="cell.image">
  </mt-cell>
</template>

<script>
export default {
  name: 'Cell',
  props: ['cell'],
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .Cell {

  }
</style>
