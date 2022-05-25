<template>

    <div id="nav">

      <router-link to="/AppView"><i class="material-icons">home</i></router-link> 
      <router-link to="/Chat"><i class="material-icons">playlist_add_check</i></router-link> 
      <router-link to="/GrabOrder"><i class="material-icons">swipe</i></router-link> 
      <router-link to="/DepositView"><i class="material-icons">chat</i></router-link> 
      <router-link to="/WithdrawView"><i class="material-icons">Withdraw</router-link>
    </div>
    <router-view />

</template>
  
<script>
  export default {
    name: 'NavBar',
  };
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }
  }
</style>
