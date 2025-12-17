<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="tabs is-centered">
    <ul>
      <RouterLink
        v-for="r in router.getRoutes()"
        :key="r.path"
        :to="r.path"
        custom
        v-slot="{ isActive, href, navigate }"
      >
        <li :class="{ 'is-active': isActive }">
          <a :href="href" @click="navigate">
            {{ r.name }}
          </a>
        </li>
      </RouterLink>
    </ul>
  </div>
</template>
