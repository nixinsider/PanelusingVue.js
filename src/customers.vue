<script setup>
import { globalImage } from './store.js';
</script>
<template>
<h1>This is the Costmers page</h1>
<div>
    <img :src="globalImage" alt="Global Image"></img>
</div>
</template>
<style>

</style>