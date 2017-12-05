<template>
    <div id="buy_suc" >
        <img src="./img/buy.png" >
        <h2>购买成功</h2>
        <mt-button type="primary">分享</mt-button>
    </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {

    }
  };
</script>
<style scoped lang="less">
  @import url("../../base/css/config-style.less");
  #buy_suc{
    position: absolute;
    top: .88rem;
    left: 0;
    width: 100%;
    height: 100%;
    padding:0 .3rem;
    box-sizing:border-box;
    background: @bodyBg;
    >img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top:1rem;
    }
    >h2{
      text-align: center;
      font-size: .32rem;
      color:@claBuySuccTit;
      margin: .5rem 0 0 0 ;
    }
    >button{
      width: 100%;
      font-size: .32rem;
      margin-top: 1rem;
      background: @claBuySuccBtnBg;
      color:@claBuySuccBtnFont;
    }
  }

</style>
