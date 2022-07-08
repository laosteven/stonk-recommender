import { mapState, mapActions } from 'vuex';

export default {
    name: 'main-page',
    components: {
        headerBar: () => import(/* webpackChunkName: "header-bar" */ '@/components/header-bar'),
        stockTable: () => import(/* webpackChunkName: "stock-table" */ '@/components/stock-table'),
        stockRow: () => import(/* webpackChunkName: "stock-row" */ '@/components/stock-row'),
        recommendBadge: () => import(/* webpackChunkName: "recommend-badge" */ '@/components/recommend-badge'),
        searchInput: () => import(/* webpackChunkName: "search-input" */ '@/components/search-input'),

        svgHeader: () => import(/* webpackChunkName: "svg-header" */ '@/assets/svg-header.vue'),
        svgCalendar: () => import(/* webpackChunkName: "svg-calendar" */ '@/assets/svg-calendar.vue'),
        svgSearch: () => import(/* webpackChunkName: "svg-search" */ '@/assets/svg-search.vue'),
        svgSetting: () => import(/* webpackChunkName: "svg-setting" */ '@/assets/svg-setting.vue'),
        svgShare: () => import(/* webpackChunkName: "svg-share" */ '@/assets/svg-share.vue'),
    },
    mounted() {
        this.fetchStocks();
    },
    computed: {
        ...mapState(['getStocks']),
    },
    methods: {
        ...mapActions(['fetchStocks']),
    },
};
