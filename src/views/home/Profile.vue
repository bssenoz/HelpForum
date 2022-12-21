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
                                        <button type="button" class="btn btn btn-primary" style="margin-top:10px;float:right" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            <i class="bi bi-pencil-fill">{{ $t("edit") }}</i>
                                        </button>
                                        <div class="info" style="margin-top:1rem;margin-bottom:1rem">
                                            <h5 class="card-title" style="float:left">Name Surname</h5><br>
                                            <h6 class="card-title" style="float:left">example@gmail.com</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ $t("edit") }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">{{ $t("form.name") }}</label>
                                <input type="text" class="form-control" id="exampleInputText1" value="Name">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">{{ $t("form.surname") }}</label>
                                <input type="text" class="form-control" id="exampleInputText2" value="Surname">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">{{ $t("form.email") }}</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="example@gmail.com">
                            </div>
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
                        <button type="button" class="btn btn-primary" style="background-color:#167D7F;border:1px solid #167D7F">Kaydet</button>
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
                                                    <h5>{{content.category}}</h5>
                                                    <h6>{{content.answer}} {{ $t("answer") }}</h6>
                                                </div>
                                            </div>
                                            <div class="col-10">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col">
                                                            <router-link to="/help/id" class="nav-link">
                                                                <h5 class="card-title">{{content.title}}</h5>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <span class="card-text" >{{content.text}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="tags" v-for="tag in content.tag" :key="tag.id" style="">
                                                                <button type="button" class="btn btn-light">{{tag}}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <span class="user">{{content.date}}</span>
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

export default {
    name: 'ProfilePage',
    data() {
        return {
            contents: [
                {
                    id:1 ,
                    title: 'Title1',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                    tag: ['Tag1','Tag2','Tag3'],
                    category: 'Category1',
                    username: 'User1',
                    date: '08-12-2022',
                    answer: 1
                },
                {
                    id:2 ,
                    title: 'lorem',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                    tag: ['tag2'],
                    category: 'category2',
                    username: 'user1',
                    date: '09-12-2022',
                    answer: 0
                },
            ],
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
    float:left;
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