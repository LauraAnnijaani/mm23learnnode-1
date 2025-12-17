<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const HOME_COORDS = [51.505, -0.09];

const map = ref(null);

onMounted(() => {
  map.value = L.map("map").setView(HOME_COORDS, 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map.value);

  L.marker(HOME_COORDS)
    .addTo(map.value)
    .bindPopup("🏠 Home")
    .openPopup();
});

function goHome() {
  if (map.value) {
    map.value.setView(HOME_COORDS, 13);
  }
}

defineExpose({ goHome });
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  height: 400px;
  width: 100%;
  border-radius: 8px;
}
</style>
