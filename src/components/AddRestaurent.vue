<template>
<div class="container mt-3">

    <div class="card mx-auto shadow p-3 mb-5 bg-body-tertiary rounded " style="width: 28rem; height: 28rem;">
        <div class="card-body">
            <div class="header text-center text-primary-emphasis">
                <h1>Add Restaurent</h1>
            </div>

            <div class="mb-3 mt-3 ">
                <label for="name" class="form-label">Restaurent Name:</label>
                <input type="text" class="form-control" v-model="restaurent.name" placeholder="Enter restaurent name">
            </div>
            <div class="mb-3 mt-3 ">
                <label for="address" class="form-label">Address:</label>
                <input type="text" class="form-control" v-model="restaurent.address" placeholder="Enter Address">
            </div>
            <div class="mb-3">
                <label for="mobile" class="form-label">Mobile Number:</label>
                <input type="text" class="form-control" v-model="restaurent.mobile" placeholder="Enter moblile number">
            </div>
            <div class="d-flex justify-content-center">
                <button v-on:click="addRestaurent" class="btn btn-primary rounded-pill">Add Restaurent</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AddRestaurent',
    data(){
        return {
            restaurent:{
                "name":'',
                "address":'',
                "mobile":''
            }
            
        }
    },
    methods:{
        async addRestaurent()
        {
            const result = await axios.post("http://localhost:3000/restaurents",{
                name:this.restaurent.name,
                address:this.restaurent.address,
                mobile:this.restaurent.mobile
            });
            if(result.status==201)
            {
                this.$router.push({name:'HomePage'});
            }
        }
    }
    
}
</script>
