export default {
    name: 'header-bar',
    components: {
        svgHeader: () => import(/* webpackChunkName: "svg-header" */ '@/assets/svg-header.vue'),
    },
};
