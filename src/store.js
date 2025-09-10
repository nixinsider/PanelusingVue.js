import { ref } from 'vue';
import data from '../data.json';

// Global reactive store for shared state
export const globalImage = ref(null);

// Products data from JSON
export const products = ref(data);
  