<template >

  <div class="bg-blue">

    <Navbar />


    <div class="container-sm bg-light">

      <Campaign />

      <div class="row">

        <Sidebar />

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

      <ProductSlider header="Everyday savings" />


      <TravelReady />

      <ForYou />

      <FavoriteDepartment />

      <WalmartCreditCard />

      <ProductSlider header="Build your cart" />

      <ProductSlider header="Popular in home organization" />

    </div>

  </div>

</template>

<script>
export default {

  data() {
    return {

      name: 'Merhaba',

    }
  },

}
</script>