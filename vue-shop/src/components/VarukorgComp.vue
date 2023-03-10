<template>
  <v-container>
    <h2 class="text-center ma-6 head-text">SHOPPING CART</h2>
    <v-row>
      <v-col class="" sm="8" md="5" offset-md="2" lg="12">
        <div>
          <v-row v-for="(item, index) in cartItems" :key="index">
            <v-card
              width="800"
              class="mb=5 ma=4 align-center"
              style="
                background-image: linear-gradient(
                  to right,
                  #fa709a 0%,
                  #fee140 100%
                );
              "
            >
              <div class="d-flex">
                <div>
                  <v-avatar class="mt-6 ml-5" size="175" rounded="0">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                    ></v-img>
                  </v-avatar>
                </div>
                <div class="d-flex flex-column justify-center">
                  <v-card-title class="pt-0 product-text">
                    {{ item.name }} {{ item.quantity }} st
                  </v-card-title>
                  <v-card-title class="pt-0 subtitle-text">
                    {{ item.price }} SEK
                  </v-card-title>
                  <v-btn
                    width="80px"
                    class="ma-5 d-flex"
                    color="black"
                    large
                    @click="removeItem(index)"
                    >Remove</v-btn
                  >
                </div>
              </div>
            </v-card>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <h3 class="d-flex justify-center mt-4 amount-text">
      Total amount: {{ totalAmount }} SEK
    </h3>
    <div class="d-flex justify-space-between">
      <v-card-actions>
        <v-btn to="/" color="#F3EDB0" variant="outlined">
          <v-icon class="mx-2" small left>mdi-arrow-left-circle</v-icon>
          Go Back
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn color="#F3EDB0" variant="outlined">
          <v-icon class="mx-2" small right>mdi-cart-outline</v-icon>
          CHECKOUT</v-btn
        >
      </v-card-actions>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return { name: "", price: "", products: [], cartItems: [] };
  },
  created() {
    axios
      .get("/Product.json")
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    if (localStorage.getItem("cartItems")) {
      this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    }
  },
  computed: {
    totalAmount() {
      return this.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    }
  },
  methods: {
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
          quantity: 1
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barrio&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gruppo&display=swap");
.head-text {
  font-family: "Barrio", cursive;
  letter-spacing: 2rem;
  background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);
  font-size: 2em;
  background-size: 9%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
.product-text {
  font-size: 25px;
  color: rgb(0, 0, 0);
  font-weight: bolder;
  font-family: "Gruppo", cursive;
}

.subtitle-text {
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  letter-spacing: 0.3rem;
  font-family: "Gruppo", cursive;
}
.amount-text {
  font-size: 22px;
  color: white;
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-family: "Gruppo", cursive;
  font-size: 1.8em;
  background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
</style>
