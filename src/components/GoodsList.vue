<template>
  <div class="d-inline-flex p-2" v-for="entity in goods" :key="entity.id">
            <div class="card" style="width: 18rem;" >
                <img :src="`${entity.image}`" class="card-img-top img-thumbnail card__image" alt="card image">
                <div class="card-body">
                    <h5 class="card-title">{{entity.name}}</h5>
                    <p class="card-text">{{entity.type}} </p>
                    <p class="card-text">{{entity.description}} </p>
                    <p class="card-text">{{entity.price}} руб.</p>
                    <svg @click="deleteGoods(entity.id)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                </div>
            </div>
        </div>
</template>

<script>

export default {
    props:{
        goods:{}
    },
    methods:{
        deleteGoods(id){this.$emit("deleteGoods", id);}
    }
}
</script>

<style scoped>
.card {
  background: #fff6ec;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
}
.card-body {
  background: #fff6ec;
}
.card__image {
  width: 286px;
  height: 286px;
  -o-object-fit: cover;
     object-fit: cover;
}

svg:hover{
  cursor: pointer;
  color: grey;
}
</style>