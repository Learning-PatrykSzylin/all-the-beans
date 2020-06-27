<template>
  <main class="landing">
    <section class="container">
      <header class="is-half is-pulled-right">
        <h1>
          Premium Beans
        </h1>
        <p>Welcome, here you can buy the most premium beans.</p>
        <p class="landing__ad-message" v-if="beanOfTheDay !== null">
          You can also check our
          <span class="landing__show-bean" @click="showBeanOfTheDay()"
            >bean of the day</span
          >
        </p>
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
    let apiRes = null;

    try {
      apiRes = await axios.get(
        `${process.env.VUE_APP_API_ROOT_ENDPOINT}/beanadvert`,
        {
          params: { date: today },
        }
      );
    } catch (err) {
      if (err.response.data.msg.includes("No advert found")) {
        console.log("There is no advert for today!");
      }
    } finally {
      console.log("api response", apiRes);
      if (apiRes != null) {
        this.beanOfTheDay = apiRes.data;
      }
    }
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

  &__ad-message {
    font-size: 1.25em;
    margin-top: 4rem;
  }

  &__show-bean {
    cursor: pointer;
    background: hotpink;
    color: white;
    box-shadow: 0 0.75rem 0.5rem -0.5rem #000;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 4rem;

    &:hover {
      background: darken(hotpink, 20%);
    }

    &:hover {
      font-size: 1.25em;
    }
  }
}
</style>
