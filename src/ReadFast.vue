<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    color?: string | string[]
    scale?: number
    fontStyle?: string
    class?: string
  }>(),
  {
    color: '',
    scale: 70,
  }
)

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
      /\w/.test(res[i]) &&
      res.splice(
        i,
        1,
        `<span style="font-weight: bold; text-transform: ${
          Math.random() * 100 > 100 - props.scale ? 'uppercase' : ''
        }; ${props.fontStyle ?? ''}" class="${props.class ?? ''}">${res[i]}</span>`
      )
  })
  return res.join('')
}
</script>

<template>
  <div ref="wrapper">
    <slot />
  </div>
</template>
