<template>
    <div>
        <Navbar @searchValue="emitSearchValue($event)"/>
        <div class="home">
        <div class="container">
            <div class="row">
                <div class="col" @click="getAllUnCheckedHelps()">
                    <h2>{{ $t("newContents") }}</h2>
                </div>
                <div class="col" @click="getAllCheckedHelps()">
                    <h3>Checked Contents</h3>
                </div>
                <div class="col" @click="allContents()">
                    <h3 style="float:right">All Contents</h3>
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
                                        <div class="col-lg-12">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col">
                                                        !düzelt: <h6>{{content.categoryId}}</h6>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <router-link to="/help/id" class="nav-link">
                                                            <h5 class="card-title">{{content.helpTitle}}</h5>
                                                        </router-link>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <span class="card-text" >{{content.helpText}}</span>
                                                    </div>
                                                </div>
                                                <!-- !DÜZELTİLECEK -->
                                                <!-- <div class="row">
                                                    <div class="col">
                                                        <div class="tags" v-for="tag in content.tag" :key="tag.id" style="">
                                                            <button type="button" class="btn btn-light">{{tag}}</button>
                                                        </div>
                                                    </div>
                                                </div> -->
                                                <div class="row">
                                                    <div class="col">
                                                        <!-- user id olmayacak düzelt -->
                                                        <span class="user">{{content.applicationUserId}} {{ $t("asked") }} {{content.helpDate}}</span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="approve" style="display: inline-block;text-align:center">
                                                        <i class="bi bi-x" @click="reject(content.helpId)"></i>
                                                        <i class="bi bi-check2" @click="approve(content.helpId)"></i>
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
    name: 'ContentsPage',
    data() {
        return {
            searchValue: '',
            title: '',
            text: '',
            date: '',
            categoryId: '',
            contents: [
                // {
                //     id:1 ,
                //     title: 'Title1',
                //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                //     tag: ['Tag1','Tag2','Tag3'],
                //     category: 'Category1',
                //     username: 'User1',
                //     date: '08-12-2022',
                //     answer: 1
                // },
                // {
                //     id:2 ,
                //     title: 'lorem',
                //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                //     tag: ['tag2'],
                //     category: 'category2',
                //     username: 'user1',
                //     date: '09-12-2022',
                //     answer: 0
                // },                {
                //     id:3 ,
                //     title: 'title3',
                //     text: 'text3',
                //     tag: ['tag3'],
                //     category: 'category3',
                //     username: 'user3',
                //     date: '10-12-2022',
                //     answer: 2
                // }
            ],
        }
    },
    mounted(){
        this.getAllUnCheckedHelps();
    },
    methods: {
        emitSearchValue(searchValue) {
            this.searchValue = searchValue;
        },
        allContents() {
            const token = localStorage.getItem("x-access-token");
            axios.get('api/Help/GetAllHelps', {
          headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
        })
        .then((res) => {
          if(res.status === 200) {
            console.log(res);
            this.contents = res.data
          }
        })
        .catch((err) => {
          console.log(err);
        })
        },
        getAllCheckedHelps() {
            const token = localStorage.getItem("x-access-token");
            axios.get('api/Help/GetAllCheckedHelps', {
          headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
        })
        .then((res) => {
          if(res.status === 200) {
            console.log(res);
            this.contents = res.data
          }
        })
        .catch((err) => {
          console.log(err);
        })
        },
        getAllUnCheckedHelps() {
            const token = localStorage.getItem("x-access-token");
            axios.get('api/Help/GetAllUnCheckedHelps', {
          headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
        })
        .then((res) => {
          if(res.status === 200) {
            console.log(res);
            this.contents = res.data
          }
        })
        .catch((err) => {
          console.log(err);
        })
        },
        approve(id) {
            const token = localStorage.getItem("x-access-token");
            axios.put(`api/Help/SetCheckedHelp?id=${id}`, {
            headers: {
                accept: '*/*',
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
        reject(id) {
            const token = localStorage.getItem("x-access-token");
            axios.put(`api/Help/SetUnCheckedHelp?id=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                token: token
                }
            })
            .then((res) => {
            if(res.status === 200) {
                console.log(res);
                //window.location.reload();
            }
            })
            .catch((err) => {
            console.log(err);
            })
        }
    },
    computed: {
        contentsList() {
            if(this.searchValue.trim().length > 0 ) {
                return this.contents.filter((content) =>
                    content.helpTitle
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

  <style lang="scss" scoped>
  .home {
    margin-top:20px;
    margin-bottom:50px;
    h2{
      float:left;
    }
    h6 {
      float:right;
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
  .approve {
      .bi-x{
          color:red;
          font-size:3rem;
          cursor:pointer;
      }
      .bi-check2 {
          color:green;
          font-size:3rem;
          cursor:pointer;
      }
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
    
  }
  </style>