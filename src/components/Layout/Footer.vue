<template>
    <footer class="text-center text-lg-start bg-light text-muted">
      <section class="container py-3">
        <div class="text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">{{ $t("pages") }}</h6>
              <p>
                <a href="/" class="text-reset">{{ $t("home") }}</a>
              </p>
              <p>
                <a href="/categories" class="text-reset">{{ $t("categories") }}</a>
              </p>
              <p>
                <a href="/ask-question" class="text-reset">{{ $t("ask") }}</a>
              </p>
              <p>
                <a href="#" class="text-reset">Page-4</a>
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">{{ $t("categories") }}</h6>
              <p>
                <a href="/categories/name" class="text-reset">Category-1</a>
              </p>
              <p>
                <a href="/categories/name" class="text-reset">Category-2</a>
              </p>
              <p>
                <a href="/categories/name" class="text-reset">Category-3</a>
              </p>
              <p>
                <a href="/categories/name" class="text-reset">Category-4</a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">{{ $t("contact") }}</h6>
              <p><i class="bi bi-geo-alt-fill"></i> Sakarya, Türkiye</p>
              <p>
                <i class="bi bi-envelope-fill"></i> example@gmail.com
              </p>
              <p><i class="bi bi-telephone-fill"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <hr />
        <div class="row">
          <div class="col">
            <p class="copyright-text" style="text-align:center">
              Copyright &copy; 2022 All Rights Reserved by SAUSEM
            </p>
          </div>
  
        </div>
      </div>
    </footer>
  </template>
<script>
export default {
  name: 'FooterPage',
}
</script>

  <style scoped>
  a{
    text-decoration: none;
  }

  </style>