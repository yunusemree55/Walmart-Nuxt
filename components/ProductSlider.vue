<template>
    <div class="row mt-4">
        <h5>{{header}}</h5>
        <template>
          <v-sheet elevation="8">
            <v-slide-group  class="pa-4 mt-2" mandatory show-arrows>
              <v-slide-item v-for="n in 10" :key="n" v-slot="{ active, toggle }">
                <v-card :color="active ? 'primary' : 'grey lighten-1'" class="ma-4" height="460" width="200"
                  @click="toggle">
                  <v-row class="fill-height" align="center" justify="center">
                    <v-card  class="mx-auto my-12" max-width="374">
                      
                        <v-img height="250" src="https://i5.walmartimages.com/asr/7ac311a8-e9cf-476d-8e0e-b0781adfe71d.78c7126be78ec890b9670e663a2245aa.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF%201x,%20https://i5.walmartimages.com/asr/7ac311a8-e9cf-476d-8e0e-b0781adfe71d.78c7126be78ec890b9670e663a2245aa.jpeg"></v-img>

                      <v-card-title>$23.99</v-card-title>
                      

                      <v-card-text>

                        <div>Small plates, salads & sandwiches </div>
                          <v-divider class="mx-4"></v-divider>
                          <v-row align="center" class="mx-0">
                          <v-rating :value="2.5" color="blue" dense half-increments readonly size="14"></v-rating>
                          <v-chip class="w-75 mt-1 bg-primary text-light"> 3 days shipping</v-chip>
                          
                        </v-row>
                      </v-card-text>
                      <v-divider class="mx-4"></v-divider>

                     

                      

                      
                    </v-card>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </template>

        
        <hr class="mt-5 text-secondary" />

      </div>
</template>


<script>
export default {
  

  props:["header"]

}
</script>