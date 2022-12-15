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
                        <button type="button" class="btn btn btn-primary" >Ask Question</button>
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
                                                    <h5>{{content.category}}</h5>
                                                    <h6>{{content.answer}} answer</h6>
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
                                                            <span class="card-text" >{{content.text.slice(0, 300)}}</span>
                                                            <span  v-if="(content.text.length>300)" style="text-decoration: none;font-weight: bold;color:green;">...</span>   
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <router-link to="/home" class="nav-link">
                                                                <button type="button" class="btn btn btn-secondary" >{{content.tag}}</button>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <span class="user">{{content.username}} asked {{content.date}}</span>
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
    name: 'CategoriesAskPage',
    data() {
        return {
            searchValue: '',
            categoryName: 'name',
            contents: [
                {
                    id:1 ,
                    title: 'title1',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                    tag: 'tag1',
                    category: 'category1',
                    username: 'user1',
                    date: '08-12-2022',
                    answer: 1
                },
                {
                    id:2 ,
                    title: 'lorem',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                    tag: 'tag2',
                    category: 'category1',
                    username: 'user1',
                    date: '09-12-2022',
                    answer: 0
                },                {
                    id:3 ,
                    title: 'title3',
                    text: 'text3',
                    tag: 'tag3',
                    category: 'category1',
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