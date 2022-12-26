<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  color?: string | string[]
  scale?: number
  fontStyle?: string
}>(), {
  color: '',
  scale: 70
})

const wrapper = ref<HTMLElement | null>(null)
onMounted(() => {
  wrapper.value && (wrapper.value.innerHTML = getAllIndexes(wrapper.value.innerHTML.split(''), ' '))
})

function getAllIndexes(arr: string[], val: string) {
  var indexes = [],
    i = -1
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i + 1)
  }
  let res = arr.slice(0)
  indexes.forEach((i) => {
    res[i] &&
      res.splice(
        i,
        1,
        `<span style="font-weight: bold; text-transform: ${Math.random() * 100 > (100 - props.scale) ? 'uppercase' : ''};">${res[i]}</span>`
      )
  })
  return res.join('')
}
</script>

<template>
  <p ref="wrapper">
    <slot>
      The Three Musketeers: D'Artagnan (a poor young nobleman) leaves his family in Gascony and travels to Paris to join
      the Musketeers of the Guard. He makes inseparable friends with Athos, Porthos and Aramis. To defend Queen Anne of
      Austria, they fight against Cardinal Richelieu, reach London against all the odds, get back the diamond studs from
      the Duke of Buckingham, and finally foil the Cardinal’s plot of sowing dissension between the King and the Queen.
    </slot>
  </p>
</template>
