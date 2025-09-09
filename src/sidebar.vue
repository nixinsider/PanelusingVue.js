<script setup>
import { useTabs } from './composeAbles/useTabs';
const { activeTab, setActiveTab } = useTabs();
</script>

<template>
    <div class="sidebar">
        <!-- Main Navigation -->
        <ul class="sidebar-nav">
            <li class="nav-item">
                <a href="#" class="nav-link" :class="{ active: activeTab === 'overview' }"
                    @click.prevent="setActiveTab('overview')">
                    <i class="bi bi-file-text nav-icon"></i>
                    Orders
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" :class="{ active: activeTab === 'gallery' }"
                    @click.prevent="setActiveTab('gallery')">
                    <i class="bi bi-cart nav-icon"></i>
                    Gallery
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" :class="{ active: activeTab === 'products' }"
                    @click.prevent="setActiveTab('products')">
                    <i class="bi bi-people nav-icon"></i>
                    Products
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" :class="{ active: activeTab === 'customers' }"
                    @click.prevent="setActiveTab('customers')">
                    <i class="bi bi-graph-up nav-icon"></i>
                    Customers
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" :class="{ active: activeTab === 'reports' }"
                    @click.prevent="setActiveTab('reports')">
                    <i class="bi bi-puzzle nav-icon"></i>
                    Reports
                </a>
            </li>
        </ul>

        <!-- Saved Reports Section -->
        <div class="section-header">
            Saved Reports
            <div class="add-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">+
            </div>
        </div>
        <ul class="sidebar-nav">
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="bi bi-file-earmark-text nav-icon"></i>
                    Current month
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="bi bi-file-earmark-text nav-icon"></i>
                    Last quarter
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="bi bi-file-earmark-text nav-icon"></i>
                    Social engagement
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="bi bi-file-earmark-text nav-icon"></i>
                    Year-end sale
                </a>
            </li>
        </ul>

        <!-- Bottom Navigation -->
        <div class="bottom-nav">
            <ul class="sidebar-nav">
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="bi bi-gear nav-icon"></i>
                        Settings
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="bi bi-box-arrow-right nav-icon"></i>
                        Sign out
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow-lg">
                <form id="reportForm">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h5 class="modal-title" id="reportModalLabel">Report an Issue</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <!-- Modal Body with Form -->
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="productName" class="form-label">Product Name</label>
                            <input type="text" class="form-control" id="productName" placeholder="e.g., Wireless Mouse"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="issueType" class="form-label">Type of Issue</label>
                            <select class="form-select" id="issueType" required>
                                <option value="" selected disabled>Select an issue...</option>
                                <option value="defective">Defective Product</option>
                                <option value="shipping">Shipping Damage</option>
                                <option value="missing_parts">Missing Parts</option>
                                <option value="wrong_item">Wrong Item Received</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="4"
                                placeholder="Please describe the issue in detail..." required></textarea>
                        </div>
                    </div>

                    <!-- Modal Footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary">Submit Report</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
    color: #ecf0f1;
    overflow-y: auto;
    margin-top: 50px;
}

/* Custom scrollbar styles */
.sidebar::-webkit-scrollbar {
    width: 8px;
}

.sidebar::-webkit-scrollbar-track {
    background: #1a2733;
}

.sidebar::-webkit-scrollbar-thumb {
    background-color: #34495e;
    border-radius: 4px;
    border: 2px solid #1a2733;
}

.sidebar::-webkit-scrollbar-thumb:hover {
    background-color: #5dade2;
}

.sidebar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-item {
    border-bottom: 1px solid #34495e;
}

.nav-link {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    color: #7fb3d3;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    background-color: #34495e;
    color: #5dade2;
}

.nav-link.active {
    background-color: transparent;
    color: white;
}

.nav-icon {
    margin-right: 12px;
    font-size: 18px;
    width: 20px;
    text-align: center;
}

.section-header {
    padding: 20px 20px 10px 20px;
    font-size: 12px;
    font-weight: 600;
    color: #95a5a6;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 20px;
    position: relative;
}

.section-header .add-btn {
    position: absolute;
    right: 20px;
    top: 18px;
    width: 20px;
    height: 20px;
    border: 1px solid #95a5a6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #95a5a6;
    cursor: pointer;
    transition: all 0.3s ease;
}

.section-header .add-btn:hover {
    background-color: #95a5a6;
    color: #2c3e50;
}

.bottom-nav {
    /* position: absolute; */
    bottom: 0;
    width: 100%;
    border-top: 1px solid #34495e;
}
</style>
