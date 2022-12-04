<template>
    
  <v-footer
    class="bg-primary mt-3 h-100 text-light"
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        
        text
        rounded
        class="my-2 text-light"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Walmart. All Rights Reserved</strong>
      </v-col>
    </v-row>
  </v-footer>

</template>

<script>
export default {
    data() {
        return {
            links:["All Departments","Store Directory","Careers","Our Company","Sell on Walmart.com"]
        }
    },
}
</script>