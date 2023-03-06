<template>
  <div class="bajs">
    <h1>{{ product.name }}</h1>
    <p>{{ product.info }}</p>
    <!-- rest of the product details -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    this.fetchProduct(id);
  },
  methods: {
    fetchProduct(id) {
      fetch(`/Product.json?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          this.product = data;
        });
    },
  },
};
</script>
<script setup>
//
</script>

<style scoped>
.bajs {
  color: white;
  background-color: green;
  width: 100%;
  height: 100%;
}
</style>
