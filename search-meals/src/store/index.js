import {createStore} from "vuex"
import * as state from "../store/state"
import * as actions from "../store/actions"
import * as mutations from "../store/mutations"
import * as getter from "../store/getters"
const store = createStore({
    state,
    actions,
    mutations,
    getters,

})

export default store