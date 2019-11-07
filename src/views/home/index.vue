<template>
  <el-container>
    <el-aside style="width:200px">
      <layout-aside/>
    </el-aside>
    <el-container>
      <el-header>
        <layout-header/>
      </el-header>
      <el-main style="padding:0;margin:0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
</style>
