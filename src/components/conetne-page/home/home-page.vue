<!-- 首页-->
<template>
  <div id="home_page">
    <div class="home-header">
      <mt-header title="销售记录">
        <router-link to="/" slot="left">
        </router-link>
        <mt-button slot="right" @click="homeMenu=!homeMenu"><i class="fa fa-plus"></i></mt-button>
      </mt-header>
      <mt-popup v-model="homeMenu" modal="true" closeOnClickModal="true">
        <ul>
          <span></span>
          <li><a href="##"><i class="fa fa-qrcode"></i>扫码加药代</a></li>
          <li><a href="##"><i class="fa fa-user-plus"></i>输入医生邀请码</a></li>
        </ul>
      </mt-popup>
    </div>
    <div class="home-banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item><a href="#"><img src="./img/banner-img1.jpg" ></a></mt-swipe-item>
        <mt-swipe-item><a href="#"><img src="./img/banner-img2.jpg" ></a></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="home-tab">
        <mt-navbar v-model="tabOn">
          <mt-tab-item id="tab_page1"><span>本周</span></mt-tab-item>
          <mt-tab-item id="tab_page2"><span>历史</span></mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="tabOn">
          <mt-tab-container-item id="tab_page1">
          <div class="tab-scroll-box">
              <ul>
                    <li v-for="(val,ind) in tabData">
                       <a href="#">
                            <img src="./img/tab-icon-on.png" v-if="!ind">
                            <img src="./img/tab-icon.png" v-show="ind">
                            <h4>{{val.tit}} <span>{{val.date}}</span></h4>
                            <div class="num-bar" :style="{width:(val.num>100?100:val.num)+'%',backgroundColor:(ind?'':'#ff6b3d')}"></div>
                            <div class="num-right"><span :style="{color:ind?'':'#f08c34'}">{{val.num}}盒</span> <i class="fa fa-chevron-right"></i></div>
                       </a>
                    </li>
              </ul>
          </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab_page2">
          <div class="tab-scroll-box">
              <ul>
                    <li v-for="(val,ind) in tabDataEd">
                       <a href="#">
                            <img src="./img/tab-icon.png" >
                            <h4>{{val.tit}} <span>{{val.date}}</span></h4>
                            <div class="num-bar" :style="{width:(val.num>100?100:val.num)+'%'}"></div>
                            <div class="num-right">{{val.num}}盒 <i class="fa fa-chevron-right"></i></div>
                       </a>
                    </li>
              </ul>
          </div>
          </mt-tab-container-item>
        </mt-tab-container>
    </div>
  </div>
</template>
<script>
export default{
    data(){
      return{
      homeMenu:false,
      tabOn:"tab_page1",
      allLoaded:"",
        tabData:[
            {tit:"周四",date:"2015.6.23",num:"30"},
            {tit:"周三",date:"2015.6.22",num:"65"},
            {tit:"周二",date:"2015.6.21",num:"58"},
            {tit:"周一",date:"2015.6.20",num:"87"}
        ],
        tabDataEd:[
            {tit:"周日",date:"2015.6.23",num:"30"},
            {tit:"周六",date:"2015.6.22",num:"65"},
            {tit:"周五",date:"2015.6.21",num:"58"},
            {tit:"周四",date:"2015.6.20",num:"87"},
            {tit:"周三",date:"2015.6.19",num:"105"},
            {tit:"周二",date:"2015.6.18",num:"87"},
            {tit:"周一",date:"2015.6.17",num:"43"},
            {tit:"周日",date:"2015.6.16",num:"65"},
            {tit:"周六",date:"2015.6.15",num:"34"},
            {tit:"周五",date:"2015.6.14",num:"75"},
            {tit:"周四",date:"2015.6.13",num:"80"}
        ]
      }
    },
    methods: {

    }
}
</script>
<style scoped lang="less">
  @import url("../../base/css/config-style.less");
  #home_page{
    //height: 100%;
// 页头
.home-header{
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: .88rem;
  z-index: 3000;
  .mint-popup{
    left:auto;
    right:.15rem;
    top:.95rem;
    padding:.15rem;
    border-radius:.1rem;
    -webkit-transform:translate(0);
    transform:translate(0);
    background: @headerMenuBg;
    ul{
      padding:0;
      >span{
        position: absolute;
        top: -.1rem;
        right:.5rem;
        width: .2rem;
        height:.2rem;
        transform:rotate(45deg);
        background: @headerMenuBg;
      }
      li{
        list-style:none;
        font-size: .26rem;
        padding:.2rem 0;
        a{
          line-height: .3rem;
          text-decoration:none;
          i{
            display: inline-block;
            width: .3rem;
            font-size: .3rem;
            color:@headerMenuIcon1;
            margin-right: .2rem;
          }
        }
      }
      li+li{
        border-top: .01rem solid  #ccc;
        a{
          i{
            color:@headerMenuIcon2;
          }
        }
      }
    }
  }
  header{
    .fa-plus{
      margin-right: .2rem;
    }
  }
}
// banner
  .home-banner{
    height:3.2rem;
    img{
      display: block;
      width: 100%;
      height:auto;
    }
    // 未获取到焦点元素??????????
    >.mint-swipe{
      >.mint-swipe-indicators{
        >.mint-swipe-indicator{
          width: .2rem;
          height:.2rem;
          background: #f00;
        }
        .is-active{
          background: #00f;
        }
      }
    }
  }
//tab
    .home-tab{
      .mint-navbar{
          .mint-tab-item{
              padding:0;
              height:auto;
               padding:0 .35rem;
             span{
                 display: inline-block;
                 height:100%;
                 font-size: .28rem;
                 padding:.24rem .4rem;
              }
          }
          .is-selected{
              margin-bottom: 0;
              color:@homeTabTitle;
              border:0;
             span{
                 border-bottom: .02rem solid @homeTabTitle;
               }
          }
      }
      .mint-navbar{
        border-bottom: .01rem solid #e5e5e5;
      }
      .tab-scroll-box{
        //overflow-y: auto;
        ul{
          padding:0;
          background: #fff;
          margin-top: .3rem;
          border-top: .01rem solid #e5e5e5;
          li{
            position: relative;
            list-style:none;
            padding:.28rem 1.5rem .28rem 1.2rem;
            border-bottom: .01rem solid #e5e5e5;
            a{
              text-decoration: none;
              img{
                  position: absolute;
                  left: .2rem;
                  top:.28rem;
                  width: .64rem;
              }
              h4{
                  font-size: .3rem;
                  font-weight: 500;
                  line-height: 1;
                  margin: .05rem 0 .2rem;
                  span{
                    font-size: .24rem;
                    line-height: .3rem;
                    color:#666;
                  }
              }
              .num-bar{
                height:.12rem;
                border-radius:.06rem;
                background: #cdcdcd;
              }
              .num-right{
                position: absolute;
                top: .3rem;
                right:.25rem;
                font-size: .32rem;
                color:#666;
              }
            }
          }
        }
      }
    }
}

</style>