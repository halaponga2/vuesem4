import axios from "axios"

export const goodsModule = {
    state: () => ({
        goods: [],

        selectedSort: 'default',
        sortOptions: [
            {value:'name', name: 'По названию'},
            {value:'price', name: 'По цене'},
        ]

    }),
    getters : {
        sortedGoods(state){
            if (state.selectedSort == 'default'){
                return state.goods;
            }
            if (state.selectedSort == 'name'){
                return [...state.goods].sort((goods1, goods2) => goods1[state.selectedSort]?.localeCompare(goods2[state.selectedSort]))
            }
            else if (state.selectedSort =='price'){
                return [...state.goods].sort((goods1, goods2) => goods1.price-goods2.price)
            }
        }
    },
    mutations: {
        setGoods(state, goods){
            state.goods = goods;
        },

        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
    },
    actions: {
        async getGoods({commit}){
            
            try{
                const response = await axios.get("https://djangoapipolytech.herokuapp.com/api/goods/")
                commit("setGoods", response.data)
            }
            catch(error){
                console.log(error)
            }
        },
        async addGoods(state){
            let config = { 
              headers : {
                'Content-Type' : 'multipart/form-data'
              }
            }
            let fd = new FormData();
            fd.append('name',state.state.goods.name)
            fd.append('type',state.state.goods.type)
            fd.append('manufacturer',state.state.goods.manufacturer)
            fd.append('description',state.state.goods.description)
            fd.append('price',state.state.goods.price)
            fd.append('image',state.state.goods.image)
            for (var i = 0; i<state.state.goods.shops.length; i++){
              fd.append('shops',state.state.goods.shops[i]);
            }
            // fd.append('shops', goods.shops)
              axios.post('https://djangoapipolytech.herokuapp.com/api/goods/', fd, config)
              .then(response => {
                if(response.status == 201){
                location.pathname="/goods"}
              })
              .catch(function(error){
                console.log(error)
                alert(error.response.request.response)
              })
          },
          async deleteGoods({dispatch},id){

            try{
                
                axios.delete('https://djangoapipolytech.herokuapp.com/api/goods/'+id+'/').then(()=>dispatch('getGoods'))
                
            }
            catch(error){
                console.log(error)
            }

        },
    },
    
    namespaced: true
}