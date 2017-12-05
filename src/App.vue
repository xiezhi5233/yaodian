<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
    <bottomNav/>
  </div>
</template>
<script>
  import bottomNav from "./components/bottom-nav/bottom-nav.vue";
  export default {
    components:{
      bottomNav
    }
  }
</script>

<style scoped lang="less">
  @import url("./components/base/css/config-style.less");
  #app{
    max-width: 750px;
    min-height:100%;
    margin-left: auto;
    margin-right: auto;
    .container{
      position: relative;
      min-height:100%;
      padding-top: .88rem;
      padding-bottom: .98rem;
      box-sizing:border-box;
    }
  }
</style>
