<script setup>
import gallery from './gallery.vue';
import products from './products.vue';
import customers from './customers.vue';
import reports from './reports.vue';
import {useTabs} from './composeAbles/useTabs';
const {activeTab, setActiveTab} = useTabs();
</script>

<template>
  <div class="dynamic-content">
    <div class="content-box">
      <div class="tab-container">
        <button class="tab-button" :class="{ active: activeTab === 'overview' }" @click="setActiveTab('overview')" data-tab="overview" ref="overview">Orders</button>
        <button class="tab-button" :class="{ active: activeTab === 'gallery' }" @click="setActiveTab('gallery')" data-tab="gallery">Gallery</button>
        <button class="tab-button" :class="{ active: activeTab === 'products' }" @click="setActiveTab('products')" data-tab="presentations">Products</button>
        <button class="tab-button" :class="{ active: activeTab === 'customers' }" @click="setActiveTab('customers')" data-tab="documents">Customers</button>
        <button class="tab-button" :class="{ active: activeTab === 'reports' }" @click="setActiveTab('reports')" data-tab="media">Reports</button>
      </div>
      <div class="tab-content " v-if="activeTab === 'overview'">
        <div class="p-0 text-center bg-body-tertiary rounded-3" bis_skin_checked="1"> <svg class="bi mt-0 mb-0"
            style="color: var(--bs-indigo);" width="100" height="100" aria-hidden="true">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <h1 class="text-body-emphasis">Create Your Orders here</h1>
          <p class="col-lg-8 mx-auto fs-5 text-muted">
            This is a custom featuring to create an order for the user, some longer text that
            wraps
            early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
          </p>
          <div class="d-inline-flex gap-2 mb-5" bis_skin_checked="1"> <button
              class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
              Create Your order
              <svg class="bi ms-2" width="24" height="24" aria-hidden="true">
                <use xlink:href="#arrow-right-short"></use>
              </svg>
            </button> <button class="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
              Secondary order
            </button> </div>
        </div>
      </div>
      <div class="Gallery" v-if="activeTab === 'gallery'">
        <gallery  />
      </div>
      <div class="Products" v-if="activeTab === 'products'">
        <products />
      </div>
      <div v-if="activeTab === 'customers'">
        <customers />
      </div>
      <div v-if="activeTab === 'reports'">
        <reports />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dynamic-content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(248, 249, 250);
}
.Gallery{
  overflow: auto;
}
.Products{
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.content-box {
  border: 1px solid #ddd;
  height: 70vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 0.5em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tab-container {
  height: 10%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0;
  gap: 0;
  width: 100%;
}

/* Tab Button Styling */
.tab-button {
  border: none;
  padding: 0.5em;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  box-sizing: border-box;
  font-size: 1em;
  transition: background-color 0.3s;
}

.tab-button.active {
  background-color: blue;
  color: white;
}

/* Tab Content Styling */
.content-box>.tab-content {
  flex-grow: 1;
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding: 1em;
  background-color: #fafafa;
}
</style>
