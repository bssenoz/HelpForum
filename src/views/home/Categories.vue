<template>
    <div>
        <Navbar/>
        <div class="categories">
        <h2 style="text-transform: uppercase;">{{ $t("categories") }}</h2>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div class="col" v-for="category in categories" :key="category.id">
                    <div class="card">
                        <router-link to="/categories/name" class="nav-link">
                            <div class="card-body">
                                {{category.categoryName}}
                            </div>
                        </router-link>
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
    name: 'CategoriesPage',
    data() {
        return {
            categories: [],
        }
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
  components: {
   Navbar,
   Footer
  }
}
</script>

<style scoped>
.categories {
    margin-bottom:10%;
}
h2 {
    margin-top:20px;
    text-align: center;
}
.card {
    margin:10px;
    box-shadow: 3px 3px 4px #000;
    background-color: #def3f6;
}
.card:hover {
    background-color:#bcf3f9;
}
.card-body {
    text-transform: uppercase;   
}
</style>