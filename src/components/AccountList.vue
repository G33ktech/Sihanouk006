<template>
  <div class="account container">
    <h2 class="">Account Level</h2>

      <div
        v-for="account in accounts"
        :account="account"
        :key="account.id"
        :icon="account.icon"
        :name="account.name"
        :to="account.to"
         >
        <!--<router-link :to="'/event/' + event.id"></router-link>-->
          <AccountCard :account="account"/>
        

    </div>
  </div>
</template>
<script>
  import AccountCard from '@/components/AccountCard';
  export default {
    name: 'AccountList',
    components: {
      AccountCard,
    },
    data() {
      return {
        account: {},
        accounts: [
          {
            id: 1,
            icon: "call_made",
            name: "Withdraw",
            to: "WithdrawAction",
          },
          {
            id: 2,
            icon: "groups",
            name: "Team reports",
            to: "TeamReports",
          },
          {
            id: 3,
            icon: "library_add",
            name: "Recharge record",
            to: "RechargeRecord",
          },
          {
            id: 4,
            icon: "payments",
            name: "Withdraw record",
            to: "WithdrawRecord",
          },
          {
            id: 5,
            icon: "repeat",
            name: "Account details",
            to: "AccountDetails",
          },
          {
            id: 6,
            icon: "notifications",
            name: "Notification",
            to: "notification",
          },
          {
            id: 7,
            icon: "credit_card",
            name: "Shipping address",
            to: "ShippingAddress",
          },
          {
            id: 8,
            icon: "credit_card",
            name: "Bind Bank Card",
            to: "BindBankCard",
          },
          {
            id: 9,
            icon: "lock_open",
            name: "Change Password",
            to: "ChangePassword",
          },
          {
            id: 10,
            icon: "language",
            name: "Language",
            to: "Language",
          },
          {
            id: 11,
            icon: "power_settings_new",
            name: "Logout",
            to: "Logout",
          },
        ],
      };
    },
  };
</script>
<style lang="scss" scoped>

@import '../assets/grab.css';

</style>
