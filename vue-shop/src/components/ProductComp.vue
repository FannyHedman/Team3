<template>
  <div class="banner">
    <div class="container">
      <div class="main-banner">
        <div class="img-container">
          <div v-for="product in products" :key="product.id">
            <div v-if="product.id === '1'">
              <v-img
                class="p-img"
                :src="product.LargeImage"
                alt="image of socks"
              >
              </v-img>
            </div>
          </div>
        </div>
        <div class="product-detail">
          <div class="sticky-container">
            <div class="product-form">
              <v-card class="p-overlay">
                <v-card-text class="text-h4">
                  <div>
                    <div v-for="product in products" :key="product.id">
                      <div v-if="product.id === '1'">
                        {{ product.name }}
                        <div class="text-h6">
                          <div class="price-container">
                            <div class="price">{{ product.price }}</div>
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
                    <div class="bajs">
                      <v-row
                        justify="left"
                        class="ma-2"
                        v-for="item in items"
                        :key="item.id"
                        v-show="true"
                      >
                        <v-col sm="12" v-if="item.id === '1'"
                          ><v-select
                            label="Size"
                            :items="item.size"
                            variant="outlined"
                          ></v-select
                        ></v-col>
                      </v-row>
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
          <div>
            <v-data-table>
              <tbody id="tBody">
                <v-btn
                  name="Lägg till"
                  type="button"
                  value="product.id"
                  @click="fetchProducts"
                  >Läggetil</v-btn
                >
              </tbody>
            </v-data-table>
          </div>
          <h3 class="font-weight-bold">Lorem ipsum</h3>
          <div v-for="product in products" :key="product.id">
            <div class="p-info" v-if="product.id === '1'">
              {{ product.info }}
            </div>
          </div>
        </div>
        <!--Material ursprung-->
        <!--Frakt och retur-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
    products: {
      required: true,
      type: Object,
    },
    quantity: ["1", "2", "3", "4"],
    items: [],
  }),
  methods: {
    fetchProducts() {
      fetch("Product.json")
        .then((res) => res.json())
        .then((data) => {
          this.products = data;
          this.items = data.size;
        });
    },
  },
};
</script>

<script setup></script>
<style scoped>
.p-img {
  width: 100%;
}
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
.img-container {
  position: relative;
  height: 100%;
}
.img-container .img-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: whitesmoke;
  border-radius: 4px;
  padding: 16px 32px;
  opacity: 0.5;
}
.img-container .img-content h3 {
  color: black;
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
