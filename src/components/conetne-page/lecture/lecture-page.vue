<template>
	<div id="lecture_page">
		<div class="lec-header">
			<mt-header :title="headerTit">
				<router-link to="/" slot="left">
				</router-link>
				<mt-button slot="left" @click="back"><i class="fa fa-angle-left"></i></mt-button>
			</mt-header>
		</div>
		<div class="lecture-cont" v-show="contHide">
			<div class="lecture-tab">
				<mt-navbar v-model="tabOn">
					<mt-tab-item id="lecture_tab1"><span>最新资讯</span></mt-tab-item>
					<mt-tab-item id="lecture_tab2"><span>健康专题</span></mt-tab-item>
					<mt-tab-item id="lecture_tab3"><span>个人收藏</span></mt-tab-item>
				</mt-navbar>
				<mt-tab-container v-model="tabOn">
					<mt-tab-container-item id="lecture_tab1">
						<div class="tab-scroll-box">
							<ul>
							<router-link v-for="(val,ind) in mePageMenu1" to="/lecture/details" tag="li" >
									<h3 v-text="val.tit"></h3>
									<div>
										<img :src="val.img">
										<p v-text="val.cont.substring(0,28)+' . . .'"></p><span v-text="val.date"></span>
									</div>
								</router-link>
							</ul>
							<div v-if="mePageMenu1.length==0"><img src="./img/null.png">未找到资讯</div>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="lecture_tab2">
						<div class="tab-scroll-box">
							<ul>
							<router-link v-for="(val,ind) in mePageMenu2" to="/lecture/details" tag="li" >
									<h3 v-text="val.tit"></h3>
									<div>
										<img :src="val.img">
										<p v-text="val.cont.substring(0,28)+' . . .'"></p><span v-text="val.date"></span>
									</div>
								</router-link>
							</ul>
							<div v-if="mePageMenu2.length==0"><img src="./img/null.png">未找到专题</div>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="lecture_tab3">
						<div class="tab-scroll-box">
							<ul>
							<router-link v-for="(val,ind) in mePageMenu3" to="/lecture/details" tag="li" >
									<h3 v-text="val.tit"></h3>
									<div>
										<img :src="val.img">
										<p v-text="val.cont.substring(0,28)+' . . .'"></p><span v-text="val.date"></span>
									</div>
								</router-link>
							</ul>
							<div v-if="mePageMenu3.length==0"><img src="./img/null.png">还没有收藏</div>
						</div>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
  <transition
  enter-active-class='animated bounceInRight'
  leave-active-class='animated bounceOutRight'
  >
  <router-view></router-view>
</transition>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				contHide:true,
				headerTit:"健康百科",
				tabOn:"lecture_tab2",
				mePageMenu1:[
				],
				mePageMenu2:[
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")}
				],
				mePageMenu3:[
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")},
				{tit:"[专题] 男性&女性",cont:"两性健康误区多,搜索引擎太坑爹,电视广告忽悠,谁信?",date:"2017-08-13",img:require("./img/menu-img.jpg")}
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
					case "/lecture/details":
					var time=setTimeout(()=>{
						this.contHide=false;
						this.headerTit="眼科医疗设备进口替代将提速,进口化替代步伐正在加快"
						clearTimeout(time);
					},500)
					break;
					default:
					this.contHide=true
					this.headerTit="健康百科"
				}
			}
		}
	};
</script>
<style scoped lang="less">
	@import url("../../base/css/config-style.less");
	#lecture_page{
		height:100%;
		// 内容
		.lecture-cont{

			.lecture-tab{

				.tab-scroll-box{
					>ul{
						padding-left: 0;
						li{
							list-style:none;
							height:2.18rem;
							border-top: .01rem solid @meMenuBarBd;
							border-bottom: .01rem solid @meMenuBarBd;
							background: @meMenuBoxBg;
							margin-top: .25rem;
							h3{
								font-size: .3rem;
								color:@lecMenuTit;
								font-weight: 500;
								margin-left: .5rem;
								margin-top: .25rem;
								margin-bottom: .15rem;
							}
							div{
								position: relative;
								padding-left: 2.3rem;
								padding-right: .35rem;
								img{
									position: absolute;
									top: 0;
									left: .36rem;
									width: 1.76rem;
								}
								p{
									font-size: .26rem;
									color:@lecMenuText;

								}
								span{
									display: block;
									text-align: right;
								}
							}

						}
					}
					>div{
						text-align: center;
						font-size: .36rem;
						color:#bebebe;
						img{
							display: block;
							width: 3.66rem;
							margin-left: auto;
							margin-right: auto;
							margin-top: .5rem;
							margin-bottom: .5rem;
						}
					}
				}
			}

		}
	}

</style>
