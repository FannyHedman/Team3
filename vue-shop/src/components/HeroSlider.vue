<template>
  <v-app class="wrapper-hero">
    <v-carousel
      cycle
      height="500"
      class="pr-10 pl-10 pt-4"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i" class="hero-image">
        <v-img :src="slide.heroImage" alt="strumpor, kampanj" cover />
        <v-container class="hero-text-btn">
          <v-card class="socks-name">
            <v-card-text>
              <div class="text-h4">
                {{ slide.text }}
              </div>
            </v-card-text>
          </v-card>
          <div class="btn">
            <v-btn >{{ slide.btnAction }}</v-btn>
          </div>
        </v-container>
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
/* .wrapper-hero
{
height:40%;} */

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
/* @media screen and (max-width: 375px){
    .wrapper-hero
{
height:10%;}
} */
</style>
