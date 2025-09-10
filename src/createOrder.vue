<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { globalImage } from './store.js';

// Props for controlling modal visibility from parent
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
});

// Emits for communicating with parent
const emit = defineEmits(['close']);

// Reactive state for the image preview URL and the file object
const imagePreviewUrl = ref(null);
const imageFile = ref(null);

// Reactive state to provide visual feedback when dragging over the drop zone
const isDragging = ref(false);

// Function to close the modal
const closeModal = () => {
  emit('close');
  // Reset form state when closing
  imagePreviewUrl.value = null;
  imageFile.value = null;
  // In a real app, you would reset other form fields here too.
};
// This function processes the selected file
const handleFile = (file) => {
  // Ensure a file was selected and it's an image
  if (file && file.type.startsWith('image/')) {
    imageFile.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreviewUrl.value = e.target.result;
      globalImage.value = e.target.result; // Update global store with image preview URL
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please select a valid image file.');
  }
};

// Triggered when a user selects a file via the file input
const onFileSelect = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    handleFile(files[0]);
  }
};

// Triggered when a file is dropped onto the drop zone
const onDrop = (event) => {
  // Prevent the browser's default behavior (opening the file)
  event.preventDefault();
  isDragging.value = false;
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    handleFile(files[0]);
  }
};

const removeImage = () => {
    imagePreviewUrl.value = null;
    imageFile.value = null;
    globalImage.value = null; // Reset global image
};
const image = imagePreviewUrl;
// --- Form Submission ---
const handleSubmit = () => {
    if (!imageFile.value) {
        alert('Please upload an image for the order.');
        return;
    }
    const orderData = {
        productName: "Sample Product", // Replace with actual form input value
        quantity: 1, // Replace with actual form input value
        image: imageFile.value // The actual file object
    };

    // For this example, we'll just log the data to the console
    console.log('Order Submitted:', orderData);
    alert('Order created successfully!');
    
    closeModal();
};
// import { useRouter } from 'vue-router';

// const router = useRouter();
// const imagePreviewUrl = 'https://path.to/your/image.jpg';
// const image = imagePreviewUrl;

// function shareImage() {
//   router.push({
//     name: 'ImageViewer',
//     query: { imageUrl: image } 
//   });
// }
</script>

<template>
  <!-- The Modal container -->
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <!-- Modal Header -->
      <div class="modal-header">
        <h2>Create a New Order</h2>
        <button @click="closeModal" class="close-btn">&times;</button>
      </div>
      
      <!-- Modal Body -->
      <div class="modal-body">
        <form @submit.prevent="handleSubmit">
          <!-- Other form fields would go here -->
          <div class="form-group">
            <label for="productName">Product Name</label>
            <input type="text" id="productName" placeholder="Enter product name">
          </div>
          
          <div class="form-group">
            <label>Product Image</label>
            
            <!-- Image Drop Zone -->
            <div 
              class="drop-zone"
              :class="{ 'drag-over': isDragging }"
              @dragover.prevent="isDragging = true"
              @dragleave.prevent="isDragging = false"
              @dragenter.prevent="isDragging = true"
              @drop="onDrop"
            >
              <!-- Hidden file input triggered by the label click -->
              <input type="file" id="fileInput" @change="onFileSelect" accept="image/*" class="file-input">
              
              <!-- Content shown when no image is selected -->
              <div v-if="!imagePreviewUrl" class="drop-zone-prompt">
                <label for="fileInput">
                  <p><strong>Drag & drop an image here</strong></p>
                  <p>or <span style="cursor: pointer;" >click to browse</span></p>
                </label>
              </div>

              <!-- Image Preview -->
              <div v-else class="image-preview">
                <img :src="imagePreviewUrl" alt="Product preview">
                <button @click="removeImage" type="button" class="remove-image-btn">&times;</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- <div class="image-preview">
        <img :src="imagePreviewUrl" alt="Product preview">
      </div> -->
      <!-- Modal Footer -->
      <div class="modal-footer">
        <button @click="closeModal" class="btn-secondary">Cancel</button>
        <button @click="handleSubmit" class="btn-primary">Submit Order</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 40px;
  text-align: center;
}

.open-modal-btn {
  padding: 12px 24px;
  font-size: 16px;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.open-modal-btn:hover {
  background-color: #0b5ed7;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e9ecef;
}

.modal-header h2 {
  margin: 0;
  font-size: 20px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #6c757d;
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #495057;
}

.form-group input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 16px;
}

.drop-zone {
  border: 2px dashed #adb5bd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;
  position: relative;
}

.drop-zone.drag-over {
  border-color: #0d6efd;
  background-color: #f0f8ff;
}

.file-input {
  display: none;
}

.drop-zone-prompt p {
  margin: 0;
  color: #6c757d;
}

.drop-zone-prompt span {
  color: #0d6efd;
  font-weight: 600;
  text-decoration: underline;
}

.image-preview {
  position: relative;
  max-height: 200px;
}

.image-preview img {
  max-width: 100%;
  max-height: 200px;
  border-radius: 6px;
}

.remove-image-btn {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    font-size: 18px;
    line-height: 28px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #e9ecef;
}

.modal-footer button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-primary {
  background-color: #0d6efd;
  color: white;
}
</style>
