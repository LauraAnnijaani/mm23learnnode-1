<script setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import { onMounted } from 'vue';

const HOME_COORDS = [51.505, -0.09];
const HOME_ZOOM = 15;

let map = null;

onMounted(() => {
  map = L.map('map').setView(HOME_COORDS, HOME_ZOOM);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker(HOME_COORDS)
    .addTo(map)
    .bindPopup('🏠 Home')
    .openPopup();
});

function goTo(coords, zoom) {
  if (map) {
    map.flyTo(coords, zoom);
  }
}
</script>

<template>
  <div class="section">
    <h1 class="title">Maps</h1>

    <button
      class="button is-primary mb-4"
      @click="goTo(HOME_COORDS, HOME_ZOOM)"
    >
      Go to Home
    </button>

    <div id="map"></div>
  </div>
</template>

<style scoped>
#map {
  height: 90vh;
  border-radius: 8px;
}
</style>
