<template>
  <div class="row justify-content-center mb-3">
            <div class="col-md-12 col-xl-10">
              <div class="card shadow-0 border rounded-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div class="bg-image hover-zoom ripple rounded ripple-surface">
                        <img :src="item?.src"
                          class="w-75" />
                        <a href="#!">
                          <div class="hover-overlay">
                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6">
                      <h5>{{item?.productName}}</h5>
                      <div class="d-flex flex-row">

                        <v-rating :value= "item?.star" color="blue" dense half-increments readonly size="20"></v-rating>

                      </div>
                      <p class=" mb-4 mb-md-0">
                        {{item?.description}}
                      </p>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div class="d-flex flex-row align-items-center mb-1">
                        <h4 class="mb-1 me-1">$ {{item?.unitPrice}}</h4>
                      </div>
                      <h6 class="text-success">Free shipping</h6>
                      <div class="d-flex flex-column mt-4">
                        <button class="btn btn-success text-light btn-sm mt-2" type="button" @click="$emit('addToBasket',item)">
                          Add to basket
                        </button>
                        <button class="btn btn-danger text-light btn-sm mt-2" type="button" @click="$emit('deleteItem',item) ">
                          Remove from favorite
                        </button>
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

    }
  },

  props:["item"]
}
</script>
