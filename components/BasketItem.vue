<template>



  <div   class="row mb-4 d-flex justify-content-between align-items-center ">
      <div class="col-md-2 col-lg-2 col-xl-2">
          <img :src='item?.src'
              class="img-fluid rounded-3" alt="Cotton T-shirt">
      </div>
      <div class="col-md-3 col-lg-3 col-xl-3">
          <h6 class="text-muted">{{item?.productName}}</h6>
          <!-- <h6 class="text-black mb-0">Cotton T-shirt</h6> -->
      </div>
      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">


          <input id="form1" min="0" name="quantity" disabled value="1" type="number"
              class="form-control form-control-sm text-center w-75" />


      </div>
      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 class="mb-0">$ {{item?.unitPrice}}</h6>
      </div>
      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" class="text-muted"> <button type="button" class="btn-close" data-bs-dismiss="alert"
                  aria-label="Close"></button></a>
      </div>

      <hr class="my-4" />
  </div>


</template>


<script>
export default {


  props:['item']
}
</script>
