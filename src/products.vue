<script setup>
// Let's use a more realistic array of products
const products = [
  { id: 999, imageUrl: 'https://picsum.photos/600/400?random=1' },
  { id: 1000, imageUrl: 'https://picsum.photos/600/400?random=2' },
  { id: 1001, imageUrl: 'https://picsum.photos/600/400?random=3' }
];
</script>

<template>
  <h1>This is the products page</h1>
  <div>
    <div v-for="product in products" :key="product.id">
      <img :src="product.imageUrl" alt="Product Image">
      
      <router-link 
        :to="{ name: 'ProductDetail', query: { id: product.id, imageUrl: product.imageUrl } }">
        View Details for Product {{ product.id }}
      </router-link>
    </div>
  </div>
</template>
<style scoped>
  div > div {
    margin-bottom: 20px;
  }
  img {
    display: block;
    margin-bottom: 5px;
  }
</style>
