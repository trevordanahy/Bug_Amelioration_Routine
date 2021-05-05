import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import DiffuseLoginStatus from './components/control/DiffuseLoginStatus'
import Footer from './components/control/Footer'

function App () {
  const [isDark, setIsDark] = useState(true)

  const flipTheme = () => setIsDark(!isDark)

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <DiffuseLoginStatus flipTheme={flipTheme} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
