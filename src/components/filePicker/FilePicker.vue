<template>
  <label
    class="file-picker"
  >
    <span class="file-picker__label"> {{ label }}</span>
    <input
      type="file"
      class="file-picker__input"
    >
  </label>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'FilePicker',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
})
</script>
