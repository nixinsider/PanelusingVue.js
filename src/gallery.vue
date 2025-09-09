<script setup>
import { ref, onMounted } from 'vue';
const photos = ref([]);
onMounted(() => {
  fetch('https://dummyjson.com/image/400x200/282828/ffffff?fontFamily=pacifico&text=I+am+a+pacifico+font')
  .then(response => response.blob()) 
  .then(blob => {
    console.log('Fetched image blob:', blob);
    photos.value.push(blob);
  })
})
</script>
<template>
    <div class="container my-5">
        <div class="media-container">
            <div class="row g-4">
                <div class="col-12 col-md-6">
                    <div class="media-item">
                        <img src="https://picsum.photos/600/400?random=1" alt="Image 1">
                        <div class="media-details">
                            <h5>Landscape Image</h5>
                            <p>This is a beautiful landscape photograph taken in the mountains. It captures the serene
                                beauty of nature with vibrant colors.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="media-item">
                        <img src="https://picsum.photos/600/400?random=2" alt="Image 2">
                        <div class="media-details">
                            <h5>Cityscape Image</h5>
                            <p>A stunning view of a city skyline at dusk, showcasing urban architecture and lights.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="media-item">
                        <video controls>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div class="media-details">
                            <h5>Nature Video</h5>
                            <p>A short clip showcasing the beauty of a flowing river surrounded by lush greenery.</p>
                        </div>
                    </div>
                </div>
                <!-- Video 2 -->
                <div class="col-12 col-md-6">
                    <div class="media-item">
                        <video controls>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div class="media-details">
                            <h5>Wildlife Video</h5>
                            <p>Watch wildlife in their natural habitat, featuring animals in a forest setting.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.media-container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.media-item img,
.media-item video {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.media-details {
    padding: 15px 0;
}
</style>
