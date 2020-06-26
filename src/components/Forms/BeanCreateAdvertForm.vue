<template>
  <form
    @submit.prevent="submitForm"
    ref="form"
    action="postUrl"
    method="post"
    id="form"
  >
    <h1>Selected date {{ date }}</h1>

    <div v-if="selectedBean !== -1">
      <h1>Selected Bean:</h1>
      <h2>{{ GetSelectedBean }}</h2>
    </div>
    <ul>
      <li>
        <label for="bean">Select bean to advertise</label>
        <select v-model="selectedBeanId" id="bean" name="bean">
          <option
            v-for="bean in availableBeans"
            :key="bean.beanId"
            :value="bean.beanId"
            >{{ bean.name }}</option
          >
        </select>
      </li>
      <li>
        <date-picker v-model="date"></date-picker>
      </li>
    </ul>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      date: null,
      availableBeans: [],
      selectedBeanId: -1,
    };
  },
  computed: {
    GetSelectedBean() {
      return this.availableBeans.find((x) => x.beanId == this.selectedBeanId);
    },
  },
  async mounted() {
    const response = await axios.get("https://772547025b40.ngrok.io/api/beans");

    this.availableBeans = response.data;

    console.log(this.availableBeans);
  },
};
</script>

<style lang="scss" scoped></style>
