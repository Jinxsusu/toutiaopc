import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'// 引入elementUI组件库
import 'element-ui/lib/theme-chalk/index.css'// 引入组件库的样式
import './style/index.less' // 引入初始化样式
Vue.config.productionTip = false
Vue.use(ElementUI) // 注册组件库
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
