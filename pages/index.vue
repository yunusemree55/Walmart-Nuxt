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

      <ProductSlider header="Everyday savings" />


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

      <MarketCard header="Health & wellness"/>

      <MarketCard header="Sharing our values"/>
      <hr class="mt-2 text-secondary" />

    </div>

    <Feedback />

    <Footer />

  </div>

</template>

<script>
export default {

  data() {
    return {

      name: 'Merhaba',
      data:[
        {id:1,src:"https://i5.walmartimages.com/asr/12823d58-a105-4739-9e5e-b6b4a8cba187.06b909d5b4121050b7b8aaaebbc80127.jpeg",productName:"Keurig K-Duo Essentials",categoryId:1,unitPrice:79.00,star:4.0,description:"Introducing the K-Duo Essentials Single Serve & Carafe Coffee Maker: the perfect brewer for any occasion. This versatile brewer is the best of both worlds, using both K-Cup pods and ground coffee to brew a cup and carafe of your favorite varieties. The K-Duo Essentials coffee maker has a 60 oz. single water reservoir that is shared between single serve and carafe brewing.",info:"2-day shipping"},
        {id:2,src:"https://i5.walmartimages.com/asr/d8bdf553-a166-41a3-b525-5ef5242d23ee_1.f01add918465e1f44684a583a0eab820.jpeg",productName:"Bissell 3-in-1 Lightweight Corded Stick Vacuum",categoryId:1,unitPrice:28.88,star:4.5,description:"This BISSELL 3-in-1 Lightweight Corded Stick Vacuum variant offers users a fresh and reliable option for cleaning floors as needed. It can be used on carpets, area rugs, and hard floors to keep dust, dirt, and debris at bay. This lightweight stick vacuum has a quick-release handle that can be removed while keeping the foot attached for convenient stair cleaning.",info:"1-day shipping"},
        {id:3,src:"https://i5.walmartimages.com/asr/e856b712-fe56-41ea-83fa-b8ed472ab0d0_1.4aee4958167c897f879b07a7277186f4.jpeg",productName:"Mid Back Mesh Swivel Office Chair",categoryId:2,unitPrice:49.99,star:4,description:"Get extra comfortable in the SmileMart Adjustable Mesh Swivel Office Chair with Armrests. This easy assembly, sturdy office chair is perfect for long work days. In this rendition of our office chair, we have increased the seat size and cushion for optimal comfort. The small lever under the cushioned seat allows you to adjust and customize the chair to your perfect seat height. Featuring a densely knitted mesh backrest, this mesh office chair allows better airflow, accelerating heat and moisture dissipation",info:"3+ day shipping"},
        {id:4,src:"https://i5.walmartimages.com/asr/9986961d-93ae-4f00-be20-7c48b397e26f.294f39b0f6fccf8e56f29eadc354390a.jpeg",productName:"Best Choice Products Wicker Egg Chair",categoryId:2,unitPrice:399.99,star:4.0,description:"The search for the perfect chair can lead to some unique and exciting places. This Wicker Egg Chair is a welcome companion to any home; whether it is in your game room or backyard, it is a chair for all occasions. The durable wicker is tightly woven over a powder-coated steel frame and set in an open weave pattern. ",info:"2-day shipping"},
        {id:5,src:"https://i5.walmartimages.com/asr/d4a14b6f-778c-4a71-b3fb-8671aee3d912.a854389f3093de5227f3f242c95700b1.jpeg",productName:"hark ION Robot Vacuum",categoryId:1,unitPrice:139,star:4,description:"The Shark ION Robot® is designed with a Tri-Brush System, combining side brushes, channel brushes, and a multi-surface brushroll to handle debris on all surfaces, corners, and edges. Use the SharkClean™ app or voice control with Alexa or Google Assistant to start cleaning from anywhere.",info:"1-day shipping"},
        {id:6,src:"https://i5.walmartimages.com/asr/98ce0e92-3a9d-4f8d-a201-d278a731d856_1.d6857fbaeecc2f394f064cd8611026d1.jpeg",productName:"Sterilite 6 Qt. Storage Box in Sets",categoryId:2,unitPrice:10.99,star:4.5,description:"Get organized with the Sterilite Clear Storage Box line! The Sterilite Set of (10) 6 Quart Storage Boxes is a convenient ten pack of the popular 6 Quart size, and is ideal for a variety of basic and lightweight household storage needs. It features a clear base that allows contents to be easily identified and an opaque lid that snaps firmly onto the base to keep contents contained and secure. ",info:"1-day shipping"},
        {id:7,src:"https://i5.walmartimages.com/asr/7c1147f0-e2d1-4fea-9f7d-0387ffd2d462.0e1cdd9282c024dd2aae089989dc8bc2.jpeg",productName:"HP 11.6'' Chromebook",categoryId:1,unitPrice:79.99,star:4.5,description:"Help students reach their potential with cloud-first learning on the durable HP Chromebook. A Chromebook built to withstand students and school days, give students a Chromebook that can survive a fall off a desk, a splash from a soda or a tugged power cord. It resists spills and attempts to remove keys, has metal-reinforced corners and is 122 cm drop tested, which is higher than most desks.",info:"2 day shipping"},
        {id:8,src:"https://i5.walmartimages.com/asr/a7b12937-a883-4c70-a585-28746ad55acb.40708e6f69f767a44173fd42b491419d.jpeg",productName:"Champion Women’s Sport Lightweight T-Shirt",categoryId:3,unitPrice:14.99,star:4.5,description:"You've got options with our breathable, lightweight tee. The tee has Double Dry technology wicks sweat away from skin for cooler, drier comfort. The FreshIQ advanced odor protection technology helps tee resist odor. The Quick-drying, lightweight tee stretches to move with you.",info:"1-day shipping"},
        {id:9,src:"https://i5.walmartimages.com/asr/0c83dbaf-9ef7-46b1-bde6-7ee02ad8c1f8.b18788ee71ec44f0b188c06c2f923b09.jpeg",productName:"White Sandwich Bread",categoryId:4,unitPrice:1.10,star:2.5,description:"Great Value White Sandwich Bread is a soft, delicious, and convenient way to make your favorite meals even better. From morning toast to sandwiches, it doesn't get much tastier than a slice or two of this bread. Put your creativity to work by using our bread to make grilled cheese, open-faced sandwiches, a French toast bake, or bread pudding. ",info:"Delivery"},
        {id:10,src:"https://i5.walmartimages.com/asr/bc9da938-fcde-4bab-9e3a-c7c412b7ec09.c03edcb0dfe33bda9dcabc662037ccd3.jpeg",productName:"Hickory Smoked Bacon",categoryId:4,unitPrice:3.72,star:2.5,description:"Great Value Hickory Smoked Bacon adds authentic smoked bacon taste to your favorite meals. This hickory smoked bacon is naturally smoked and cured to perfection, adding rich pork flavor to any dish. Add these hickory smoked bacon slices to a breakfast sandwich, pile them high on a BLT, or even add a few slices to some hamburgers at a backyard barbecue.",info:"Delivery"},


      ]

    }
  },

  methods: {
    itemDetail(item){
      console.log(item);
      this.$router.push({name:"about",  params: {item}, query:{id: item.id}})
    }
  },

}
</script>
