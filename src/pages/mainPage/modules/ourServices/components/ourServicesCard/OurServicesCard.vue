<template>
  <a
    class="our-services-card"
    :href="to"
  >
    <div :class="['our-services-card__circle' , `our-services-card__circle--${color}`]">
      <img
        :src="icon"
        alt="service icon"
        class="our-services-card__icon"
      >
    </div>

    <span class="our-services-card__label">
      {{ label[$store.state.general.lang] }}
    </span>
  </a>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import './styl.scss'
import { OurServicesCardEnum } from 'src/utils/enum/ourServicesCardEnum'

export default defineComponent({
  name: 'OurServicesCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    color: {
      type: String as PropType<OurServicesCardEnum>,
      default: OurServicesCardEnum.BLUE
    }
  },
  setup () {
    return {}
  }
})
</script>
