const state = {
    rollResult: {
        each: [],
        total: null,
    },
    rollHistory: [],
};

const getters = {
    getRollResult: () => state.rollResult,
    getRollHistory: () => state.rollHistory,
};

const mutations = {
    setResult(store, result) {
        state.rollResult = result;
        state.rollHistory.unshift(result);
    },
};

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
};
