<template>
  <div class="footer-menu-item">
    <h4 class="footer-menu-item__title">
      {{ item.title[$store.state.general.lang] }}
    </h4>
    <div class="footer-menu-item__body">
      <a
        v-for="link in item.list"
        :key="link.label + link.link"
        :href="link.link"
        class="footer-menu-item__link"
      >{{ link.label[$store.state.general.lang] }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { FooterMenuItem } from 'src/modules/footer/components/footerMenuItem/type'
import './style.scss'

export default defineComponent({
  name: 'FooterMenuItem',
  props: {
    item: {
      type: Object as PropType<FooterMenuItem>,
      required: true
    }
  }
})
</script>
