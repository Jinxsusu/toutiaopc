<template>
  <div class="login">
    <el-card class="login-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form class="from">
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom:12px">
          <el-input style="width:200px" placeholder="验证码"></el-input>
          <el-button  style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item style="margin-bottom:12px">
            <el-checkbox >我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button
            style="width:348px"
            type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 410px;
    height: 345px;
    box-sizing: border-box;
    padding: 10px;
    .logo {
      text-align: center;
      img {
        width: 165px;
      }
    }
    .from {
      margin-top: 20px;
    }
  }
}
</style>
