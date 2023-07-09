<template>
  <a
    class="arrow-link"
    :href="href"
  >
    <span class="arrow-link__label">
      {{ label }}
    </span>
    <svg
      class="arrow-link__icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        v-for="path in paths"
        :key="path"
        :d="path"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

    </svg>
  </a>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'ArrowLink',
  props: {
    label: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  },
  setup () {
    const paths = [
      'M15 18L21 12L15 6',
      'M3 12H20',
      'M21 12H20'
    ]
    return {
      paths
    }
  }
})
</script>
