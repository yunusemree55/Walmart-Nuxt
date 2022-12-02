<template>
    <div class="col-8">
          <div id="sliderBox">
            <template>
              <v-carousel :show-arrows="false" class="rounded">
                <v-carousel-item v-for="(item, i) in sliderList" :key="i" :src="item.src"
                  reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
              </v-carousel>
            </template>
          </div>
        </div>
</template>



<script>

export default{


    data() {
        return {

            sliderList: [{ src: "https://imgs.search.brave.com/7bW2C-9kXKS1mrr01Fepta8O0qoY7Zs5WxiUs9T-BZI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbnlwb3N0/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/c2l0ZXMvMi8yMDE0/LzAyLzUyNjUwNjYw/Ml84Nzk2MTQyOS5q/cGc_cXVhbGl0eT05/MCZzdHJpcD1hbGwm/c3NsPTE" },
      { src: "https://imgs.search.brave.com/k2wM5gbmaEj5TjJY5AVcBfvafg6wGWgp-fcI9vA84s4/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly93d3cu/c3VwZXJtYXJrZXRu/ZXdzLmNvbS9zaXRl/cy9zdXBlcm1hcmtl/dG5ld3MuY29tL2Zp/bGVzL3N0eWxlcy9h/cnRpY2xlX2ZlYXR1/cmVkX3JldGluYS9w/dWJsaWMvV2FsbWFy/dF9DYW5hZGFfdXJi/YW5fZm9ybWF0X1Rv/cm9udG9fU3RvY2t5/YXJkcy5wbmc_aXRv/az03VURoMEVZaQ" },
      { src: "https://imgs.search.brave.com/aiAawNQlCEPU8IFNnAiqzNPKcmzINQ1s0bTyr1NT-Bk/rs:fit:1200:1041:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2VhdHRsZXRp/bWVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wMi8w/MjE4MjAyMF93YWxt/YXJ0XzE2MTMzNi0x/NTYweDEwNDEuanBn" }
      ]

        }
    },


}



</script>