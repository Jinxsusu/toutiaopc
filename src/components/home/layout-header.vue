<template>
  <el-row class="layout-header" type="flex" justify='space-between'>
    <el-col class="left" :span="6">
      <i class="el-icon-s-unfold icon"></i>
      <span>江苏传智博客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="3">
      <img :src="userInfo.photo ? userInfo.photo :defaultImg" alt />
      <el-dropdown trigger="click" @command='handleMenuItem'>
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command='account'>个人信息</el-dropdown-item>
          <el-dropdown-item command='git'>git地址</el-dropdown-item>
          <el-dropdown-item command='lgout'>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/mp/v1_0/user/profile'
      }).then(res => {
        // console.log(res.data)
        this.userInfo = res.data
      })
    },
    // 点击下拉菜单触发的方法
    handleMenuItem (command) {
      if (command === 'account') {
        // 账户信息
        this.$router.push('/home/account')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/shuiruohanyu/82heimatoutiao' // 改变当前的地址
      } else if (command === 'lgout') {
        // 退出
        window.localStorage.clear() // 清空缓存 清除所有的缓存  只能清除自己当前项目的缓存
        this.$router.push('/login') // 跳转到登录页
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style scoped lang='less'>
.layout-header {
  width: 100%;
  padding: 10px 0;
  .left {
    display: block;
    align-items: center;
    .icon {
      font-size: 22px;
      margin-right: 3px;
    }
  }
  .right{
    display: flex;
    align-items: center;
    img{
      border-radius: 50%;
      margin-right: 5px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
