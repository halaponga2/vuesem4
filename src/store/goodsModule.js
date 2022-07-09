import axios from "axios"

export const goodsModule = {
    state: () => ({
        goods: [],
        goodsIsLoaded: false,
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
        setLoaded(state, bool){
            state.goodsIsLoaded = bool;
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
            finally{
                commit('setLoaded', true)
            }
        }
    },
    
    namespaced: true
}