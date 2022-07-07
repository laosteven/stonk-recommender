export default {
    name: 'main-page',
    components: {
        headerBar: () => import(/* webpackChunkName: "header-bar" */ '@/components/header-bar'),
        stockTable: () => import(/* webpackChunkName: "stock-table" */ '@/components/stock-table'),
        stockRow: () => import(/* webpackChunkName: "stock-row" */ '@/components/stock-row'),
        recommendBadge: () => import(/* webpackChunkName: "recommend-badge" */ '@/components/recommend-badge'),
        searchInput: () => import(/* webpackChunkName: "search-input" */ '@/components/search-input'),
    },
};
