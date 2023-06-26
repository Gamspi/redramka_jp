<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="j-fixed-element">
      <MainLoader
        :is-show="IsGeneralLoading"
      />
      <Header />
      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          :key="Component.name"
        />
      </router-view>
      <Footer />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

import { useController } from './controller'
import MainLoader from './components/mainLoader/MainLoader.vue'
import Header from 'src/modules/header/Header.vue'
import Footer from 'src/modules/footer/Footer.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { Footer, Header, MainLoader },
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
