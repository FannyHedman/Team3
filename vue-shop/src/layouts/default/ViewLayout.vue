<template>
  <v-responsive class="d-flex align-center">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <v-list nav>
          <v-list-item
            :to="{ name: 'Home' }"
            prepend-icon="mdi-home"
            title="Home"
            value="home"
            exact
          >
          </v-list-item>
          <v-list-item
            :to="{ name: 'Dam' }"
            prepend-icon="mdi-gender-female"
            title="Dam"
            value="dam"
            exact
          >
          </v-list-item>
          <v-list-item
            :to="{ name: 'Herr' }"
            prepend-icon="mdi-gender-male"
            title="Herr"
            value="herr"
            exact
          >
          </v-list-item>
          <v-list-item
            :to="{ name: 'Barn' }"
            prepend-icon="mdi-teddy-bear"
            title="Barn"
            value="barn"
            exact
          >
          </v-list-item>
          <v-list-item
            :to="{ name: 'About' }"
            prepend-icon="mdi-book-information-variant"
            title="About"
            value="about"
            exact
          >
          </v-list-item>
          <v-list-item
            :to="{ name: 'Kontakt' }"
            prepend-icon="mdi-account-box-outline"
            title="Kontakt"
            value="kontakt"
            exact
          >
          </v-list-item>
          <v-list-item
            :to="{ name: 'Product' }"
            prepend-icon="mdi-account-box-outline"
            title="Product"
            value="product"
            exact
          >
          </v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vue Shop</v-toolbar-title>
        <!-- Under finner ni sökrutan på navbaren denna är ej färdig -->
        <v-card>
          <v-card-text>
            <v-text-field
              :loading="loading"
              density="compact"
              variant="solo"
              label="Search templates"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              @click:append-inner="onClick"
            ></v-text-field>
          </v-card-text>
        </v-card>
        <!-- Ovan finner ni sökrutan på navbaren denna är ej färdig -->
      </v-app-bar>

      <!-- Här är all content som renderas på sidan mellan menyn och footern dvs BODY -->
      <v-main>
        <router-view />
      </v-main>
      <!-- ----------------- RÖR EJ OVAN SEKTION ---------------------------- -->

      <v-footer>
        <v-row justify="center" no-gutters>
          <v-btn
            :href="`${link.route}`"
            v-for="link in links"
            :key="link"
            variant="text"
            class="mx-2"
            rounded="xl"
          >
            {{ link.name }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} —
            <strong>SWEDISH VUESHOP AB</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { name: "home", route: "/" },
      { name: "about", route: "/about" },
      { name: "kontakt", route: "/kontakt" },
    ],
    loaded: false,
    loading: false,
  }),
  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
  },
};
</script>
