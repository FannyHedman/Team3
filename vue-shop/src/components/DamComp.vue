<template>
  <v-app>
    <v-container class="mt-10">
      <h1 class="mt-3 mb-5">DAM</h1>
      <v-row>
        <v-col
          xl="3"
          lg="4"
          xs="1"
          sm="4"
          md="4"
          cols="4"
          v-for="product in products.filter(
            product => product.Gender === 'Dam'
          )"
          :key="product.Gender"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              max-width="400"
              width="auto"
              height="auto"
              class=""
              v-bind="props"
            >
              <v-img :src="product.LargeImage" width="auto" height="auto"
                ><v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-white v-card--reveal"
                    style="height: 15"
                  >
                    <v-btn class="ml-3 mt-5 mb-5 mr-2" variant="outlined">{{
                      product.size[0]
                    }}</v-btn>
                    <v-btn class="mt-5 mb-5" variant="outlined">{{
                      product.size[1]
                    }}</v-btn
                    ><v-spacer></v-spacer>
                    <v-btn
                      class="mt-3 mb-3 mr-4"
                      variant="outlined"
                      icon="mdi-shopping"
                    ></v-btn></div></v-expand-transition
              ></v-img>
              <v-row justify="start">
                <router-link :to="`product/${product.id}`" class="r-link">
                  <v-card-item class="mt-5 ml-3 mb-5">
                    <h4>{{ product.name }}</h4>
                    <v-spacer></v-spacer>
                    <p>{{ product.price }} SEK</p></v-card-item
                  ></router-link
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
                </v-card-actions></v-row
              >
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      favorites: JSON.parse(localStorage.getItem("favorites") || "[]")
    };
  },
  mounted() {
    axios.get("/Product.json").then(response => {
      this.products = response.data;
    });
  },
  methods: {
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
    }
  }
};
</script>

<style>
.r-link {
  text-decoration: none;
  color: white;
}
</style>
