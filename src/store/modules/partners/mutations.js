import { SET_LOADING, SET_RESULT, SET_LIST, SET_KVKNUMMER } from "./mutation-types";
import Vue from 'vue';

export default {
    [SET_LIST](state, data) {
        state.list = data || [];
    },
    [SET_LOADING](state, data) {
        state.loading = data;
    },
    [SET_KVKNUMMER](state, data) {
        console.log("SET_KVKNUMMER");
        console.log(data);
        //state.kvknummer = "'set kvknummer'";
        Vue.set(state, "kvknummer", data);
    },
    [SET_RESULT](state, data) {
        console.log("SET_RESULT");
        //state.partner = data || {};
        //state.partner = data;
        Vue.set(state, "partner", data);

    }
    //   [SET_MAILBODY](state, data) {
    //     state.mailbody = data;
    //   }
};
