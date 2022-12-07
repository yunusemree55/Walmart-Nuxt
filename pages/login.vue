<template>
    <div>
        <section class="vh-100" style="background-color: #eee;">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black" style="border-radius: 25px;">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-5">Login</p>

                                        <form class="mx-1 mx-md-4">

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <v-text-field type="email" label="Email"></v-text-field>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <v-text-field type="password" label="Password"></v-text-field>
                                                </div>
                                            </div>




                                        </form>
                                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="button"
                                                class="btn btn-primary btn-lg text-light fw-bold">Login</button>
                                        </div>

                                        <div class="">
                                            <p>You don't have an account?  <router-link class="text-decoration-none fw-bold" :to="{path:'/register'}">Register</router-link></p>
                                        </div>

                                    </div>
                                    <div class=" col-lg-6  d-flex align-items-center order-1 order-lg-2">

                                        <img height="250"
                                            src="https://imgs.search.brave.com/F9MIpubCGNvN1gVc1I3nB7rsMYUdjLgWw1WIr9ubvGI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJ0YWcuY29t/L3dhbGxwYXBlci9m/dWxsL2YvMi85LzU4/NjQ4MS13YWxtYXJ0/LXdhbGxwYXBlci0y/MDAweDE1MDAtd2lu/ZG93cy03LmpwZw"
                                            class="img-fluid" alt="Sample image">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>