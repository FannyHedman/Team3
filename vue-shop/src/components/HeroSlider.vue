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
          class="hero-image mt-2"
          :src="slide.heroImage"
          alt="strumpor, kampanj"
        />
        <v-container class="hero-text-btn">
          <v-card class="socks-name">
            <v-card-text>
              <div class="text-h4">
                {{ slide.text }}
              </div>
            </v-card-text>
          </v-card>
          <div class="btn">
            <v-btn @click="onClick">{{ slide.btnAction }}</v-btn>
          </div>
        </v-container>
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

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* .image-col {
  display: flex;
  justify-content: end;
  align-items: end;
} */
</style>
