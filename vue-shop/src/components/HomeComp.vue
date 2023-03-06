<template>
  <v-sheet class="mx-auto" elevation="8" max-width="auto">
    <v-slide-group v-model="model" class="pa-4 mb-4" show-arrows>
      <v-slide-group-item
        v-for="product in products"
        :key="product.id"
        v-slot="{ toggle }"
      >
        <v-card class="ma-6" height="400" width="300" @click="toggle">
          <div class="container">
            <v-img :src="product.SmallImage"
            cover>
              <v-card class="overlay">
                <v-card-text>
                  <v-btn
                    class="mr-10"
                    variant="outlined"
                    icon="mdi-heart"
                  ></v-btn>
                  <div class="text">{{ product.price }} :-</div>
                </v-card-text>
              </v-card>
            </v-img>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      model: null,
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
.overlay {
  background-color: black;
}
.text {
  border-radius: 25px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 45px;
  margin-left: 80px;
  margin-top: -45px;
}
</style>
