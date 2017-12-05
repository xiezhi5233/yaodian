<template>
    <div id="atte_config">
        <ul>
          <li v-for="val in data">
            <img :src="val.img">
            <h3 v-text="val.tit"></h3>
            <p v-text="val.txt.substr(0,25)+'...'"></p>
            <span v-text="val.date"></span>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data:[
        {img:require("./img/atte.jpg"),tit:"老吃太饱会撑出十种甲方姜",txt:"老吃太饱会撑出十种甲方姜老吃太饱会撑出十种甲方姜",date:"2015.05.01"},
        {img:require("./img/atte2.jpg"),tit:"老吃太饱会撑出十种甲方姜",txt:"老吃太饱会撑出十种甲方姜老吃太饱会撑出十种甲方姜",date:"2015.05.03"},
        {img:require("./img/atte3.jpg"),tit:"老吃太饱会撑出十种甲方姜",txt:"老吃太饱会撑出十种甲方姜老吃太饱会撑出十种甲方姜",date:"2015.05.02"},
        {img:require("./img/atte4.jpg"),tit:"老吃太饱会撑出十种甲方姜",txt:"老吃太饱会撑出十种甲方姜老吃太饱会撑出十种甲方姜",date:"2015.05.04"}
        ]
      };
    },
    methods: {

    }
  };
</script>
<style scoped lang="less">
  @import url("../../base/css/config-style.less");
  #atte_config{
    position: absolute;
    top: .88rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: @bodyBg;
    ul{
      padding:0;
      li{
        position: relative;
        height:1.78rem;
        padding:.2rem .3rem .2rem 2.4rem;
        background: @meMenuBoxBg;
        margin-top: .3rem;
        box-sizing:border-box;
        img{
          position: absolute;
          left: .3rem;
          top: .2rem;
          width: 1.84rem;
        }
        h3{
          font-size: .3rem;
          font-weight: 500;
          margin-top: .1rem;
          margin-bottom: .1rem;
        }
        p{
          font-size: .24rem;
          color:@meMenuTit;
          margin-top: .1rem;
          margin-bottom: .1rem;
          line-height: 1.6;
        }
        span{
          position: absolute;
          right: .3rem;
          bottom:.3rem;
          font-size: .24rem;
          color:@meAtteDate;
        }
      }
    }
  }

</style>
