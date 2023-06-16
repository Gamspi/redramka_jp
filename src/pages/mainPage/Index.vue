<template>
  <div>
    <CustomButton />
    <p class="text-center">
      I am Index.vue
    </p>
    <a href="/demo">Demo page</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomButton from 'components/customButton/CustomButton.vue'

export default defineComponent({
  name: 'PageIndex',
  components: { CustomButton },
  setup () {
    return { }
  }
})
</script>
