import store from "@/store";
export default {
    install(Vue) {
        // 1. add global method or property
        Vue.validateInput = function () {

        }
        Vue.mixin({

        })
        Vue.prototype.$keys = store.state.keys;
    }
}