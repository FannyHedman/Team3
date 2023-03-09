<template>
  <v-container class="banner">
    <v-row>
      <v-col class="img-container" cols="12" md="7">
        
          <v-img
            v-for="product in getData($route.params.id)"
            :key="product.id"
            :src="product.LargeImage"
          ></v-img>
      </v-col>
      <v-col class="product-detail" cols="12" md="5">
        <v-card class="p-overlay">
          <v-card-title
            class="text-h4"
            v-for="product in getData($route.params.id)"
            :key="product.id"
          >
            {{ product.name }}
          </v-card-title>
          <v-card-subtitle
            class="price-container"
            v-for="product in getData($route.params.id)"
            :key="product.id"
          >
            <div class="price">{{ product.price }} SEK</div>
            <v-rating class="ml-2" :value="3" :readonly="true"></v-rating>
          </v-card-subtitle>
          <v-select label="Antal" :items="quantity" outlined></v-select>
          <v-select label="Size" :items="sizes" outlined item-text="size"></v-select>

          <v-btn color="#026CAD" class="mt-4">LÄGG TILL I KUNDKORG</v-btn>
          <v-btn icon color="#F6A8B6"><v-icon>mdi-heart</v-icon></v-btn>
          <v-card class="p-underlay">
            <v-card-text>
              <div class="text-subtitle-1">
                Free deliveries to Sweden within 1-3 working days.
                <br />
                * Free climate-compensated deliveries
              </div>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="product-banner">
      <v-col cols="12" class="pb">
        <span> Produktbeskriving</span>
      </v-col>
    </v-row>
    <v-row class="product-description">
      <v-col cols="12" class="pd" md="8" lg="6">
        <h3 class="font-weight-bold">Lorem ipsum</h3>
        <v-card-text
          v-for="product in getData($route.params.id)"
          :key="product.id"
          class="p-info"
          >{{ product.info }}</v-card-text
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      items: [],
      quantity: ["1", "2"],
      sizes: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get("/Product.json")
        .then((response) => {
          this.products = response.data;
          const selectedProduct = this.getData(this.$route.params.id)[0];
          this.sizes = selectedProduct.size;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData(id) {
      let data = this.products;
      return data.filter((item) => {
        return item.id == id;
      });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
