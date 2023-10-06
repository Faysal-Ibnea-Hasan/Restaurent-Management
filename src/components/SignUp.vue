<template>
 <body>
    
     
     <div class="container">
        
        <img src="../assets/logo1.png" class="rounded mx-auto d-block" style="height: 150px; width: 150px;" alt="">
         
            <div class="card mx-auto shadow p-3 mb-5 bg-body-tertiary rounded " style="width: 28rem; height: 28rem;">
                <div class="card-body">
                    <div class="header text-center text-primary-emphasis">
                        <h1>Sign Up</h1>
                    </div>

                    
                    
                        <div class="mb-3 mt-3 ">
                            <label for="name"  class="form-label">Name:</label>
                            <input type="text" class="form-control" v-model="name" placeholder="Enter name">
                        </div>
                        <div class="mb-3 mt-3 ">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" class="form-control" v-model="email" placeholder="Enter email" >
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Password:</label>
                            <input type="password" class="form-control" v-model="password" placeholder="Enter password">
                        </div>
                        <div class="d-flex justify-content-center">
                            <button  v-on:click="signUp" class="btn btn-primary rounded-pill">SignUp</button>
                        </div>
                        <div class="d-flex mb-3">
                            <div class="mt-2"><p>Are you already signed up?</p></div>
                            
                            <div class="ms-auto">
                                <router-link to="/Login">
                                    <button type="button" class="btn btn-sm btn-primary rounded-pill">Login</button>
                                </router-link>
                            </div>
                        </div>

                                    
                                
                        
                            
                            
                        

                        
                     
                </div>
            </div>  
        

           
        
    </div>
    
    
    
    
</body>
</template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'SignUp',
    data()
    {
        return{
            name: '',
            email:'',
            password:'',
        }
    },
    methods:{
       async signUp()
        {
            console.log('SignUp',this.name,this.email,this.password)
            let result = await axios.post("http://localhost:3000/users",{
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.warn(result);
            if(result.status == 201)
            {
                localStorage.setItem("users",JSON.stringify(result.data));
                this.$router.push({name:'HomePage'})
            }
        }

    },
    mounted()
    {
        let users = localStorage.getItem('users');
        if(users)
        {
            this.$router.push({name:'HomePage'})
        }
    }
    
  }
  </script>
<style>
    body {
        margin: 0;
        padding: 0;
        height: auto;
        width: auto;
    }
</style>