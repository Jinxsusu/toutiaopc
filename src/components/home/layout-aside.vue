<template>
  <div class="aside-layout">
    <div class="title">
      <img src="@/assets/img/logo_admin.png" alt />
    </div>
    <el-menu
      style="border:none"
      background-color="#353b4e"
      text-color="#adafb5"
      active-text-color="#ffd04b"
      router
      >
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot='title'>首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item index="/home/publish">发布文章</el-menu-item>
        <el-menu-item index="/home/articles">内容列表</el-menu-item>
        <el-menu-item index="/home/comment">评论列表</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item index="/home/fansdata">图文数据</el-menu-item>
        <el-menu-item index="/home/fansinfo">粉丝概况</el-menu-item>
        <el-menu-item index="/home/fanlist">粉丝画像</el-menu-item>
        <el-menu-item index="/home/fansimg">粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/account">
        <i class="el-icon-s-tools"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.aside-layout {
  width: 200px;
  background-color: #323745;
  text-align: center;
height: 100%;
}
.title {
  padding: 15px;
  img {
    height: 30px;
  }
}
</style>
