<template>
  <div class="HeaderLayout">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
  export default {
    name: 'HeaderLayout',
    components: {
      'NavBar': () => import('@/components/NavBar')
    },
    data () {
      return {
        msg: 'Welcome to Component HeaderLayout'
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .HeaderLayout {

  }
</style>
