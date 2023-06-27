import { onMounted } from 'vue'
import { ThemeEnum } from 'src/utils/enum/themeEnum'

export const useTheme = (changeTheme?: (value: ThemeEnum) => void) => {
  const getResult = (isDark:boolean) => isDark ? ThemeEnum.DARK : ThemeEnum.LIGHT
  const handelThemeChange = (e: MediaQueryListEvent) => {
    const darkModeOn = e.matches
    if (changeTheme) changeTheme(getResult(darkModeOn))
  }

  onMounted(() => {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      if (changeTheme) changeTheme(getResult(darkModeMediaQuery.matches))
      darkModeMediaQuery.onchange = handelThemeChange
    }
  })
}
