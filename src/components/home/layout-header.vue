<template>
  <el-row class="layout-header" type="flex" justify='space-between'>
    <el-col class="left" :span="6">
      <i class="el-icon-s-unfold icon"></i>
      <span>江苏传智博客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="3">
      <img src="../../assets/img/avatar.jpg" alt />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          苏苏
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>Git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.layout-header {
  width: 100%;
  padding: 8px 0;
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
