<template>
  <h2>Min Varukorg</h2>
  <v-card color="transparent" max-width="500" class="mx-auto">
    <!-- <v-system-bar
      color="pink darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-app-bar
      dark
      color="pink"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>My Music</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-container>
      <v-row flat class="mt-10">
        <v-col cols="12">
          <v-card color="#F6A8B6" theme="light">
            <div class="d-flex ma-1 flex-no-wrap justify-space-between">
              <div>
                <v-icon
                  color="error"
                  class="prepend-icon= mdi mdi-heart-outline"
                ></v-icon>
                <v-card-title class="text-h5"> Strumpa </v-card-title>

                <v-card-subtitle>Najs Stuff till foten</v-card-subtitle>
                <v-card-subtitle
                  class="text-subtitle-2 font-weight-black font-weight-bold font-weight-black"
                  >98 pistoler</v-card-subtitle
                >

                <v-card-actions>
                  <v-btn
                    prepend-icon="mdi mdi-delete-circle"
                    class="ms-2"
                    variant="outlined"
                    size="small"
                  >
                    Ta Bort vara
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="mt-4 mr-2" size="125" rounded="0">
                <v-img src="happykiddo.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <div class="d-flex justify-center">
    <v-card-actions>
      <v-btn append-icon="mdi mdi-arrow-left-circle" variant="outlined"
        >Tillbaka</v-btn
      >
    </v-card-actions>
    <v-card-actions>
      <v-btn append-icon="mdi mdi-cart-outline" variant="outlined"
        >Till Kassa</v-btn
      >
    </v-card-actions>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");
h2 {
  color: #87cefa;
  font-family: "Cutive Mono", monospace;
  letter-spacing: 0.1rem;
  font-size: 28px;
  text-align: center;
  margin-top: 20px;
}
h2::first-letter {
  color: #f3edb0;
}

img {
  width: 100px;
  margin-right: 320px;
  margin-bottom: 20px;
}
</style>
