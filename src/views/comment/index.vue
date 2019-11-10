<template>
  <el-card>
    <!-- 插槽内容 => 标题 -->
    <bread-crumbs slot="header">
      <!-- 面包屑的具名插槽 -->
      <template slot="title">评论列表</template>
    </bread-crumbs>
    <el-table :data="list">
      <el-table-column prop="title" label="标题" width="600"></el-table-column>
      <el-table-column :formatter="formatter" align="center" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" align="center" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" align="center" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="obj">
          <el-button type="text" size="small">修改</el-button>
          <el-button
            type="text"
            size="small"
            :style="{color:obj.row.comment_status ? '#E6A23C':'#409EFF'}"
            @click="openOrClose(obj.row)"
          >{{obj. row.comment_status ? '关闭评论' : '打开评论'}}</el-button>
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
    // 打开或关闭评论
    openOrClose (row) {
      let message = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您是否要${message}评论?`, '提示').then(() => {
        this.$axios({
          method: 'PUT',
          url: '/mp/v1_0/comments/status',
          params: { article_id: row.id },
          // 传递article_id 参数
          data: { allow_comment: !row.comment_status }
        // 取反 更改评论的状态
        }).then(res => {
          // 重新调用 获取评论的数据 重新调用,拉取数据
          this.getComments()
        })
      })
    },
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
