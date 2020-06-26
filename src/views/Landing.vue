<template>
  <main class="landing">
    <section class="container">
      <header class="is-half is-pulled-right">
        <h1>
          Premium Beans
        </h1>
        <p>Welcome, here you can buy the most premium beans.</p>
        <h3 v-if="beanOfTheDay !== null">
          You can also check our
          <span class="landing__today-bean" @click="showBeanOfTheDay()"
            >bean of the day</span
          >
        </h3>
      </header>
    </section>
    <BeanOfTheDay
      :bean="beanOfTheDay"
      :isShow="showBean"
      v-on:closeAdvert="closeAdvert"
    />
  </main>
</template>

<script>
import axios from "axios";
const BeanOfTheDay = () => import("@/components/BeanOfTheDay.vue");

export default {
  components: {
    BeanOfTheDay,
  },
  data() {
    return {
      showBean: false,
      beanOfTheDay: null,
    };
  },
  methods: {
    showBeanOfTheDay() {
      if (this.beanOfTheDay != null) this.showBean = !this.showBean;
    },
    closeAdvert() {
      this.showBean = false;
    },
  },
  async mounted() {
    const today = new Date();
    this.beanOfTheDay = null;

    const res = await axios.get(
      "https://cf3febacfb3d.eu.ngrok.io/api/beanadvert",
      { params: { date: today } }
    );

    const beanOfToday = res.data;
    if (beanOfToday != null) this.beanOfTheDay = beanOfToday;
  },
};
</script>

<style lang="scss" scoped>
.landing {
  background-image: url("/banner.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: fixed;
  width: 100%;
  height: 100%;

  &__today-bean {
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      font-size: 1.25em;
      color: red;
    }
  }
}
</style>
