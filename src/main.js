import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import  TypeNav from '@/components/TypeNav'
import store from '@/store'
//为了测试
import '@/api'
//组件三大步: 定义 注册 使用
Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)
new Vue({
  el:'#app',
  render: h => h(App),//1,注册组件App,2,使用组件3,渲染组件
  router,
  store
})
