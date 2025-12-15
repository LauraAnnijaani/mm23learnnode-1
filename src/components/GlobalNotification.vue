<template>
  <Notification
    v-if="notificationBus.trigger"
    :message="notificationBus.message"
    :type="notificationBus.type"
    :duration="3000"
  />
</template>

<script setup>
import Notification from "./Notification.vue";
import { notificationBus } from "@/utils/notificationBus";
</script>
