import { mapGetters } from 'vuex';

export default {
    name: 'stock-table',
    data() {
        return {
            today: '',
            data: {},
        };
    },
    created() {
        this.today = new Date().toISOString().slice(0, 10);
    },
    computed: {
        ...mapGetters(['getStocks']),
    },
};
