<template>
  <el-card>
    <!-- 插槽内容 => 标题 -->
    <bread-crumbs slot="header">
      <!-- 面包屑的具名插槽 -->
      <template slot="title">评论列表</template>
    </bread-crumbs>
    <el-table :data="list">
      <el-table-column prop="name" label="日期" width="700"></el-table-column>
      <el-table-column prop="name" label="评论状态"></el-table-column>
      <el-table-column prop="name" label="总评论数"></el-table-column>
      <el-table-column prop="name" label="粉丝评论数"></el-table-column>
      <el-table-column prop="name" label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  }
}
</script>

<style>
</style>
