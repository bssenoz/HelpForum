<template>
    <div>
        <Navbar/>
        <div class="content-create">
            <h2>{{ $t("create.ask") }}!</h2>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Title">
                            <label for="floatingInput">{{ $t("create.title") }}</label>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                            <label for="floatingTextarea2"></label>
                        </div>
                        <select class="form-select" aria-label="Default select example" style="margin-top:10px">
                            <option selected>{{ $t("create.category") }}</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <form class="row g-3" style="margin-top:10px">
                            <div class="col-5">
                                <label for="text" class="visually-hidden">Tag</label>
                                <input type="text" class="form-control" placeholder="Tag" v-model="tag">
                            </div>
                            <div class="col-2" >
                                <div class="btn btn-outline-success" @click="addTag(tag)">{{ $t("create.add") }}</div>
                            </div>
                            <div class="col-7">
                                <div class="tags" v-for="tag in tags" :key="tag.id" style="">
                                <button type="button" class="btn btn-light">{{tag}}</button>
                                </div>
                            </div>
                        </form>
                        <router-link to="/ask-question" class="nav-link">
                            <button type="button" class="btn btn btn-primary">{{ $t("ask") }}</button>
                    </router-link>
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
    name: 'ContentCreatePage',
    data() {
        return {
            tags: [],
        }
    },
    components: {
        Navbar,
        Footer
    },
    methods: {
        addTag(newTag) {
            console.log(newTag);
            this.tags.push(newTag);
            console.log(this.tags);
        }
    },
}
</script>


<style scoped>
.content-create {
    height:auto;
    width:auto;
    text-align:center;
    margin-top:2rem;
    margin-bottom:2rem;
}
.btn-outline-success {
    float:left;
    border:1px solid #189AB4;
    color: #189AB4;
}
.btn-outline-success:hover {
   background-color: #189AB4;
    border:1px solid #189AB4;
    color:#fff;
}
.btn-light {
    margin:2px;
}
.btn-primary{
    margin:20px;
    background-color: #05445E;
    border:1px solid #05445E;
}
.tags{
    display: inline-block;
    float:left;
}
::placeholder {
  color: #000;
}
</style>