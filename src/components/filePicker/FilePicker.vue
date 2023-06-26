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
import { useLang } from 'src/hooks/useLang'

export default defineComponent({
  name: 'FilePicker',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  setup () {
    const lang = useLang()
    return {
      lang
    }
  }
})
</script>
