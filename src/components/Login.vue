<template>

  <div>
    <div class="container">
      <h1 class="loginTitle">
        <el-link type="primary" :underline="false" href="/Home" class="loginTitle">{{this.loginForm.title}}</el-link>
      </h1>
      <!-- 登录注册 -->
      <div v-show="!err2005" class="">
        <div class="loginBox">
          <div class="lr-title">
            <h1>登录</h1>
          </div>
          <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="80px">
            <el-input v-model="loginForm.name"
                      type="text"
                      placeholder="用户名">
            </el-input>
            <el-input
              type="password"
              placeholder="用户密码"
              v-model="loginForm.password">
            </el-input>
          </el-form>
          <h3><a href="">忘记密码？</a></h3>
          <!--@click="gotoHome"-->
          <div class="lr-btn tcolors-bg" @click="login('loginForm')">登录</div>
          <div class="otherLogin">
            <a href="javascript:void(0)"><i class="fa fa-fw fa-wechat"></i></a>
            <a href="javascript:void(0)"><i class="fa fa-fw fa-qq"></i></a>
            <a href="javascript:void(0)"><i class="fa fa-fw fa-weibo"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--<div class="login_container">
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
  </div>-->
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

<style>
  /*登录注册标题*/
  .loginTitle {
    text-align: center;
    font-size: 26px;
    padding-top: 50px;
    margin-bottom: 20px;
  }

  .loginBox, .registerBox {
    background: #fff;
    padding: 40px;
    max-width: 320px;
    margin: 0 auto;
  }

  .loginBox {
    padding-bottom: 0;
  }

  .lr-title {
    position: relative;
    height: 32px;
    line-height: 32px;
    margin-bottom: 20px;
  }

  .lr-title h1 {
    font-size: 24px;
    color: #666;
    font-weight: bold;
    /*width:50%;*/
  }

  .lr-title p {
    font-size: 12px;
    color: #999;
    position: absolute;
    right: 0;
    top: 0;
  }

  .lr-btn {
    color: #fff;
    text-align: center;
    letter-spacing: 5px;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 30px;
  }

  .loginBox .el-input, .registerBox .el-input {
    margin-bottom: 20px;
  }

  .loginBox .el-alert, .registerBox .el-alert {
    top: -18px;
    background-color: #888;
  }

  .loginBox .el-input input, .registerBox .el-input input {
    border-radius: 4px;
  }

  .loginBox h3, .registerBox h3 {
    text-align: right;
    margin-bottom: 20px;
  }

  .loginBox h3 a, .registerBox h3 a {
    font-size: 13px;
    color: #999;
  }

  .loginBox .otherLogin {
    max-width: 320px;
    padding: 30px 40px;
    background: #ddd;
    text-align: center;
    margin-left: -40px;
    margin-right: -40px;
    visibility: hidden;
  }

  .loginBox .otherLogin p {
    margin-bottom: 20px;
    font-size: 16px;
  }

  .loginBox .otherLogin a i {
    display: inline-block;
    width: 42px;
    height: 42px;
    line-height: 42px;
    font-size: 18px;
    border-radius: 50%;
    color: #fff;
    margin: 0 10px;
  }

  .loginBox .otherLogin a i.fa-wechat {
    background: #7bc549;
  }

  .loginBox .otherLogin a i.fa-qq {
    background: #56b6e7;
  }

  .loginBox .otherLogin a i.fa-weibo {
    background: #ff763b;
  }

  /*登录成功*/
  .registerSuc {
    padding: 40px;
    margin: 0 auto;
  }

  .registerSuc .sucIcon {
    text-align: center;
    margin-bottom: 30px;
    padding-left: 60px;
  }

  .registerSuc .sucContent {
    line-height: 1.5;
    font-size: 15px;
    text-align: center;
  }

  .registerSuc .sucContent p {
    margin-top: 10px;
    font-size: 13px;
    color: #999;
  }

  .registerSuc .sucContent .lastbtn {
    display: inline-block;
    font-size: 14px;
    padding: 3px 10px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }

  .registerSuc .sucContent .el-icon-close {
    fong-size: 13px;
  }
</style>
