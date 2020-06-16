<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>

<style lang="scss">
  html,
  body {
    background:#f5f7fb;
    width:100%;
    height:100%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
  }
  #app {
   min-width:1200px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
  }
  #nav {
    
  }
</style>
