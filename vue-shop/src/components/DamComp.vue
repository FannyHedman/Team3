<template>
  <h1>Detta är damsidan</h1>
  <v-container class="bg-black">
    <v-col cols="auto" class="mt-8 mb-8">
      <v-row>
        <v-col cols="4" v-for="product in products" :key="product">
          <v-card width="auto" height="auto" class="mx-auto pb-5"
            ><v-img
              src="../../public/Team3-images/Large/Barn/unicorn-kids-large.jpg"
              width="auto"
              height="auto"
            ></v-img>
            <v-row justify="start">
              <v-card-item class="mt-5 ml-3">
                <v-title>{{ product.name }}</v-title
                ><v-spacer></v-spacer>
                <v-subtitle>{{ product.price }} SEK</v-subtitle></v-card-item
              ><v-spacer></v-spacer
              ><v-card-actions>
                <v-btn
                  class="mr-5 mt-5"
                  variant="outlined"
                  icon="mdi-heart"
                ></v-btn></v-card-actions
            ></v-row>
          </v-card>
        </v-col> </v-row
    ></v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: "",
      products: "",
    };
  },
  created() {
    fetch("/Product.json/")
      .then((response) => response.json())
      .then((result) => {
        this.products = result;
      });
  },
};
</script>
