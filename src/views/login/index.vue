<template>
  <div class="login">
    <el-card class="login-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!--登录表单  绑定整个表单-->
      <el-form ref="loginRules" :model="fromData" :rules="loginRules" class="from">
        <el-form-item prop="mobile">
          <el-input placeholder="请输入手机号" v-model="fromData.mobile"></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom:12px" prop="code">
          <el-input v-model="fromData.code" style="width:200px" placeholder="验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="fromData.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 自定义校验规则 是一个函数
    let validator = (rule, value, callback) => {
      if (value) {
        callback() // 如果value为true直接通过
      } else {
        callback(new Error('您必须无条件的同意'))
      }
    }
    return {
      fromData: {
        mobile: '',
        code: '',
        check: false
      },
      // 校验规则
      loginRules: {
        mobile: [
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号格式不正确'
            // 正则表达式 校验手机号的格式
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码'
          },
          {
            pattern: /^\d{6}$/,
            message: '请输入6位有效数字'
          }
        ],
        check: [
          {
            validator // 使用自定义校验规则
          }
        ]
      }
    }
  },
  method: {
    login () {

    }
  }
}
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
