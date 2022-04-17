import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useRecoilState } from 'recoil'
import { ThemeFlag, themeState } from '@stores/theme'
import { getThemeFromStorage } from '@utils/storage'
import { lightTheme, darkTheme } from '@styles/theme'

const ThemeWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState)
  const theme = currentTheme === ThemeFlag.light ? lightTheme : darkTheme

  useEffect(() => {
    const storageTheme = getThemeFromStorage()
    if (storageTheme !== undefined) {
      setCurrentTheme(storageTheme)
    }
  }, [])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeWrapper
