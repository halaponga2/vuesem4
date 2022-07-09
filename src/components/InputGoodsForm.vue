<template>
  <div>
    <form @sumbit.prevent class="col-md-4 col-sm-12">
        <div class="form-group mt-3">
            <label for="name">Введите название товара</label>
            <input id="name" class="form-control" v-model="add_goods.name" type="text" placeholder="Название" >
        </div>
        <div class="form-group mt-3">
            <label for="type">Введите тип товара</label>
            <input id="type" class="form-control" v-model="add_goods.type" type="text" placeholder="Тип" >
            </div>
        <div class="form-group mt-3">
            <label for="manufacturer">Введите производителя товара</label>
            <input id="manufacturer" class="form-control" v-model="add_goods.manufacturer" type="text" placeholder="Производитель">
        </div>
        <div class="form-group mt-3">
            <label for="description">Введите описание товара</label>
            <textarea id="description" class="form-control" v-model="add_goods.description" placeholder="Описание" style="resize: none;"> </textarea>
        </div>
        <div class="form-group mt-3">
            <label for="price">Введите цену товара</label>
            <input id="price" class="form-control" v-model="add_goods.price" type="number" min="0" max="10000">
        </div>
        <div class="form-group mt-3">
            <label for="image">Выберите изображение товара</label>
            <input id="image" class="form-control" type="file" @change="onFileSelected" >
        </div>
        <div class="form-group mt-3">
            <p>В каких магазинах доступно?</p> 
            <div v-for="shop in shops" :key="shop.id" class="form-check">
                <label class="form-check-label"  :for="'shop_'+shop.id">{{shop.name}}</label>
                <input class="form-check-input"  type="checkbox" :id="'shop_'+shop.id" :value="`${shop.id}`" v-model="add_goods.shops">
            </div>
        </div>
        <button class="btn btn-primary mt-3" type="button" @click="sendGoods">Отправить</button>
    </form>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {

    data(){
        return{
            add_goods: {
                name: null, 
                type: null,
                manufacturer: null,
                description: null,
                price: null,
                image: null,
                shops:[],

            }
        }
    },
    
     methods: {
        ...mapActions({
            getShops: "shops/getShops",
        }),

        sendGoods(){
            if(!this.add_goods.name || !this.add_goods.type || !this.add_goods.manufacturer || !this.add_goods.description || !this.add_goods.price || this.add_goods.shops.length == 0 || !this.add_goods.image){
                alert("Не введены данные!");
            }
            else{
                this.$emit("sendGoods", this.add_goods)
            }
        },
        onFileSelected(event){

            this.add_goods.image=event.target.files[0];
        }

    },
    computed: {
        ...mapState({
            shops: state => state.shops.shops,
            shopsIsLoaded: state => state.shops.shopsIsLoaded,
        })
    },
    mounted(){
        this.getShops();
    }

}
</script>

<style>

</style>