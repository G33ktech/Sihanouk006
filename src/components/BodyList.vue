<template>
  


<!-- 3 buttonPanel -->
<div  class="com-panel">

      <div class="col"  style="width: 30%;">
        <div class="com-card">
          <a href="https://direct.lc.chat/14101083/"> 
        <button class="round-button" >
          <i class="material-icons text-template">monetization_on</i>
        </button>
        <p class="small mt-2">Deposit</p>
        </a>
        </div>
        </div>
  <div class="col text-center"  style="width: 30%;">
  <div class="com-card">
  <router-link to="withdrawView">
  <button class="round-button"><i class="material-icons text-template">payment</i></button>
  <p class="small mt-2">Withdraw</p>
  </router-link>
  </div>
  </div>

  <div class="col text-center" style="width: 30%;">
  <div class="com-card">
  <router-link to="introduceView">
  <button class="round-button"><i class="material-icons text-template">share</i></button>
  </router-link>
  <p class="small mt-2">Invitation</p>
  
</div>
</div>
</div>





<!-- Commission panel -->
<div class="com-panel" >
  <div class="row">
      <h4 class="" style="margin-top: 10px; text-align: center;">Commission
      </h4>

  <div class="col" >
    <div class="com-card shadow border-0 mb-3" >
      <div class="card-body">
        <h5 class="mb-0 font-weight-normal">$ 2.80</h5>
        <p class="text-secondary text-mute small">Today commission</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="com-card shadow border-0 mb-3">
      <div class="card-body">
        <h5 class="mb-0 font-weight-normal">$ 71.36</h5>
        <p class="text-secondary text-mute small">Total commission</p>
      </div>
    </div>
  </div>
</div>
</div>

<!-- 6 button panel 1st row-->
<div class="com-panel" style="">
  <div class="row" style="font-size: 14px; display: flex;flex-direction: row; justify-content: space-around; align-items: center;">
  <a class="col-3 text-center" href="javascript:void(0)" onclick="window.location.href=`/index/my/detail.html?id=2`">
  <img style="width:100px;" src="../assets/buttons/company-profile.png">
  <br>
  <span style="margin-top: 7px;display: block;">Rules Description</span>
  </a>
  <a class="col-3 text-center" href="javascript:void(0)" onclick="window.location.href=`/index/my/detail.html?id=3`">
  <img style="width:100px;" src="../assets/buttons/Rule-description.png">
  <br>
  <span style="margin-top: 7px;display: block;">Company Profile
  </span></a><a class="col-3 text-center" href="javascript:void(0)" onclick="window.location.href=`/index/my/detail.html?id=4`">
  <img style="width:100px;" src="../assets/buttons/Agent-cooperation2.png">
  <br>
  <span style="margin-top: 7px;display: block;">Agency cooperation</span>
  </a>
  </div>

<!-- 6 button panel 2nd row-->

  <div class="row" style="font-size: 14px; display: flex;flex-direction: row; justify-content: space-around; align-items: center;">
  <a class="col-3 text-center" href="javascript:void(0)" onclick="window.location.href=`/index/my/detail.html?id=12`">
  <img style="width:100px;" src="../assets/buttons/Calculate-revenue2.png">
  <br>
  <span style="margin-top: 7px;display: block;">Company qualification</span>
  </a>
  <a class="col-3 text-center" href="javascript:void(0)" onclick="window.location.href=`/index/my/detail.html?id=13`">
  <img style="width:100px;" src="../assets/buttons/menu-5.png">
  <br>
  <span style="margin-top: 7px;display: block;">Limit money laundering</span>
  </a>
  <a class="col-3 text-center" href="javascript:void(0)" onclick="window.location.href=`/index/my/detail.html?id=14`">
  <img style="width:100px;" src="../assets/buttons/menu-6.png">
  <br>
  <span style="margin-top: 7px;display: block;">Lucky Bonus Application</span>
  </a>
  </div>
  </div>


</template>
<script>


</script>

