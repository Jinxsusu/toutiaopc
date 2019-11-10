<template>
  <el-card>
    <!-- 插槽内容 => 标题 -->
    <bread-crumbs slot="header">
      <!-- 面包屑的具名插槽 -->
      <template slot="title">评论列表</template>
    </bread-crumbs>
    <el-table :data="list">
      <el-table-column prop="title" label="标题" width="700"></el-table-column>
      <el-table-column prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getComments () {
      this.$axios({
        url: '/mp/v1_0/articles',
        params: { response_type: 'comment' }
      }).then(res => {
        // console.log(res)
        this.list = res.data.results// 绑定数据
      })
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>
</style>
