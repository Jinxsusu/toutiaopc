import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Main from '@/views/home/main'

Vue.use(VueRouter)

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'home',
    path: '/',
    component: Home,
    children: [{
      path: '', // 默认的二级路由的地址
      component: Main
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
