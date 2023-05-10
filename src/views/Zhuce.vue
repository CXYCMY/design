<template>
    <div class="login-container">
      <div style="position: absolute;top: 100px;left: 450px;">
        <el-card style="background-color: rgba(255, 255, 255, 0.3);border-radius: 20px;">
            <h1 style="text-align: center;font-size: 20px;">乡村振兴系统服务平台</h1>
        <hr>
        <h1 style="font-size: 20px;text-align: center;color: white;">
          <i class="el-icon-s-custom"></i>
          <span style="display: inline-block; margin-left: 10px;">欢迎注册</span>
        </h1>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账户" prop="username">
                    <el-input prefix-icon="el-icon-user" placeholder="请输入手机号码" v-model="ruleForm.username"></el-input>
                </el-form-item>
            
                <el-form-item label="密码" prop="password">
                    <el-input  placeholder="请输入密码" prefix-icon="el-icon-lock" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item  label="确认密码" prop="checkPass">
                    <el-input prefix-icon="el-icon-circle-check" placeholder="请再次输入密码" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="regist">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
      </div>   
    </div>
  </template>
  <script>
  
  export default {
    data() {
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          pass: '',
          checkPass: ''
        },
        
        rules: {
            username: [
            { required: true, message: "请输入用户名", trigger: "blur" }
          ],
          password: [
            { validator: validatePass, trigger: "blur" }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
        };
    },
    methods: {
      regist(){
        this.$refs.ruleForm.validate(async (valid) => {
         console.log(valid);
        if (!valid) return;
        const result = await this.$http.post("/user/add", this.ruleForm);
        console.log(result);
        if (result.data.code === 20000) {
          this.$router.push('/login')
          return this.$message.success("注册成功");
        }
        if(result.data.code===20001){
            return this.$message.error(result.data.message)
        }
        
      });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
  