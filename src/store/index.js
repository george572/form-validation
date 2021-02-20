import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        formData : {

        },
        keys : {

        }
    },
    mutations: {
        createFormData (state, payload) {
            if (payload.group !== undefined ) {
                if (state.formData[`${payload.group}`] === undefined){
                    state.formData[`${payload.group}`] = {};
                    state.formData[`${payload.group}`][`${payload.name}`] = payload.value
                }
                else {
                    state.formData[`${payload.group}`][`${payload.name}`] = payload.value
                }
            }
            else {
                state.formData[`${payload.name}`] = payload.value;
            }
        },
        userValidationData(state, payload){
            state.keys = payload;
        }
    }
})
export default store;