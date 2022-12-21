<template>
    <div>
        <Navbar @searchValue="emitSearchValue($event)"/>
        <div class="home">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2>{{ $t("newContents") }}</h2>
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
                                                        <h6>{{content.category}}</h6>
                                                    </div>
                                                </div>
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
                                                        <span class="user">{{content.username}} {{ $t("asked") }} {{content.date}}</span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="approve" style="display: inline-block;text-align:center">
                                                        <i class="bi bi-x"></i>
                                                        <i class="bi bi-check2" @click="approve(content.id)"></i>
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
    name: 'ContentsPage',
    data() {
        return {
            searchValue: '',
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
                },                {
                    id:3 ,
                    title: 'title3',
                    text: 'text3',
                    tag: ['tag3'],
                    category: 'category3',
                    username: 'user3',
                    date: '10-12-2022',
                    answer: 2
                }
            ],
        }
    },
    methods: {
        emitSearchValue(searchValue) {
            this.searchValue = searchValue;
        },
        //calismiyor!
        approve(id) {
            delete this.contents[id-1];
        }
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