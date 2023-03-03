<template>
  <VApp>
    <div class="banner">
      <div class="container">
        <div class="main-banner">
          <div class="img-container">
            <img
              src="@/assets/images/animals-kids-large.jpg"
              alt="black socks"
            />
            <div class="img-content">
              <h3>Harriet ankle</h3>
            </div>
          </div>
          <div class="product-detail">
            <div class="sticky-container">
              <div class="product-form">
                <v-card class="p-overlay">
                  <v-card-text>
                    <div class="text-h4">
                      <div class="title">Title harriet</div>
                    </div>
                    <div class="text-h6">
                      <div class="price-container">
                        <div class="price">SEK</div>
                        <div classs="rating">xxxxx (6)</div>
                        <!--Current price-->
                        <!--Rating-->
                      </div>
                    </div>
                    <div class="size-selector">
                      <v-row justify="left" class="ma-2">
                        <v-col sm="12"
                          ><v-select
                            label="Size"
                            :items="items"
                            variant="outlined"
                          ></v-select
                        ></v-col>
                      </v-row>
                      <div class="quantity-submit">
                        <v-btn size="x-large" color="#026CAD">
                          LÄGG TILL I KUNDKORG
                        </v-btn>
                        <v-btn icon="mdi-heart" color="#F6A8B6">
                        </v-btn>
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
          <div class="ab">
            <div class="ab-one">
              <span @click="onPush1"> Produktbeskriving</span>
            </div>
            <div class="ab-two">
              <span @click="onPush2">Material ursprung</span>
            </div>
            <div class="ab-three">
              <span @click="onPush3">Frakt och retur</span>
            </div>
          </div>
        </div>
        <div class="product-description">
          <div class="pd">
            <!--Produkt beskriving -->
            <h3 class="font-weight-bold">Lorem ipsum</h3>
            <p id="pb-one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa
              quisquam cupiditate earum blanditiis. Nobis facilis omnis alias
              iste iure? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nulla ipsam debitis deleniti minima et laudantium? Odit
              aperiam et id rem illo. Expedita labore consequuntur a facilis.
              Earum totam optio nisi expedita debitis, nostrum veritatis iure
              quos deserunt. Eligendi odio tempora consectetur, quos quam
              perferendis. Corporis omnis animi odio harum excepturi fuga
              aperiam ducimus veritatis hic suscipit error, numquam totam
              exercitationem.
            </p>

          </div>
          <!--Material ursprung-->
          <!--Frakt och retur-->
        </div>
      </div>
    </div>
  </VApp>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: ["XS", "S", "M", "L"],
  }),
};
</script>

<script setup></script>
<style scoped>
img {
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
.ab {
  display: flex;
  justify-content: space-between;
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
}
.p-underlay {
  background-color: white;
  color: black;
  margin-top: 50px;
}

</style>
