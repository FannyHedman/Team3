<template>
  <v-app-bar class="hidden-sm-and-down">
    <v-toolbar-title>Vue Shop</v-toolbar-title>
    <v-row no-gutters>
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
    </v-row>
    <v-text-field
      @focus="searchClosed = false"
      @blur="searchClosed = true"
      v-model="searchTerm"
      @input="getData()"
      placeholder="Sök"
      variant="plain"
      prepend-inner-icon="mdi-magnify mt-auto w-25"
      :class="{ closed: searchClosed }"
    ></v-text-field>
    <v-btn icon :to="{ name: 'favo' }" title="Favoriter" value="favo" exact>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn
      icon
      :to="{ name: 'Varukorg' }"
      title="Varukorg"
      value="varukorg"
      exact
    >
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { name: "hem", route: "/" },
      { name: "dam", route: "/dam" },
      { name: "herr", route: "/herr" },
      { name: "barn", route: "/barn" }
    ]
  }),
  methods: {
    getData() {
      this.$emit("search-value", this.searchTerm);
    }
  }
};
</script>
<script setup></script>

<!-- <style scoped>
@media all and (max-width: 400px) {
.dropdown {
position: absolute;
top: 0;
}}
</style> -->
