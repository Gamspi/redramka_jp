<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="j-fixed-element">
      <MainLoader
        :is-show="IsGeneralLoading"
      />

      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          :key="Component.name"
        />
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

import useController from './controller'
import MainLoader from './components/mainLoader/MainLoader.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { MainLoader },
  setup () {
    const {
      IsGeneralLoading
    } = useController()

    return {
      IsGeneralLoading
    }
  }
})
</script>
