import Vue from 'vue';
import Vuex from 'vuex';

import { stockStore } from './stock-store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stockStore,
    },
});
