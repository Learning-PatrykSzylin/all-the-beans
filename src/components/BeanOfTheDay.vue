<template>
  <div class="bean__item-container" :class="{ show: isShow }">
    <section>
      <h1>
        <font-awesome-icon class="icon--inline" :icon="['fas', 'star']" />
        Bean of the day
      </h1>
    </section>

    <section class="bean__item">
      <header>
        <img :src="bean.image" alt="" />
      </header>
      <section>
        <h2 style="margin: 0;">{{ bean.name }}</h2>
        <ul class="bean__info">
          <li>
            <span>Aroma</span>
            {{ bean.aroma }}
          </li>
          <li>
            <span>Colour</span>
            {{ bean.colour }}
          </li>
        </ul>
        <h3>
          <span> £{{ bean.costPer100g }}</span> per 100g
        </h3>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bean: {
        costPer100g: 4.99,
        name: "Black Beans",
        aroma: "Nice smell",
        colour: "Black",
        image: "/blackbeans.jpg",
      },
      hideTimeout: 4000, //in ms
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    isShow(newVal, oldVal) {
      if (newVal) {
        // Send event to parent
        setTimeout(() => {
          this.$emit("closeAdvert");
        }, this.hideTimeout);
      }
    },
  },
  methods: {
    getCostPerGrams(grams) {
      return this.costPer100g * grams;
    },
  },
};
</script>

<style lang="scss" scoped>
$bg: #e2e2e2;
.bean {
  &__info {
    text-align: left;
    list-style: none;
    padding: 0;

    li {
      position: relative;
    }
  }

  &__item {
    display: flex;
    width: 450px;
    justify-content: space-around;

    &-container {
      position: fixed;
      bottom: 0;
      padding: 1rem;
      background: $bg;
      border-radius: 15px 15px 0 0;
      position: fixed;
      left: 50%;
      transform: translate(-50%, 482px);
      transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);

      h1 {
        text-transform: uppercase;
        letter-spacing: 2px;
        padding-bottom: 1rem;
        text-align: center;
      }
    }

    img {
      width: 150px;
      height: 150px;
    }

    h2 {
      text-transform: uppercase;
    }
  }
}

.show {
  transform: translate(-50%, 0);
}
</style>
