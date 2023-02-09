<template>
    <div>
        <Navbar />
        <div class="profile">
            <div class="container" >
                <div class="row">
                    <div class="col">
                        <div class="card mb-3" style="max-width: 540px;margin: auto;margin-top:4rem;margin-bottom:5rem !important">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <i class="bi bi-person-bounding-box" style="font-size:5rem"></i>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body" >
                                        <button type="button" class="btn btn btn-primary" style="margin-top:10px;float:right" data-bs-toggle="modal" data-bs-target="#user">
                                            <i class="bi bi-pencil-fill">{{ $t("edit") }}</i>
                                        </button>
                                        <div class="info" style="margin-top:1rem;margin-bottom:1rem">
                                            <h5 class="card-title" style="float:left">{{name}} {{surname}}</h5><br>
                                            <h6 class="card-title" style="float:left">{{email}}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="user" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="userLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="userLabel">{{ $t("edit") }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating">
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
                            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#password">Change Password</button>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">{{ $t("form.password") }}</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" v-model="newPassword">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword2" class="form-label">{{ $t("form.passwordAgain") }}</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" v-model="confirmPassword">
                            </div>
                            <button type="button" class="btn btn-primary" style="background-color:#167D7F;border:1px solid #167D7F" @click="changePassword()">Kaydet</button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <button type="button" class="btn btn-primary" style="background-color:#167D7F;border:1px solid #167D7F" @click="updateUser()">Kaydet</button>
                    </div>
                    </div>
                </div>

                <div class="modal fade" id="password" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="passwordLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="passwordLabel">{{ $t("edit") }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">{{ $t("form.password") }}</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" value="Password">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword2" class="form-label">{{ $t("form.passwordAgain") }}</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" value="">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <button type="button" class="btn btn-primary" style="background-color:#167D7F;border:1px solid #167D7F" @click="changePassword()">Kaydet</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            
                <div class="row">
                    <div class="col">
                        <h4>{{ $t("yourQuestions") }}</h4>
                        <div v-for="content in contents" :key="content.id">
                        <div class="comment">
                    <div class="row">
                            <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-2">
                                                <div class="card-left">
                                                    <h5>{{content.categoryId}}</h5>
                                                    <h6>{{content.answer}} {{ $t("answer") }}</h6>
                                                </div>
                                            </div>
                                            <div class="col-10">
                                                <div class="container" @click="go(content.helpId)">
                                                    <div class="row">
                                                        <div class="col">
                                                                <h5 class="card-title">{{content.helpTitle}}</h5>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <span class="card-text" >{{content.helpText}}</span>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="row">
                                                        <div class="col">
                                                            <div class="tags" v-for="tag in content.tag" :key="tag.id" style="">
                                                                <button type="button" class="btn btn-light">{{tag}}</button>
                                                            </div>
                                                        </div>
                                                    </div> -->
                                                    <div class="row">
                                                        <div class="col">
                                                            <span class="user">{{content.helpaDte}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  </template>

<script>
import Navbar from '../../components/Layout/Navbar.vue';
import Footer from '../../components/Layout/Footer.vue';
import axios from 'axios';
import swal from 'sweetalert';

export default {
    name: 'ProfilePage',
    data() {
        return {
            name: '',
            surname: '',
            username: '',
            email: '',
            newPassword: '',
            confirmPassword: '',
            contents: [],
        }
    },
    mounted() {
      const token = localStorage.getItem("x-access-token");
        axios
          .get('api/Users/GetUser', {
            headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
          })
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              this.username = res.data.userName,
              this.name = res.data.name,
              this.surname = res.data.surname,
              this.email = res.data.email
            }
          })
          .catch((err) => {
            console.log(err);
          }); 
          axios.get('api/Help/GetAllUserHelps',{
            headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
          }).then((res2) => {
            if(res2.status===200) {
                console.log(res2)
                this.contents=res2.data
            }
          }).catch((err2) => {
            console.log(err2);
          });
    },
    methods: {
        updateUser() {
            const token = localStorage.getItem("x-access-token");
        axios.put('api/Users/UpdateUser', {
              name: this.name,
              surname: this.surname,
              email: this.email 
        }, {
          headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
        })
        .then((res) => {
          if(res.status === 200) {
            console.log(res);
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        })
        },
        changePassword() {
            const token = localStorage.getItem("x-access-token");
            axios.post('api/Authentication/ResetPassword', {
            Email: this.email,
            NewPassword: this.newPassword,
            ConfirmPassword: this.confirmPassword
            }, {
            headers: {
              Authorization: `Bearer ${token}`,
              token: token,
              'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
            if(res.status === 200) {
                console.log(res);
                swal({
                    text: 'Your password has been successfully changed',
                    icon: 'success',
                  }).then(() => {
                        window.location.reload();
                  });
            }
            })
            .catch((err) => {
                swal("!!!"+ err);
            })
        },
        go(id) {
            this.$router.push(`content/${id}`);
        }
    },
  components: {
   Navbar,
   Footer,
  },
}
</script>

  <style scoped>

label {
    float:left;
}
.col-md-4 {
    padding:1rem;
}
.card-title{
    text-align: left;
    color:#05445E;
    float: left,
  }
  .tags{
    display: inline-block;
    float: left;
}
  .card-text {
    text-align: left;
    margin-bottom:10px;
    /* float:left; */
  }
  .card-left {
    margin-top:30px;
  }
  .comment {
    margin-top:10px;
}
.user {
    float:right;
}
.btn-primary {
    float:right;background-color: #189AB4;border:1px solid #189AB4
}
.btn-secondary {
    float:left;margin:5px;
}
  </style>