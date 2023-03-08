<template>
  <v-app>
    <h1>Detta är barnsidan</h1>
    <v-container class="bg-black">
      <v-row>
        <v-col cols="4" v-for="product in products" :key="product.Gender">
          <div v-if="product.Gender === 'Barn'">
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
