// 处理axios拦截器 请求拦截器 响应拦截器
import axios from 'axios'
import router from '../router/permission'
import { Message } from 'element-ui' // 配置axios的baseURL
import jsonBigInt from 'json-bigint'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn'// 使用json-bigint 包处理大数字

axios.defaults.transformResponse = [function (data) {
  // data 是响应回来的字符串

  return data ? jsonBigInt.parse(data) : {}
}]
// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发起请求请做一些业务处理
  let token = window.localStorage.getItem('user-token')
  config.headers['Authorization'] = `Bearer ${token}` // 统一注入token
  return config
}, function () {
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function (error) {
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名认证用户，无权限登录'
      break
    case 507:
      message = '服务器或数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    case 401:
      window.localStorage.clear() // 因为token有可能过期 清除垃圾token
      router.push('/login')
      break
    default:
      message = '未知错误'
      break
  }
  Message({ type: 'warning', message })
  return new Promise(function () { }) // 直接返回一个promise 表示错误已经被处理掉 相当于强行截止错误
})
export default axios
