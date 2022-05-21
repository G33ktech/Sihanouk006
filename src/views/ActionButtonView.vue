<template>
<div>
<p>line</p>
<p>line</p>
<p>line</p>
<p>line</p>
<div>
  <fab :actions="fabActions"
       @cache="cache"
       @alertMe="alert"
  ></fab>


</div>

</div>
</template>
<script>

</script>
<style lang="css" scoped>
	.wrapper {
  height: 1200px;
  width: 550px;
  padding-left: 0px;
	background: linear-gradient(to bottom, #ffccff 0%, #ffffff 50%);
	margin: auto;
  text-align: center;
  padding-bottom: -50px;
  z-index: 1;
	}

  .float1 {
    width: 500px;
    border: 2px;
    border-color: blue;
    display: inline-block;
    position: absolute;
    top:0; 
    left:30;
    z-index: 1;
    padding-top: 220px;
    padding-left: 25px;
    display:block;
    margin: auto;
  }
	.panel{
    width: 500px;
    height: 120px;
    border-radius: 15px;
    display: inline-block;
    position: relative;
    z-index: 2;
    background: #ffffff;
    display:block;

  }
  .balance-text{
text-align: left;
padding-top: 20px;
padding-left: 20px;
font-size:30px;


  }
        .round-button {
    background: purple;
    color: white;
    font-size:35px;
    font-weight: bold;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    text-align: center;
    margin-top: 30px;
    margin-right: 90px;
    } 
  .signup {
    height: 50px;
    width: 400px;
    background-color: purple;
    color: white;
    font-size:25px;
    border-radius: 25px;
    border-color: rgb(129, 58, 129);
    border-width: 2px;
    margin-top: 75px;
    margin-right: 80px;
    margin-bottom: 30px;
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
    margin: auto;
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
