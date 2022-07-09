<template>

  <h1>Доступные товары</h1>
  <label style="margin-right:10px" for="selector">Выберите сортировку:</label>
  <my-selector id="selector" :modelValue="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"/>
  <div><goods-list :goods="sortedGoods" v-on:deleteGoods="deleting"/></div>
  
</template>

<script>
import GoodsList from '@/components/GoodsList.vue'

import {mapState, mapActions, mapMutations, mapGetters} from "vuex"
import MySelector from '@/components/MySelector.vue'
export default {
    
    components: {
    GoodsList,
    MySelector
},


    
    methods: {
        ...mapMutations({
            setGoods: "goods/setGoods",
            setLoaded: "goods/setLoaded",
            setSelectedSort: 'goods/setSelectedSort',
        }),
        ...mapActions({
            getGoods: "goods/getGoods",
            deleteGoods: "goods/deleteGoods"
        }),
        deleting(id){
            console.log(id)
            this.deleteGoods(id)
        }
        

    },
    computed: {
        ...mapState({
            goods: state => state.goods.goods,
            goodsIsLoaded: state => state.goods.goodsIsLoaded,
            selectedSort: state => state.goods.selectedSort,
            sortOptions: state => state.goods.sortOptions
        }),

        ...mapGetters({
            sortedGoods: 'goods/sortedGoods',
        }),
    },
    mounted(){
        this.getGoods();
    }
}
</script>

<style>

</style>