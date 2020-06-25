<template>
  <main class="bean__ban/ner">
    <Bean />
    <button>Bean of the day</button>
    <section class="bean_advert">
      <div>Information</div>
      <div>Price</div>
    </section>
  </main>
</template>

<script>
const Bean = () => import("@/components/Bean.vue");
export default {
  components: {
    Bean,
  },
};
</script>

<style lang="scss" scoped>
.bean {
  &__banner {
    background-image: url("/banner_background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;
    width: 100%;
  }
}
</style>
