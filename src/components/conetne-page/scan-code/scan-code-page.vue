<template>
    <div id="scan_code">
      <div class="scode-box">
          <div class="side-angle"></div>
          <div class="side-angle"></div>
          <div class="side-angle"></div>
          <div class="side-angle"></div>
          <div class="side-hr"></div>
         <p>对准二维码／条形码到框内即可自动扫描</p>
      </div>
    </div>
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
  #scan_code{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: @bodyBg;
    overflow: hidden;
    box-shadow:0 -.1rem .2rem 0 @bodyColor;
    .scode-box{
        position: absolute;
        top: 0; right: 0;
        left: 0; bottom:0;
        margin: auto;
        width: 5.16rem;
        height:5.16rem;
        box-shadow:0 0 0 999rem @scanCodeShadow;
        .side-hr{
          position: absolute;
          top: 50%;
          width: 80%;
          margin: 0 10%;
          height:.02rem;
          background:@scanCodeColor;
          box-shadow:0 0 .05rem 0 @scanCodeColor;
        }
        .side-angle{
          position: absolute;
          top: 0;left: 0;
          width: .3rem;
          height: .3rem;
          border-top: .04rem solid @scanCodeColor;
          border-left: .04rem solid @scanCodeColor;
          &:nth-of-type(2){
            left:auto;
            right:0;
            transform:rotate(90deg);
          }
          &:nth-of-type(3){
            left:auto;
            top:auto;
            right:0;
            bottom:0;
            transform:rotate(180deg);
          }
          &:nth-of-type(4){
            top:auto;
            bottom:0;
            transform:rotate(270deg);
          }
        }
      p{
        position: absolute;
        bottom: -1rem;
        left: 0;
        width: 100%;
        font-size: .24rem;
        text-align: center;
        color:@scanCodeColor;
      }
    }
  }

</style>
