<template>
  <v-app class="wrapper-hero">
    <v-carousel
      cycle
      height="550"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img
          width="800"
          class="hero-image mt-1"
          :src="slide.heroImage"
          alt="strumpor, kampanj"
        />
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
  <!-- <v-container class="wrapper">
    <v-col>
      <v-col v-for="n in 4" :key="n" class="image-col" cols="2">
        <v-img
          :src="`https://picsum.photos/500/300?image=`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          cover
        >
        </v-img>
      </v-col>
    </v-col>
  </v-container> -->
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          heroImage: "/public/Team3-images/HeroImage/HeroPink.jpg",
          text: "HappyPink ",
          btnAction: "Like",
        },
        {
          heroImage: "/public/Team3-images/HeroImage/HeroBanana.jpg",
          text: "HappyBanana",
          btnAction: "Like",
        },
        {
          heroImage: "/public/Team3-images/HeroImage/HeroPrick.jpg",
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
  left: 30vw;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  box-shadow: 10px 5px 5px #000000;
  background-color: #87cefa;
}
.btn {
  position: absolute;
  top: 20vh;
  left: 30vw;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  box-shadow: 5px 5px 5px;
}
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-col {
  display: flex;
  justify-content: end;
  align-items: end;
}
</style>
