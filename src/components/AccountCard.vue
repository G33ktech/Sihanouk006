<template>
<router-link to="this.account.to">
  <div class="g-com-panel" style="height: 50px">
    <a class="" style="float: left; margin: 10px;">
      <i class="material-icons" style="font-size: 36px;" >{{account.icon}}</i>
    </a>
     <a class="mb-1" style="margin: 20px">{{account.name}}
    </a>
    <a class="mb-1" style="margin: 20px">{{account.to}}
    </a>
    
      <i class="material-icons" style=" float:right;" >chevron_right</i>
    
  </div>
  </router-link>
 </template>

<script>
  export default {
    props: ['account'],
  };
</script>
<style lang="scss" scoped>

  .accountCard {
    background-color: aliceblue;
    height: 50px;
    width: 90%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: left;
    color: #a7599e;
    padding: 10px;
    border-style: solid;
    border-color: #a7599e;
    border-width: 2px;
    border-radius: 10px;
    margin-top: 10px;
    margin-left: 15px;
    
  }
</style>