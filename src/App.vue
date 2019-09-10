<template>
  <div id="app">
     这是个大盒子
    <Box/>


  </div>
</template>

<script>
import Box from './pages/Box'

export default {
    components: {
      Box,
    },
    data(){
      return {
        list: '我',
        obj: {}
      }
    }
}
</script>


<style lang="less">
    #app{
      width: 100%;
      height: 100%;
    }
</style>
