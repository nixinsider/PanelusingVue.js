<script setup>
import { products } from './store.js';
</script>

<template>
  <!-- <h1>Products</h1> -->
  <div class="products-grid">
    <div v-for="(product, index) in products" :key="index" class="product-card">
      <img :src="product.image.thumbnail" :alt="product.name">
      <h3>{{ product.name }}</h3>
      <p>{{ product.category }}</p>
      <p class="price">${{ product.price.toFixed(2) }}</p>
    </div>
  </div>
</template>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
  text-align: center;
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-card h3 {
  margin: 10px 0;
}

.product-card p {
  margin: 5px 0;
}

.price {
  font-weight: bold;
  color: #007bff;
}
</style>
