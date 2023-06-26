import { ref, watch } from 'vue'

export const useController = () => {
  const isShowMobileMenu = ref(false)
  const handelBurger = () => {
    isShowMobileMenu.value = !isShowMobileMenu.value
  }
  watch(isShowMobileMenu, (value) => {
    if (value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })
  return {
    isShowMobileMenu,
    handelBurger
  }
}
