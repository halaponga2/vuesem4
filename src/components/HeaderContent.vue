<template>
  <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <router-link to="/" class="navbar-brand"><img src="@/assets/header_logo.png" alt="header logo"></router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" style="width:100%">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link" >Главная</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/goods" class="nav-link" >Товары</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link" >О нас</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/createGoods" class="nav-link">Добавить товар</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  background: #ffcf97;
  margin-bottom: 20px;
  color: white;
}

</style>