import stockService from '../services/stock-service';

const stockStore = {
    state: {
        stocks: {},
    },
    actions: {
        fetchStocks: ({ commit }) => {
            try {
                stockService.fetchStockService()
                    .then((response) => {
                        commit('setStocks', response.data);
                    });
            } catch (error) {
                commit('setStocks', {});
            }
        },
    },
    mutations: {
        setStocks: (state, data) => {
            state.stocks = data;
        },
    },
    getters: {
        getStocks: (state) => state.stocks,
    },
};

export { stockStore };
export default stockStore;
