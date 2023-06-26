import { ref } from 'vue'
import { useBlockBody } from 'src/hooks/useBlockBody'

export const useController = () => {
  const isShowMobileMenu = ref(false)
  const handelBurger = () => {
    isShowMobileMenu.value = !isShowMobileMenu.value
  }
  useBlockBody(isShowMobileMenu, 'mobile-menu')
  return {
    isShowMobileMenu,
    handelBurger
  }
}
