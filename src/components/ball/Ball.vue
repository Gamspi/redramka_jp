<template>
  <div
    :style="`animation-name: ball-${animationNumber}`"
    :class="['ball', `ball--${color}`, {'ball--animated': isAnimated}]"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import './style.scss'
export default defineComponent({
  name: 'Ball',
  props: {
    color: {
      type: String as PropType<'red'| 'blue'>,
      default: 'red'
    },
    isAnimated: {
      type: Boolean,
      default: false
    },
    animationNumber: {
      type: [Number, String],
      default: 1
    }
  },
  setup () {
    return {
    }
  }
})
</script>
