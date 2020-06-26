<template>
  <section class="home">
    <header>Your Beans Admin Panel</header>
    <nav>
      <router-link to="/admin">Admin Panel</router-link> |
      <router-link to="/admin/beancreate">Create</router-link>
      <router-link to="/admin/createad">Create Ad</router-link>
    </nav>
    <section class="form">
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      beans: [],
    };
  },
  async mounted() {
    // this.beans = await axios.get("https://772547025b40.ngrok.io/api/beans");
  },
};
</script>
