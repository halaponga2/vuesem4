import axios from "axios"

export const goodsModule = {
    state: () => ({
        goods: [],
        goodsIsLoaded: false,

    }),
    getters : {},
    mutations: {
        setGoods(state, goods){
            state.goods = goods;
        },
        setLoaded(state, bool){
            state.goodsIsLoaded = bool;
        }
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