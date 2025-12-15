<script setup>
import Tabs from './components/Tabs.vue';
import GlobalNotification from './components/GlobalNotification.vue';
</script>

<template>
  <Tabs />

  <!-- Global notification-->
  <GlobalNotification />

  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style>
/* optional global styles */
</style>
