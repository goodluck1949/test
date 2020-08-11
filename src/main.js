import Vue from 'vue'
import App from './App.vue'
//组件三大步: 定义 注册 使用
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),//1,注册组件App,2,使用组件3,渲染组件
})
