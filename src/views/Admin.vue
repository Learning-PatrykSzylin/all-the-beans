<template>
  <section class="admin">
    <ToastMessage />
    <header>
      <h1>Welcome to your Bean's admin panel</h1>
      <p>Please choose what you'd like to do using the following links</p>
    </header>
    <nav>
      <router-link to="/admin/beancreate"
        >Add a new bean to the store</router-link
      >
      <router-link to="/admin/createad"
        >Create an advert for a specific day</router-link
      >
    </nav>
    <section class="admin__content">
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
const ToastMessage = () => import("@/components/ToastMessage.vue");
export default {
  name: "Home",
  components: {
    ToastMessage,
  },
};
</script>

<style lang="scss" scoped>
a {
  padding: 15px;
}

.admin {
  margin-top: 2rem;

  &__content {
    max-width: 1152px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
  }
}
</style>
