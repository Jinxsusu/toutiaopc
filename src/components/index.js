import layoutAside from './home/layout-aside.vue'
import layoutHeader from './home/layout-header.vue'
// 注册自定义组件的插件
export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside) // 注册左侧导航组件
    Vue.component('layout-header', layoutHeader) // 注册首页头部组件
  }
}
