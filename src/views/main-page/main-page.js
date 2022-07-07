export default {
    name: 'main-page',
    components: {
        recommendBadge: () => import(/* webpackChunkName: "recommend-badge" */ '@/components/recommend-badge'),
    },
};
