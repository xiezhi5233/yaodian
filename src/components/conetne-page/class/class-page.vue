<template>
	<div id="class_page">
		<div class="class-header">
			<mt-header :title="HeaderTit">
				<router-link to="/" slot="left">
				</router-link>
				<mt-button slot="left" @click="back"><i class="fa fa-angle-left"></i></mt-button>
			</mt-header>
		</div>
		<div class="cla-cont" v-show="claContHide">
			<div class="cla-name">
				<img src="./img/name-img.jpg">
				<h3>范家盈 <span>副主任医师</span></h3>
				<p>中国人民解放军第四--医院</p>
			</div>
			<div class="cla-name-data">
				<div>
					<div>
						<p><b>姓名:</b><span>陆远飞</span></p>
						<p><b>年龄:</b><span>35岁</span></p>
					</div>
					<div>
						<p><b>性别:</b><span>男</span></p>
						<p><b>主治医生:</b><span>黄柳</span></p>
					</div>
				</div>
				<p>住院时间:2015-01-06 15:22:02</p>
				<p>检查服务号: 1389012</p>
			</div>
			<div class="cla-scroll-img">
				<mt-swipe :auto="4000">
					<mt-swipe-item><a href="#"><img src="./img/commodity.jpg" ></a></mt-swipe-item>
					<mt-swipe-item><a href="#"><img src="./img/commodity.jpg" ></a></mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="cla-price">
				<h3>风热感冒颗粒 <span><del>¥28.50</del>¥25.00</span></h3>
			</div>
			<div class="cla-drug-data">
				<h3>药品详情</h3>
				<p><b>药品名称：</b>风热感冒颗粒</p>
				<p><b>批准文号：</b>国药准字H20044623</p>
				<p><b>生产企业：</b>桓诚帮药集团有限公司</p>
				<p><b>规格：</b>10g*8袋</p>
				<p><b>性状：</b>
					风热感冒颗粒，疏风清热，利咽解毒。用于风热
					感冒，发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。
					风热感冒颗粒，疏风清热，利咽解毒。用于风热感冒，
					发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。
				</p>
			</div>
			<div class="cla-foot-link">
				<h3><img src="./img/foot-icon.png" >去附近药店购买</h3>
				<h3><img src="./img/foot-icon2.png" >咨询厂家药剂师购买</h3>
			</div>
			<div class="cla-buy">
				<div class="cla-buy-top">
					药品疗程
					<div>
						<button @click="valNum-=1"><i class="fa fa-minus"></i></button>
						<input type="text"  v-model="valNum">
						<button @click="valNum+=1"><i class="fa fa-plus"></i></button>
					</div>
				</div>
				<div class="cla-buy-bot">
					<span><b>总价:</b><del v-text="'¥'+(valNum*aPrice)"></del></span>
					<router-link tag="button" to="/class/buy-succ">确认购买</router-link>

				</div>
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
	import Vue from 'vue'
	export default{
		data(){
			return{
				valNum:1,
				claContHide:true,
				HeaderTit:"扫码购物",
				aPrice:800.45,
				homeMenu:false,
			}
		},
		methods: {
			back:function(){
				window.history.go(-1);
			}
		},
		watch:{
			$route(to){
				switch(to.path){
					case "/class/buy-succ":
					var time=setTimeout(()=>{
					this.HeaderTit="购买成功"
					this.claContHide=false
					clearTimeout(time)
					},500)
					break;
					default:
					this.HeaderTit="扫码购物"
					this.claContHide=true
				}
			}
		}

	}
</script>

<style scoped lang="less">
	@import url("../../base/css/config-style.less");
	#class_page{
		height:100%;
		.cla-cont{
			>div{
				margin-top: .3rem;
				padding:0 .3rem;
				background: @claBlockBg;
				border-top: .01rem solid @claBlockBd;
				border-bottom: .01rem solid @claBlockBd;
			}
			.cla-name{
				position: relative;
				padding-left:2rem;
				height:2.16rem;
				h3{
					font-size: .32rem;
					font-weight: 500;
					margin-top: .6rem;
					span{
						font-size: .24rem;
						color:@claText;
					}
				}
				p{
					font-size: .24rem;
					color:@claText;
				}
				>img{
					position: absolute;
					top: .4rem;
					left: .3rem;
					width: 1.4rem;
					border-radius: 50%;
					border: .02rem solid #f5f4f9;
				}
			}
			.cla-name-data{
				>div{
					&:after{
						clear: both;
						content:"";
						display: block;
					}
					>div{
						float: left;
						width: 60%;
						p{
							font-size: .28rem;
							margin: .2rem 0;
							b{
								font-weight: 500;
								margin-right: .1rem;
							}
							span{
								color:@claTextColor;
							}
						}
					}
					>div+div{
						width: 40%;
					}
				}
				p{
					font-size: .26rem;
					color:@claText;
					margin: .15rem 0;
				}
			}
			.cla-scroll-img{
				height:3rem;
				padding:.1rem 0;
				text-align: center;
				img{
					width: 4rem;
				}
			}
			.cla-price{
				h3{
					font-size: .32rem;
					font-weight: 500;
					span{
						float: right;
						font-size: .38rem;
						color:@claPrice;
						del{
							font-size: .3rem;
							color:@claPriceDel;
							margin-right: .1rem;
						}
					}
				}
			}
			.cla-drug-data{
				h3{
					font-size: .32rem;
					border-bottom: .01rem solid @claBlockBd;
					padding-bottom: .2rem;
					font-weight: 500;
				}
				p{
					font-size: .28rem;
					color:@claText;
					line-height: 1.5;
					margin-top: 0;
					margin-bottom: .2rem;
					b{
						font-size: .34rem;
						font-weight: 500;
						color:@bodyColor;
					}
				}
			}
			.cla-foot-link{
				h3{
					font-size: .32rem;
					font-weight: 500;
					line-height: .51rem;
					img{
						float: left;
						width: .51rem;
						margin-right: .2rem;
						vertical-align: middle;
					}
				}
			}
			.cla-buy{
				border-bottom: 0;
				.cla-buy-top{
					border-bottom: .01rem solid @claBlockBd;
					font-size: .3rem;
					line-height: 1rem;
					>div{
						float: right;
						margin-top: .24rem;
						>:nth-of-type(n+1){
							float: left;
							height:.52rem;
							box-sizing:border-box;
							&:focus{
								outline:none;
							}
						}
						button{
							border: .01rem solid @claBlockBd;
							background: #fff;
							color:@claPriceDel;
							&:active{
								background:@claTextColor;
								color:@claTextNumBtn;
							}
						}
						input{
							width: .72rem;
							border: 0;
							border-top:  .01rem solid @claBlockBd;
							border-bottom:  .01rem solid @claBlockBd;
							padding:0 .1rem;
							text-align: center;
						}
					}
				}
				.cla-buy-bot{
					line-height: .9rem;
					font-size: .24rem;
					span{
						display: inline-block;
						width: 2rem;
						color:@claPrice;
						margin-right: .1rem;
						b{
							font-weight: 500;
							color:@bodyColor;
							margin-right: .1rem;
						}
					}
					button{
						float: right;
						height: .52rem;
						margin-top: .2rem;
						background: @claTextColor;
						color:@claBlockBtnF;
						border: 0;
						border-radius: .26rem;
						padding:0 .3rem;
						opacity:.9;
						&:focus{
							outline:none;
						}
						&:active{
							opacity:1;
						}
					}
				}

			}
		}
	}
</style>
