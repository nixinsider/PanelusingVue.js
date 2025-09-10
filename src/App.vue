<script setup>
// This starter template is using Vue 3 <script setup> SFCs
import Nav from './navbar.vue';
import Sidebar from './sidebar.vue';
import mainContent from './mainContent.vue';
</script>

<template>
  <Nav />
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div class="col-3 bg-light">
          <Sidebar />
      </div>
      <div class="col-9  pt-3">
          <mainContent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.row {
  height: 100%;
  margin: 0;
}

.col-3, .col-9 {
  padding: 0;
  margin: 0;
  height: 100%;
}

.col-9 {
  overflow-y: auto;
}
</style>
