import { reactive } from "vue";

export const notificationBus = reactive({
  message: "",
  type: "is-info",
  trigger: false,

  show(message, type = "is-info") {
    this.message = message;
    this.type = type;
    this.trigger = true;

    setTimeout(() => {
      this.trigger = false;
    }, 50);
  }
});
