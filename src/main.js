import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Component from './components' // 自定义组件
import axios from 'axios' // 引入axios 工具
import ElementUI from 'element-ui'// 引入elementUI组件库
import 'element-ui/lib/theme-chalk/index.css'// 引入组件库的样式
import './style/index.less' // 引入初始化样式

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn' // 配置axios的baseURL
Vue.prototype.$axios = axios // 给Vue对象原型属性赋值,那么所有的vue实例自动拥有$axios

Vue.config.productionTip = false
Vue.use(ElementUI) // 注册组件库
Vue.use(Component) // 全局注册自定义组件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
