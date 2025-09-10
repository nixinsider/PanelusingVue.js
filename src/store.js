import { ref } from 'vue';
import data from '../data.json';
// import * as customerDataModule from '../customerData.Json';

// Global reactive store for shared state
export const globalImage = ref(null);

// Products data from JSON
export const products = ref(data);
  
// Customers data from JSON
// const customerData = customerDataModule.default;
// export const customers = ref(customerData);
