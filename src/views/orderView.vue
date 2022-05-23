<template> 
<div>
    <h1>OrderView  Placeholder</h1>
<img src="../assets/orderView.png" style="width:550px;height:650px;">
</div>
<h4>Balance</h4>
<h4>{{ title }}</h4>
<div id = "databinding"> Account Balance; {{balance}}<br/>
</div>
</template>
<script type = "text/javascript">
export default {
  // ...
  data() {
    return {
 title: 'Pending        completed        Frozen',
 balance: '$1076.96' }
    }
  }


</script>

