<template>
  <div
    v-if="visible"
    class="notification"
    :class="type"
  >
    <button class="delete" @click="close"></button>
    <slot>{{ message }}</slot>
  </div>
</template>

<script>
export default {
  name: "Notification",

  props: {
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "is-info", // Bulma types
    },
    duration: {
      type: Number,
      default: 0, // 0 = manual close
    },
  },

  data() {
    return {
      visible: true,
    };
  },

  mounted() {
    if (this.duration > 0) {
      setTimeout(() => {
        this.close();
      }, this.duration);
    }
  },

  methods: {
    close() {
      this.visible = false;
      this.$emit("closed");
    },
  },
};
</script>

<style scoped>
.notification {
  margin: 1rem;
}
</style>
