<template>

  <h1>Доступные товары</h1>
  <div><goods-list :goods="goods" v-on:deleteGoods="deleteGoods"/></div>
  
</template>

<script>
import GoodsList from '@/components/GoodsList.vue'

import {mapState, mapActions, mapMutations} from "vuex"
import axios from 'axios'
export default {
    
    components: {
        GoodsList,
    },


    
    methods: {
        ...mapMutations({
            setGoods: "goods/setGoods",
            setLoaded: "goods/setLoaded",
        }),
        ...mapActions({
            getGoods: "goods/getGoods",
        }),
        async deleteGoods(id){

            try{
                
                axios.delete('https://djangoapipolytech.herokuapp.com/api/goods/'+id+'/').then(()=>this.getGoods())
                
            }
            catch(error){
                console.log(error)
            }

        },

    },
    computed: {
        ...mapState({
            goods: state => state.goods.goods,
            goodsIsLoaded: state => state.goods.goodsIsLoaded,
        })
    },
    mounted(){
        this.getGoods();
    }
}
</script>

<style>

</style>