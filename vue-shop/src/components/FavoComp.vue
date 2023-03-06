<template>
  <h1 class="d-flex justify-center mb-6 mt-6">Detta är dina valda favoriter</h1>
  <v-row>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img :src="item.src" aspect-ratio="1" cover class="bg-grey-lighten-2">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" justify="center">
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "public/Team3-images/Large/Herr/cola-men-large.jpg",
        },
        {
          src: "public/Team3-images/Large/Herr/dots-men-large.jpg",
        },
        {
          src: "public/Team3-images/Large/Herr/pink-men-large.jpg",
        },
        {
          src: "public/Team3-images/Large/Herr/roses-men-large.jpg",
        },
        {
          src: "public/Team3-images/Large/Herr/yellow-men-large.jpg",
        },
        {
          src: "public/Team3-images/Large/Herr/yellowlogo-men-large.jpg",
        },
        {
          src: "public/Team3-images/Large/Barn/animals-kids-large.jpg",
        },
        {
          src: "public/Team3-images/Large/Barn/bananas-kids-large.jpg",
        },
        {
          src: "public/Team3-images/Large/Barn/lips-kids-large.jpg",
        },
      ],
    };
  },
};
</script>
