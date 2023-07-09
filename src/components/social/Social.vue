<template>
  <div class="social">
    <a
      v-for="item in list"
      :key="item.link"
      class="social__item"
      :href="item.link"
      target="_blank"
    >
      <img
        class="social__icon"
        :src="item.icon"
        :alt="item.alt"
      >
    </a>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import { SocialItemType } from 'components/social/types'
import './style.scss'

export default defineComponent({
  name: 'Social',
  props: {
    list: {
      type: Array as PropType<SocialItemType[]>,
      required: true
    }
  },

  setup () {
    return {}
  }
})
</script>
