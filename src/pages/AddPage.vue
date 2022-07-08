<template>
  <h1 >Добавить товар</h1>
  <input-goods-form class="input_form" v-on:sendGoods="addGoods"/>
</template>

<script>
import InputGoodsForm from '@/components/InputGoodsForm.vue'
import axios from 'axios'
export default {
  components: { InputGoodsForm },

  methods: {
    async addGoods(goods){
          let config = {
            headers : {
              'Content-Type' : 'multipart/form-data'
            }
          }
          let fd = new FormData();
          fd.append('name',goods.name)
          fd.append('type',goods.type)
          fd.append('manufacturer',goods.manufacturer)
          fd.append('description',goods.description)
          fd.append('price',goods.price)
          fd.append('image',goods.image)
          for (var i = 0; i<goods.shops.length; i++){
            fd.append('shops',goods.shops[i]);
          }
          // fd.append('shops', goods.shops)
            axios.post('https://djangoapipolytech.herokuapp.com/api/goods/', fd, config)
            .catch(function(error){
              console.log(error)
              alert(error.response.request.response)
            })
        }
        
    }
  }


</script>

<style>
  .input_form form{
    margin-left:auto;
    margin-right:auto;
  }
</style>