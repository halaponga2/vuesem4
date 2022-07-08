import axios from "axios"

export const shopsModule = {
    state: () => ({
        shops: [],
        shopsIsLoaded: false,

    }),
    getters : {},
    mutations: {
        setShops(state, shops){
            state.shops = shops;
        },
        setLoaded(state, bool){
            state.shopsIsLoaded = bool;
        }
    },
    actions: {
        async getShops({commit}){
            
            try{
                const response = await axios.get("https://djangoapipolytech.herokuapp.com/api/shop/")
                commit("setShops", response.data)
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