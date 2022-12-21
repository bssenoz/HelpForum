<template>
    <div class="register-page">
        <div class="register">
            <div class="card">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card-body">
                        <form style="text-align:left">
                            <h2>{{ $t("createAccount") }}!</h2>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">{{ $t("form.name") }}</label>
                                <input type="text" class="form-control" id="exampleInputText1" v-model="name">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">{{ $t("form.surname") }}</label>
                                <input type="text" class="form-control" id="exampleInputText2" v-model="surname">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">{{ $t("form.email") }}</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">{{ $t("form.password") }}</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword2" class="form-label">{{ $t("form.passwordAgain") }}</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" v-model="passwordAgain">
                            </div>
                            <button type="submit" class="btn btn-primary">{{ $t("signUp") }}</button>
                            <p class="already-register">
                              {{ $t("ifRegister") }}
                            <router-link to="/login">{{ $t("signIn") }}</router-link>
                            </p>
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

export default {
  name: 'RegisterPage',
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordAgain: '',
    };
  },
  methods: {
    register() {
        if(this.password == this.passwordAgain) {
            axios.post('api/authentication/register/', {
              username: this.username,
              password: this.password,
              email: this.email,
              name: this.name,
            })
              .then((respose) => {
                if (respose.status === 201) {
                    console.log("basarili").then(() => {
                    this.$router.push('login');
                  });
                }
              })
              .catch((err) => {
                    console.log("error!!");
                    console.log(err);
              });
        }
      
    },
  },
};
</script>

<style scoped>
.register-page{
  background-image: linear-gradient(rgba(0,0,0,90%),rgba(0,0,0,60%)),url(../../assets/image/208607.webp); 
  background-position:center;
  background-size:cover;
  width:100vw;
  height:100vh}
.register {
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
  margin-bottom:10px;
}


</style>