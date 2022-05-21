<template>
<div class="wrapper">


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

	<div class="container-title">Te$t.dev
		
	</div>
<div class="container">
<div class="center">


	<img src="../assets/app-logo2.png" style="width:100px;height:100px;border-radius: 10px">

	<p style="margin-top: 25px; font-style: italic">To labour is to work for money,<br>Luxury is when money works for you.</p>


<!-- Sign in form -->

  <div id= "signup">
    <SignupForm msg="Sign Up Form"/>
  </div>

</div>
</div>
</div>

</template>
<script>
import SignupForm from '../components/SignUp.vue'
import uniqueId from 'lodash.uniqueid';
export default {
  name: 'signup',
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
<style lang="css" scoped>
	.wrapper {


	padding: 40px;
	border-color: gold;
	border-style: double;
	border-width: 3px;
	border-radius: 25px;
	background: linear-gradient(to bottom, #ffccff 0%, #ffffff 50%);
	margin-left: auto;
	margin-right: auto;
	}
	
  .header {
    text-align: right;

  }
  .container-title {
  text-align: center;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 50px 0 20px 0;
    font-size: 60px;
  }
  .center {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
      .form-control {
    height: 30px;
    width: 200px;
    border-radius: 15px;
    text-align: center;
    border-color: purple;
    border-width: 2px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
    }

  .signup {
    height: 30px;
    width: 200px;
    border-radius: 15px;
    border-color: purple;
    border-width: 2px;
  }  
    .purple-button {
    background: linear-gradient(to bottom, #ffccff 50%, #ffffff 100%);
    border-color: gold;
	border-style: outset;
	border-width: 5px;
    height: 30px;
    width: 200px;
    border-radius: 15px;
    text-align: center;
    border-color: purple;
    border-width: 2px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
    }

  .is-xl {
    font-size: 1.7rem;
  }
</style>
