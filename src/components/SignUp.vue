<template>
<div>
    <div>
    <form  @submit.prevent="handleSubmit">
    <div class="input-field" style="margin: auto">

        <input type="phone" v-model="phone"  placeholder="Enter Telephone"  required>

        <input type="email" v-model="email"  placeholder="Enter Email"  required>

        <input type="password" v-model="password" placeholder="Create Password" required>            
     </div>
        <input type="checkbox" v-model="terms" required>
        <label>Please accept terms and conditions</label>
    
            <button type="submit" style="margin-top: 50px" >Sign up here</button>
    </form>
    </div>
    <p> Phone: {{ phone }} </p>
    <p> Email: {{ email }} </p>
    <p> Password: {{ password }} </p>
    <p> Terms : {{ terms }} </p>
    
</div>
</template>
<script>
import SignupForm from '../components/SignUp.vue'

export default {
  name: 'sign-up',
  components: {
    SignupForm
  },

    data() {
        return {
            phone: '',
            email: '',
            password: '',
            terms: false,
            passwordError: ''
        }
    },
    methods: {
   
        handleSubmit() {
            //Validate password field length
            this.passwordError = this.password.length > 6 ? 
            '' : 'Password should be more than 6 characters long!';

            if(!this.passwordError) {
                console.log(this.phone);
                console.log(this.email);
                console.log(this.password);
                console.log(this.terms);

            }
        }
    }
    
}
</script>

<style scoped> 

form {
    max-width: 600px;
    margin: auto;
    text-align: left;
    border-radius: 10px;
}


input, select {
    display: block;
    margin-top: 25px;
    padding: 10px;
    width: 450px;
    height: 35px;
    border-radius: 15px;
    box-sizing: border-box;
    border: 2px solid purple;
    color: #555;
    text-align: center;
}

input[type="checkbox"] {
    display: inline-block;
    width:25px;
    margin: 20px 10px 0;
    position: relative;
    top: 2px;
}
    button {
    background: purple;
    border-color: gold;
    height: 30px;
    width: 100%;
    border-radius: 15px;
    text-align: center;
    color: #fff;
    border-width: 2px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    }

.error {
    color: #ff0000;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>
