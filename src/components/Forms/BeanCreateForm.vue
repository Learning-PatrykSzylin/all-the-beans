<template>
  <form @submit.prevent="submitForm" :action="postUrl" method="post" id="form">
    <ul>
      <li>
        <input
          id="bean_name"
          v-model="formData.name"
          type="text"
          placeholder="Name of the bean"
        />
      </li>
      <li>
        <input
          id="aroma"
          v-model="formData.aroma"
          type="text"
          placeholder="Aroma of the bean"
        />
      </li>
      <li>
        <input
          id="colour"
          v-model="formData.colour"
          type="text"
          placeholder="Colour"
        />
      </li>
      <li>
        <input
          id="imageurl"
          v-model="formData.imageUrl"
          type="url"
          placeholder="Link to the image"
        />
      </li>
      <li>
        <input
          id="price"
          v-model="formData.price"
          type="number"
          step="0.01"
          placeholder="Price"
        />
      </li>
    </ul>
    <input type="submit" value="Add Bean" />
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      postUrl: "https://localhost:5001/api/beans",
      // Declare form data in order to be reactive
      formData: {
        name: "",
        aroma: "",
        colour: "",
        imageUrl: "",
        price: 0.0,
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://cf3febacfb3d.eu.ngrok.io/api/beans", {
          CostPer100g: parseFloat(this.formData.price),
          Name: this.formData.name,
          Colour: this.formData.colour,
          Aroma: this.formData.aroma,
          ImageUrl: this.formData.imageUrl,
        })
        .then(() => {
          console.log("Posted...");
        })
        .catch((err) => {
          console.log("error... ", err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$hotpink: #ff69b4;

ul {
  li {
    list-style: none;
    text-align: center;
    padding: 15px;
  }
}

input {
  border: none;
  background: #e2e2e2;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;

  &[type="submit"] {
    background: $hotpink;
    color: white;
    box-shadow: 0 0.75rem 0.5rem -0.5rem #000;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: darken($hotpink, 20%);
    }
  }
}
</style>
