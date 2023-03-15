<template>
  <v-app>
    <p class="hero-title ml-4 mb-5">Populärt just nu</p>

    <v-sheet elevation="8" class="mb-14">
      <v-slide-group v-model="model" class="mb-4 pa-4" show-arrows>
        <!-- Bör loopa product in filteredProducts, men ändrar jag till det just nu renderas ingenting. -->
        <v-slide-group-item
          v-for="product in filteredProducts"
          :key="product.id"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="card ma-6" @click="toggle" height="auto" width="300">
            <div class="container">
              <router-link :to="`product/${product.id}`">
                <v-img :src="product.LargeImage" class="ma-5" />
              </router-link>
              <div class="d-flex align-center justify-center">
                <v-scale-transition>
                  <v-icon
                    v-if="isSelected"
                    color="white"
                    size="60"
                    class="icons"
                  >
                    <v-btn variant="outlined"> {{ product.size[0] }} </v-btn>
                    <v-btn variant="outlined"> {{ product.size[1] }} </v-btn>
                    <v-btn
                      @click="addToCart(product)"
                      class="ma-5"
                      icon="mdi-cart"
                      variant="outlined"
                    >
                    </v-btn>
                  </v-icon>
                </v-scale-transition>
              </div>
              <v-row justify="start">
                <v-card-item class="mt-5 ml-3 mb-5">
                  <h4>{{ product.name }}</h4>
                  <v-spacer></v-spacer>
                  <p>{{ product.price }} SEK</p></v-card-item
                ><v-spacer></v-spacer
                ><v-card-actions>
                  <v-btn
                    class="mr-5 mt-5 mb-5"
                    icon
                    small
                    @click="addToFavorites(product)"
                  >
                    <!-- <v-icon>{{
                      isFavorite(product) ? "mdi-heart" : "mdi-heart-outline"
                    }}</v-icon> -->
                  </v-btn>
                </v-card-actions>
              </v-row>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-app>
</template>
<script>
export default {
  props: { searchValue: "" },
  data() {
    return {
      model: null,
      products: [],
      favorites: JSON.parse(localStorage.getItem("favorites") || "[]")
    };
  },
  computed: {
    filteredProducts() {
      if (!this.searchValue) {
        return this.products;
      } else {
        //filter skapar en ny array med som evalueras till true i callbacken "product"
        const productsArray = this.products.filter(product => {
          const searchTerm = this.searchValue.toLowerCase().trim();
          const productName = product.name.toLowerCase();
          // om söktermen inkluderas i produktnamnet så evaluares det till true och renderar ut produkten.
          return productName.includes(searchTerm);
        });
        return productsArray;
      }
    }
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
    }
  },
  addToFavorites(product) {
    let index = this.favorites.findIndex(item => item.id === product.id);
    if (index === -1) {
      this.favorites.push(product);
    } else {
      this.favorites.splice(index, 1);
    }
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  },
  isFavorite(product) {
    return this.favorites.some(favorite => favorite.id === product.id);
  },
  addToCart(product) {
    const existingItem = this.cartItems.find(
      item => item.name === product.name
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({
        name: product.name,
        price: product.price,
        sizes: product.size,
        quantity: 1
      });
    }
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }
};
</script>
<style scoped>
.card {
  background-color: grey;
}
.container {
  height: 100%;
  position: relative;
}
.hero-title {
  font-size: 2rem;
  padding: 6px;
  margin-top: 10px;
}
</style>
