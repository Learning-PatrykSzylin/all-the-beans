<template>
  <div class="bean__item">
    <header>
      {{ bean.name }}
      <img :src="bean.image" alt="" />
    </header>
    <section>
      {{ bean.costPer100g }}
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bean: {
        costPer100g: 4.99,
        name: "Black Beans",
        aroma: "",
        colour: "Black",
        image: "/blackbeans.jpg",
      },
    };
  },
  methods: {
    getCostPerGrams(grams) {
      return this.costPer100g * grams;
    },
  },
};
</script>

<style lang="scss" scoped>
.bean {
  &__item {
    display: flex;
    img {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
