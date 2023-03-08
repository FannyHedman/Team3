<template>
  <h2>VARUKORG</h2>
  <v-card color="transparent" max-width="900" class="mx-auto">
    <v-container>
      <v-row flat class="mt-10 mb-5" no-gutters>
        <v-col cols="12">
          <div v-for="product in products" :key="product.id">
            <v-card
              class="my-1"
              theme="light"
              style="
                background-image: linear-gradient(
                  to right,
                  #fa709a 0%,
                  #fee140 100%
                );
              "
            >
              <div class="d-flex my-3 mx-3">
                <div class="d-flex flex-wrap">
                  <v-btn
                    size="x-small"
                    color="error"
                    class="mx-1 elevation-5"
                    variant="outlined"
                    icon="mdi-heart"
                  ></v-btn>
                  <div class="d-flex flex-column justify-center">
                    <v-card-title class="text-h4 mx-10">
                      {{ product.name }}</v-card-title
                    >

                    <v-card-title class="text-h7 font-weight-medium mx-11">
                      Storlek: {{ product.size }}</v-card-title
                    >
                    <v-card-title class="text-h7 font-weight-medium mx-11">
                      Pris: {{ product.price }}kr</v-card-title
                    >
                  </div>
                  <v-card-actions>
                    <v-btn
                      @click.stop="delProd(product.id)"
                      class="ms-2 mx-12 elevation-2"
                      color="white"
                      size="small"
                    >
                      <v-icon>mdi mdi-delete-circle</v-icon>
                      Ta Bort vara
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar class="mt-1 ml-16" size="275" rounded="0">
                  <v-img
                    :src="product.LargeImage"
                    width="400"
                    height="400"
                  ></v-img>
                </v-avatar>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <div class="d-flex justify-center mb-5">
    <v-card-actions>
      <v-btn to="/" color="#F3EDB0" variant="outlined">
        <v-icon class="mx-2" small left>mdi-arrow-left-circle</v-icon>
        Tillbaka</v-btn
      >
    </v-card-actions>
    <v-card-actions>
      <v-btn color="#87cefa" variant="outlined">
        <v-icon class="mx-2" small right>mdi-cart-outline</v-icon>
        Till Kassa</v-btn
      >
    </v-card-actions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: {
        required: true,
        price: "",
        name: "",
        size: "",

        type: Object,
      },
    };
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
    },
  },
  delProd(id) {
    this.products = this.products.filter((product) => product.id !== id);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rampart+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap");

h2 {
  color: #87cefa;
  /* font-family: "Cutive Mono", monospace; */
  /* font-family: "Rampart One", cursive; */

  font-family: "Rubik Vinyl", cursive;
  letter-spacing: 4rem;
  font-size: 38px;
  text-align: center;
  margin-top: 20px;
}
h2::first-letter {
  color: #f6a8b6;
}
.testcolor {
  background-color: black;
}
</style>
