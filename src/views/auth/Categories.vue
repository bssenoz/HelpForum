<template>
    <div>
        <Navbar @searchValue="emitSearchValue($event)"/>
        <div class="col" v-for="category in categories" :key="category.categoryId">
          <div class="row">
            <div class="col-2">
              {{category.categoryId}}
            </div>
            <div class="col-6">
              {{category.categoryName}}
            </div>
            <div class="col-2" style="cursor: pointer"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="getCategory(category.categoryId)">
              Edit
            </div>
            <div class="col-2" @click="deleteCategory(category.categoryId)" style="cursor: pointer">Delete</div>
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
                                <label for="exampleInputEmail1" class="form-label" >{{ $t("form.name") }}</label>
                                <input type="text" class="form-control" id="exampleInputText1" v-model="name2">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <button type="button" class="btn btn-primary" style="background-color:#167D7F;border:1px solid #167D7F" @click="updateCategory()">Kaydet</button>
                    </div>
                    </div>
                </div>
            </div>
      </div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">{{ $t("form.password") }}</label>
  <input type="name" class="form-control" id="exampleInputPassword1" v-model="name">
 </div>
 <button type="submit" class="btn btn-primary" @click="newCategory()">{{ $t("signIn") }}</button>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../../components/Layout/Navbar.vue';
import Footer from '../../components/Layout/Footer.vue';
import axios from 'axios';

export default {
    name:'CategoriesPage',
    data() {
        return {
            categories: [],
            name: '',
            name2: '',
            id2: ''
        }
    },
    components: {
        Navbar,
        Footer,
    },
    mounted() {
      const token = localStorage.getItem("x-access-token");
        axios
          .get('api/Category/GetAllCategories', {
            headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
          })
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              this.categories=res.data
            }
          })
          .catch((err) => {
            console.log(err);
          }); 
    },
    methods:{
      newCategory() {
        const token = localStorage.getItem("x-access-token");
        axios.post('api/Category/CreateCategory', {
          categoryName: this.name
        }, {
          headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
        })
        .then((res) => {
          console.log("then")
          if(res.status === 200) {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        })
      },
      deleteCategory(id) {
        const token = localStorage.getItem("x-access-token");
        axios.delete(`api/Category/DeleteCategory/${id}`, {
          headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
        })
        .then((res) => {
          
          if(res.status === 200) {
            console.log(res);
            console.log("silindi")
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        })
      },
      updateCategory() {
        const token = localStorage.getItem("x-access-token");
        axios.put('api/Category/UpdateCategory', {
          categoryId: this.id2,
          categoryName: this.name2
        },{
          headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
        })
        .then((res) => {
          if(res.status === 200) {
            console.log(res);
            console.log("güncellendi")
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        })
      },
      getCategory(id) {
        const token = localStorage.getItem("x-access-token");
        axios.get(`api/Category/GetCategoryById/${id}`, {
          headers: {
              Authorization: `Bearer ${token}`,
              token: token
            }
        })
        .then((res) => {
          if(res.status === 200) {
            this.name2 = res.data.categoryName;
            this.id2 = res.data.categoryId;
          }
        })
        .catch((err) => {
          console.log(err);
        })
      },
    }
}
</script>
<style scoped>
table {
  width: 100%;
  float:left; 
}
/* th {
  float:left;
} */

</style>