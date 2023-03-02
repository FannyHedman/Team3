<template>
  <v-app>
    <v-sheet class="mx-auto" elevation="8" max-width="100%">
      <v-slide-group
        v-model="model"
        class="pa-4"
        selected-class="bg-success"
        show-arrows
      >
        <v-slide-group-item
          v-for="(card, i) in cards"
          :key="i"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <!-- <v-img :src="card.image" alt="strumpor, kampanj" /> -->
          <v-card
            color="grey-lighten-1"
            :class="['ma-4', selectedClass]"
            height="400"
            width="300"
            @click="toggle"
          >
            <v-btn
              :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"
            ></v-btn>

            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                  v-if="isSelected"
                  color="white"
                  size="48"
                  icon="mdi-close-circle-outline"
                ></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    // cards: [
    //   {
    //     image: "/public/img/Hero-socks1.jpg",
    //     text: Hej,
    //   },
    //   {
    //     image: "/public/img/Hero-socks2.jpg",
    //     text: Hej,
    //   },
    //   {
    //     image: "/public/img/Hero-socks1.jpg",
    //     text: Hej,
    //   },
    //   {
    //     image: "/public/img/Hero-socks1.jpg",
    //     text: Hej,
    //   },
    // ],
    model: null,
  }),
};
</script>
