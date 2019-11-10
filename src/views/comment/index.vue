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
          >{{obj.row.comment_status ? '关闭评论' : '打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center" style="margin-top:20px">
      <el-pagination
        background
        layout="slot,prev, pager, next"
        :total="page.total"
        prev-text="上一页"
        next-text="下一页"
        @current-change="changePage"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      list: [],
      page: {
        page: 1, // 当前页码
        pageSize: 10, // 每页条数
        total: 0 // 总条数
      }
    }
  },
  methods: {
    changePage (newPage) {
      this.page.page = newPage
      this.getComments() // 获取当前页码的数据
    },
    // 打开或关闭评论
    openOrClose (row) {
      let message = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您是否要${message}评论?`, '提示').then(() => {
        this.$axios({
          method: 'PUT',
          url: '/mp/v1_0/comments/status',
          params: { article_id: row.id.toString() },
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
      this.loading = true
      this.$axios({
        url: '/mp/v1_0/articles',
        params: {
          response_type: 'comment',
          per_page: this.page.pageSize,
          page: this.page.page
        }
      }).then(res => {
        this.loading = false
        // console.log(res)
        this.list = res.data.results // 绑定数据
        this.page.total = res.data.total_count
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
