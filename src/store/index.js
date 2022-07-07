import {createStore} from "vuex";
import { goodsModule} from "./goodsModule";

export default createStore({
    modules : {
        goods : goodsModule
    }
})