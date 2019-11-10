<template>
 <el-card>
         <!-- 插槽内容 => 标题 -->
    <bread-crumbs slot="header">
      <!-- 面包屑的具名插槽 -->
      <template slot="title">素材管理</template>
    </bread-crumbs>
     <el-tabs v-model="activeName" type="border-card">
    <el-tab-pane label="全部" name="all">全部</el-tab-pane>
    <el-tab-pane label="收藏" name="collect">收藏</el-tab-pane>
  </el-tabs>
 </el-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
