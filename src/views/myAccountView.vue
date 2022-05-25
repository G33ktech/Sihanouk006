<template> 


<AccountList/>
<div style="height: 150px;"></div>
</template>
<script>
import AccountList from '@/components/AccountList.vue';
import AccountCard from '@/components/AccountCard.vue';
  export default {
    name: 'home',
    components: { AccountList, },
};
</script>
