import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入 vant-ui
import '@/utils/vant-ui'
// 全局
// import Vant from 'vant'
// import 'vant/lib/index.css'
// // 插件安装初始化 ： 内部会将所有的 vant 所有组件进行导入注册
// Vue.use(Vant)
// import { Button } from 'vant'
// Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
