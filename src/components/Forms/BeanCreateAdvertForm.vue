<template>
  <form @submit.prevent="AddAdvert" method="post" id="advert-form">
    <section class="body">
      <div class="bean-picker">
        <h1>Pick a bean to advertise</h1>
        <ul class="body__content">
          <li
            v-for="(bean, idx) in availableBeans"
            :key="bean.beanId"
            :data-beanIdx="idx"
            @click="SelectBean(idx)"
          >
            <img :src="bean.imageUrl" alt="" />
            <h4>{{ bean.name }}</h4>
          </li>
        </ul>
      </div>

      <div class="date-picker">
        <h1>Pick a date of advertisment</h1>
        <date-picker
          v-model="date"
          :inline="true"
          :calendar-class="'body__content'"
        ></date-picker>
      </div>
    </section>

    <input type="submit" value="Add Advert" />
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
  methods: {
    // eslint-disable-next-line no-unused-vars
    SelectBean(idx) {
      const beans = document.querySelectorAll("[data-beanIdx]");

      // Reset selection before selecting specific element
      beans.forEach((bean) => {
        bean.classList.remove("selected");
      });

      // NodeList prototype does not have .find() function
      // So we are using ES6 spread operator to copy the contents of the beans into an array
      // That way we can make use of find() function
      // The copy will be deep copy since our data is not nested
      const selectedBean = [...beans].find(
        (x) => x.attributes["data-beanidx"].value == idx
      );

      selectedBean.classList.add("selected");
      this.selectedBeanId = this.availableBeans[idx].beanId;
    },
    AddAdvert() {
      axios
        .post(`${process.env.VUE_APP_API_ROOT_ENDPOINT}/beanadvert`, {
          beanId: this.selectedBeanId,
          date: this.date,
        })
        .then(() => {
          console.log("Added advert");
        });
    },
  },
  async mounted() {
    let response = null;

    try {
      // We want to load available beans from our database for admin's selection
      response = await axios.get(
        `${process.env.VUE_APP_API_ROOT_ENDPOINT}/beans`
      );
    } catch (err) {
      // Would post to real database for storing logs
      console.log("[BeanCreateAdvertForm] - Error... ", err);
    } finally {
      console.log("DATA");

      if (response != null && response != undefined)
        this.availableBeans = response.data;
    }
  },
};
</script>

<style lang="scss">
$hotpink: #ff69b4;
.body {
  display: flex;

  &__content {
    margin-top: 2rem;
  }
}

#advert-form {
  input[type="submit"] {
    background: $hotpink;
    color: white;
    box-shadow: 0 0.75rem 0.5rem -0.5rem #000;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 4rem;

    &:hover {
      background: darken($hotpink, 20%);
    }
  }

  .date-picker {
    flex-basis: 50%;
  }

  .bean-picker {
    flex-basis: 50%;
  }

  .vdp-datepicker__calendar {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      list-style: none;
      text-align: center;
      padding: 15px;
      cursor: pointer;
      transition: all 0.2s ease;

      img {
        width: 50px;
        height: 50px;
        transition: all 0.2s ease;
      }

      &:hover {
        color: hotpink;
      }
      &.selected {
        color: hotpink;
        img {
          width: 75px;
          height: 75px;
        }
      }
    }
  }
}
</style>
