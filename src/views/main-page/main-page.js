import { mapActions } from 'vuex';

export default {
    name: 'main-page',
    components: {
        headerBar: () => import(/* webpackChunkName: "header-bar" */ '@/components/header-bar'),
        stockTable: () => import(/* webpackChunkName: "stock-table" */ '@/components/stock-table'),
        searchInput: () => import(/* webpackChunkName: "search-input" */ '@/components/search-input'),

        svgCalendar: () => import(/* webpackChunkName: "svg-calendar" */ '@/assets/svg-calendar.vue'),
        svgSetting: () => import(/* webpackChunkName: "svg-setting" */ '@/assets/svg-setting.vue'),
        svgShare: () => import(/* webpackChunkName: "svg-share" */ '@/assets/svg-share.vue'),
    },
    mounted() {
        this.fetchStocks();
    },
    methods: {
        ...mapActions(['fetchStocks']),
    },
};
