<template>

    <div class="d-flex align-items-center" style="background-color: rgb(230, 241, 252);height:972px;">
        <v-card class="mx-auto align-center" max-width="500">
            <v-card-title class="font-weight-regular d-flex justify-content-between">
                <span class="text-warning">{{ currentTitle }}</span>
                <div class="  justify-content-end">

                    <v-avatar  class=" bg-warning text-light" size="30" >{{step}}</v-avatar>
                </div>
            </v-card-title>

            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card-text>
                        <v-text-field v-model="email" label="Email" placeholder="john@walmart.com"></v-text-field>
                        <span class="text-caption grey--text text--darken-1">
                            This is the email you will use to login to your Walmart account
                        </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item style="width: 900px;" :value="2">
                    <v-card-text>
                        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
                        <v-text-field label="Confirm Password" type="password"></v-text-field>
                        <span class="text-caption grey--text text--darken-1">
                            Please enter a password for your account
                        </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="3">
                    <div class="pa-4 text-center">
                        <v-img class="mb-4" contain height="128" src="https://imgs.search.brave.com/h4FY_hjbW6HgNyuC2Z6cwYu2XuHLJou328XNjVe2oQ4/rs:fit:800:710:1/g:ce/aHR0cHM6Ly9wcm9k/LWNkbi10aGVrcmF6/eWNvdXBvbmxhZHku/aW1naXgubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEw/L3dhbG1hcnQtbG9n/by0xNTcyNTQ2Mjg2/LnBuZz9hdXRvPWNv/bXByZXNzLGZvcm1h/dCZmaXQ9bWF4">
                        </v-img>
                        <h3 class="text-h6 font-weight-light mb-2">
                            Welcome to Walmart
                        </h3>
                        <span class="text-caption grey--text">Thanks for signing up!</span>
                    </div>
                </v-window-item>
            </v-window>

            <v-divider></v-divider>

            <v-card-actions>
                <v-btn v-if="step !== 3" class="text-warning" :disabled="step === 1" text @click="step--">
                    Back
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn v-if="step !== 3"  :disabled="step === 3" class="btn-warning text-warning" depressed @click="step++,read(email,password)">
                    Next
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
        
    

</template>

<script>
export default {
    data: () => ({
        step: 1,
        email:null,
        password:null

    }),

    computed: {
        currentTitle() {
            switch (this.step) {
                case 1: return 'Sign-up'
                case 2: return 'Create a password'
                default: return 'Account created'
            }
        },
    },

    methods: {
        read(email,password){
            if(password != null){
                console.log(email + " -> " + password);
            }
        }
    },
}
</script>

