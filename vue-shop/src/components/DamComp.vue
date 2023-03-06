<template>
  <v-app>
    <h1>Detta är damsidan</h1>
    <v-container class="bg-black">
      <v-row>
        <v-col cols="4" v-for="product in products" :key="product.Gender">
          <div v-if="product.Gender === 'Dam'">
            <v-card width="auto" height="auto" class="mx-auto pb-5"
              ><v-img
                :src="product.LargeImage"
                width="auto"
                height="auto"
              ></v-img>
              <v-row>
              <v-col cols="">
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
              ></v-col></v-row>
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
};
</script>
