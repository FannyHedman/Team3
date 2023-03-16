<template>
  <v-app>
    <v-container>
      <h2 class="mb-6">Shopping cart</h2>
      <v-row>
        <v-col v-for="(item, index) in cartItems" :key="index" cols="12" md="6">
          <v-card class="pa-4">
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-text>
              <div class="d-flex justify-space-between align-center">
                <div>Antal: {{ item.quantity }}st</div>
                <div>{{ item.price }} Kr/st</div>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="removeItem(index)" color="red" icon size="small">
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <h3 class="mt-6">Totalt: {{ totalAmount }} SEK</h3>
    </v-container>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      price: "",
      socks: [],
      cartItems: [],
    };
  },
  created() {
    axios
      .get("/Product.json")
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
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
    },
  },
  methods: {
    addToCart(sock) {
      const existingItem = this.cartItems.find(
        (item) => item.name === sock.name
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({
          name: sock.name,
          price: sock.price,
          quantity: 1,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
  },
};
</script>
