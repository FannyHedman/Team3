<template>
  <v-app class="wrapper-hero">
    <v-carousel
      cycle
      class="pr-10 pl-10 pt-4"
      height="650"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="slide in slides.slice(18, 21)"
        :key="slide.id"
        class="hero-image"
      >
        <v-img :src="slide.heroImage" alt="strumpor, kampanj"  />
        <v-container class="hero-text-btn">
          <v-card class="socks-name">
            <v-card-text>
              <div class="text-h4">
                {{ slide.name }}
              </div>
            </v-card-text>
          </v-card>
          <div class="btn">
            <v-btn @click="addToFavorites(product)">{{
              slide.btnAction
            }}</v-btn>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      slides: []
    };
  },
  mounted() {
    axios.get("/Product.json").then(response => {
      this.slides = response.data;
    });
  },
  methods: {
      addToFavorites(product) {
        let index = this.favorites.findIndex((item) => item.id === product.id);
        if (index === -1) {
          this.favorites.push(product);
        } else {
          this.favorites.splice(index, 1);
        }
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
      },

      isFavorite(product) {
        return this.favorites.some((favorite) => favorite.id === product.id);
      },
}};
</script>

<style scoped>

.hero-text-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 20%;
  width: 100%;
  height: 40%;
  padding: 20px;
}
.socks-name {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 5px 5px #000000;
  background-color: #87cefa;
}
.btn {
  position: relative;
  box-shadow: 5px 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
}

</style>
