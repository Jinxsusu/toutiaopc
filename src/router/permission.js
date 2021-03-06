import router from './index'

router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()// 放行
    } else {
      next('/login')
    }
  } else {
    // 如果不是以/home开头的话,不需要控制
    next()
  }
})
export default router
