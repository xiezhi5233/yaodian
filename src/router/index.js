import Vue from 'vue'
import Router from 'vue-router'
// 首页
import homePage from "../components/conetne-page/home/home-page.vue"
// 关于我
import mePage from "../components/conetne-page/me/me-page.vue"
// 扫码
import scanCodePage from "../components/conetne-page/scan-code/scan-code-page.vue"
// 品类
import classPage from "../components/conetne-page/class/class-page.vue"
// 品类,购买成功
import buySuccPage from "../components/conetne-page/buy-success/success-page.vue"
// 统计
import statisticsPage from "../components/conetne-page/statistics/statistics-page.vue"
// 讲堂
import lecturePage from "../components/conetne-page/lecture/lecture-page.vue"
// 讲堂详情页
import detailsPage from "../components/conetne-page/details/details-page.vue"
// 医生档案(个人设置)
import configPage from "../components/conetne-page/config/me-page.vue"
// 我的关注
import attentionPage from "../components/conetne-page/attention/me-page.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: homePage
    },
    {
      path: '/home',
      component: homePage
    },
    {
      path: '/me',
      component: mePage,
      children:[
                    { path: '/me/config', component: configPage},
                    { path: '/me/attention', component: attentionPage},
                    { path: '/me/scan-code', component: scanCodePage}
                ]
    },
    {
      path: '/class',
      component: classPage,
      children:[
      				{path:"/class/buy-succ",component:buySuccPage}
      ]
    },
    {
      path: '/lecture',
      component: lecturePage,
      children:[
      					{path:"/lecture/details",component:detailsPage}
      ]
    },
    {
      path: '/statistics',
      component: statisticsPage
    }
  ]
})
