<template>
  <div>
    <v-app style="background-color: #0071DC;">
      <section>

        <div class="container py-5">
          <div class="pb-4">
            <h6 class="mb-0"><button @click="$router.go(-1)" class="text-light"><i
                  class="fas fa-long-arrow-alt-left me-2 "></i> Back to shop</button>
            </h6>
          </div>
          <FavoriteItem v-for="item in favoriteData" :key="item.id" :item = "item" @deleteItem="deleteItem(item)" @addToBasket="addToBasket(item)" />

        </div>
      </section>
    </v-app>
  </div>
</template>


<script>
import { collection, query, where, getDocs, doc, updateDoc, arrayRemove , arrayUnion } from "firebase/firestore";
import { mapGetters } from "vuex";
import { db } from "~/firebase";

export default {

  data() {
    return {

      dbFavoriteData: [],
      favoriteData: []

    }
  },

  async mounted() {

    const q = query(collection(db, "users"), where("email", "==", this.getUser.email));
    const favorite = await getDocs(q);

    favorite?.forEach((doc) => {

      this.dbFavoriteData?.push(doc.data().favorites)

      this.dbFavoriteData?.forEach((item) => {
        item?.forEach((item) => {
          this.favoriteData.push(item)
        })
      })
    });

    console.log(this.favoriteData);

  },

  methods: {
    async deleteItem(item){
      const targetDB = doc(db, "users", this.getUser.email);


      await updateDoc(targetDB, {
        favorites: arrayRemove(item)
      });

      this.favoriteData = this.favoriteData.filter(i => i.id != item.id)
    },

    async addToBasket(item) {

      const targetDB = doc(db, "users", this.getUser.email);


      await updateDoc(targetDB, {
        basket: arrayUnion(item)
      });


    },
  },


  computed:{

    ...mapGetters(['getUser'])

  }

}
</script>


<style>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;

}
</style>
