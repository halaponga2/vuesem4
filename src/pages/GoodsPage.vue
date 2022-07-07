<template>
    <!-- <div>{{goods}}</div> -->
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
                
                axios.delete('http://sem4api.std-1387.ist.mospolytech.ru/api/goods/'+id+'/').then(()=>this.getGoods())
                
            }
            catch(error){
                console.log(error)
            }

        },

    },
    computed: {
        ...mapState({
            goods: state => state.goods.goods.results,
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