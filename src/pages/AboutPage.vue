<template>
  <div>
        <h1>О нас</h1>
            <p>Магазин продуктов "Ваша цена" присутствует на рынке уже несколько лет. У нас вы найдете только самые свежие продукты от проверенных
            поставщиков по очень выгодным ценам. Наши дружелюбные сотрудники постараются найти подход к каждому покупателю.
            Однажды посетив нас, вам больше не захочется закупаться в каких-либо других магазинах. Ждём вас с распростёртыми объятиями!
            </p>
        </div>
        <div>
            <h2>Наши магазины:</h2>
            <ul>
            <li v-for="shop in shops" :key="shop.id">
                {{shop.name}} - {{shop.location}}
            </li>
            </ul>
        </div>
        <div>
            <h2>Контакты:</h2>
            <p>Телефон: <a href="tel: +78005553535">+8 (800) 555-35-35</a></p>
            <p>E-mail: <a href="mailto: contact@yourprice.ru">contact@yourprice.ru</a></p>
        </div>
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
    methods:{
        ...mapActions({
            getShops: "shops/getShops",
        }),
    },
    computed: {
        ...mapState({
            shops: state => state.shops.shops,
        })
    },
    mounted(){
        this.getShops();
    }
}
</script>

<style>

</style>