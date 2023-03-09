<template>
  <div class="banner-page">
    <div class="container">
      <div class="main-banner">
        <div class="img-container">
          <div>
            <div>
              <v-img width="auto" height="auto" alt="image of socks"> </v-img>
            </div>
          </div>
        </div>
        <div class="product-detail">
          <div class="sticky-container">
            <div class="product-form">
              <v-card class="p-overlay">
                <v-card-text class="text-h4">
                  <div>
                    <div>
                      <div>
                        {{ post.name }}
                        <div class="text-h6">
                          <div class="price-container">
                            <div class="price">{{ post.price }} SEK</div>
                            <div classs="rating">xxxxx (6)</div>
                            <!--Current price-->
                            <!--Rating-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="size-selector">
                    <v-row justify="center" class="ma-2">
                      <v-col sm="13"
                        ><v-select
                          label="Antal"
                          :items="quantity"
                          outlined
                        ></v-select
                      ></v-col>
                    </v-row>
                    <div>
                      <div>
                        <v-row justify="center" class="ma-2">
                          <v-col sm="13"
                            ><v-select
                              label="Size"
                              :items="items"
                              outlined
                            ></v-select
                          ></v-col>
                        </v-row>
                      </div>
                    </div>

                    <div class="quantity-submit">
                      <v-btn size="x-large" color="#026CAD">
                        LÄGG TILL I KUNDKORG
                      </v-btn>
                      <v-btn icon="mdi-heart" color="#F6A8B6"> </v-btn>
                      <!--Button och span med icon hjärta-->
                    </div>
                  </div>
                  <v-card class="p-underlay">
                    <v-card-text>
                      <div class="text-subtitle-1">
                        Gratis leveranser till Sverige inom 1-3 arbetsdagar.
                        <br />
                        * Gratis klimatkompenseade leveranser
                      </div>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </div>
      </div>
      <div class="product-banner">
        <div class="pb">
          <div class="pb-one">
            <span> Produktbeskriving</span>
          </div>
        </div>
      </div>
      <div class="product-description">
        <div class="pd">
          <!--Produkt beskriving -->
          <h3 class="font-weight-bold">{{ this.id }}</h3>
          <router-link to="/product">back to post</router-link>
        </div>
        <!--Material ursprung-->
        <!--Frakt och retur-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      size: "",
      info: "",
      price: "",
      id: "",
      post: [],
      items: ["1", "2"],
      quantity: ["1", "2", "3"],
    };
  },
  mounted() {
    let self = this;
    this.id = this.$route.query.id;
    fetch(`product.json?id=${this.id}`)
      .then((result) => result.json())
      .then((data) => {
        self.post = data;
        console.log(self.post);
      });
  },
};
</script>

<script setup></script>
<style scoped>
.banner .container {
  max-width: calc(1440px - 180px);
  width: 100%;
  margin: auto;
  height: 100%;
  background-color: white;
}
.main-banner {
  display: flex;
  justify-content: space-between;
  height: calc(100vh -92px);
  background-color: white;
}

.product-detail {
  background-color: white;
  width: 45%;
  margin: 30px;
}
.p-overlay {
  border: none;
  background-color: white;
  color: black;
}
.title {
  margin-top: 20px;
}
.price-container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.quantity-submit {
  display: flex;
  justify-content: space-around;
}
.size-selector {
  margin-top: 50px;
}
.product-banner {
  background-color: white;
  height: 5%;
  width: 100%;
  padding-left: 10%;
  padding-right: 50%;
  padding-top: 3%;
}
.product-description {
  background-color: white;
  height: 70%;
  width: 100%;
}
.pb {
  padding-top: 5px;
}
span {
  color: black;
}
.pd {
  color: black;
  background-color: white;
  margin-left: 10%;
  margin-right: 45%;
  padding-top: 5%;
  height: 100%;
  border-top: 1px grey solid;
  margin-bottom: 10%;
  margin-top: 3%;
}
.p-underlay {
  background-color: white;
  color: black;
  margin-top: 50px;
}
</style>
