import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PurchaseContextProvider } from './contexts/PurchaseContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PurchaseContextProvider>
          <Router/>
        </PurchaseContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
