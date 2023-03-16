<template>
  <v-app class="mt-n10">
    <v-title class="hero-title ml-4 mb-5">Populärt just nu</v-title>

    <v-sheet elevation="8" class="mb-14">
      <v-slide-group v-model="model" class="mb-4 pa-4" show-arrows>
        <v-slide-group-item
          v-for="product in products"
          :key="product.id"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="card ma-6" @click="toggle" height="auto" width="300">
            <div class="container">
              <router-link :to="`product/${product.id}`">
                <v-img :src="product.LargeImage" class="ma-5" /> </router-link
              ><!-- <div class="d-flex align-end justify-end mr-10 mt-3" > -->
              <div class="d-flex align-center justify-center">
                <v-scale-transition>
                  <v-icon
                    v-if="isSelected"
                    color="white"
                    size="60"
                    class="icons"
                  >
                    <v-btn variant="outlined">
                      {{ product.size[0] }}
                    </v-btn>
                    <v-btn variant="outlined">
                      {{ product.size[1] }}
                    </v-btn>

                    <v-btn
                      @click="toCart"
                      class="ma-5"
                      icon="mdi-cart"
                      variant="outlined"
                    >
                    </v-btn>
                  </v-icon>
                </v-scale-transition>
              </div>
              <v-card class="overlay">
                <v-card-text>
                  <v-btn class="mr-3" variant="outlined" icon="mdi-heart">
                  </v-btn>

                  <h3>{{ product.name }}</h3>

                  <p class="text ml-2">{{ product.price }} :-</p>
                </v-card-text>
              </v-card>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-app>
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
  },
};
</script>
<style scoped>

.container {
  height: 100%;
  position: relative;
}


/* .icons {
} */
.hero-title {
  font-size: 2rem;
  padding: 6px;
}
</style>
