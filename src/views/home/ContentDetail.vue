<template>
    <div>
        <Navbar/>
    <div class="contentDetail">
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title">{{content.helpTitle}}</h5>
                            </div>
                            <div class="col">
                                <router-link to="/category/id" class="nav-link">
                                    <h5 class="card-category">{{content.categoryId}}</h5>
                                </router-link>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="card-text">{{content.helpText}}</p>
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
                                <span class="user">{{content.applicationUserId}} {{ $t("asked") }} {{content.helpDate}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn btn-primary" style="margin-top:10px;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{{ $t("modal.reply") }}</button>
            <h4>{{ $t("answers") }}</h4>
                    <div class="container">
                        <div class="row row-cols-1" v-for="comment in comments" :key="comment.id">
                            <div class="col">
                                <p class="card-text" style="text-align:left" >{{comment.text}}</p>
                            </div>
                            <div class="col">
                                <span class="user">{{comment.username}} {{ $t("replied") }} {{comment.date}}</span>
                            </div>
                        </div>
                    </div>


            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ $t("modal.answer") }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                            <label for="floatingTextarea2">{{ $t("modal.yourAnswer") }}</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t("modal.close")}}</button>
                        <button type="button" class="btn btn-primary" style="background-color:#167D7F;border:1px solid #167D7F">{{ $t("modal.reply")}}</button>
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

export default {
name: 'ContentDetailPage',
data() {
    return {
        content: {},
        comments:[
            {
                id:1 ,
                contentId: 1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
                username: 'user-1',
                date: '09-12-2022',
            },
            {
                id:2 ,
                contentId: 1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                username: 'user-2',
                date: '09-12-2022',
            }
        ]
    }
},
mounted() {
        var url = window.location.hash
        var first = url.lastIndexOf("/");
        var last = url.length
        var id = url.substr(first + 1 ,last)

        const token = localStorage.getItem("x-access-token");
        axios.get(`api/Help/GetHelpById/${id}`, {
          headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
        })
        .then((res) => {
          if(res.status === 200) {
            this.content=res.data
            console.log(res.data)
          }
        })
        .catch((err) => {
          console.log(err);
        })
     },
components: {
   Navbar,
   Footer,
  },
}
</script>

<style scoped>
.contentDetail{
margin-top:5%;
margin-bottom:5%;
}
.card-title {
color:#05445E;
float: left;
font-weight: bold;
}
.card-category {
color:#05445E;
float: right;
}
.card-text{
float:left;
}
.btn-primary {
float:right;

background-color: #167D7F;
border:1px solid #167D7F
}
.btn-light{
margin: 10px 2px 2px 2px;
}
.btn-primary:active {
background-color: #167D7F;
border:1px solid #167D7F
}
.btn-secondary {
float:left;
margin:5px
}
.tags{
display: inline-block;
}
h4 {
margin:20px;
}
.user {
float:right;
}
.row-cols-1 {
background-color:#D4F1F4;
border-radius: 10px;
padding:10px;
margin-top: 10px;
}
</style>