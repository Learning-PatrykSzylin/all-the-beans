<template>
  <div class="toast" :class="{ show: isVisible }">
    <h1 class="toast__content toast__title">{{ title }}</h1>
    <p class="toast__content toast__message">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      message: "",
      isVisible: false,
      hideTimeout: 6000,
    };
  },
  created() {
    this.$root.$on("open-toast", ({ message, title }) => {
      this.title = title;
      this.message = message;
      this.isVisible = true;
    });
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    isVisible(newVal, oldVal) {
      // If visiblity is set to true, then create a timeout to auto hide the notification
      if (newVal) {
        setTimeout(() => {
          this.isVisible = false;
        }, this.hideTimeout);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  right: 0;
  top: 4rem;
  background: #50c878;
  border-radius: 5px 0 0 5px;
  padding: 1rem;
  width: 250px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  transform: translateX(282px);
  transition: transform 0.2s ease;

  &.show {
    transform: translateX(0);
  }

  &__content {
    background: lighten(#50c878, 20%);
    border-radius: 10px;
  }

  &__title {
    padding: 0.5rem;
  }

  &__message {
    padding: 1rem;
  }
}
</style>
