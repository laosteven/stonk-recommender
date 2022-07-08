<style lang="scss" src="./main-page.scss" scoped></style>
<script src="./main-page.js"></script>

<template>
    <div class="main-page">
        <header-bar class="header" />
        <div class="content">
            <stock-table />
        </div>
        <div class="form">
            <search-input />
            <svg-calendar class="svg-form" />
            <svg-share class="svg-form" />
            <svg-setting class="svg-form" />
        </div>
    </div>
</template>
