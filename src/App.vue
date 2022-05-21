<template>
  <div id="app">
    <div id="nav" style="margin:auto">
      <router-link to="/AppView"><i class="material-icons">home</i></router-link> 
      <router-link to="/Chat"><i class="material-icons">playlist_add_check</i></router-link> 
      <router-link to="/GrabOrder"><i class="material-icons">swipe</i></router-link> 
      <router-link to="/DepositView"><i class="material-icons">chat</i></router-link> 
      <router-link to="/WithdrawView"><i class="material-icons">person</i></router-link>
      <router-link to="/"><i class="material-icons">logout</i></router-link> 
    </div>
    <router-view />
  </div>
</template>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    background: linear-gradient(to bottom, #33ccff 0%, #3366ff 50%);
    padding: 5px;
    margin: -5px;
    position: relative;
  }
  #nav {
    padding: 30px;
    width: 500px;
    position: fixed;
    bottom: 0;
    background-color: purple;
    a {
      font-weight: bold;
      color: lightgray;
      &.router-link-exact-active {
        color: white;
      }
    }
  }
</style>
