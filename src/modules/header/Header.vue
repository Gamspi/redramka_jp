<template>
  <HeaderLayout />
</template>

<script>
import { defineComponent } from 'vue'
import HeaderLayout from 'src/modules/header/layout/headerLayout/HeaderLayout.vue'

export default defineComponent({
  name: 'Header',
  components: { HeaderLayout },
  setup () {
    return {}
  }
})
</script>
