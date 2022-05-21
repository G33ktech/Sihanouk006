<template>
  <div class="events container">
    <h2 class="subtitle is-3">Membership Level</h2>
    <div class="columns is-multiline">
      <div
        v-for="event in events"
        :event="event"
        :key="event.id"
        :class="event.class"
        :style="event.bstyle"
         >
        <!--<router-link :to="'/event/' + event.id"></router-link>-->
          <EventCard :event="event" />
        
      </div>
    </div>
  </div>
</template>
<script>
  import EventCard from '@/components/EventCard';
  export default {
    name: 'EventsList',
    components: {
      EventCard,
    },
    data() {
      return {
        event: {},
        events: [
          {
            id: 1,
            memberType: 'Ordinary',
            balance: 'Minimum balance $ 100.00',
            commission: '0.4% | 60 Orders',
            class:  'ordinary',
          },
          {
            id: 2,
            memberType: 'Gold Member',
            balance: 'Minimum balance $ 1000.00',
            commission: 'commission 0.5% | 80 Orders',
            class:  'gold',
            activeClass:  'red',
            endtag: '</div>',
            bstyle:  '<div style="background: linear-gradient(240deg, rgb(12, 36, 66), rgb(79, 116, 146));"',
          },
          {
            id: 3,
            memberType: 'Platinum Member',
            balance: 'Minimum balance $ 3000.00',
            commission: 'commission 0.6% | 100 Orders',
            class:  'platinum',
            activeClass:  'red',
            endtag: '</div>',
            bstyle:  '<div style="background: linear-gradient(240deg, rgb(12, 36, 66), rgb(79, 116, 146));"',
          },
          {
            id: 4,
            memberType: 'Diamond member',
            balance: 'Minimum balance $ 5000.00',
            commission: 'commission 0.7% | 120 Orders',
            class:  'diamond',
            activeClass:  'red',
            endtag: '</div>',
            bstyle:  '<div style="background: linear-gradient(240deg, rgb(12, 36, 66), rgb(79, 116, 146));"',
          },
        ],
      };
    },
  };
</script>
<style lang="scss" scoped>
.ordinary{
    background: linear-gradient(240deg, rgb(12, 36, 66), rgb(79, 116, 146));
    border-radius: 15px;
}
.gold{
    background: linear-gradient(240deg, rgb(89, 112, 149), rgb(118, 138, 170));
    border-radius: 15px;
}
.platinum{
    background:  linear-gradient(240deg, rgba(219, 111, 33, 0.99), rgb(249, 153, 5));
    border-radius: 15px;
}
.diamond{
    background:  linear-gradient(240deg, rgba(39, 53, 131, 0.99), rgb(47, 67, 177));
    border-radius: 15px;
}

  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>
