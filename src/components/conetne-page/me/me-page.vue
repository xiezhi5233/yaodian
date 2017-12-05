<template>
  <div id="me_container">
    <div class="meheader">
      <mt-header :title="headerTit">
        <router-link to="/" slot="left">
        </router-link>
        <mt-button slot="left" @click="back"><i class="fa fa-angle-left"></i></mt-button>
      </mt-header>
    </div>
    <!-- 主要内容 -->
    <div class="me-menu" v-show="meContHide">
      <ul class="name-data">
        <li>
          <router-link to="/me/config" >
            <img :src="meUserData.img">
            <h4 v-text="meUserData.name"></h4>
            <p v-text="meUserData.unit"></p>
          </router-link>
          <!-- 二维码 -->
          <router-link to="/me/scan-code" >
            <img class="user-code" src="./img/code.png" >
          </router-link>
        </li>
      </ul>
      <ul>
       <router-link v-for="(val,ind) in mePageMenu" :to="val.to" tag="li" >
        <div>
          <img slot="icon" :src="val.img"/>
          <h4 v-text="val.tit"></h4>
          <span><i class="fa fa-angle-right"></i></span>
        </div>
      </router-link >
    </ul>
    <ul>
      <li v-for="(val,ind) in meUserConfig">
        <div>
          <img slot="icon" :src="val.img"/>
          <h4 v-text="val.tit"></h4>
          <span><i class="fa fa-angle-right"></i></span>
        </div>
      </li>
    </ul>
  </div>
  <transition
  enter-active-class='animated fadeInRightBig'
  leave-active-class='animated fadeOutRightBig'
  >
  <router-view></router-view>
</transition>

</div>
</template>
<script>
  export default {
    data() {
      return {
        topStatus: '',
        meContHide:true,
        headerTit:"账户设置",
        meUserData:{
          img:require("./img/name-img.jpg"),
          name:"13920484929",
          unit:"三聚药业"
        },
        mePageMenu:[
        {tit:"个人信息",to:"/me/config",img:require("./img/User-Info.png")},
        {tit:"我的关注",to:"/me/attention",img:require("./img/attention.png")},
        {tit:"推荐要点",to:"/me/attention",img:require("./img/recommend.png")}
        ],
        meUserConfig:[
        {tit:"进药申请",img:require("./img/application.png")},
        {tit:"设置",img:require("./img/config.png")}
        ]
      };
    },
    methods: {
      back:function(){
        window.history.go(-1);
      }
    },
    watch:{
      $route(to){
        switch(to.path){
          case "/me/config":
          this.headerTit="医生档案"
          break;
          case "/me/attention":
          this.headerTit="我的关注"
          break;
          case "/me/scan-code":
          var time=setTimeout(()=>{
          this.headerTit="扫一扫"
          this.meContHide=false
          clearTimeout(time)
        },1000)

          break;
          default:
          this.headerTit="账户设置"
          this.meContHide=true
        }
      }
    }
  };
</script>
<style scoped lang="less">
  @import url("../../base/css/config-style.less");

  #me_container{
    height:100%;
    .me-header{
      position: fixed;
      top: 0;
      left:0;
      width: 100%;
      height: .88rem;
      z-index: 3000;
      .mint-popup{
        background: @headerMenuBg;
      }
    }
    .me-menu{
      .name-data{
        li{
          position: relative;
          height: 1.4rem;
          box-sizing:border-box;
          padding:.15rem 1.28rem .15rem 1.58rem;
          img{
            position: absolute;
            top: .15rem;
            left: .28rem;
            width: 1rem;
            border-radius: 50%;
          }
          .user-code{
            position: absolute;
            top: .3rem;
            left: auto;
            right:.28rem;
            width: .8rem;
            border-radius: 0;
          }
          h4{
            font-size: .28rem;
            margin: .2rem 0 .1rem;
          }
          p{
            font-size: .24rem;
            margin: 0;
          }
        }
      }
      ul{
        padding:0;
        font-size: .28rem;
        margin-top: .3rem;
        border-bottom: .01em solid @meMenuBarBd;
        background: @meMenuBoxBg;
        li{
          border-top: .01em solid @meMenuBarBd;
          &:active{
            background: @meMenuBarBd;
          }
          div{
            position: relative;
            margin:0 .2rem;
            padding: .25rem 0 .25rem .66rem;
            box-sizing:border-box;
            h4{
             font-size: .28rem;
             line-height: .5rem;
             color:@meMenuTit;
             margin: 0;
           }
           img{
            position: absolute;
            left:0;
            top: .25rem;
            width: .5rem;
          }
          span{
            position: absolute;
            top: .25rem;
            right:0;
            font-size: .5rem;
            line-height: .5rem;
            color:@meMenuGo;
          }
        }
      }
    }
  }
}
</style>
