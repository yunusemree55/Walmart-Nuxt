<template>
    <div class="row mb-4">
        <h5 class="ps-5">{{header}}</h5>
        <div class="card  ms-5 mt-2" style="width: 25rem;">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-3432/k2-_12c7e138-42f9-4151-a531-10e8d1a3f5e2.v1.jpg"
                class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">At-home COVID-19 tests</h5>
                <p class="card-text">Now available at Walmart.</p>
                <a  class="btn btn-sm btn-light border-dark rounded-pill fw-bold mt-5">Shop now</a>
            </div>
        </div>
        <div class="card  ms-4 mt-2" style="width: 25rem;">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-f8d6/k2-_7f9ced9d-3ccf-4602-8a79-56f726caea64.v1.jpg"
                class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Vaccines & more</h5>
                <p class="card-text">Protect against the flu, COVID-19, shingles & other illnesses.</p>
                <a  class="btn btn-sm btn-light border-dark rounded-pill fw-bold mt-3">Shop now</a>
            </div>
        </div>
        <div class="card  ms-4 mt-2" style="width: 25rem;">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-d7eb/k2-_feec3339-3120-45bf-9ce7-e1fad1c9eccd.v1.jpg"
                class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Put your health first</h5>
                <p class="card-text">Find medicine, vitamins, first aid, & more wellness picks.</p>
                <a  class="btn btn-sm btn-light border-dark rounded-pill fw-bold mt-3">Shop now</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    props:["header"]
}
</script>