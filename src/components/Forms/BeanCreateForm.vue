<template>
  <section>
    <nav class="crud-nav">
      <button @click="removeAllBeans">Remove All Beans</button>
    </nav>
    <form @submit.prevent="submitForm" method="post" id="form">
      <ul>
        <li>
          <input
            id="bean_name"
            v-model="formData.name"
            type="text"
            placeholder="Name of the bean"
            required
          />
        </li>
        <li>
          <input
            id="aroma"
            v-model="formData.aroma"
            type="text"
            placeholder="Aroma of the bean"
            required
          />
        </li>
        <li>
          <input
            id="colour"
            v-model="formData.colour"
            type="text"
            placeholder="Colour"
            required
          />
        </li>
        <li>
          <input
            id="imageurl"
            v-model="formData.imageUrl"
            type="url"
            placeholder="Link to the image"
            required
          />
        </li>
        <li>
          <input
            id="price"
            v-model="formData.price"
            type="number"
            step="0.01"
            placeholder="Price"
            required
          />
        </li>
      </ul>
      <input type="submit" value="Add Bean" />
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
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
        .post(`${process.env.VUE_APP_API_ROOT_ENDPOINT}/beans`, {
          CostPer100g: parseFloat(this.formData.price),
          Name: this.formData.name,
          Colour: this.formData.colour,
          Aroma: this.formData.aroma,
          ImageUrl: this.formData.imageUrl,
        })
        .then(() => {
          this.$root.$emit("open-toast", {
            title: "Added new bean",
            message: `New bean has been added to the database.`,
          });
        })
        .catch((err) => {
          console.log("error... ", err);
        });
    },
    removeAllBeans() {
      axios
        .delete(`${process.env.VUE_APP_API_ROOT_ENDPOINT}/beans`, {
          crossdomain: true,
        })
        .then(() => {
          this.$root.$emit("open-toast", {
            title: "Deleted beans database",
            message: `Your bean database has been successfully cleaned.`,
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  li {
    list-style: none;
    text-align: center;
    padding: 15px;
  }
}

.crud-nav {
  padding: 1rem;
}

input {
  border: none;
  background: #e2e2e2;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;

  &[type="submit"] {
    background: hotpink;
    color: white;
    box-shadow: 0 0.75rem 0.5rem -0.5rem #000;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: darken(hotpink, 20%);
    }
  }
}
</style>
