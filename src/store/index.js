import {createStore} from "vuex";
import { goodsModule} from "./goodsModule";
import { shopsModule } from "./shopsModule";

export default createStore({
    modules : {
        goods : goodsModule,
        shops: shopsModule
    }
})