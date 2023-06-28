import { computed, onMounted } from 'vue'
import { useStore } from 'src/store'
import { useTheme } from 'src/hooks/useTheme'
import { ThemeEnum } from 'src/utils/enum/themeEnum'

export const useController = () => {
  const store = useStore()
  const handelThemeChange = (value: ThemeEnum) => {
    document.body.classList.remove(`theme-${ThemeEnum.DARK}`)
    document.body.classList.remove(`theme-${ThemeEnum.LIGHT}`)
    document.body.classList.add(`theme-${value}`)
  }
  useTheme(handelThemeChange)
  const changeIsGeneralLoading = (val: boolean) => {
    store.commit('general/mutateIsGeneralLoading', val)
  }

  const IsGeneralLoading = computed(() => store.state.general.isGeneralLoading)
  const getReviews = async () => {
    await store.dispatch('testimonial/getReviews')
  }
  const onMountedCallback = async () => {
    const [browserLang] = (window.navigator.language || navigator.language).match(/[a-z]+/g) || ['']
    store.commit('general/mutateLang', browserLang)
    try {
      await getReviews()
    } finally {
      changeIsGeneralLoading(false)
    }
  }
  onMounted((onMountedCallback))
  return {
    IsGeneralLoading
  }
}
