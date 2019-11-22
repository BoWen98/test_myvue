<template>

  <div class="login_container">
    <div class="login_box">
      <el-link type="primary" :underline="false" href="/Home" class="loginTitle">{{this.loginForm.title}}</el-link>
      <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="success" @click="login('loginForm')">登录</el-button>
          <el-button type="primary" @click="resetForm('loginForm')">重置</el-button>
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
          password: '',
          title: 'Bowen博客'
        },
        rules: {
          name: [
            {required: true, message: '请输入用户账号', trigger: 'blur'},
            {min: 1, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入用户密码', trigger: 'blur'},
            {min: 1, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {

      /*this.$http.post('/api/login', this.loginForm).then(
        res => {
          console.log(res)
          if (res.data !== 200) return this.$message.error('登录失败！')
          this.$message.success('登录成功')
          this.$router.push('/home')
        })*/
      login(loginForm) {
        this.$refs[loginForm].validate((valid) => {
          if (valid) {
            this.$http.post('/api/login', this.loginForm).then(
              res => {
                console.log(res)
                if (res.data !== 200) return this.$message.error('登录失败！')
                this.$message.success('登录成功')
                this.$router.push('/home')
              })
          }
        });
      },
      resetForm(loginForm) {
        this.$refs[loginForm].resetFields();
      }
    }
  }
</script>

<style lang="less" scoped>

  /*登录注册标题*/
  .loginTitle {
    text-align: center;
    font-size: 26px;
    padding-top: 50px;
    margin-bottom: 20px;
    background-color: white;
  }


  .login_box {
    text-align: center;
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
