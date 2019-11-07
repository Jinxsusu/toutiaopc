import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views//login'
import Home from '../views/home/index.vue'
import Main from '../views/home/main'

Vue.use(Router)
export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [{
        path: '', // 默认的二级路由的地址
        component: Main
      }]
    }
  ]
})
