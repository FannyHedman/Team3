<template>
  <v-app>
    <v-container class="mt-10">
      <h1 class="mt-3 mb-5">BARN</h1>
      <v-row>
        <v-col
          xl="3"
          lg="4"
          xs="1"
          sm="4"
          md="4"
          cols="4"
          v-for="product in products"
          :key="product.Gender"
        >
          <div v-if="product.Gender === 'Barn'">
<<<<<<< HEAD
            <v-img
                :src="product.LargeImage"
                width="300"
                height="400"
              ></v-img>
            <v-card max-width="300" width="auto" height="auto" class="px-auto pb-5"
              ><div>
              <v-row justify="start">
                <v-card-item class="mt-5 ml-3">
                  <v-title>{{ product.name }}</v-title
                  ><v-spacer></v-spacer>
                  <v-subtitle>{{ product.price }} SEK</v-subtitle></v-card-item
                ><v-spacer></v-spacer
                ><v-card-actions>
                  <v-btn
                    class="add"
                    variant="outlined"
                    icon="mdi-heart"
                  ></v-btn>
                  </v-card-actions
              ></v-row></div>
            </v-card>
=======
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                max-width="400"
                width="auto"
                height="auto"
                class="pb-5"
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
                  <v-card-item class="mt-5 ml-3">
                    <v-title>{{ product.name }}</v-title
                    ><v-spacer></v-spacer>
                    <v-subtitle
                      >{{ product.price }} SEK</v-subtitle
                    ></v-card-item
                  ><v-spacer></v-spacer
                  ><v-card-actions>
                    <v-btn
                      :to="{ name: 'Product' }"
                      title="Till produkt"
                      value="Info"
                      exact
                      class="mr-5 mt-5"
                      >INFO</v-btn
                    ><v-btn
                      class="mr-5 mt-5"
                      variant="outlined"
                      icon="mdi-heart"
                    ></v-btn> </v-card-actions
                ></v-row>
              </v-card>
            </v-hover>
>>>>>>> 392554e0f164072d51b70cf7208abef35bb0af25
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: "",
      products: {
        required: true,
        type: Object,
      },
    };
  },
  created() {
    fetch("/Product.json/")
      .then((response) => response.json())
      .then((result) => {
        this.products = result;
      });
  },
  props: ['product'],
  computed: {
    product_total() {
      return 56
    }
  } 
};
</script>
