const state = {
    result: {
        each: [0],
        total: 0,
    },
    history: [],
};

const getters = {
    getResult: () => state.result,
};

const mutations = {
    setResult(store, result) {
        state.history.push(state.result);
        state.result = result;
    },
};

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
};
