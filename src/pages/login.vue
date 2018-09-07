<template>
  <div class="login tru_whole_fixed tru_bg_height" style="background-image: url('static/images/login_bg.png')">
    <tru-image src="static/images/login_bg.png"></tru-image>

    <div class="login_box tru_center">


      <h1 class="system_title">Tru-admin System</h1>

      <mu-paper :z-depth="1"  style="padding: 10px;position: relative;">
        <mu-form ref="form"  :model="validateForm" class="mu-demo-form">
          <div style="padding: 0 10px;">
            <mu-form-item label="用户名" label-float prop="username" :rules="usernameRules">
              <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="密码" label-float prop="password" :rules="passwordRules">
              <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
            </mu-form-item>
          </div>

          <!--<mu-form-item prop="isAgree" :rules="argeeRules">
            <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
          </mu-form-item>-->
          <mu-form-item>
            <mu-flex class="flex-demo" justify-content="center" fill>
              <mu-button full-width color="primary" @click="submit">提交</mu-button>
            </mu-flex>
            <mu-flex class="flex-demo" justify-content="center" fill>
              <mu-button full-width @click="clear">重置</mu-button>
            </mu-flex>


          </mu-form-item>
        </mu-form>
      </mu-paper>

      <div class="tru_font_describe" style="text-align: center;padding-top: 20px;">power by @Trubasa</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        usernameRules: [
          {validate: (val) => !!val, message: '必须填写用户名'},
          {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        argeeRules: [{validate: (val) => !!val, message: '必须同意用户协议'}],
        validateForm: {
          username: '',
          password: '',
          isAgree: false
        }
      }
    },
    mounted() {

    },
    methods: {
      submit() {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
          if(result){
            this.$axios.all([this.getUserInfo(),this.getUserList()])
              .then(()=>{
                console.log('可以登录了');
                this.login()
              })
          }
        });
      },
      login(){
        this.$netWork.post('/login')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      getUserList(){
        return this.$netWork.get('/userList')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      getUserInfo(){
        return this.$netWork.get('/userInfo')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      clear() {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          password: '',
          isAgree: false
        };
      }
    }
  }
</script>

<style scoped>
  .login {

  }

  .login_box {
    width: 380px;
    max-width: 90%;
    max-height: 80%;
    overflow-y: auto;
    padding: 5px;
  }

  .flex-demo {
    padding: 0 5px;
  }
  .system_title{
    text-align: center;
    color: #fff;
  }
</style>
