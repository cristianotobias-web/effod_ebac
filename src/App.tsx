import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ScrollToTop from './components/scrollToTop'
import GlobalCss from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'
import Delivery from './checkout/delivery'
import Payment from './checkout/payment'
import OrderConfirmed from './checkout/order'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <ScrollToTop />
        <Rotas />
        <Footer />
        <Cart />
        <Delivery />
        <Payment />
        <OrderConfirmed />
      </BrowserRouter>
    </Provider>
  )
}

export default App
