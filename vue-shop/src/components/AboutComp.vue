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
            <h3 class="font-weight-bold">{{ singleProduct }}</h3>
            <router-link to="/product">back to post</router-link>
          </div>
          <div>{{ singleProduct }}{{ singleProduct.productId }}</div>
          <!--Material ursprung-->
          <!--Frakt och retur-->
        </div>
      </div>
    </div>
  </template>
  <script></script>
