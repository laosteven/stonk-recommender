<style lang="scss" src="./main-page.scss" scoped></style>
<script src="./main-page.js"></script>

<template>
    <div class="main-page">
        <header-bar>
            <svg-header class="svg-header" />
            header
        </header-bar>
        <stock-table>
            table
            <stock-row>
                row
            </stock-row>
            <recommend-badge>
                buy | hold | sell
            </recommend-badge>
        </stock-table>
        <search-input>
            <svg-search class="svg-form" />
            search
        </search-input>
        <svg-calendar class="svg-form" />
        <svg-share class="svg-form" />
        <svg-setting class="svg-form" />
    </div>
</template>
