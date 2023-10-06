<template>
<body>

    <div class="container">

        <img src="../assets/logo1.png" class="rounded mx-auto d-block" alt="">

        <div class="card mx-auto shadow p-3 mb-5 bg-body-tertiary rounded " style="width: 28rem;">
            <div class="card-body">
                <div class="header text-center text-primary-emphasis">
                    <h1>Login</h1>
                </div>

                <div class="mb-3 mt-3 ">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" v-model="email" placeholder="Enter email">
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Enter password">
                </div>
                <div class="d-flex justify-content-center">
                    <button v-on:click="login" class="btn btn-primary rounded-pill">Login</button>
                </div>

                <div class="d-flex mb-3">
                    <div class="mt-2">
                        <p>Not signed up?</p>
                    </div>

                    <div class="ms-auto">
                        <router-link to="/Sign-up">
                            <button class="btn btn-sm btn-primary rounded-pill">SignUp</button>
                        </router-link>
                    </div>
                </div>

            </div>
        </div>

    </div>

</body>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("users-info", JSON.stringify(result.data[0]));
                this.$router.push({
                    name: 'HomePage'
                })
            }
        }
    },
    mounted() {
        let users = localStorage.getItem('users');
        if (users) {
            this.$router.push({
                name: 'HomePage'
            })
        }
    }
}
</script>
