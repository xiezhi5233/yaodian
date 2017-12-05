<template>
	<div id="statistics_page">
		<div class="sta-header">
			<mt-header title="药品统计">
				<router-link to="/" slot="left">
				</router-link>
				<mt-button slot="left" ><i class="fa fa-angle-left"></i><span class="sta-header-left">微信</span></mt-button>
			</mt-header>
		</div>
		<div class="sta-cont">
			<ul>
				<li @click="staMenu" v-for="(val,ind) in staData">
					<div>
						{{val.tit}}<span>{{val.num}}盒<i class="fa fa-angle-left"></i></span>
					</div>
					<ul :style="{height:ind==0?val.arr.length*0.88+'rem':0}">
						<li v-for="cVal in val.arr">
							<img :src="cVal.img">
							{{cVal.name}} <span>{{cVal.num}}盒</span>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				staData:[
						{tit:"云南白药 创可贴 轻巧透气型",num:50,arr:[
							{img:require("./img/user-img.jpg"),name:"艾伊",num:5},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:20},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:10},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:15}
						]},
						{tit:"云南白药 创可贴 轻巧透气型",num:50,arr:[
							{img:require("./img/user-img.jpg"),name:"艾伊",num:5},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:20},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:10},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:15}
						]},
						{tit:"云南白药 创可贴 轻巧透气型",num:50,arr:[
							{img:require("./img/user-img.jpg"),name:"艾伊",num:5},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:20},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:10},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:15}
						]},
						{tit:"云南白药 创可贴 轻巧透气型",num:50,arr:[
							{img:require("./img/user-img.jpg"),name:"艾伊",num:5},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:20},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:10},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:15}
						]},
						{tit:"云南白药 创可贴 轻巧透气型",num:50,arr:[
							{img:require("./img/user-img.jpg"),name:"艾伊",num:5},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:20},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:10},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:15}
						]},
						{tit:"云南白药 创可贴 轻巧透气型",num:50,arr:[
							{img:require("./img/user-img.jpg"),name:"艾伊",num:5},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:20},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:10},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:15}
						]},
						{tit:"云南白药 创可贴 轻巧透气型",num:50,arr:[
							{img:require("./img/user-img.jpg"),name:"艾伊",num:5},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:20},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:10},
							{img:require("./img/user-img.jpg"),name:"艾伊",num:15}
						]}
				]
			};
		},
		methods: {
			staMenu:function(e){
				var ev=e||event;
				var _this=ev.currentTarget
				var ulBox=_this.parentNode.querySelectorAll("ul")
				var ul=_this.querySelector("ul")
				for(var i=0; i<ulBox.length; i++){
					ulBox[i].style.height="0"
					ulBox[i].parentNode.querySelector("span .fa").style.transform="rotate(-90deg)"
				}
				ul.style.height=ul.children.length*0.88+"rem"
				_this.querySelector("span .fa").style.transform="rotate(90deg)"
			}
		}
	};
</script>

<style scoped lang="less">
	@import url("../../base/css/config-style.less");
	#statistics_page{
		height:100%;
		header{
			i{
				font-size: .4rem;
			}
			.sta-header-left{
				font-size: .28rem;
				margin-left: .1rem;
			}
		}
		//内容
		.sta-cont{
			padding-top: .3rem;
			>ul{
				padding:0 ;
				background: @staMenuBoxBg;
				border-top: .01rem solid @staMenuBarBd;
				li{
					list-style:none;
					font-size: .26rem;
					line-height: .88rem;
					padding:0 .3rem;
					box-sizing:border-box;
					border-bottom: .01rem solid @staMenuBarBd;
					ul{
						overflow: hidden;
						transition:.35s;
						padding:0;
						li{
							padding:0;
							border-bottom:0;
							span{
								float: right;
								color:@staMenuCSpan;
								margin-right: .38rem;
							}
							img{
								width: .56rem;
								vertical-align: middle;
								margin-right: .1rem;
							}
						}
						li~li{
							border-top: .01rem solid @staMenuBarBd;
						}
					}
					div{
						border-bottom: .01rem solid @staMenuBarBd;
						margin:0 -.3rem;
						padding:0 .3rem;
						box-sizing:border-box;
						span{
							float: right;
							color:@staMenuRight;
							i{
								font-size: .3rem;
								margin: 0 .1rem;
								color:@staMenuRightArrow;
								transition:.35s;
								transform:rotate(-90deg);
							}
						}
					}
				}
			}
		}
	}
</style>
