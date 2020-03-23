<template>
  <div class="about">
          <div id="divLogin">
      <h5>Login</h5>
      <div class="row">
        <div class="col-md-3">
          <input type="text" id="username" placeholder="username" class="form-control" v-model="loginusername">
        </div>
        <div class="col-md-3">
          <input type="password" id="password" placeholder="password" class="form-control" v-model="loginpassword">
        </div>
        <div class="col-md-4">
          <input type= "submit" @click.prevent="loginUser" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
export default {
  data(){
    return{
      loginusername: ``,
      loginpassword: ``

    }
  },
  methods:{
    loginUser(){
      axios({
        method:"post",
        url:"http://localhost:3000/login",
        data: {
          username:this.loginusername,
          password:this.loginpassword
        }
      })
      .then(response => {
        localStorage.setItem("token", response.data.token)
        this.$router.push("mainpage")
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>