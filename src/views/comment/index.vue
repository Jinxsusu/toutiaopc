<template>
  <el-card>
    <!-- 插槽内容 => 标题 -->
    <bread-crumbs slot="header">
      <!-- 面包屑的具名插槽 -->
      <template slot="title">评论列表</template>
    </bread-crumbs>
    <el-table :data="list">
      <el-table-column prop="title" label="标题" width="700"></el-table-column>
      <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="obj">
          <el-button
           type="text"
           size="small"
           :style='{color:obj.row.comment_status ? "#E6A23C":"#409EFF"}'
          >
              {{obj. row.comment_status ? '关闭评论' : '打开评论'}}
        </el-button>
        </template>
      </el-table-column>
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
    // 设置表格格式
    formatter (row) {
      return row.comment_status ? '正常' : '关闭'
    },
    getComments () {
      this.$axios({
        url: '/mp/v1_0/articles',
        params: { response_type: 'comment' }
      }).then(res => {
        // console.log(res)
        this.list = res.data.results // 绑定数据
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
