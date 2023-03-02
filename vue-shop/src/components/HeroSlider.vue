<template>
  <v-app class="wrapper-hero">
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img :src="slide.heroImage" alt="strumpor, kampanj" />
        <v-card class="overlay">
          <v-card-text>
            <div class="text-h4">
              {{ slide.text }}
            </div>
          </v-card-text>
        </v-card>

        <div class="btn">
          <v-btn @click="onClick">{{ slide.btnAction }}</v-btn>
        </div>

      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          heroImage: "./public/img/Hero-socks1.jpg",
          text: "HappyPink ",
          btnAction: "Like",
        },
        {
          heroImage: "./public/img/Hero-socks2.jpg",
          text: "HappyBanana",
          btnAction: "Like",
        },
        {
          heroImage: "./public/img/Hero-socks3.jpg",
          text: "HappyPrick",
          btnAction: "Like",
        },
      ],
      methods: {
        onClick() {},
      },
    };
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 10vh;
  left: 45vw;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  box-shadow: 10px 5px 5px #000000;
  background-color: #87cefa;
}
.btn {
  position: absolute;
  top: 20vh;
  left: 50vw;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  box-shadow: 5px 5px 5px;
}
</style>
