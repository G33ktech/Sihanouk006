<template>
      <div class="logo" style="background-size: 160px 95px;"
        v-for="partner in partners"
        :key="partner.id"
        :class="partner.class"
      >
          <PartnerCard :partner="partner" />
     
      </div>
</template>
<script>
  import PartnerCard from '@/components/PartnerCard';
  export default {
    name: 'PartnerList',
    components: {
      PartnerCard,
    },
    data() {
      return {
        partner: {},
        partners: [
          {
            id: 1,
            image: '../assets/partners/amazon.png',
            class:  'amazon',
          },
          {
            id: 2,
           image: '../assets/partners/ebay.png',
            class:  'ebay',
           },
          {
            id: 3,
            image: '../assets/partners/bukalapak.png',
            class:  'bukalapak',
           },
          {
            id: 4,
            image: '../assets/partners/lazada.png',
            class:  'lazada',
           },
           {
            id: 5,
            image: '../assets/partners/walmart.png',
            class:  'walmart',
           },
           {
            id: 6,
            image: '../assets/partners/JB_Hi-Fi.png',
            class:  'JB',
           },
           {
            id: 7,
            image: '../assets/partners/shopbot.png',
            class:  'shopbot',
           },
           {
            id: 8,
            image: '../assets/partners/orami.png',
            class:  'orami',
           },
        ],
      };
    },
  };

</script>
<style lang="scss" scoped>
.logo{
  display: inline-block;
      width: 23%; 
      height: 95px;

      margin: 5px;
background-color: aquamarine;
  object-fit: contain;

}
  .amazon{
          background-image: url('../assets/partners/amazon.png');
          object-fit: contain;
  }          
  .ebay {
          background-image: url('../assets/partners/ebay.png');
  }  
   .bukalapak {
          background-image: url('../assets/partners/bukalapak.png');
  }
    .lazada {
          background-image: url('../assets/partners/lazada.png');
  }
    .walmart {
          background-image: url('../assets/partners/walmart.png');
  }
    .JB {
          background-image: url('../assets/partners/JB_Hi-Fi.png');
  }
    .shopbot {
          background-image: url('../assets/partners/shopbot.png');
  }
    .orami {
          background-image: url('../assets/partners/orami.png');
  }
   
</style>
