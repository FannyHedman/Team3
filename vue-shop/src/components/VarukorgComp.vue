<template>
  <v-app>
    <v-container>
      <h2>Shopping cart</h2>
      <v-list>
        <v-list-item v-for="(item, index) in cartItems" :key="index">
          <v-list-item-title
            >{{ item.name }} ({{ item.quantity }})</v-list-item-title
          >
          <v-list-item-subtitle>{{ item.price }} SEK</v-list-item-subtitle>
          <v-btn color="red" small @click="removeItem(index)">Remove</v-btn>
        </v-list-item>
      </v-list>
      <h3>Total amount: {{ totalAmount }} SEK</h3>
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

