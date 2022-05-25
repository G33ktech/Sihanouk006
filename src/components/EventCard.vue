<template>
  <div class="member">
    <div   :class="{}">
<button class="square-button " style="" onclick="window.location.href=`https://direct.lc.chat/14101083/`">
        <i class="">join</i>
      </button>
    
        <a class="button-panel" style="float: left; ">
          <img src="../assets/buttons/graphics-carousel-scheme1.png" alt="" class="mw-100">
        </a>
        <h2 class="is-size-4 has-text-weight-bold">{{ event.memberType }}</h2>
        <span>{{ event.balance }}</span><br>
        <span>{{ event.commission }}</span><br>
     </div>       
        
  </div>
</template>
<script>
  export default {
    props: ['event'],
  };
</script>
<style lang="scss" scoped>

  .member {
    
    height: 200px;
    width: 95%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: left;
    color: #ffffff;
    padding: 10px;
  
    border-radius: 10px;
    margin: 20px;
    height: 120px;
  }
  .square-button{
  float: right; 
  color: white; 
  width: 75px; 
  margin-right: 20px; 
  font-size: 20px;
  }
</style>