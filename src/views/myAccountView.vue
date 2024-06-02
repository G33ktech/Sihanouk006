<template> 

<!-- member Panel -->
<div id="memberPanel" class="g-panel" style="color: white; margin-top: 25px; padding: 15px; width: 500px; height: 100px;">
    
    <div id="memberCard" class="g-com-card" style="width: 500px">
    <img src="../assets/head.png" alt="" class="mw-100" style="float:left; height: 60px; width: 60px;margin-right: 15px;">
    <div id="memberType" class="g-com-field"  style="font-size: 30px;">1234{{}}   VIP 0{{}}</div>
    <div id="commissionType" class="g-com-field" style="font-size: 20px; width: 350px;">commission 0.4% | 60 orders{{}}</div>
  </div><br>

</div>
<BalancePanel/>

<AccountList/>
<div style="height: 150px;"></div>
</template>


<script>
import AccountList from '@/components/AccountList.vue';
import BalancePanel from '@/components/BalancePanel.vue';
  export default {
    name: 'home',
    components: { AccountList,
                  BalancePanel
                  },
};
</script>
<style>
@import '../assets/devShop.css';
.g-com-card{ 
  background-color: cornflowerblue;
}
</style>
