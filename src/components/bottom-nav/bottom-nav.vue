<!-- 底部导航,分为三页与四页 两种-->
<template>
	<div id="bottom_nav">
		<nav>
			<ul class="nav-home" v-if="homeMe">
				<router-link to="/home" tag="li">
					<img v-show="!navUrl.home" src="./img/home.png">
					<img v-show="navUrl.home" src="./img/home-on.png">
					<span :class="{'nav-color-blue':navUrl.home}">首页</span>
				</router-link>
				<router-link to="/lecture" tag="li">
					<img v-show="!navUrl.lecture" src="./img/lecture.png">
					<img v-show="navUrl.lecture" src="./img/lecture-on.png">
					<span :class="{'nav-color-green':navUrl.lecture}">讲堂</span>
				</router-link>
				<router-link to="/me" tag="li">
					<img v-show="!navUrl.me" src="./img/me.png">
					<img v-show="navUrl.me" src="./img/me-on.png">
					<span :class="{'nav-color-green':navUrl.me}">我的</span>
				</router-link>
			</ul>
			<ul class="nav-detail" v-if="!homeMe">
				<router-link to="/home" tag="li">
					<img v-show="!navUrl.home" src="./img/home.png">
					<img v-show="navUrl.home" src="./img/home-on.png">
					<span :class="{'nav-color-blue':navUrl.home}">首页</span>
				</router-link>
				<router-link to="/class" tag="li">
					<img v-show="!navUrl.class" src="./img/class.png">
					<img v-show="navUrl.class" src="./img/class-on.png">
					<span :class="{'nav-color-green':navUrl.class}">品类</span>
				</router-link>
				<router-link to="/statistics" tag="li">
					<img v-show="!navUrl.statistics" src="./img/statistics.png">
					<img v-show="navUrl.statistics" src="./img/statistics-on.png">
					<span :class="{'nav-color-blue':navUrl.statistics}">统计</span>
				</router-link>
				<router-link to="/me" tag="li">
					<img v-show="!navUrl.me" src="./img/me.png">
					<img v-show="navUrl.me" src="./img/me-on.png">
					<span :class="{'nav-color-green':navUrl.me}">我的</span>
				</router-link>
			</ul>
		</nav>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				navUrl:{
					"home":true,
					"lecture":false,
					"class":false,
					"statistics":false,
					"me":false
				},
				homeMe:true
			}
		},
		methods:{
			navClick:function (on){
				this.navUrl={
					"home":false,
					"lecture":false,
					"class":false,
					"statistics":false,
					"me":false
				}
				let time=setTimeout(()=>{
					this.navUrl[on]=true
					clearTimeout(time)
				})
			}
		},
		watch:{
			$route(to){
				switch(to.path){
					case "/home":
					this.navClick("home")
					this.homeMe=true
					break;
					case "/lecture":
					this.navClick("lecture")
					this.homeMe=true
					break;
					case "/class":
					this.navClick("class")
					this.homeMe=false
					break;
					case "/statistics":
					this.navClick("statistics")
					this.homeMe=false
					break;
					case "/me":
					this.navClick("me")
					this.homeMe=false
					break;
					default:
				}
			}
		}
	}
</script>
<style scoped lang="less">
	@import url("../base/css/config-style.less");
	#bottom_nav{
		position: fixed;
		bottom:0;
		left:0;
		z-index: 99;
		width: 100%;
		height:.97rem;
		border-top: .01rem solid @footBdt;
		background: @footBg;
		nav{
			ul{
				margin: 0;
				padding:0;
				text-align: center;
				color:#fff;
				text-align: center;
				:after{
					clear: both;
					content:"";
					display: block;
				}
				>li{
					margin: 0;
					padding:0;
					float: left;
					list-style:none;
					span{
						font-size: .2rem;
						line-height: 1.4;
						color:#999;
					}
					.nav-color-blue{
						color:#2ca7d8;
						text-shadow:0 0 1px #2ca7d8;
					}
					.nav-color-green{
						color:#17c67d;
						text-shadow:0 0 1px #17c67d;
					}
					img{
						display: block;
						width: .5rem;
						height:.5rem;
						margin-left: auto;
						margin-right: auto;
						margin-top: .1rem;
					}
				}
			}
			.nav-home{

				>li{
					width: 33.33333%;
				}
			}
			.nav-detail{
				>li{
					width: 25%;
				}
			}
		}
	}
</style>
