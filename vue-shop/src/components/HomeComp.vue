<template>
  <v-sheet class="mx-auto" elevation="8" max-width="auto">
    <v-slide-group v-model="model" class="pa-4 mb-4" show-arrows>
      <v-slide-group-item v-for="product in products" :key="product.id">
        <v-card class="ma-6" height="auto" width="300">
          <div class="container">
            <v-img :src="product.SmallImage" cover />
            <v-card class="overlay">
              <v-card-text>
                <v-btn
                  class="mr-3"
                  @click="OnClick(product.id)"
                  variant="outlined"
                  icon="mdi-heart"
                >
                </v-btn>

                <v-title>{{ product.name }}</v-title>

                <v-subtitle class="text ml-2"
                  >{{ product.price }} :-</v-subtitle
                >

                <v-btn class="mt-2 ml-15" @click="toProduct"> info </v-btn>
                <v-btn @click="toCart" class="mt-2 ml-10" icon>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      products: {
        required: true,
        type: Object,
      },
    };
  },

  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch("Product.json");
        const result = await res.json();
        this.products = result;
      } catch (error) {
        console.error(error);
        this.errorMessage = "Products failed to fetch, please try again!";
      }
    },
    toCart() {
      this.$router.push({ name: "Varukorg" });
    },
    toProduct() {
      this.$router.push({ name: "Product" });
    },
  },
};
</script>
<style scoped>
.container {
  background-color: black;
  height: 100%;
}

.overlay {
  background-color: black;
}
</style>
