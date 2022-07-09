<template>
  <h1 >Добавить товар</h1>
  <input-goods-form class="input_form" v-on:sendGoods="adding"/>
</template>

<script>
import InputGoodsForm from '@/components/InputGoodsForm.vue'
import {mapState, mapActions, mapMutations} from "vuex"
export default {
  components: { InputGoodsForm },

 methods: {
        ...mapMutations({
            setGoods: "goods/setGoods",
        }),
        ...mapActions({
            addGoods: "goods/addGoods",
        }),

        adding(goods){
          this.setGoods(goods)
          this.addGoods()
        }

    },
    computed: {
        ...mapState({
            goods: state => state.goods.goods,

    }),
},
}


</script>

<style>
  .input_form form{
    margin-left:auto;
    margin-right:auto;
  }
</style>