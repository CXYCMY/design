<template>
  <div class="login-container">
    <div style="position: absolute;top: 200px;left: 400px;">
      <el-card style="width: 500px;height: 300px;background-color: rgba(255, 255, 255, 0.3);border-radius: 20px;">
        <h1 style="text-align: center;font-size: 20px;">乡村振兴系统服务平台</h1>
        <hr>
        <h1 style="font-size: 20px;text-align: center;color: white;">
          <i class="el-icon-s-custom"></i>
          <span style="display: inline-block; margin-left: 10px;">欢迎登录</span>
        
        </h1>
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm"  label-width="100px" class="demo-ruleForm">
          <div style="text-align: center;">
            <div>
              <el-form-item label="账号" prop="username">
                <el-input type="text"  placeholder="请输入账号"  v-model="loginForm.username" autocomplete="off"></el-input>
              </el-form-item>
            </div>
            
            <div>
              <el-form-item label="密码" prop="password">
                <el-input type="password"  placeholder="请输入账号"  v-model="loginForm.password" autocomplete="off"></el-input>
              </el-form-item>
            </div>
            
          </div>
          
          
          <div style="text-align: center;">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button @click="regist">注册</el-button>
          </div>
          
          
        </el-form>
      </el-card>
    </div>   
  </div>
</template>
<script>

export default {
  data() {   
      return {
        imgSrc:require('../assets/bg2.jpg'),
        loginForm: {
          username: '',
          password: '',
        },
        rules:{
          username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名为 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        //   验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "密码为 6 到 12 个字符",
            trigger: "blur",
          },
        ],
        }
    }   
  },
  methods:{
    login(){
      this.$refs.loginForm.validate(async (valid) => {
        // console.log(valid);
        if (!valid) return;
        const result = await this.$http.post("/user/login", this.loginForm);
        if (result.data.data.flag === true) {
          this.$router.push('/')
          return this.$message.success("登录成功");
        }
        this.$message.error("登录失败了");
        console.log(result);
      });
    },
    regist(){
      this.$router.push('/zhuce')
    }
    }
  }

</script>
<style>
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/bg2.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
} 
</style>
