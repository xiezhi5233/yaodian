import Vue from 'vue'
import App from './App'
import router from './router'
import jsonp from "jsonp"
import "animate.css"
require ("font-awesome-webpack")
// 公共样式(只是用作组件之外,组件内部需要单独引入)
import "./components/base/css/config-style.less"
//mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
//rem布局
	(function(widthNum,min){
		var html=document.documentElement;
		document.body.style.fontSize=".16rem"
			var sw=html.offsetWidth;
			if(sw<min){
				sw=min
			}else if(sw>widthNum){
				sw=widthNum
			}
			html.style.fontSize = sw / widthNum*625+ '%';
			window.onresize = function () {
				if(html.offsetWidth<=widthNum&&html.offsetWidth>=min){
					html.style.fontSize = html.offsetWidth / widthNum*625 + '%';
				};
			}
	})(750,320)


Vue.config.productionTip = false
// jsonp请求
function jsonpFn (url,opts) {
	//Promise异步编语法
	return new Promise((res,rej)=>{
		//jsonp方法的参数是
		//路径,
		jsonp(url,opts,(err,data)=>{
			res(data)
		})
	})
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

