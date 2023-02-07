<template>
    <div>
        <Navbar @searchValue="emitSearchValue($event)"/>
        <div class="home">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2>{{ $t("lastQuestions") }}</h2>
                    <router-link to="/ask-question" class="nav-link">
                        <button type="button" class="btn btn btn-primary" >{{ $t("newQuestion") }}</button>
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
                                        <div class="col-lg-2 col-sm-12">
                                            <div class="card-left">
                                                <div class="row">
                                                    <div ><h5>burası değişecek:{{content.categoryId}}</h5></div>
                                                    <div ><h6>{{content.answer}} {{ $t("answer") }}</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-10 col-sm-12">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col">
                                                        <router-link to="/help/id" class="nav-link">
                                                            <h5 class="card-title">{{content.helpTitle}}</h5>
                                                        </router-link>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <span class="card-text" >{{content.helpText.slice(0, 300)}}</span>
                                                        <span  v-if="(content.helpText.length>300)" style="text-decoration: none;font-weight: bold;color:green;">...</span>   
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
                                                        <span class="user">user yok!{{content.username}} {{ $t("asked") }} {{content.helpDate}}</span>
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
    name: 'HomePage',
    data() {
        return {
            searchValue: '',
            contents: [],
            title: '',
            tag: '',
            text: '',
            categoryId: '',
            date: '',
        }
    },
    mounted() {
        const token = localStorage.getItem("x-access-token");
        axios.get('api/Help/GetAllHelps', {
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
        }
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
  @media (max-width: 992px) {
    h6{
    float:right;
    margin-top:-1.8rem;
  }
    }

  .card-title{
    text-align: left;
    color:#05445E;
    float: left,
  }
  .card-text {
    text-align: left;
  }
  @media (min-width: 992px) {
        .card-left {
            margin-top:35px;

        }
    }
  .comment {
    margin-top:10px;
}
.tags{
    display: inline-block;
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
.btn-light {
    margin:10px 2px 2px 2px;
}
  </style>