<template>
  <MainPageLayout />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainPageLayout from './layout/mainPageLayout/MainPageLayout.vue'

export default defineComponent({
  name: 'PageIndex',
  components: { MainPageLayout },
  setup () {
    return { }
  }
})
</script>
