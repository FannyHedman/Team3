<template>
  <h2 class="text-h3">VARUKORG</h2>
  <v-card color="transparent" max-width="500" class="mx-auto">
    <v-container>
      <v-row flat class="mt-10" no-gutters>
        <v-col cols="12">
          <v-card color="#F6A8B6" theme="light">
            <div class="d-flex ma-1 flex-no-wrap justify-space-between">
              <div class="d-flex flex-wrap justify-space-between">
                <v-btn
                  size="x-small"
                  color="error"
                  class="mx-1 elevation-5"
                  variant="outlined"
                  icon="mdi-heart"
                ></v-btn>

                <v-card-title class="text-h4 mx-10"> Strumpor</v-card-title>

                <v-card-subtitle class="text-h6 font-weight-bold mx-4"
                  >Precious strumpa till kidsen</v-card-subtitle
                >
                <v-card-subtitle class="text-h7 font-weight-medium mx-4">
                  98 kr</v-card-subtitle
                >

                <v-card-actions>
                  <v-btn
                    class="ms-2 mx-12 elevation-4"
                    color="black"
                    size="small"
                  >
                    <v-icon>mdi mdi-delete-circle</v-icon>
                    Ta Bort vara
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="mt-1 mr-2" size="125" rounded="0">
                <v-img src="../assets/logo.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <div class="d-flex justify-center">
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");
h2 {
  color: #87cefa;
  font-family: "Cutive Mono", monospace;
  letter-spacing: 0.8rem;
  font-size: 28px;
  text-align: center;
  margin-top: 20px;
}
h2::first-letter {
  color: #f6a8b6;
}

img {
  width: 100px;

  margin-bottom: 20px;
}
</style>
