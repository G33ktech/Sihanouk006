<template> 


<!-- balance Panel -->
<div id="balancePanel" class="g-com-panel" style="">
  <div id="accountCard" class="g-com-card">
  <div id="accountBalance" class="g-com-field" style="font-size: 28px;">$ 1076.96{{}}</div>
  <div id="accountBalanceLabel" class="g-com-label" style="color: grey;">Account Funds</div>
  </div>
  <div id="buttonRightDiv" class="g-com-card-right">
    <button id="accountBalanceButton" class="round-button " style="float: right;">+</button>
  </div>
</div>

<!-- member Panel -->
<div id="memberPanel" class="g-panel" style="color: white;">
    <div id="memberCard" class="g-com-card" style="width: 250px">
    <div id="memberType" class="g-com-field"  style="font-size: 30px;">Ordinary{{}}</div>
    <div id="commissionType" class="g-label">commission 0.4% | 60 orders{{}}</div>
  </div>
  <p id="grabStatusCard" class="g-com-card-center vertical-center " style="float: right; clear: both; float: center; font-size: 40px;">
    <a id="orderAmt" class="g-com-field" style="background-color: green;">04{{}}</a> /
    <a id="orderMax" class="g-com-field">60{{}}</a>
  </p>
</div>

<!-- commission Panel -->
<div id="commissionPanel" class="g-com-panel">
  <div id="commissionCard" class="g-com-card">
  <div id="getcommission" class="g-com-field">$ 76.96{{}}</div>
  <div id="getcommissionLabel" class="g-label">Get Commission</div>
  </div>
  <div id="frozenCard" class="g-com-card-right">
  <div id="frozenAmt" class="g-com-field">$ 6.66{{}}</div>
  <div id="frozenLabel" class="g-label">Frozen amount</div>
  </div>
</div>

<!-- order Panel -->
<div id="orderPanel" class="g-com-panel">
  <div id="orderAmtCard" class="g-com-card">
  <div id="orderAmt" class="com-field">$ 500.00{{}}</div>
  <div id="orderAmtLabel" class="g-label">Order Amount</div>
  </div>
  <div id="buttonRightDiv" class="g-com-card-right">
    <div id="orderBalanceAmt" class="g-com-field">$ $ 1076.96{{}}</div>
    <div id="orderBalanceAmtLabel" class="g-label">Available Balance</div>
  </div>
</div>

<!-- grabOrder Panel -->
<div id="grabOrderPanel" class="g-com-panel" style="margin: auto; ">
  <button id="grabOrderButton" class="signup" style=" margin-left: 50px; margin-top: 25px;">Start Grabbing Orders</button>
</div>
<div style="height: 150px;"></div>
</template>
<script>
  export default {
  
  };
</script>
<style lang="css" scoped>

@import '../assets/grab.css';

</style>
