import layoutAside from './home/layout-aside.vue'

// 注册自定义组件的插件
export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside) // 注册左侧导航组件
  }
}
