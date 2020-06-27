<template>
  <div>
    <header>
      <h1>Fill in the form with relevant bean information</h1>
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
};
</script>

<style lang="scss" scoped></style>
