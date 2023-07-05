import { ref } from 'vue'
import { useBlockBody } from 'src/hooks/useBlockBody'

export const useController = () => {
  const isShowMobileMenu = ref(false)
  const handelBurger = (val: boolean) => {
    isShowMobileMenu.value = val
  }

  useBlockBody(isShowMobileMenu, 'mobile-menu')
  return {
    isShowMobileMenu,
    handelBurger
  }
}
