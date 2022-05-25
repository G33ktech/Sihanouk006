<template>
  <div class="wrapper">



  <!-- Navbar -->
    <div id="nav" style="margin:auto">
      <router-link to="/AppView"><i class="material-icons nav-icons">home</i></router-link> 
      <router-link to="/OrderView"><i class="material-icons nav-icons">playlist_add_check</i></router-link> 
      <router-link to="/MainGrabView"><i class="material-icons nav-icons">swipe</i></router-link> 
      <router-link to="/ServiceView"><i class="material-icons nav-icons">chat</i></router-link> 
      <router-link to="/MyAccountView"><i class="material-icons nav-icons">person</i></router-link>
    </div>

    <router-view />
  </div>
  <div style="clear: both;"></div>
</template>
<script>

</script>
<style lang="scss">
@import 'assets/eShop.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(to bottom, #33ccff 0%, #3366ff 50%);
    height: Auto;
    margin: -8px;
  }
  #nav {
    padding: 10px;
    width: 530px;
    position: fixed;
    bottom: 0;
    z-index: 3;
    background-color: purple;
    a {
      font-weight: bold;
      color: lightgray;
      &.router-link-exact-active {
        color: rgb(230, 181, 146);
      }
    }
  }
  .nav-icons{
    font-size:36px;
    margin: 10px;
  }
</style>
