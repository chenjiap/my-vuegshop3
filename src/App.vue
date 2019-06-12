<template>
  <div id="app">
     <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFoot"></FooterGuide>
  </div>
</template>

<script>
 import FooterGuide from './components/FooterGuide/FooterGuide.vue'

//一天免登陆
 import {reqUser} from './api'
  import {RECEIVE_USER} from './vuex/mutation-types'
export default {
  
  components: {
      FooterGuide
  },
  async mounted () {
      // 异步获取地址
      this.$store.dispatch('getAddress')

      // 请求获取用户信息
      const result = await reqUser()
      if(result.code===0) {
        const user = result.data
        this.$store.commit(RECEIVE_USER, user)
      }



    },
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
</style>
