import Vue from 'vue';
import Vuex from 'vuex';

import dice from '@/modules/dice/store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dice,
    },
});
