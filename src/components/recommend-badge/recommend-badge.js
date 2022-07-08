export default {
    name: 'recommend-badge',
    props: {
        buy: Number,
        hold: Number,
        sell: Number,
    },
    data() {
        return {
            recommendation: '',
        };
    },
    mounted() {
        const ratio = {
            buy: this.buy,
            hold: this.hold,
            sell: this.sell,
        };

        this.recommendation = Object.keys(ratio).reduce((a, b) => (ratio[a] > ratio[b] ? a : b));
    },
    computed: {
        badgeClasses() {
            return {
                buy: this.recommendation === 'buy',
                hold: this.recommendation === 'hold',
                sell: this.recommendation === 'sell',
            };
        },
    },
};
