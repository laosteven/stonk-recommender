<style lang="scss" src="./search-input.scss" scoped></style>
<script src="./search-input.js"></script>

<template>
    <div class="search-container">
        <svg-search class="svg-search" />
        <input
            class="search-input"
            type="search"
            aria-label="search"
            id="search"
            placeholder="Search..."
        />
    </div>
</template>
