<template >

  <div class="bg-blue">

    <Navbar />


    <div class="container-sm bg-light">

      <Campaign />

      <div class="row">

        <Slider />

        <CampaignProduct />

      </div>

      <div class="row">

        <div class="col-4">

          <DeliveryCard />

          <PopularServiceCard />

        </div>


        <HolidaySavingCard />

        <ExpectingCard />

      </div>

      <WalmartPlus />

      <ProductSlider :data="data" header="Everyday savings" @itemDetail="itemDetail"/>


      <TravelReady />

      <ForYou />

      <FavoriteDepartment />

      <WalmartCreditCard />

      <ProductSlider :data="data" header="Build your cart" @itemDetail="itemDetail" />

      <ProductSlider :data="data" header="Popular in home organization" @itemDetail="itemDetail" />

      <SeasonCard header="In season" />

      <ProductSlider :data="data" header="Popular in household appliances & accessories" @itemDetail="itemDetail" />

      <SeasonCard header="Brand new for you" />

      <ProductSlider :data="data" header="Save on kitchen & dining" @itemDetail="itemDetail" />

      <MarketCard header="Health & wellness" />

      <MarketCard header="Sharing our values" />
      <hr class="mt-2 text-secondary" />

    </div>

    <Feedback />

    <Footer />

  </div>

</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "~/firebase";
export default {

  data() {
    return {

      name: 'Merhaba',
      data: []

    }
  },

  async mounted() {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.data.push(doc.data())

    });

  },

  methods: {
    itemDetail(item) {

      this.$store.commit("setSelectedProduct",item)
      this.$router.push({ name: "about", params: { item }, query: { id: item.id } })
    }
  },

}
</script>
