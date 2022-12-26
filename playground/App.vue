<script setup lang="ts">
import Balancer from 'vue-wrap-balancer'
import ReadFast from '../src/ReadFast.vue'
</script>

<template>
  <div class="px-20 py-10 w-125 m-auto">
    <h2 class="text-center">
      <Balancer>The Three Musketeers</Balancer>
    </h2>
    <ReadFast class="animate-bounce inline-flex" font-style="color: green;" />
  </div>
</template>
