<template>
  <div class="login">
    <div class="login-content">
      <div class="title">智慧农业综合管理平台</div>
      <div class="login-account">
        <el-form ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item label="">
            <el-input placeholder="请输入账号"></el-input>
            <img src="../../assets/img/user.png" alt="" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="请输入密码"></el-input>
            <img src="../../assets/img/lock.png" alt="" />
          </el-form-item>
          <el-form-item label="">
            <el-input class="validate" placeholder="请输入验证码"></el-input>
            <img src="../../assets/img/validate.png" alt="" />
          </el-form-item>
        </el-form>
        <div class="login-btn" @click="login">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/data-summary");
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 1920px;
  height: 1080px;
  background: url("../../assets/img/login.png") no-repeat;
  background-position: -15% 45%;
  background-color: #fff;
  position: relative;

  .login-content {
    width: 486px;
    height: 680px;
    background: url("../../assets/img/login_content.jpg") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);

    .title {
      font-size: 36px;
      font-weight: bold;
      color: #007f5a;
      display: flex;
      justify-content: center;
      margin-top: 139px;
    }

    .login-account {
      width: 360px;
      margin: 0 auto;
      margin-top: 67px;

      .login-btn {
        margin-top: 50px;
        color: #fff;
        font-size: 18px;
        width: 100%;
        height: 52px;
        background-color: #37baa0;
        border-radius: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
