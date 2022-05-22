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

<!-- 3 buttonPanel -->
<ThreeButton />

<!-- CommissionPanel -->
<CommissionPanel/>

<!-- 6 button panel 1st row-->
<SixButton/>

<!-- Membership Display -->
<div class="com-panel">
    <div class="members">
    <EventsList />
  </div>
</div>

<!-- Agency Income Display -->

<div class="container"><h6 class="subtitle">Agency Income Display</h6><div class="agent_box" style="height: 220px;overflow:hidden;"><div id="ul" class="ul animate" style="top: 0px; margin-top: 0px;"><div class="card shadow border-0 mb-3 animate-li" style=""><div class="card-body"><div class="row align-items-center"><div class="col-3 pr-0 text-center"><div class="avatar avatar-30 no-shadow border-0"><img style="width:50px;height:50px;" src="/public/img/head.png" onerror="this.src=''/public/img/head.png''" alt=""></div><h6 class="font-weight-normal mb-1">cfaFf9</h6></div><div class="col-auto align-self-center border-left"><h6 class="font-weight-normal mb-1">$ 234</h6><p class="text-mute small text-secondary">Today's earnings</p></div></div></div></div><div class="card shadow border-0 mb-3 animate-li" style=""><div class="card-body"><div class="row align-items-center"><div class="col-3 pr-0 text-center"><div class="avatar avatar-30 no-shadow border-0"><img style="width:50px;height:50px;" src="/public/img/head.png" onerror="this.src=''/public/img/head.png''" alt=""></div><h6 class="font-weight-normal mb-1">Pd1xrl</h6></div><div class="col-auto align-self-center border-left"><h6 class="font-weight-normal mb-1">$ 308</h6><p class="text-mute small text-secondary">Today's earnings</p></div></div></div></div><div class="card shadow border-0 mb-3 animate-li" style=""><div class="card-body"><div class="row align-items-center"><div class="col-3 pr-0 text-center"><div class="avatar avatar-30 no-shadow border-0"><img style="width:50px;height:50px;" src="/public/img/head.png" onerror="this.src=''/public/img/head.png''" alt=""></div><h6 class="font-weight-normal mb-1">9JAwZw</h6></div><div class="col-auto align-self-center border-left"><h6 class="font-weight-normal mb-1">$ 287</h6><p class="text-mute small text-secondary">Today's earnings</p></div></div></div></div><div class="card shadow border-0 mb-3 animate-li" style=""><div class="card-body"><div class="row align-items-center"><div class="col-3 pr-0 text-center"><div class="avatar avatar-30 no-shadow border-0"><img style="width:50px;height:50px;" src="/public/img/head.png" onerror="this.src=''/public/img/head.png''" alt=""></div><h6 class="font-weight-normal mb-1">E2FMAX</h6></div><div class="col-auto align-self-center border-left"><h6 class="font-weight-normal mb-1">$ 259</h6><p class="text-mute small text-secondary">Today's earnings</p></div></div></div></div><div class="card shadow border-0 mb-3 animate-li" style=""><div class="card-body"><div class="row align-items-center"><div class="col-3 pr-0 text-center"><div class="avatar avatar-30 no-shadow border-0"><img style="width:50px;height:50px;" src="/public/img/head.png" onerror="this.src=''/public/img/head.png''" alt=""></div><h6 class="font-weight-normal mb-1">oMkk8v</h6></div><div class="col-auto align-self-center border-left"><h6 class="font-weight-normal mb-1">$ 255</h6><p class="text-mute small text-secondary">Today's earnings</p></div></div></div></div><div class="card shadow border-0 mb-3 animate-li" style=""><div class="card-body"><div class="row align-items-center"><div class="col-3 pr-0 text-center"><div class="avatar avatar-30 no-shadow border-0"><img style="width:50px;height:50px;" src="/public/img/head.png" onerror="this.src=''/public/img/head.png''" alt=""></div><h6 class="font-weight-normal mb-1">JPjVlY</h6></div><div class="col-auto align-self-center border-left"><h6 class="font-weight-normal mb-1">$ 322</h6><p class="text-mute small text-secondary">Today's earnings</p></div></div></div></div><div class="card shadow border-0 mb-3 animate-li"><div class="card-body"><div class="row align-items-center"><div class="col-3 pr-0 text-center"><div class="avatar avatar-30 no-shadow border-0"><img style="width:50px;height:50px;" src="/public/img/head.png" onerror="this.src=''/public/img/head.png''" alt=""></div><h6 class="font-weight-normal mb-1">1234</h6></div><div class="col-auto align-self-center border-left"><h6 class="font-weight-normal mb-1">$ 136</h6><p class="text-mute small text-secondary">Today's earnings</p></div></div></div></div><div class="card shadow border-0 mb-3 animate-li"><div class="card-body"><div class="row align-items-center"><div class="col-3 pr-0 text-center"><div class="avatar avatar-30 no-shadow border-0"><img style="width:50px;height:50px;" src="/public/img/head.png" onerror="this.src=''/public/img/head.png''" alt=""></div><h6 class="font-weight-normal mb-1">1008611</h6></div><div class="col-auto align-self-center border-left"><h6 class="font-weight-normal mb-1">$ 310.8</h6><p class="text-mute small text-secondary">Today's earnings</p></div></div></div></div><div class="card shadow border-0 mb-3 animate-li"><div class="card-body"><div class="row align-items-center"><div class="col-3 pr-0 text-center"><div class="avatar avatar-30 no-shadow border-0"><img style="width:50px;height:50px;" src="/public/img/head.png" onerror="this.src=''/public/img/head.png''" alt=""></div><h6 class="font-weight-normal mb-1">VKSaN9</h6></div><div class="col-auto align-self-center border-left"><h6 class="font-weight-normal mb-1">$ 257</h6><p class="text-mute small text-secondary">Today's earnings</p></div></div></div></div></div></div></div>

<!-- Partner Display -->
 <p class="" style="text-align:center;">Partner</p>
  <div class="row">
    <PartnerList />
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
