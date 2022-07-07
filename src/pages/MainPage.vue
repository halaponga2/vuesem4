<template>
  <div class="row mt-5" style="width:100%">
        
        <div class="col">
            <img src="@/assets/mainpage_logo.png" class="mx-auto d-block" style="width:300px" alt="logo">
        </div>
        <div class="col" style="margin: auto">
            <h2>Магазин продуктов "Ваша цена"</h2>
            <p class="mainpage__text">Покупайте наши товары по самым выгодным ценам! "Ваша цена" - Ваш лучший друг и в горести и в радости!</p>
            <router-link to="/goods" class="btn btn-primary mt-3">Перейти к товарам</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mainpage__text {
  max-width: 300px;
  
}
</style>