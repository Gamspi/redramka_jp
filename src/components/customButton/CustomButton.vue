<template>
  <StyledButton>
    test button
  </StyledButton>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { StyledButton } from './style'
export default defineComponent({
  name: 'CustomButton',
  components: {
    StyledButton
  },
  setup () {
    return {}
  }
})
</script>
