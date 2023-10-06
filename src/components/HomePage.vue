<template>
<HeaderComponent />
<h1>Hello {{ name }}</h1>
<table class="table">
    <thead>
        <tr>
            <th scope="col">S.N</th>
            <th scope="col">Restaurent Name</th>
            <th scope="col">Address</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in restaurent" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.mobile }}</td>
            <td>
                <router-link :to="'/UpdateRestaurent/'+item.id"><button class="btn btn-primary rounded-pill">Update</button></router-link>
            </td>
            <td><button v-on:click="deleteRestaurent(item.id)" class="btn btn-danger rounded-pill">Delete</button></td>
        </tr>
    </tbody>
</table>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import axios from 'axios';
export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurent: []

        }
    },
    components: {
        HeaderComponent
    },
    methods: {
        async deleteRestaurent(id) {
            let deleteRestaurent = await axios.delete("http://localhost:3000/restaurents/" + id);
            if (deleteRestaurent.status == 200) {
                this.loadData();
            }
        },
        async loadData() {
            let users = localStorage.getItem('users-info');
            this.name = JSON.parse(users).name
            if (!users) {
                this.$router.push({
                    name: 'SignUp'
                });
            }
            let result = await axios.get("http://localhost:3000/restaurents");
            this.restaurent = result.data
        }
    },
     mounted() {
        this.loadData();
    }


}
</script>
