<template>

<!-- header -->

	<div class="header" style="backdrop-filter: none;">
		<div class="col-8 text-center">
		<span class="btn" style="width: 100%;display: none">Sign in</span>
		</div>
		
		<div class="col-2 text-right">
		<a href="/index/user/lang" class="btn btn-link text-dark">
		<i class="material-icons" style="display: inline-block;">language</i>
		</a>
		</div>
	</div>


<!-- header ends -->

	<h1>Te$t.dev	</h1>
<div class="container">
<div class="center" >


	<img src="../assets/app-logo2.png" style="width:100px;height:100px;border-radius: 10px">

	<p >To labour is to work for money,<br>Luxury is when money works for you.</p>


<!-- Sign in form -->

  <div id= "signup" style="margin: 40px">
    <SignupForm msg="Sign Up Form"/>
  </div>

</div>
</div>
</template>
<script>
import SignupForm from '../components/SignUp.vue'
import uniqueId from 'lodash.uniqueid';
export default {
  name: 'sign-up-details',
  components: {
    SignupForm
  },

data() {
    return {
      signupItems: [
        {  id: uniqueId('signup-'),label: 'Configure Vue', done: false },
        {  id: uniqueId('signup-'),label: 'Create a CLI Vue project', done: true },
        {  id: uniqueId('signup-'),label: 'Have fun', done: true },
        {  id: uniqueId('signup-'),label: 'Create a to-do list', done: false }
      ]
    };
  },
     methods: {
    addToDo(toDoLabel) {
      console.log('To-do added', toDoLabel);
      this.ToDoItems.push({id:uniqueId('todo-'), label: toDoLabel, done: false});
    }
  } 
};
</script>
<style>
@import '../assets/eShop.css';
</style>
