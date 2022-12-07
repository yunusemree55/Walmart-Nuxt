<template>
  <div class="row mt-4">
    <h5>{{ header }}</h5>
    <template>
      <v-sheet elevation="8">
        <v-slide-group class="pa-4 mt-2" mandatory show-arrows>
          <v-slide-item v-for="(item, index) in data" :key="index" v-slot="{ active, toggle }">
            <v-card :color="active ? 'primary' : 'grey lighten-1'" class="ma-4" height="460" width="200"
              @click="toggle">
              <v-row class="fill-height" align="center" justify="center">
                <v-card class="mx-auto my-12" max-width="374">

                  <v-img height="250"
                    :src=item.url>
                  </v-img>

                  <button class="btn btn-sm btn-primary fw-bold rounded-pill">+ Add</button>

                  <v-card-title>${{item.unitPrice}}</v-card-title>


                  <v-card-text>

                    <div>{{item.productName}} </div>
                    <v-divider class="mx-4"></v-divider>
                    <v-row align="center" class="mx-0">
                      <v-rating :value=item.star color="blue" dense half-increments readonly size="15"></v-rating>
                      <v-chip class="w-75 mt-1 bg-primary text-center text-light"> {{item.info}}</v-chip>

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

  data() {
    return {

    }
  },

  props: ["header", "data"]

}
</script>