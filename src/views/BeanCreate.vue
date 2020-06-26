<template>
  <div>
    <header>
      <h1>Complete the form to add it to your bean collection</h1>
    </header>
    <main>
      <BeanCreateForm />
    </main>
  </div>
</template>

<script>
import BeanCreateForm from "@/components/Forms/BeanCreateForm.vue";
export default {
  components: {
    BeanCreateForm,
  },
  mounted() {
    console.log("QDJASIDJASIDD");
  },
};
</script>

<style lang="scss" scoped></style>
