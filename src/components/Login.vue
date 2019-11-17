<template>
  <div class="login_container">
    <div class="login_box">
      <el-form ref="formVue" :model="loginForm" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="success" @click="login">登录</el-button>
          <el-button type="primary">主要按钮</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      login() {
        this.$http.post('http://localhost:8300/login', this.loginForm).then(
          res => {
            if (res.data !== 200) return this.$message.error('登录失败！')
            this.$message.success('登录成功')
            this.$router.push('/home')
          })
      }
    }
  }
</script>

<style lang="less" scoped>
  .login_container {
    background-color: #2b4b6b;
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
</style>
