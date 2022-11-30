<template>

  <div>
    <header>
      <v-toolbar style="height: 120px;" class="pt-4" color="bg-primary" dark>
        <v-toolbar-title>


          <img
            src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg">

        </v-toolbar-title>

        <v-divider class="mx-4" vertical></v-divider>

        <span class="subheading me-4 ">





          <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
              aria-expanded="false">
              <img width="20" src="@/static/photos/department1.png">

              Department
            </button>
            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
          </div>


        </span>
        <span class="subheading fw-bold">

          <button class="btn btn-sm btn-primary fw-bold">

            <img width="20" src="@/static/photos/services1.png">

            Services
          </button>



        </span>



        <div class="input-group w-50 ms-5">
          <input id="searchBar" type="search" class="form-control rounded-pill"
            placeholder="Search everything at Walmart online and in store" aria-label="Recipient's username"
            aria-describedby="basic-addon2">

        </div>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">



          <button class="btn btn-sm btn-primary">

            <div class="row">

              <div class="col-2 mt-2">
                <v-icon class="text-light">mdi-heart</v-icon>
              </div>



              <div class="col-9 text-start ms-2"> <small>Reorder <br /><span class="fw-bold fs-6">My
                    items</span></small></div>

            </div>

          </button>

          <v-divider vertical></v-divider>

          <button class="btn btn-sm btn-primary">

            <div class="row">

              <div class="col-2 mt-2">
                <img width="20" src="@/static/photos/account.png">
              </div>



              <div class="col-9 text-start ms-2"> <small>Sign In <br />
                  <span class="fw-bold fs-6">Account</span></small></div>

            </div>

          </button>

          <v-divider vertical></v-divider>

          <button class="btn btn-sm btn-primary">

            <div class="row">

              <div class="col-2 mt-2">
                <img width="20" src="@/static/photos/basket.png">
                <p>$0.00</p>
              </div>





            </div>

          </button>



        </v-toolbar-items>








      </v-toolbar>

    </header>



    <div class="container-sm  ">

      <div class="row">
        <div class="col">

          <div id="blackFriday">

            <div class="d-flex justify-content-center ms-5">

              <div id="BF-content" class="align-items-center mt-5 text-light">

                <h3>Epic deals are coming!</h3>
                <small>Sneak a peek at savings before they drop every Monday at 7pm ET.</small><br />
                <button class="btn btn-sm btn-light fw-bold rounded-pill mt-2">See deals</button>

              </div>


            </div>


          </div>


        </div>

      </div>

      


      <div class="row">

        <div class="col-8">
          <template>
            <v-carousel :show-arrows="false" cycle class="rounded">
              <v-carousel-item v-for="(item, i) in sliderList" :key="i" :src="item.src"
                reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
            </v-carousel>
          </template>
        </div>

      </div>
    </div>











  </div>

</template>

<script>
export default {

  data() {
    return {

      name: 'Merhaba',
      sliderList: [{ src: "https://imgs.search.brave.com/7bW2C-9kXKS1mrr01Fepta8O0qoY7Zs5WxiUs9T-BZI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbnlwb3N0/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/c2l0ZXMvMi8yMDE0/LzAyLzUyNjUwNjYw/Ml84Nzk2MTQyOS5q/cGc_cXVhbGl0eT05/MCZzdHJpcD1hbGwm/c3NsPTE" },
      { src: "https://imgs.search.brave.com/k2wM5gbmaEj5TjJY5AVcBfvafg6wGWgp-fcI9vA84s4/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly93d3cu/c3VwZXJtYXJrZXRu/ZXdzLmNvbS9zaXRl/cy9zdXBlcm1hcmtl/dG5ld3MuY29tL2Zp/bGVzL3N0eWxlcy9h/cnRpY2xlX2ZlYXR1/cmVkX3JldGluYS9w/dWJsaWMvV2FsbWFy/dF9DYW5hZGFfdXJi/YW5fZm9ybWF0X1Rv/cm9udG9fU3RvY2t5/YXJkcy5wbmc_aXRv/az03VURoMEVZaQ" },
      { src: "https://imgs.search.brave.com/aiAawNQlCEPU8IFNnAiqzNPKcmzINQ1s0bTyr1NT-Bk/rs:fit:1200:1041:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2VhdHRsZXRp/bWVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wMi8w/MjE4MjAyMF93YWxt/YXJ0XzE2MTMzNi0x/NTYweDEwNDEuanBn" }
      ]

    }
  },


}
</script>


<style>
input#searchBar {

  background: url('@/static/photos/searchBar.png') no-repeat 2px white;
  background-position-x: right;
  background-size: 30px;


}

div#blackFriday {

  background: url('https://i.vimeocdn.com/video/1534858719-a6b1cd1ea46a0961c7a66cd2baf07f5bd9e949f777f2c17d029675f546502b39-d?mw=1300&mh=214') no-repeat scroll;
  height: 200px;
}

div#BF-content {

  margin-left: 20rem;


}
</style>
