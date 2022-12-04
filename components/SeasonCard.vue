<template>
    <div class="row mb-5">

        <div>
            <h5>{{header}}</h5>
        </div>
        <div class="row">

            <div class="card mt-4 w-50">
                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-351c/k2-_caf78c6d-3b4e-4a19-a881-e2db1880d734.v1.jpg"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">New electric bikes</h5>
                    <p class="card-text">Pedal easier & illuminate the way with built-in LED lights.</p>
                    <a href="#" class="btn btn-sm btn-light border-dark rounded-pill fw-bold">Shop now</a>
                </div>
            </div>
            <div class="card mt-4 w-50">
                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-9e5f/k2-_44e195d8-4f53-4752-91c2-cc53abc55866.v1.jpg"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">New ELOQUII Elements</h5>
                    <p class="card-text">Chic holiday styles tailored for the everyday.</p>
                    <a href="#" class="btn btn-sm btn-primary btn-light border-dark rounded-pill fw-bold">Shop now</a>
                </div>
            </div>




        </div>


    </div>
</template>


<script>
export default {
    

    props:["header"]

}
</script>