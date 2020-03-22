import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    profile: {},

}

const mutations = {
    setProfile(state, data) {
        state.setProfile = data
    },
}

const actions = {};

export default new Vuex.Store({
    state,
    mutations,
    actions
});