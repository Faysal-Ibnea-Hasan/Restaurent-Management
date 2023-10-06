<template>
<div class="container mt-3">

    <div class="card mx-auto shadow p-3 mb-5 bg-body-tertiary rounded " style="width: 28rem; height: 28rem;">
        <div class="card-body">
            <div class="header text-center text-primary-emphasis">
                <h1>Update Restaurent</h1>
            </div>

            <div class="mb-3 mt-3 ">
                <label for="name" class="form-label">Restaurent Name:</label>
                <input type="text" name="name" class="form-control" v-model="restaurent.name" placeholder="Enter restaurent name">
            </div>
            <div class="mb-3 mt-3 ">
                <label for="address" class="form-label">Address:</label>
                <input type="text" name="address" class="form-control" v-model="restaurent.address" placeholder="Enter Address">
            </div>
            <div class="mb-3">
                <label for="mobile" class="form-label">Mobile Number:</label>
                <input type="text" name="mobile" class="form-control" v-model="restaurent.mobile" placeholder="Enter moblile number">
            </div>
            <div class="d-flex justify-content-center">
                <button v-on:click="updateRestaurent" class="btn btn-primary rounded-pill">Update Restaurent</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UpdateRestaurent',
    data() {
        return {
            restaurent: {
                "name": '',
                "address": '',
                "mobile": ''
            }

        }
    },
    methods: {
        async updateRestaurent() {
            console.warn(this.restaurent)
            const results = await axios.put("http://localhost:3000/restaurents/" + this.$route.params.id, {
                name: this.restaurent.name,
                address: this.restaurent.address,
                mobile: this.restaurent.mobile
            });
            if (results.status == 200) {
                this.$router.push({
                    name: 'HomePage'
                });
            }
        }
    },
    async mounted() {
        const result = await axios.get("http://localhost:3000/restaurents/" + this.$route.params.id);
        this.restaurent = result.data

    }

}
</script>
