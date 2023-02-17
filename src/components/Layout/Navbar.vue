<template>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">MYK</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <a class="nav-link">{{ $t("home") }}</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/categories" class="nav-link">
                <a class="nav-link">{{ $t("categories") }}</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ask-question" class="nav-link">
                <a class="nav-link">{{ $t("ask") }}</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/panel/content" class="nav-link">
                <a class="nav-link">{{ $t("contents") }}</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">
                <a class="nav-link">{{ $t("profile") }}</a>
              </router-link>
            </li>
          </ul>
          <form class="d-flex" role="search" >
            <input class="form-control me-2" type="search" placeholder="" aria-label="Search" v-model="searchValue">
            <div class="btn btn-outline-success" @click="keyupEvent()">{{ $t("search") }}</div>
          </form>
          <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
              {{ lang }}
            </option>
          </select>
          <button type="button" class="btn btn-success" v-if="!loginSituation">
            <router-link to="/login" class="nav-link">{{ $t("signIn") }}</router-link>
          </button>
          <button type="button" class="btn btn-light" v-if="!loginSituation">
            <router-link to="/register" class="nav-link">{{ $t("signUp") }}</router-link>
          </button>
          <button type="button" class="btn btn-success" v-if="loginSituation" @click="logout()">
            {{ $t("logout") }}
          </button>
        </div>
      </div>
    </nav>
      </template>
    
    <script>
    
    export default {
      name: 'NavbarPage',
      data() {
        return {
          searchValue: '',
          langs: ['tr', 'en'],
          loginSituation: false
        }
      },
      mounted() {
        const login = localStorage.getItem("x-access-token");
        console.log(login)
        if(login!=null) this.loginSituation = true;
      },
      methods: {
        keyupEvent() {
          this.$emit('searchValue',this.searchValue);
        },
        logout() {
          localStorage.clear();
          window.location.reload();
        }
      }
    }
    </script>
    
    <style scoped>
    
    .container-fluid{
      margin-left:10px;
      text-align: center;
    }
    form::v-deep {
      margin-right:180px;
      width:50%;
    }
    .btn-success {
      background-color:#189AB4;
      border:1px solid #189AB4;
      width:100px;
    }
    .btn-outline-success::v-deep{
      border:1px solid #189AB4;
      color:#189AB4;
      text-align:center;
    }
    .btn-outline-success:hover::v-deep{
      background-color: #189AB4;
      border:1px solid #189AB4;
      color: #fff;
    }
    .btn-outline-success:active::v-deep{
      background-color: #189AB4;
      border:1px solid #189AB4;
    }
    @media (max-width: 992px)
     {
      form::v-deep {
        width:100%;
      }
     }
     .btn-light::v-deep {
      margin:10px;
      text-align:center;
    }
    
    </style>