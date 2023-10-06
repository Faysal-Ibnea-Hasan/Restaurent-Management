<template>
<div class="container">

    <nav class="navbar  navbar-expand-lg bg-dark rounded-pill">
        <div class="container-fluid" style="margin-left: 30%;">
            <a class="navbar-brand text-light" href="#">RestManager</a>
            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active text-danger" aria-current="page" href="#">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-danger" v-on:click="logout" href="#">Logout</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-danger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Manage Restaurant
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/AddRestaurent" class="dropdown-item" href="#">Add Restaurant</router-link></li>
                            <li><router-link to="/UpdateRestaurent" class="dropdown-item" href="#">Update Restaurant</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    
                </ul>
                <!-- <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form> -->
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'LoginPage'})
        }
    }
}
</script>
<style scoped>
.nav-item a:hover{
        background-color:aliceblue;
        
}
</style>
