<!-- <script setup>
import prodData from "";
import ref from "vue";
const products = ref(prodData);
</script> -->

<template>
  <h2>Min Varukorg</h2>
  <v-card color="transparent" max-width="500" class="mx-auto">
    <v-container>
      <v-row flat class="mt-10">
        <v-col cols="12">
          <v-card color="#F6A8B6" theme="light">
            <div class="d-flex ma-1 flex-no-wrap justify-space-between">
              <div>
                <v-icon
                  color="error"
                  class="prepend-icon= mdi mdi-heart-outline"
                ></v-icon>
                <v-card-title
                  v-for="product in products"
                  :key="product.id"
                  class="text-h4"
                >
                  {{ product.name }}</v-card-title
                >

                <v-card-subtitle>Lorem ipsum dolor sit.</v-card-subtitle>
                <v-card-subtitle
                  class="text-subtitle-2 font-weight-black font-weight-bold font-weight-black"
                  >98 pistoler</v-card-subtitle
                >

                <v-card-actions>
                  <v-btn
                    @click="delProd(product.id)"
                    prepend-icon="mdi mdi-delete-circle"
                    class="ms-2"
                    variant="outlined"
                    size="small"
                  >
                    Ta Bort vara
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="mt-4 mr-2" size="125" rounded="0">
                <v-img src="happykiddo.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <div class="d-flex justify-center">
    <v-card-actions>
      <v-btn append-icon="mdi mdi-arrow-left-circle" variant="outlined"
        >Tillbaka</v-btn
      >
    </v-card-actions>
    <v-card-actions>
      <v-btn append-icon="mdi mdi-cart-outline" variant="outlined"
        >Till Kassa</v-btn
      >
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  // methods(id) {
  //   delProd{
  //     this.products = this.products.filter(product => product.id != id)
  //   }
  // }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");
h2 {
  color: #87cefa;
  font-family: "Cutive Mono", monospace;
  letter-spacing: 0.1rem;
  font-size: 28px;
  text-align: center;
  margin-top: 20px;
}
h2::first-letter {
  color: #f3edb0;
}

img {
  width: 100px;

  margin-bottom: 20px;
}
</style>
