<template>
    <div class="login-page">
      <div class="login">
          <div class="card">
              <div class="container">
                  <div class="row">
                      <div class="col">
                          <div class="card-body">
                              <form style="text-align:left">
                                  <h2>{{ $t("welcome") }} :)</h2>
                                  <div class="mb-3">
                                      <label for="exampleInputEmail1" class="form-label">{{ $t("form.email") }}</label>
                                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                                  </div>
                                  <div class="mb-3">
                                      <label for="exampleInputPassword1" class="form-label">{{ $t("form.password") }}</label>
                                      <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                                  </div>
                                  <div class="mb-3 form-check">
                                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                      <label class="form-check-label" for="exampleCheck1">{{ $t("rememberMe") }}</label>
                                  </div>
                                  <button type="submit" class="btn btn-primary" @click="login()">{{ $t("signIn") }}</button>
                                  <router-link to="/register">
                                      <button  class="btn btn-light" >{{ $t("createAccount") }}</button>
                                  </router-link>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  </template>

  <script>
  import axios from 'axios';
  import swal from 'sweetalert';

  export default {
    name:'LoginPage',
    data() {
        return {
            email: '',
            password: '',
        }
    },
  methods: {
    login() {
      if (this.email !== '' && this.password !== '') {
        axios
          .post('api/Authentication/Login', {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              const token = res.data.token.accessToken;
              localStorage.setItem("x-access-token",token);
              res.headers["authorization"] = `Bearer ${token}`;
              this.$router.push('/home');
            }
          })
          .catch((err) => {
            swal("!!!"+ err);
          });
      }
    },
  },
  }
  </script>
  
  <style scoped>
  .login-page{
    background-image: linear-gradient(rgba(0,0,0,90%),rgba(0,0,0,60%)),url(../../assets/image/208607.webp); 
    background-position:center;
    background-size:cover;
    width:100vw;
    height:100vh
}
  .login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    box-shadow: 3px 3px 4px rgb(103, 102, 102);
    width:500px;
    padding:10px;
    border: 1px solid #fff;

}
.btn-primary {
    border-radius:50px;
}
.btn-light{
    border-radius: 50px;
    margin-left:10px;
}

  </style>