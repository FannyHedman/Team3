<template>
  <div class="text-h5 pa-4">Populärt just nu</div>
  <v-app>
    <v-sheet class="mx-auto" elevation="8" max-width="100%">
      <v-slide-group v-model="model" class="pa-4" show-arrows>
        <v-slide-group-item
          v-for="product in products"
          :key="product.id"
          v-slot="{ isSelected, toggle }"
        >
          <!-- kolla vad isselected är om det gör skillnad -->
          <v-card
            color="grey-lighten-1"
            :class="['ma-4']"
            height="400"
            width="300"
            @click="toggle"
          >
            <v-img :src="articles.image" alt="strumpor, kampanj" />

            <v-btn
              :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"
            ></v-btn>

            <!-- <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                  v-if="isSelected"
                  color="white"
                  size="48"
                  icon="mdi-close-circle-outline"
                ></v-icon>

              </v-scale-transition>
            </div> -->
            <v-card class="info">
              <v-card-text>
                <div class="text">
                  {{ product.price }}
                </div>
              </v-card-text>
            </v-card>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-app>
</template>

<script>
export default {
  props: {
    articles: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      products: [],
    };
  },

  created() {
    fetch("Product.json")
      .then((response) => response.json())
      .then((result) => {
        this.products = result;
      });
    //   async fetchData() {
    //     try {
    //       const response = await fetch("Product.json");
    //       const result = await response.json();
    //       this.products = result;
    //     } catch (error) {
    //       console.log(error);
    //       this.errorMessage =
    //         "Produkterna kunde inte laddas, var vänlig testa igen";
    //     }
    //   },
  },
};
</script>
<style>
.info {
  /* display: flex;
    justify-content: left;
    align-items: left; */
  background-color: grey;
}
</style>
