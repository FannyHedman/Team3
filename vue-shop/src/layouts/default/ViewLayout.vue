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
        </v-list>
      </v-navigation-drawer>

      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vue Shop</v-toolbar-title>
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
    links: [{ name: "home", route: "/" }],
  }),
};
</script>
