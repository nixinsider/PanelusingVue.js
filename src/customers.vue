<script setup>
import { ref } from 'vue'
import customersData from '../customerData.Json?raw'
const customers = ref(JSON.parse(customersData))
</script>
<template>
  <!-- <h1>Customers</h1> -->
  <div class="customers-grid">
    <div v-for="(customers, index) in customers" :key="index" class="customer-card">
      <h3>{{ customers.name }}</h3>
      <p class="email">{{ customers.email }}</p>
      <p>{{ customers.phone }}</p>
      <p>{{ customers.address }}</p>
    </div>
  </div>
</template>
<style scoped>
.customers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.customer-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
  text-align: center;
}

.customer-card h3 {
  margin: 10px 0;
}

.email {
  margin: 5px 0;
  color: #ff0000;
}
</style>