<template>
  <div class="deneme">
    <Navbar />
    <div class="container mt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="row">
              <div class="col-md-6">
                <div class="images p-3">
                  <div class="text-center p-4"> <img id="main-image" :src="selectedItem?.src" height="500" /> </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="product p-4 mt-5">

                  <div class="mt-4 mb-3">
                    <h5 class="text-uppercase fs-3">{{ selectedItem?.productName }}</h5>
                    <div class="price d-flex flex-row ">
                      <h5 class="act-price ">${{ selectedItem?.unitPrice }}</h5>

                    </div>
                  </div>
                  <p class="about">{{ selectedItem?.description }}</p>

                  <div class="cart mt-4 align-items-center"> <template>
                      <div class="text-center ma-2">
                        <v-btn v-if="checkLoginSituation" class="bg-primary text-light "
                          @click="snackbar = true, addToBasket(selectedItem)">
                          Add Basket
                        </v-btn>
                        <v-btn v-if="checkLoginSituation" class="bg-warning text-light "
                          @click="snackbar2 = true, addToFavorite(selectedItem)">
                          Add Favorite
                        </v-btn>
                        <v-btn v-if="!checkLoginSituation" class="bg-primary text-light " @click="goToLoginPage">
                          Login before add to basket
                        </v-btn>
                        <v-snackbar v-model="snackbar" :timeout="timeout">
                          <b>{{ selectedItem?.productName }}</b> added to basket

                          <template v-slot:action="{ attrs }">
                            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                              Close
                            </v-btn>
                          </template>
                        </v-snackbar>
                        <v-snackbar v-model="snackbar2" :timeout="timeout">
                          <b>{{ selectedItem?.productName }}</b> added to favorite!

                          <template v-slot:action="{ attrs2 }"  >
                            <v-btn color="pink" text v-bind="attrs2" @click="snackbar2 = false">
                              Close
                            </v-btn>
                          </template>
                        </v-snackbar>
                      </div>
                    </template> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

import { collection, addDoc,doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "~/firebase";
import { mapGetters } from "vuex"

export default {

  data() {
    return {
      selectedItem: null,
      snackbar: false,
      snackbar2:false,
      totalPrice:0,
      timeout:1620
    }
  },



  mounted() {


    this.selectedItem = this.getSelectedProduct
    this.totalPrice = this.getTotalPrice

  },

  methods: {
    async addToBasket(item) {

      const targetDB = doc(db, "users", this.getUser.email);


      await updateDoc(targetDB, {
        basket: arrayUnion(item)
      });
      this.totalPrice = this.totalPrice + item.unitPrice
      this.$store.commit('setTotalPrice',this.totalPrice)

    },
    goToLoginPage() {
      this.$router.push({ path: '/login' })
    },
    async addToFavorite(item){
      const targetDB = doc(db, "users", this.getUser.email);


      await updateDoc(targetDB, {
        favorites: arrayUnion(item)
      });
    }
  },
  computed: {

    ...mapGetters(['checkLoginSituation', 'getSelectedProduct', 'getUser','getTotalPrice'])

  }

}
</script>



