<template>
    <div>
        <Navbar />
        <div class="container mt-5 mb-5">
            <div class="row d-flex justify-content-center">
                <div class="col-md-10">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="images p-3">
                                    <div class="text-center p-4"> <img id="main-image" :src="selectedItem?.src"
                                            height="500" /> </div>
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
                                                <v-btn class="bg-primary text-light" @click="snackbar = true">
                                                    Add Basket
                                                </v-btn>
                                                <v-snackbar v-model="snackbar">
                                                    {{ text }}

                                                    <template v-slot:action="{ attrs }">
                                                        <v-btn color="pink" text v-bind="attrs"
                                                            @click="snackbar = false">
                                                            Close
                                                        </v-btn>
                                                    </template>
                                                </v-snackbar>
                                            </div>
                                        </template> <i class="fa fa-heart text-muted"></i> <i
                                            class="fa fa-share-alt text-muted"></i> </div>
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
export default {

    data() {
        return {
            selectedItem: null,
            snackbar: false,
            text: 'Product added to basket',
        }
    },

    mounted() {


        this.selectedItem = this.$route.params.item
        console.log(this.selectedItem);

    },

}
</script>