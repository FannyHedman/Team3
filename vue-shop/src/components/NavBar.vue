<template>
  <v-card>
    <h1>Hej Richard</h1>
    <v-app-bar color="red" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon
      ><v-toolbar-title>My files</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" icon="mdi-magnify"></v-btn>
      <v-btn variant="text" icon=""></v-btn>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn
    ></v-app-bar>
    <v-navigation-drawer
      class="dropdown"
      v-model="drawer"
      location="left"
      temporary
      ><v-list :items="items"></v-list
    ></v-navigation-drawer>
    <v-main style="height: 10px"> <v-card-text> Hejdär </v-card-text> </v-main>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: "Foo", value: "foo" },
      { title: "Bar", value: "bar" },
      { title: "Fizz", value: "fizz" },
      { title: "Buzz", value: "buzz" },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
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
