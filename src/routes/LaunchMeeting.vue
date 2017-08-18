<template>
  <div class="LaunchMeeting">
    {{ msg }}
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'LaunchMeeting',
    _router: {
      name,
      path: '/launch',
      component: resolve => require.ensure([], () => resolve(require('./LaunchMeeting')), 'LaunchMeeting')
    },
    components: {},
    data () {
      return {
        msg: 'Welcome to Component LaunchMeeting'
      }
    },
    mounted () {
      this.navBarIf({ if: false })
    },
    methods: {
      ...mapMutations(['navBarIf'])
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .LaunchMeeting {

  }
</style>
