<template>
  <section class="home">
    <header>Your Beans Admin Panel</header>
    <section>
      <form
        @submit.prevent="submitForm"
        ref="form"
        action="https://localhost:5001/api/beans"
        method="post"
        id="form"
      >
        <ul>
          <li>
            <label for="bean_name">Name of the bean</label>
            <input
              id="bean_name"
              v-model="formData.bean_name"
              type="text"
              placeholder="e.g. Black Beans"
            />
          </li>
          <li>
            <label for="aroma">Aroma of the bean</label>
            <input
              id="aroma"
              v-model="formData.aroma"
              type="text"
              placeholder="e.g. Nice"
            />
          </li>
          <li>
            <label for="colour">Bean's colour</label>
            <input
              id="colour"
              v-model="formData.colour"
              type="text"
              placeholder="e.g. Black"
            />
          </li>
          <li>
            <label for="imageurl">Link to bean image</label>
            <input
              id="imageurl"
              v-model="formData.imageUrl"
              type="text"
              placeholder="https://cdn.com"
            />
          </li>
          <li>
            <label for="price">Bean's price per 100g</label>
            <input
              id="price"
              v-model="formData.price"
              type="text"
              placeholder="Name of the bean"
            />
          </li>
        </ul>
        <input type="submit" value="Submit" />
      </form>
    </section>
    <section>
      <div v-for="bean in beans" :key="bean.bean_name">
        <h1>{{ bean }}</h1>
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      beans: [],
      formData: {
        bean_name: "",
        aroma: "",
        colour: "",
        imageUrl: "",
        price: 0.0,
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.formData);

      // var s = axios
      //   .post("https://772547025b40.ngrok.io/api/beans", {
      //     CostPer100g: 4.99,
      //     Name: "Purple Beans",
      //     Colour: "Purple",
      //     Aroma: "nice",
      //     ImageUrl: "http:",
      //   })
      //   .then(() => {
      //     console.log("Posted...");
      //   })
      //   .catch((err) => {
      //     console.log("error... ", err);
      //   });

      // console.log(s);
    },
  },
  async mounted() {
    this.beans = await axios.get("https://772547025b40.ngrok.io/api/beans");
  },
};
</script>
