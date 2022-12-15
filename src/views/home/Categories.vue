<template>
    <div>
        <Navbar/>
        <div class="categories">
        <h2>CATEGORIES</h2>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div class="col " v-for="category in categories" :key="category.id">
                    <div class="card">
                        <router-link to="/categories/name" class="nav-link">
                            <div class="card-body">
                                {{category.name}}
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

export default {
    name: 'CategoriesPage',
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: "category-1",
                },
                {
                    id: 2,
                    name: "category-2",
                },
                {
                    id: 3,
                    name: "category-3",
                },
                {
                    id: 4,
                    name: "category-4",
                },
                {
                    id: 5,
                    name: "category-5",
                },
                {
                    id: 6,
                    name: "category-6",
                },
                {
                    id: 7,
                    name: "category-7",
                },
                {
                    id: 8,
                    name: "category-8",
                },
                {
                    id: 9,
                    name: "category-9",
                }
            ],
        }
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