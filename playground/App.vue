<script setup lang="ts">
import Balancer from 'vue-wrap-balancer'
import ReadFast from '../src/ReadFast.vue'
</script>

<template>
  <div class="px-20 py-10 w-125 m-auto">
    <h2 class="text-center">
      <Balancer>The Three Musketeers</Balancer>
    </h2>
    <ReadFast class="animate-bounce inline-flex" font-style="color: green;">
      The Three Musketeers: D'Artagnan (a poor young nobleman) leaves his family in Gascony and travels to Paris to join
      the Musketeers of the Guard. He makes inseparable friends with Athos, Porthos and Aramis. To defend Queen Anne of
      Austria, they fight against Cardinal Richelieu, reach London against all the odds, get back the diamond studs from
      the Duke of Buckingham, and finally foil the Cardinal’s plot of sowing dissension between the King and the Queen.
    </ReadFast>
  </div>
</template>
