<template>
    <div>
        <Navbar @searchValue="emitSearchValue($event)"/>
        <div class="home">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2 v-if="(contents.length>1)">{{contents[0].category}}</h2>
                    <h2 v-if="(!(contents.length>1))">No questions found in this category</h2>
                    <router-link to="/ask-question" class="nav-link">
                        <button type="button" class="btn btn btn-primary" >Soru Sor</button>
                    </router-link>
                </div>
            </div>
            <div v-for="content in contentsList" :key="content.id">
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
                                                    <h6>{{content.answer}} cevap</h6>
                                                </div>
                                            </div>
                                            <div class="col-10">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col" @click="goContent(content.helpId)" style="cursor:pointer">
                                                                <h5 class="card-title">{{content.helpTitle}}</h5>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <span class="card-text" >{{content.helpText.slice(0, 300)}}</span>
                                                            <span  v-if="(content.helpText.length>300)" style="text-decoration: none;font-weight: bold;color:green;">...</span>   
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
                                                            <!-- düzenle -->
                                                            <span class="user">{{content.applicationUserId}} sordu {{content.helpDate}}</span>
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

export default {
    name: 'CategoryContent',
    data() {
        return {
            searchValue: '',
            categoryName: 'name',
            contents: [],
        }
    },
    mounted() {
        var url = window.location.hash
        var first = url.lastIndexOf("/");
        var last = url.length
        var id = url.substr(first + 1 ,last)

        const token = localStorage.getItem("x-access-token");
        axios.get(`api/Help/GetHelpByCategoryId/${id}`, {
          headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
        })
        .then((res) => {
          if(res.status === 200) {
            this.contents=res.data
          }
        })
        .catch((err) => {
          console.log(err);
        })
     },
    methods: {
        emitSearchValue(searchValue) {
            this.searchValue = searchValue;
        },
        goContent(id) {
            this.$router.push({path: `/content/${id}`});
        },

    },
    computed: {
        contentsList() {
            if(this.searchValue.trim().length > 0 ) {
                return this.contents.filter((content) =>
                    content.title
                    .toLowerCase()
                    .includes(this.searchValue.trim().toLowerCase()));
            }
            return this.contents;
        },
  },
  components: {
   Navbar,
   Footer,
  },
}
</script>

  <style scoped>
  .home {
    margin-top:20px;
    margin-bottom:50px;
    
  }
  h2{
    float:left;
  }
  .card-title{
    text-align: left;
    color:#05445E;
    float: left,
  }
  .tags{
    display: inline-block;
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