<style lang="scss" src="./stock-table.scss" scoped></style>
<script src="./stock-table.js"></script>

<template>
    <table class="stock-table">
        <thead>
            <tr>
                <th>Symbol</th>
                <th>Social</th>
                <th>Price</th>
                <th>Sell</th>
                <th>Hold</th>
                <th>Buy</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="index" v-for="(row, index) in getStocks">
                <td class="symbol">{{ row.symbol }}</td>
                <td>{{ row.dayData[today].social }}</td>
                <td>{{ row.dayData[today].price }}</td>
                <td>{{ row.dayData[today].sell }}</td>
                <td>{{ row.dayData[today].hold }}</td>
                <td>{{ row.dayData[today].buy }}</td>
                <td>test</td>
            </tr>
        </tbody>
    </table>
</template>
