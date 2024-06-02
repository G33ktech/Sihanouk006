<template>
    <div class="wrapper">
    <div class="container">
        <img src="../assets/furi.jpg" style="width:550px;height:280px;">
    </div>
    <!-- Balance Panel -->
    
    <div class="float1">
        <div class="panel">
                <div class="balance-text">$1055.66</div>
          <div style="float: right; margin-top: -60px; padding: 0px;">
          
          <button class="round-button vertical-center" style="margin-left: -80px; color: white;" onclick="window.location.href=`https://direct.lc.chat/14101083/`">
      <i class="material-icons">attach_money</i>
          </button>
          
          </div>
            <p style="text-align:left; padding-left: 20px;
    font-size:20px; color: gray;">my Balance</p>
        </div>
    </div>
    
    
    <!-- grabOrder button -->
    <div class="com-panel" style="margin-top: 100px;">
      <div class="col"  style="width: 550px">
        <button onclick="window.location.href='/index/rot_order/index'" class="signup">
      <i class="material-icons text-mute">swipe</i>
      <span>Start</span>
      </button>
    </div>
    </div>
    
    
    
    </div>
    
    </template>
    <script>
      import CommissionPanel from '../components/CommissionPanel';
      import SixButton from '../components/SixButton';
      import ThreeButton from '../components/ThreeButton';
      import EventsList from '../components/EventsList';
      import PartnerList from '../components/PartnerList';
      import BodyList from '../components/BodyList';
      export default {
        name: 'home',
        components: {
          CommissionPanel,
          SixButton,
          ThreeButton,
          EventsList,
          PartnerList,
          BodyList,
        },
      };
    </script>
    
    
    <style lang="css" scoped>
    
    @import '../assets/eShop.css';
    
    </style>
    