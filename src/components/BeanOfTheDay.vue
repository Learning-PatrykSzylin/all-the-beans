<template>
  <div class="bean__item-container" :class="{ show: isShow }">
    <section>
      <h1 class="advert__title">
        <font-awesome-icon class="icon--inline" :icon="['fas', 'star']" />
        Bean of the day
      </h1>
    </section>

    <section class="bean__item" v-if="bean != null">
      <header>
        <img :src="bean.imageUrl" alt="" />
      </header>
      <section class="bean__info">
        <h3 class="bean__title">
          {{ bean.name }} <span>Colour: {{ bean.colour }}</span>
        </h3>
        <ul>
          <li>
            {{ bean.aroma }}
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
    // Declare for reactivity
    bean: {
      costPer100g: 0,
      name: "",
      aroma: "",
      colour: "",
      imageUrl: "",
    },
  },
  data() {
    return {
      hideTimeout: 6000, //in ms
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    isShow(newVal, oldVal) {
      if (newVal) {
        // Send event to the calling component, to close the ad after specified timeout
        setTimeout(() => {
          this.$emit("closeAdvert");
        }, this.hideTimeout);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.advert {
  &__title {
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-bottom: 1rem;
    text-align: center;

    svg {
      color: hotpink;
    }
  }
}

.bean {
  &__title {
    margin: 0;

    span {
      font-size: 0.75em;
      display: block;
    }
  }

  &__info {
    text-align: left;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
      list-style: none;
      padding: 0;

      li {
        position: relative;
      }
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
      background: #e2e2e2;
      border-radius: 15px 15px 0 0;
      position: fixed;
      left: 50%;
      transform: translate(-50%, 482px);
      transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 5px;
    }
  }
}

.show {
  transform: translate(-50%, 0);
}
</style>
