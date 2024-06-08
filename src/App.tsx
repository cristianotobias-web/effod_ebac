import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop'
import GlobalCss from './styles'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <ScrollToTop />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
