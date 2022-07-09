import axios from "axios"

export const shopsModule = {
    state: () => ({
        shops: [],


    }),
    getters : {},
    mutations: {
        setShops(state, shops){
            state.shops = shops;
        },

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
        }  
    },
    namespaced: true
}